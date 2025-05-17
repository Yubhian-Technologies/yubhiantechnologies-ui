import { useState, useEffect, useRef } from 'react';
import ProcessStep from '../components/ProcessStep';
import ProcessDetails from '../components/ProcessDetails';

const workProcessSteps = [
  {
    id: '01',
    title: 'Planning & Agreement',
    description:
      'We develop a comprehensive strategy tailored to your specific requirements, including technology selection, timeline, resource allocation, and clear deliverables.',
    type: 'Planning',
  },
  {
    id: '02',
    title: 'Analysis & Research',
    description:
      'Our team conducts thorough research and analysis to understand your business, market trends, and user needs to create a solution that adds real value.',
    type: 'Research',
  },
  {
    id: '03',
    title: 'Design',
    description:
      'We create detailed designs and prototypes that visualize the solution, allowing for early feedback and refinement before development begins.',
    type: 'Design',
  },
  {
    id: '04',
    title: 'Client Review',
    description:
      'Regular review sessions with clients ensure the project is on track and aligned with expectations, allowing for adjustments as needed.',
    type: 'Review',
  },
  {
    id: '05',
    title: 'Development',
    description:
      'Our expert developers build the solution using modern technologies and best practices, ensuring code quality and performance optimization.',
    type: 'Development',
  },
  {
    id: '06',
    title: 'Quality Assurance',
    description:
      'Rigorous testing is conducted to identify and resolve any issues, ensuring a stable, secure, and high-performing solution.',
    type: 'Testing',
  },
  {
    id: '07',
    title: 'Deployment',
    description:
      'We handle the seamless deployment of your solution, ensuring proper configuration and integration with existing systems.',
    type: 'Deployment',
  },
  {
    id: '08',
    title: 'Ongoing Support',
    description:
      "Our relationship doesn't end at launch. We provide ongoing maintenance, updates, and support to ensure long-term success.",
    type: 'Support',
  },
];

const ANIMATION_DELAY = 2000; // ms delay between steps, adjust for speed

const WorkProcessSection = () => {
  const [activeStep, setActiveStep] = useState('01');
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(true);

  const currentStepData = workProcessSteps.find(
    (step) => step.id === hoveredStep || step.id === activeStep
  )!;

  // Intersection Observer to toggle animation on section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isAnimatingRef.current = entry.isIntersecting;
          if (!entry.isIntersecting && animationRef.current) {
            window.clearTimeout(animationRef.current);
          }
          // When it comes back into view, animation restarts via activeStep effect below
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        window.clearTimeout(animationRef.current);
      }
    };
  }, []);

  // Update progress on activeStep change
  useEffect(() => {
    const currentIndex = workProcessSteps.findIndex((step) => step.id === activeStep);
    setProgress(((currentIndex + 1) * 100) / workProcessSteps.length);
  }, [activeStep]);

  // Animation runner function
  const runAnimation = () => {
    if (!isAnimatingRef.current || isPaused) return;

    if (animationRef.current) {
      window.clearTimeout(animationRef.current);
    }

    const currentIndex = workProcessSteps.findIndex((step) => step.id === activeStep);
    const nextIndex = (currentIndex + 1) % workProcessSteps.length;
    const nextStep = workProcessSteps[nextIndex].id;

    animationRef.current = window.setTimeout(() => {
      setActiveStep(nextStep);
    }, ANIMATION_DELAY);
  };

  // Trigger animation on activeStep or pause changes
  useEffect(() => {
    if (!hoveredStep && !isPaused && isAnimatingRef.current) {
      runAnimation();
    } else {
      if (animationRef.current) {
        window.clearTimeout(animationRef.current);
      }
    }
  }, [activeStep, isPaused, hoveredStep]);

  const displayStep = hoveredStep || activeStep;

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
            WORK PROCESS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See The Value In <br />
            Our <span className="text-blue-500">IT Consulting</span> Solutions
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our proven 8-step methodology ensures a seamless journey from concept to implementation,
            delivering exceptional value at every stage of your digital transformation.
          </p>

          <button
            className="mt-6 px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? 'Resume animation' : 'Pause animation'}
          >
            {isPaused ? 'Resume Animation' : 'Pause Animation'}
          </button>
        </div>

        <div className="relative">
          <ProcessDetails step={currentStepData} />

          <div className="relative w-full h-[600px] flex items-center justify-center">
            <div className="absolute bg-blue-500 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center z-20">
              <span className="text-sm">Phase</span>
              <span className="text-4xl font-bold">{displayStep}</span>
            </div>

            <svg className="absolute w-[500px] h-[500px]" style={{ transform: 'rotate(-90deg)' }}>
              {workProcessSteps.map((_, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const nextAngle = ((index + 1) * 45) * (Math.PI / 180);
                const radius = 250;
                const x1 = Math.cos(angle) * radius + radius;
                const y1 = Math.sin(angle) * radius + radius;
                const x2 = Math.cos(nextAngle) * radius + radius;
                const y2 = Math.sin(nextAngle) * radius + radius;

                const isActive = displayStep === workProcessSteps[index].id;

                return (
                  <path
                    key={index}
                    d={`M ${x1} ${y1} Q ${radius} ${radius} ${x2} ${y2}`}
                    fill="none"
                    stroke={isActive ? '#3B82F6' : '#E5E7EB'}
                    strokeWidth="2"
                    className={`transition-all duration-500 ${isActive ? 'filter drop-shadow-lg' : ''}`}
                  />
                );
              })}
            </svg>

            <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-dashed border-blue-200">
              {workProcessSteps.map((step, index) => {
                const angle = (index * 45 - 90) * (Math.PI / 180);
                const radius = 250;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={step.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => setActiveStep(step.id)}
                    aria-label={`Step ${step.id}: ${step.title}. ${step.description}`}
                  >
                    <ProcessStep
                      step={step}
                      position=""
                      active={displayStep === step.id}
                    />
                  </button>
                );
              })}
            </div>

            <div
              className="absolute w-[500px] h-[500px] rounded-full transition-all duration-500"
              style={{
                background: `conic-gradient(from -90deg, #3B82F6 ${progress}%, transparent ${progress}%)`,
                opacity: 0.1,
              }}
            />
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 text-center text-gray-600">
              <span className="font-medium">Current Phase: </span>
              {currentStepData.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
