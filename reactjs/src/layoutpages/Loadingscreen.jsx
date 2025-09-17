import { useState, useEffect } from "react";
import "./loadingscreen.css";

const Loadingscreen = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate content loading time (replace with real loading check if needed)
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // Remove component after animation completes
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Match this with CSS transition duration
      
      return () => clearTimeout(removeTimer);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  // Don't render if loading is complete
  if (!loading) return null;

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <div className="coffee-cup">
            <div className="steam">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="cup"></div>
            <div className="plate"></div>
          </div>
        </div>
        
        <h1 className="loading-title">Floria Café</h1>
        <p className="loading-subtitle">Experience Tranquility in Every Cup</p>
        
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loadingscreen;