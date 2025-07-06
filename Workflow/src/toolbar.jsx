// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
           <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">🧱 Node Palette</h3>
      <div className="flex flex-wrap gap-3">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="knowledgeBase" label="Knowledge Base" />
      </div>
    </div>
    );
};
