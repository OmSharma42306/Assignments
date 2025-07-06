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
  className="w-full px-2 py-1 rounded-md border text-sm bg-[#F6F4FF] text-gray-800 border-[#DDD5F4] focus:outline-none focus:ring-2 focus:ring-[#C2B8FF]"
>
  <option value="Text">Text</option>
  <option value="File">File</option>
</select>
    </NodeContainer>
  );
};
