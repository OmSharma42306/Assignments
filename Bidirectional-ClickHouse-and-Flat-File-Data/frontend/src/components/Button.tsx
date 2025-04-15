import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  isLoading,
  className = '',
  ...props
}) => {
  const baseStyles = 'flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {isLoading ? 'Loading...' : children}
    </button>
  );
}