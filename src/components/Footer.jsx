import React from 'react'

function Footer() {
 return (
  <footer className="text-primary py-6 mt-8">
    <div className="container mx-auto flex items-center justify-between ">
      <p className="text-sm">
        © 2025 - <span className="font-semibold">CoachSavvy</span>
      </p>
      <p className="text-sm">
        Developed by{" "}
        <a
          href="https://www.nisarportfolio.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Nisar
        </a>
      </p>
      <div className="flex space-x-4 mt-2">
        <a href="#" className="text-primary hover:text-blue-400">Facebook</a>
        <a href="#" className="text-primary hover:text-blue-400">Twitter</a>
        <a href="#" className="text-primary hover:text-blue-400">LinkedIn</a>
      </div>
    </div>
  </footer>
);

}

export default Footer