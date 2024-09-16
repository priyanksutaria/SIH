import React, { useState, useRef, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import './VerbalReasoning.css'; // Import the CSS file

const VerbalReasoning = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [hasRecorded, setHasRecorded] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const videoRef = useRef(null); // Reference for the video element
  
    const { startRecording, stopRecording, mediaBlobUrl, previewStream } =
      useReactMediaRecorder({
        video: true,
        onStop: (blobUrl, blob) => {
          setHasRecorded(true);
          saveVideo(blob);
        }
      });
  
    // Function to save the video as MP4 (renaming from .webm)
    const saveVideo = (blob) => {
      const videoUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = videoUrl;
      a.download = "teamwork-video.mp4"; // Download as .mp4 (renaming only)
      a.click();
    };
  
    const handleStart = () => {
      setErrorMessage(null);
      setIsRecording(true);
      startRecording();
      // Set a timeout to automatically stop recording after 1.5 minutes
      setTimeout(() => handleStop(), 90000); // 1.5 minutes = 90,000 ms
    };
  
    const handleStop = () => {
      stopRecording();
      setIsRecording(false);
    };
  
    const handleStartButtonClick = () => {
      if (hasRecorded) {
        setErrorMessage(
          "You've already recorded your video. Please refresh the page to record again."
        );
        return;
      }
      handleStart();
    };
  
    // Setting the preview stream for the video element
    useEffect(() => {
      if (videoRef.current && previewStream && !hasRecorded) {
        videoRef.current.srcObject = previewStream;
      }
    }, [previewStream, hasRecorded]);
  
    // After recording is complete, switch to playing the recorded video
    useEffect(() => {
      if (hasRecorded && videoRef.current) {
        videoRef.current.srcObject = null; // Clear the preview stream
        videoRef.current.src = mediaBlobUrl; // Set the recorded video as the src
        videoRef.current.controls = true; // Enable controls for the recorded video
        videoRef.current.play(); // Play the recorded video automatically
      }
    }, [hasRecorded, mediaBlobUrl]);
  
    return (
      <div className="video-recorder-container">
        <div className="video-recorder-wrapper">
          <h3>Verbal & Abstract Reasoning</h3>
          <h5 className="video-recorder-title">
            Record your answer: "What is the importance of Teamwork?"
          </h5>
          <h7>Time Limit: 1.5 Minutes</h7>
          <div>
            <div className="video-preview">
              {/* Video container used both for preview and recorded video */}
              <video
                ref={videoRef}
                className="video-element"
                autoPlay
                muted={isRecording} // Muted while recording
              />
            </div>
          </div>
          <div>
            {!isRecording && !hasRecorded ? (
              <button
                onClick={handleStartButtonClick}
                className="recorder-button"
              >
                Start Recording
              </button>
            ) : (
              <button
                onClick={handleStop}
                className="stop-button"
              >
                Stop Recording
              </button>
            )}
          </div>
  
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    );
}

export default VerbalReasoning
