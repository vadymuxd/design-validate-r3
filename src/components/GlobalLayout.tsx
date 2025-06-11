import React from "react";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full mx-auto max-w-[1728px]">
        <div className="w-full md:px-6 sm:px-4 px-0">{children}</div>
      </div>
    </div>
  );
}; 