import { useState } from 'react';
import { NodeContainer } from '../components/NodeContainer';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'Question: {{MyTextStuff.text}}');

  return (
    <NodeContainer
      id={id}
      title="Text"
      description="Template text with variables like {{input}}"
      outputs={[{ id: `${id}-output` }]}
    >
      <textarea
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        className="w-full p-2 rounded border text-sm border-gray-300"
        rows={3}
        placeholder="Type something like: Question: {{MyTextStuff.text}}"
      />
    </NodeContainer>
  );
};
