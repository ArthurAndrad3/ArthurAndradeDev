import React from "react";
import { Github, Linkedin } from "lucide-react";

const Midias: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-2 py-2 rounded-3xl border text-dracula-text hover:bg-dracula-gray transition-colors duration-300"
      >
        <Github size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-2 py-2 rounded-3xl border text-dracula-text hover:bg-dracula-gray transition-colors duration-300"
      >
        <Linkedin size={22} />
      </a>
    </div>
  );
};

export default Midias;
