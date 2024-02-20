import React, { useEffect } from 'react';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux';




export default (props: any) => {

  const redux = useSelector((state: any) => state.redux);

  const [attr, setAttr] = React.useState({
      fontSize : 60,
      align : 'i-y-top',
  });

  useEffect(() => {
    // redux.app.current_grid != 'xs' ? setFontSize(60) :  setFontSize(40);
    // redux.app.current_grid != 'xs' ? setAlignI('i-y-center') :  setAlignI('i-y-top');

    redux.app.current_grid != 'xs' ? setAttr({
      fontSize : 60,
      align : 'i-y-top',
    }) :  
    setAttr({
      fontSize : 40,
      align : 'i-y-center',
    });


    console.log('Grid and font change!');
  }, [redux.app.current_grid]);

  return (
    <div id='hero-section' className={`i-x-center ${attr.align} column-direction`} style={{}}>
      <Box component='span' className='container-header d-60 m-100 t-70'>
        <Typography variant="h2" style={{ fontSize: attr.fontSize + 'px', fontWeight: 'bold', color: '#007EFD'}}>
          Hello there,
        </Typography>
        <Typography variant="h2" style={{ fontSize: attr.fontSize + 'px', fontWeight: 'bold', textAlign: redux.app.current_grid != 'xs' ? 'left' : 'center' }}>
          Im <b>Mirul</b> Norazmi
        </Typography>
        <Typography variant="body1" style={{ fontSize: '16px', textAlign: redux.app.current_grid != 'xs' && redux.app.current_grid != 'sm' ? 'left' : 'center' }}>
          Passionate in creating innovative solutions that make a positive impact.
          <br/>
          Feel free to explore my portfolio website!
        </Typography>
      </Box>
    </div>
  )
}