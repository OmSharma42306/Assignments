import { RocketIcon, PlayIcon, UploadIcon } from 'lucide-react';

export const HeaderBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      {/* Left: Path */}
      <div className="text-sm text-gray-600 font-medium">
        <span className="text-gray-400">Pipelines</span> &gt; <span className="font-semibold">Journey Pipeline: Knowledge...</span> 
        <button className="ml-2 text-blue-500 text-xs underline">Edit</button>
      </div>

      {/* Center: Tabs (fake) */}
      <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
        <span className="text-indigo-600 border-b-2 border-indigo-600 pb-1">Start</span>
        <span>Objects</span>
        <span>Knowledge</span>
        <span>AI</span>
        <span>Integrations</span>
        <span>Logic</span>
        <span>Data</span>
        <span>Chat</span>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-2">
        <button className="text-xs px-3 py-1 text-gray-500 border rounded hover:bg-gray-50">View Traces</button>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 text-xs font-medium rounded flex items-center gap-1">
          <RocketIcon size={14} /> Deploy Changes
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-xs font-medium rounded flex items-center gap-1">
          <PlayIcon size={14} /> Run
        </button>
        <button className="text-xs px-3 py-1 border rounded hover:bg-gray-50 flex items-center gap-1">
          <UploadIcon size={14} /> Export
        </button>
      </div>
    </div>
  );
};
