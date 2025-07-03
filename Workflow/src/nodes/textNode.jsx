import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode id={id} title="Text" outputs={[{ id: `${id}-output` }]}>
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{ width: '100%' }}
        />
      </label>
    </BaseNode>
  );
};
