import React from 'react';

type Status = 'idle' | 'connecting' | 'fetching' | 'ingesting' | 'completed' | 'error';

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const styles = {
    idle: 'bg-gray-100 text-gray-800',
    connecting: 'bg-blue-100 text-blue-800',
    fetching: 'bg-purple-100 text-purple-800',
    ingesting: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]} ${className}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}