import React from 'react';

interface ProcessDetailsProps {
  step: {
    id: string;
    title: string;
    description: string;
    type: string;
  };
}

const ProcessDetails: React.FC<ProcessDetailsProps> = ({ step }) => {
  return (
    <div 
      className="absolute top-10 right-0 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-10 transform transition-all duration-300 hover:scale-105"
      style={{ 
        animation: 'fadeIn 0.3s ease-in-out',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-blue-500 flex items-center gap-2">
          {step.title}
          <span 
            className="inline-block w-2 h-4 bg-blue-500"
            style={{ animation: 'blink 1s infinite' }}
          />
        </h3>
        <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm">
          {step.type}
        </span>
      </div>
      <p className="text-gray-600">
        {step.description}
      </p>
    </div>
  );
};

export default ProcessDetails;