// src/nodes/BaseNode.jsx
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, inputs = [], outputs = [], children, style = {} }) => {
  return (
    <div style={{ width: 220, padding: 10, border: '1px solid black', borderRadius: 8, backgroundColor: 'white', ...style }}>
      <div style={{ fontWeight: 'bold', marginBottom: 5 }}>{title}</div>

      {/* Input Handles */}
      {inputs.map((input, i) => (
        <Handle key={input.id} type="target" position={Position.Left} id={input.id} style={{ top: `${(i + 1) * 30}px` }} />
      ))}

      <div>{children}</div>

      {/* Output Handles */}
      {outputs.map((output, i) => (
        <Handle key={output.id} type="source" position={Position.Right} id={output.id} style={{ bottom: `${(i + 1) * 30}px` }} />
      ))}
    </div>
  );
};
