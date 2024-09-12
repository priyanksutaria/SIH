import React, { useEffect, useRef, useState } from 'react';
import "./Process.css";

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

  const cylinderHeights = [200, 250, 300, 350, 400]; // Different heights for cylinders

  return (
    <div>
      <div className="plain-blue-section">
        <h2 className="custom_heading1">
          Identify The <span>Best Career Path </span>For You
        </h2>
        <div className="cylinder-container" ref={containerRef}>
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
