import React, { useEffect, useRef, useState } from 'react';
import "./Process.css";

// Importing Material UI icons
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MapIcon from '@mui/icons-material/Map';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Process = () => {
  const [showCylinders, setShowCylinders] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowCylinders(true); // Start animation
          observer.disconnect(); // Stop observing once the animation has started
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px 0px -100px 0px', // Trigger before the section is fully in view
        threshold: 0.1, // Trigger when 10% of the section is in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  // Array with icons and step data
  const steps = [
    { title: "Step 1:", description: "Assessments", icon: <AssessmentIcon /> },
    { title: "Step 2:", description: "Career Recommendations and Rankings", icon: <TrendingUpIcon /> },
    { title: "Step 3:", description: "Detailed Career Roadmaps", icon: <MapIcon /> },
    { title: "Step 4:", description: "Coursework Simulation", icon: <SchoolIcon /> },
    { title: "Step 5:", description: "Job Simulation", icon: <WorkIcon /> }
  ];

  const cylinderHeights = [200, 250, 300, 350, 400]; // Different heights for cylinders

  return (
    <div>
      <div className="plain-blue-section">
        <h2 className="custom_heading1">
          Identify The <span>Best Career Path </span>For You
        </h2>
        <div className="cylinder-container" ref={containerRef}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`cylinder ${showCylinders ? 'animate' : ''}`}
              style={{
                height: `${cylinderHeights[index]}px`,
                ...(showCylinders && { animationDelay: `${index * 300}ms` }),
              }}
            >
              <div className="cylinder-content">
                <div className="icon">{step.icon}</div>
                <div className="title">{step.title}</div>
                <div className="description">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
