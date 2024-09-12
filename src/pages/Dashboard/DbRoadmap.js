import React, { useState } from 'react';
import './DbRoadmap.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import graphicDesignerMilestones from './GraphicDesignerData'; // Import the data
import Icon from '../../assets/images/RMIcon.png'
const DbRoadmap = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);

  const moveToMilestone = (index) => {
    if (index >= 0 && index < graphicDesignerMilestones.length) {
      setCurrentMilestone(index);
    }
  };

  const nextMilestone = () => {
    moveToMilestone(currentMilestone + 1);
  };

  const previousMilestone = () => {
    moveToMilestone(currentMilestone - 1);
  };

  return (
    <div className='App container2'>
      <h2>Graphic Designer Career Path</h2>
      <div className="container1">
        <div
          className="person"
          style={{
            transform: `translate(${graphicDesignerMilestones[currentMilestone].positionX}px, ${graphicDesignerMilestones[currentMilestone].positionY}px)`,
          }}
        >
          <img src={Icon} alt="Person Icon" />
        </div>
        {graphicDesignerMilestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`milestone ${currentMilestone === index ? 'active' : ''}`}
            style={{ left: `${milestone.positionX}px`, top: `${milestone.positionY}px` }}
          >
            {/* Milestone markers */}
          </div>
        ))}
        <button className='button1' onClick={previousMilestone} disabled={currentMilestone === 0}>
          Move Back
        </button>
        <button className='button1' onClick={nextMilestone} disabled={currentMilestone === graphicDesignerMilestones.length - 1}>
          Move Next
        </button>
      </div>

      {/* Static Information Card */}
      <div className="milestone-info-static" style={{ backgroundColor: graphicDesignerMilestones[currentMilestone].color }}>
        <Card sx={{ maxWidth: 1200, display: 'flex' }}> {/* Increased card width and set horizontal layout */}
          
          {/* Left Content Section (2/3rd of the card) */}
          <CardContent sx={{ width: '66%', padding: '20px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {graphicDesignerMilestones[currentMilestone].name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {graphicDesignerMilestones[currentMilestone].info}
            </Typography>
          </CardContent>

          {/* Right Image Section (1/3rd of the card) */}
          <CardMedia
            component="img"
            sx={{ width: '34%', objectFit: 'cover' }}  
            image={graphicDesignerMilestones[currentMilestone].image}
            alt="Milestone Image"
          />
        </Card>
      </div>
    </div>
  );
};

export default DbRoadmap;
