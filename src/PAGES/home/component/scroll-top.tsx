import React from 'react';
import { Box, Icon, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: 'fixed',
    bottom: '2vh',
    backgroundColor: '#fffff',
    color: '#fcfcfc',
    "&:hover, &.Mui-focusVisible": {
      transition: '0.3s',
      color: '#fcfcfc',
      backgroundColor: '#007efd'
    },
    [theme.breakpoints.up('xs')]: {
      right: '5%',
      backgroundColor: 'rgba(0, 126, 253, 0.7)',
    },
    [theme.breakpoints.up('lg')]: {
      right: '4.5%',
    },
  }
})
)

const Scroll = (props: any) => {
  const classes = useStyles();
  const [show, setShow] = React.useState(props.show ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > props.show) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  React.useEffect(() => {
    if (props.show) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: 'smooth' });
  }
  return (
    <Box>
      {show &&
        <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
          <ExpandLessIcon />
        </IconButton>
      }
    </Box>
  )
}

export default Scroll;