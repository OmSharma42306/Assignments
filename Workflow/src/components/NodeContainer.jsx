import { Handle, Position } from 'reactflow';
import { GripVertical, Settings, X, Info } from 'lucide-react';
import { useStore } from '../store';
import { useState } from 'react';

export const NodeContainer = ({
  id,
  title,
  description,
  children,
  inputs = [],
  outputs = [],
  className = ""
}) => {
  const deleteNode = useStore((state) => state.deleteNode);
  const [showModal, setShowModal] = useState(false);

  const handleDeleteNode = () => {
    deleteNode(id);
    setShowModal(false);
  };

  return (
    <>
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
            <X size={14} className="cursor-pointer hover:text-red-500" onClick={() => setShowModal(true)} />
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

      {/* ✅ Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-5 text-center border border-[#ddd5f4]">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">🗑️ Confirm Delete</h2>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete the node <span className="font-medium text-purple-700">"{title}"</span>?
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1.5 text-sm rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteNode}
                className="px-4 py-1.5 text-sm rounded bg-red-500 hover:bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
