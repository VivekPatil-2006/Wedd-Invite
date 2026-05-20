import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-serif font-semibold rounded-lg transition-all duration-300 ease-out';

  const variantStyles = {
    primary: 'bg-dusty-rose text-white hover:bg-warm-brown shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-soft-gold text-dark-charcoal hover:bg-champagne shadow-md hover:shadow-lg',
    outlined: 'border-2 border-dusty-rose text-dusty-rose hover:bg-dusty-rose hover:text-white',
    ghost: 'text-dusty-rose hover:bg-dusty-rose/10',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
