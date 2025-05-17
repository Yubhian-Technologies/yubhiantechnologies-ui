import React from 'react';

interface ProcessStepProps {
  step: {
    id: string;
    title: string;
    type: string;
  };
  position: string;
  active: boolean;
  onClick: () => void;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, active }) => {
  return (
    <div className="transition-all duration-300 transform">
      <div 
        className={`
          rounded-full w-24 h-24 flex flex-col items-center justify-center transition-all duration-500
          ${active 
            ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 scale-110' 
            : 'bg-white text-gray-700 border-2 border-gray-200'
          }
        `}
      >
        <span className="text-4xl font-bold">{step.id}</span>
        <span className="text-xs mt-1">{step.type}</span>
      </div>
      <div className="text-center mt-2">
        <span className={`font-medium ${active ? 'text-blue-500' : 'text-gray-600'}`}>
          {step.title}
        </span>
      </div>
    </div>
  );
};

export default ProcessStep;