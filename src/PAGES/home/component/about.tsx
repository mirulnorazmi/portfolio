import React, { useEffect } from 'react';
import { Box, Divider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux';




export default (props: any) => {

  const redux = useSelector((state: any) => state.redux);
  const [attr, setAttr] = React.useState({
      fontSize : 60,
      align : 'i-y-top',
      padding: 140
  });

  useEffect(() => {
    redux.app.current_grid != 'xs' ? setAttr({
      fontSize : 60,
      align : 'i-y-top',
      padding: 140
    }) :  
    setAttr({
      fontSize : 40,
      align : 'i-y-center',
      padding: 50
    });

    console.log('Grid and font change!');
  }, [redux.app.current_grid]);

  return (
    <React.Fragment>
      <Divider style={{ borderColor: '#E5EAF2' ,width:'100%'}}/>
      <div id='about-section' className='d-100 m-100 t-100' style={{padding:'96px ' + attr.padding + 'px'}}>
        <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }} className='i-x-center'>
          About
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores dolor voluptatum eius quasi aliquid nisi minima animi maxime error, et quod. Expedita ex ab dicta accusantium doloribus eum ipsam.
          Quod repellat enim quis ab nemo iure dolorem id, dolor, molestiae doloremque qui provident facere modi ipsam error, nisi dicta voluptates. Voluptatibus itaque magni tempore sint, suscipit nam iusto fugiat?
          Quisquam, aliquid reiciendis. Et impedit harum doloribus error ea ullam cum fugiat, explicabo totam optio eius beatae voluptatum, nemo nisi odio dolorem repellendus labore doloremque inventore. Aliquam maiores error omnis.
          Sapiente, eius delectus voluptatibus culpa reiciendis nemo porro numquam quae laborum unde quos distinctio eum possimus nam animi mollitia pariatur quidem voluptate eligendi autem maxime ad. Rem impedit tempora iusto!
          Debitis provident maxime doloribus quisquam ipsa similique eligendi voluptatibus. Placeat quia minima eligendi magnam illo! Sint expedita repellat quo laboriosam. Laborum expedita saepe fugiat hic officiis dignissimos, cumque adipisci reiciendis.
          Nostrum modi voluptatem repellendus illo. Commodi neque reiciendis debitis perspiciatis consequuntur nostrum laudantium aliquam tempore esse. Exercitationem, veniam itaque. Nihil repellat voluptates dolor voluptatibus quibusdam ea et incidunt dolorem veritatis!
          Temporibus, deserunt necessitatibus. Totam repudiandae nam eaque soluta, quas vero amet rerum, veniam, nulla fuga commodi dignissimos animi voluptatibus est cum ullam consequuntur aspernatur molestiae. Minima possimus enim non? Hic.
          Molestiae recusandae deleniti rem quos fugiat, nobis commodi pariatur ratione delectus quas, ipsam odio aut dignissimos iure, sapiente vero nisi cumque tempora aspernatur consequuntur laborum nulla impedit? Illo, minima dolor?
          Vero voluptatum ex, quibusdam nam eaque perferendis laborum numquam ullam porro! Eum dolore minima reiciendis aliquam reprehenderit consequatur delectus nesciunt praesentium recusandae, quos nisi fuga cumque corrupti beatae ab. Beatae!
          Accusantium ducimus illum omnis velit recusandae explicabo numquam vitae aperiam corrupti! Sed deserunt nulla dicta inventore voluptatum molestiae minima facilis. Distinctio sed corrupti consectetur ducimus amet voluptas perspiciatis iste dignissimos?
        </Typography>

      </div>
      <Divider style={{ borderColor: '#E5EAF2' ,width:'100%'}}/>
    </React.Fragment>

  )
}