import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
    'https://images.unsplash.com/photo-1537202108838-e7072bad1927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    imgPath:
      'https://media.istockphoto.com/photos/laptop-with-online-library-realistic-3d-rendering-picture-id1218656325?k=20&m=1218656325&s=612x612&w=0&h=rP7SATqSsqwpfNfh09CmhuTvkNLbjCf6JZsAO1fzjkU=',
  },
  {
    imgPath:
      'https://thumbs.dreamstime.com/b/read-more-books-hand-lettering-motivational-quote-texture-script-drawn-white-violet-background-vector-illustration-card-flyer-190928727.jpg',
  },
  {
    imgPath:
      'https://cdn.governmentnews.com.au/wp-content/uploads/2018/07/31100740/compressed-Library-resources-digital-learning.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  width:1345,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;

