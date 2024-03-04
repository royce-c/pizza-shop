// Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={`border border-gray-300 rounded-lg px-3 py-2 ${className}`}
      {...rest}
    />
  );
};

export default Input;
