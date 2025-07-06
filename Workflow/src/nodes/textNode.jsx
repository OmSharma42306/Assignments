import { useEffect, useState } from 'react';
import { Handle, Position } from 'reactflow';

const getVariablesFromText = (text) => {
  const matches = text.match(/{{(.*?)}}/g) || [];
  return matches.map((m) => m.replace(/[{}]/g, '').trim());
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [vars, setVars] = useState(getVariablesFromText(currText));

  const handleChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    setVars(getVariablesFromText(newText));
  };

  const dynamicHeight = Math.min(Math.max(currText.length / 3, 60), 200);

  return (
    <div
      style={{
        width: 250,
        minHeight: dynamicHeight,
        border: '1px solid black',
        padding: 10,
        position: 'relative',
        backgroundColor: 'white',
      }}
    >
      <div>
        <strong>Text</strong>
      </div>
      <textarea
        value={currText}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '100%',
          resize: 'none',
          border: '1px solid #ccc',
          borderRadius: 4,
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%', background: 'blue' }}
      />
      {vars.map((v, i) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-var-${v}`}
          style={{ top: 40 + i * 20, background: 'purple' }}
        />
      ))}
    </div>
  );
};
