import React from 'react';
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'



export default (props: any) => {
  return (
    <div id='hero-section' className='i-x-center i-y-top column-direction'>
      <Box component='span' className='container-header d-60 m-90 t-70'>
        <Typography variant="h2" style={{ fontWeight: 'bold', color: '#007EFD' }}>
          Hello there,
        </Typography>
        <Typography variant="h2" style={{ fontWeight: 'bold' }}>
          Im <b>Mirul</b> Norazmi
        </Typography>
        <Typography variant="body2" style={{fontSize: '16px'}}>
          Welcome to my portfolio website, where you may learn about me, my skills, and other things. If you have any questions, please contact me via the form below. Thank you for visiting my website, enjoy!
        </Typography>
      </Box>
    </div>
  )
}