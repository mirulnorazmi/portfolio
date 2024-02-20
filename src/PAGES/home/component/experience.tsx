import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Xplode Media', 'Xplode Media', 'Xplode Media'];
}

function getStepContent(step: any) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}


export default (props: any) => {

  // const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const redux = useSelector((state: any) => state.redux);
  const [attr, setAttr] = React.useState({
    fontSize: 30,
    fs1: 14,
    fs2: 33,
    fs: 16,
    align: 'i-y-top',
    padding: 140
  });

  useEffect(() => {
    redux.app.current_grid != 'xs' ? setAttr({
      fontSize: 30,
      fs1: 14,
      fs2: 33,
      fs: 16,
      align: 'i-y-top',
      padding: 140
    }) :
      setAttr({
        fontSize: 15,
        fs1: 14,
        fs2: 33,
        fs: 16,
        align: 'i-y-center',
        padding: 50
      });

    console.log('Grid and font change!');
  }, [redux.app.current_grid]);

  return (
    <React.Fragment>
      <div style={{ padding: attr.padding + 'px' }}>
        <Typography style={{ fontSize: attr.fs1, fontWeight: 0}}><b>Experience</b></Typography>
        <Typography variant="h2" style={{ fontSize: attr.fs2, fontWeight: 0 }}>My <b>delightful experience</b></Typography>
        {/* <Typography variant="h2" style={{ fontSize: attr.fs2, fontWeight: 0 }}>My delightful experience</Typography> */}
        <Stepper activeStep={activeStep} orientation="vertical" style={{ backgroundColor: '#fff0' }}>

          {steps.map((label, index) => (
            <Step key={label} active={true}>
              <StepLabel><Typography variant="h2" style={{ fontSize: attr.fontSize, fontWeight: 0 }}>{label}</Typography></StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                {/* <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div> */}
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {/* {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )} */}

      </div>
    </React.Fragment>
  )
}