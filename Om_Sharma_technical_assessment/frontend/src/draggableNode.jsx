// DraggableNode.jsx

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
      className={`cursor-grab select-none rounded-md px-4 py-2 min-w-[90px] h-[60px] flex items-center justify-center bg-[#F6F4FF] border border-[#DDD5F4] text-sm text-gray-800 font-medium hover:shadow-md hover:bg-[#ece9ff] transition-all`}
    >
      {label}
    </div>
  );
};
