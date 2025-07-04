import { useState } from 'react';
import { NodeContainer } from '../components/NodeContainer';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <NodeContainer
      id={id}
      title="Output"
      description="Capture the final result of your pipeline"
      inputs={[{ id: `${id}-value` }]}
    >
      <input
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        placeholder="output_1"
        className="w-full px-2 py-1 rounded bg-white text-sm border border-gray-300 my-1"
      />
      <div className="text-xs text-gray-500 font-semibold mb-1">Type</div>
      <select
        value={outputType}
        onChange={(e) => setOutputType(e.target.value)}
        className="w-full px-2 py-1 rounded border bg-white text-sm border-gray-300"
      >
        <option value="Text">Text</option>
        <option value="File">Image</option>
      </select>
    </NodeContainer>
  );
};
