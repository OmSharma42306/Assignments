import { useStore } from './store';
import axios from 'axios';
import { useState } from 'react';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const [modalData, setModalData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/pipelines/parse', {
        nodes: nodes.map((n) => ({ id: n.id })),
        edges: edges.map((e) => ({ source: e.source, target: e.target }))
      });

      setModalData({
        num_nodes: res.data.num_nodes,
        num_edges: res.data.num_edges,
        is_dag: res.data.is_dag
      });
    } catch (err) {
      setError('Error submitting pipeline.');
      console.error(err);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1C2536',
            color: '#fff',
            borderRadius: 6,
          }}
        >
          Submit
        </button>
      </div>

      {modalData && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            width: '300px',
            textAlign: 'center',
            boxShadow: '0 8px 16px rgba(0,0,0,0.25)'
          }}>
            <h2>📊 Pipeline Summary</h2>
            <p><strong>Nodes:</strong> {modalData.num_nodes}</p>
            <p><strong>Edges:</strong> {modalData.num_edges}</p>
            <p><strong>Is DAG:</strong> {modalData.is_dag ? '✅ Yes' : '❌ No'}</p>
            <button
              onClick={() => setModalData(null)}
              style={{ marginTop: '16px', padding: '8px 16px', borderRadius: '8px', backgroundColor: '#1C2536', color: 'white' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {error && (
        <div style={{ textAlign: 'center', color: 'red', marginTop: 10 }}>{error}</div>
      )}
    </>
  );
};
