import { NodeContainer } from '../components/NodeContainer';
import { useState } from 'react';

export const KnowledgeNode = ({ id }) => {
  const [query, setQuery] = useState('');
  const [kbMode, setKbMode] = useState('select'); // or 'variable'
  const [selectedKB, setSelectedKB] = useState('Copy of journey_kb_1_pipeline');

  return (
    <NodeContainer
      id={id}
      title="Knowledge Base Reader"
      description="Semantically query a knowledge base that can contain files, scraped URLs, and data from synced integrations (e.g., Google Drive)."
      inputs={[{ id: `${id}-search_query` }]}
      outputs={[{ id: `${id}-chunks` }]}
    >
      {/* Node ID Label */}
      <div className="w-full text-center text-xs font-mono text-indigo-600 mb-2">{id}</div>

      {/* Search Query */}
      <div className="mb-2">
        <label className="text-xs font-medium text-gray-700 flex items-center gap-1 mb-1">
          Search Query <span className="text-red-500">*</span>
          <span className="text-gray-400 cursor-default text-[10px]" title="Variable input accepted">?</span>
        </label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
          placeholder="e.g. {{MyTextStuff.text}}"
        />
      </div>

      {/* Knowledge Base Selector */}
      <div className="mb-1 text-xs font-medium text-gray-700">Knowledge Base <span className="text-red-500">*</span></div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500">Select</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={kbMode === 'variable'}
            onChange={() => setKbMode(kbMode === 'select' ? 'variable' : 'select')}
          />
          <div className="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-checked:bg-indigo-500 rounded-full peer transition-all duration-200"></div>
        </label>
        <span className="text-xs text-gray-500">Variable</span>
        <span className="ml-2 px-2 py-1 text-[10px] font-semibold bg-indigo-500 text-white rounded">Knowledge Base</span>
      </div>

      {/* Dropdown */}
      {kbMode === 'select' && (
        <select
          value={selectedKB}
          onChange={(e) => setSelectedKB(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded text-sm mb-2"
        >
          <option value="Copy of journey_kb_1_pipeline">Copy of journey_kb_1_pipeline</option>
          <option value="Another_KB">Another_KB</option>
        </select>
      )}

      {/* Actions */}
      <div className="space-y-1">
        <button className="w-full text-xs px-3 py-1 border rounded bg-white hover:bg-gray-100 border-gray-300 flex items-center gap-2 justify-center">
          ✏️ Edit Knowledge Base
        </button>
        <button className="w-full text-xs px-3 py-1 border rounded bg-white hover:bg-gray-100 border-gray-300 flex items-center gap-2 justify-center">
          ➕ Create New Knowledge Base
        </button>
      </div>
    </NodeContainer>
  );
};
