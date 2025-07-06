import { RocketIcon, PlayIcon, UploadIcon } from 'lucide-react';

export const HeaderBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-[#F6F4FF] border-b border-[#E4DDFB] shadow-sm">
      {/* Left: Path */}
      <div className="text-sm text-gray-700 font-medium">
        <span className="text-gray-400">Pipelines</span> &gt;{' '}
        <span className="font-semibold text-[#7C3AED]">Journey Pipeline: Knowledge...</span>
        <button className="ml-2 text-indigo-500 text-xs underline">Edit</button>
      </div>

      {/* Center: Tabs (fake) */}
      <div className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-500">
        <span className="text-[#7C3AED] border-b-2 border-[#7C3AED] pb-1">Start</span>
        <span className="hover:text-[#7C3AED] cursor-pointer">Objects</span>
        <span className="hover:text-[#7C3AED] cursor-pointer">Knowledge</span>
        <span className="hover:text-[#7C3AED] cursor-pointer">AI</span>
        <span className="hover:text-[#7C3AED] cursor-pointer">Integrations</span>
        <span className="hover:text-[#7C3AED] cursor-pointer">Logic</span>
        <span className="hover:text-[#7C3AED] cursor-pointer">Data</span>
        <span className="hover:text-[#7C3AED] cursor-pointer">Chat</span>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-2">
        <button className="text-xs px-3 py-1 text-gray-500 border border-[#DAD3F3] rounded hover:bg-[#F0EBFF]">
          View Traces
        </button>
        <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-3 py-1 text-xs font-medium rounded flex items-center gap-1">
          <RocketIcon size={14} /> Deploy Changes
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-xs font-medium rounded flex items-center gap-1">
          <PlayIcon size={14} /> Run
        </button>
        <button className="text-xs px-3 py-1 border border-[#DAD3F3] rounded hover:bg-[#F0EBFF] flex items-center gap-1">
          <UploadIcon size={14} /> Export
        </button>
      </div>
    </div>
  );
};
