from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"]
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    node_ids = {node.id for node in pipeline.nodes}
    graph = {node.id: [] for node in pipeline.nodes}

    for edge in pipeline.edges:
        if edge.source in graph:
            graph[edge.source].append(edge.target)

    def is_dag(graph):
        visited = set()
        path = set()

        def dfs(v):
            visited.add(v)
            path.add(v)
            for neighbor in graph.get(v, []):
                if neighbor in path or (neighbor not in visited and not dfs(neighbor)):
                    return False
            path.remove(v)
            return True

        return all(dfs(node) for node in graph if node not in visited)

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(graph)
    }
