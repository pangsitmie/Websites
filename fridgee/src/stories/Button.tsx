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
  icon?: React.ReactNode;
  disabled?: boolean;

  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  icon,
  disabled,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-primary text-white' : 'bg-transparent text-gray-900 border border-border hover:border-primary';
  const sizeClass = size === 'small' ? 'py-2 px-4 text-sm' : size === 'medium' ? 'py-3 px-5 text-base' : 'py-4 px-6 text-lg';

  return (
    <button
      disabled={disabled}
      type="button"
      className={`flex items-center justify-center w-full font-bold rounded-full cursor-pointer  ${sizeClass} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};
