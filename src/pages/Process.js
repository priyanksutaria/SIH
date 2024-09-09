import React, { useEffect, useRef, useState } from 'react'
import "./Process.css";

const Process = () => {
  const [showCylinders, setShowCylinders] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setShowCylinders(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cylinderHeights = [200, 250, 300, 350, 400]; // Different heights for cylinders

  return (
    <div>
      <div ref={containerRef} className="plain-blue-section">
      <h2 className="custom_heading1">
                Identify The <span>Best Career Path </span>For You
              </h2>
        <div className="cylinder-container">
          {cylinderHeights.map((height, index) => (
            <div
              key={index}
              className={`cylinder ${showCylinders ? 'animate' : ''}`}
              style={{
                height: `${height}px`,
                animationDelay: `${index * 300}ms`,
              }}
            >
              <div className="cylinder-content">
                <div className="icon">{/* Insert icon here */}</div>
                <div className="title">Step {index + 1}</div>
                <div className="description">Description for step {index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;