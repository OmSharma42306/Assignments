import { NodeContainer } from '../components/NodeContainer';

export const LLMNode = ({ id }) => {
  return (
    <NodeContainer
      id={id}
      title="OpenAI"
      description="Answer the question based on context"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      <div className="text-xs text-gray-500 font-semibold mb-1">System (Instructions)</div>
      <textarea
        placeholder="e.g., Answer the question based on context"
        className="w-full p-2 rounded border text-sm border-gray-300 mb-2"
        rows={2}
      />

      <div className="text-xs text-gray-500 font-semibold mb-1">Prompt</div>
      <textarea
        placeholder="e.g., Question: {{MyTextStuff.text}}"
        className="w-full p-2 rounded border text-sm border-gray-300"
        rows={3}
      />
    </NodeContainer>
  );
};
