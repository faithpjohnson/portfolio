import React from 'react';
import './SectionHeader.scss';

/**
 * Reusable section header component
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Title text for the section header
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} SectionHeader component
 */
const SectionHeader = ({ title, className = '' }) => {
  return (
    <h2 className={`section-header ${className}`}>
      {title}
    </h2>
  );
};

export default SectionHeader; 