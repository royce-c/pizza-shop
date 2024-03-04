import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className, ...rest }) => {
  return (
    <textarea
      className={`border border-gray-300 rounded-lg px-3 py-2 ${className}`}
      {...rest}
    />
  );
};

export default Textarea;
