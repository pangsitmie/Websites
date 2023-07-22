import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-900 shadow-inner';
  const sizeClass = size === 'small' ? 'py-2 px-4 text-sm' : size === 'medium' ? 'py-3 px-5 text-base' : 'py-4 px-6 text-lg';

  return (
    <button
      type="button"
      className={`font-bold border-0 rounded-full cursor-pointer inline-block ${sizeClass} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
