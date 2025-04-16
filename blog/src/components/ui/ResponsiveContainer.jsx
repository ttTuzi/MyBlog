import React from "react";

const ResponsiveContainer = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default ResponsiveContainer;
