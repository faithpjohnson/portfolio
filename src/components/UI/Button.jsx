import React from 'react';
import './Button.scss';

/**
 * Reusable button component with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant ('primary', 'secondary', 'outline')
 * @param {string} [props.size='md'] - Button size ('sm', 'md', 'lg')
 * @param {string} [props.href] - URL if the button is a link
 * @param {boolean} [props.external=false] - Whether the link should open in a new tab
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.ariaLabel] - Accessible label for the button
 * @param {Function} [props.onClick] - Click handler function
 * @returns {JSX.Element} Button component
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  external = false,
  className = '',
  children,
  ariaLabel,
  onClick,
  ...rest 
}) => {
  const buttonClasses = `custom-button ${variant} ${size} ${className}`;
  
  const externalProps = external ? {
    target: '_blank',
    rel: 'noreferrer'
  } : {};
  
  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        onClick={onClick}
        {...externalProps}
        {...rest}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={buttonClasses}
      aria-label={ariaLabel}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 