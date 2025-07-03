import { useState } from 'react';
import { NodeContainer } from '../components/NodeContainer';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <NodeContainer
      id={id}
      title="Input"
      description="Pass data of different types into your workflow"
      outputs={[{ id: `${id}-value` }]}
    >
      <input
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        placeholder="MyTextStuff"
        className="w-full px-2 py-1 rounded bg-white text-sm border border-gray-300 my-1"
      />
      <div className="text-xs text-gray-500 font-semibold mb-1">Type</div>
      <select
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
        className="w-full px-2 py-1 rounded border bg-white text-sm border-gray-300"
      >
        <option value="Text">Text</option>
        <option value="File">File</option>
      </select>
    </NodeContainer>
  );
};
