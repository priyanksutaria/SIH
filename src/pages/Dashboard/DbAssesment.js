import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BigFiveAssesment from './BigFiveAssesment'; // Import the Big Five Assessment component
import NumericalAssesment from './NumericalAssesment'; // Import the Numerical Assessment component
import VerbalReasoning from './VerbalReasoning'; // Import the Verbal Reasoning component
import PerceptualAssesment from './PerceptualAssesment'; // Import the Perceptual Assessment component
import SpatialAssesment from './SpatialAssesment'; // Import the Spatial Assessment component

// Updated steps array with the 5 assessments
const steps = [
  'Big Five Personality Assessment',
  'Numerical Assessment',
  'Verbal Reasoning Assessment',
  'Perceptual Assessment',
  'Spatial Assessment',
];

export default function DbAssesment() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && <BigFiveAssesment onComplete={handleComplete} />}
            {activeStep === 1 && <NumericalAssesment onComplete={handleComplete} />}
            {activeStep === 2 && <VerbalReasoning onComplete={handleComplete} />}
            {activeStep === 3 && <PerceptualAssesment onComplete={handleComplete} />}
            {activeStep === 4 && <SpatialAssesment onComplete={handleComplete} />}
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {activeStep !== steps.length && (
                <>
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  
                </>
              )}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
