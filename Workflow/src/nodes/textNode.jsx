import { useState, useEffect } from 'react';
import { NodeContainer } from '../components/NodeContainer';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Optional: Sync to global state if needed
  useEffect(() => {
    // update global state here if you're using `updateNodeField`
  }, [currText]);

  return (
    <NodeContainer
      id={id}
      title="Text"
      description="Store or transform your text"
      inputs={[]} // Add input handles if needed
      outputs={[{ id: `${id}-output` }]}
    >
      <div className="text-xs text-gray-500 font-semibold mb-1">Text</div>
      <textarea
        placeholder="e.g., {{input}} or static text"
        value={currText}
        onChange={handleTextChange}
        className="w-full p-2 rounded border text-sm border-gray-300"
        rows={3}
      />
    </NodeContainer>
  );
};
