import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-12">
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
      © {new Date().getFullYear()} Vignesh Sundaramahalingam. All rights reserved.
    </footer>
  );
}
