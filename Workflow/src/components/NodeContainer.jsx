// src/components/NodeContainer.jsx
import { Handle, Position } from 'reactflow';
import { GripVertical, Settings, X, Info } from 'lucide-react';
import { useStore } from '../store';

export const NodeContainer = ({
  id,
  title,
  description,
  children,
  inputs = [],
  outputs = [],
  className = ""
}) => {

  const deleteNode = useStore((state)=>(state.deleteNode))

  const handleDeleteNode = ()=>deleteNode(id);
  
  return (
    <div className={`rounded-lg shadow-md bg-[#f5f4ff] border border-gray-300 w-72 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-[#e0defc] text-sm px-2 py-1 rounded-t-lg font-semibold">
        <div className="flex items-center gap-1 text-gray-800">
          <GripVertical size={16} />
          {title}
        </div>
        <div className="flex gap-1 text-gray-500">
          <Info size={14} />
          <Settings size={14} />
          <X size={14} onClick={()=>{
         handleDeleteNode()
            alert("funaction called",id,title)
            console.log(id)
          }} />
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="text-xs text-gray-600 px-2 pt-1 pb-1 italic">{description}</div>
      )}

      {/* Input handles */}
      {inputs.map((input, i) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${(i + 1) * 30}px` }}
          className="bg-blue-400"
        />
      ))}

      {/* Body */}
      <div className="px-2 pb-2">{children}</div>

      {/* Output handles */}
      {outputs.map((output, i) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ bottom: `${(i + 1) * 30}px` }}
          className="bg-purple-500"
        />
      ))}
    </div>
  );
};
