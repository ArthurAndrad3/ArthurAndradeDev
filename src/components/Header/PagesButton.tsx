import React from "react";

export interface PagesButtonProps {
  label?: string;
  href?: string;
}

const PagesButton: React.FC<PagesButtonProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 text-xl text-dracula-text hover:text-dracula-cyan transition-colors duration-300 cursor-pointer "
    >
      {label}
    </a>
  );
};

export default PagesButton;
