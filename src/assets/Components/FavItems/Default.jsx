import React from "react";

const Default = () => {
  return (
    <div className="default-text text-center p-8 border-b border-gray-200">
      <h1 className="lg:text-lg md:text-base text-sm font-medium">
        No favorites yet
      </h1>
      <p className="lg:text-sm md:text-xs text-[8px] py-2">
        Click the heart icon on any item to add it to your favorites
      </p>
    </div>
  );
};

export default Default;
