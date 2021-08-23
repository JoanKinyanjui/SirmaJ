import React from 'react';
import './Doctors.css';
import {Card,CardActionArea,Typography,CardContent, CardMedia, Button, ButtonBase} from '@material-ui/core';

function Doctors(){
    return(<>
 <div className='Doctors'>
   <h2>Why we are the best!!</h2>
      <div className='Card'>
      <Card className='card' style={{ margin: 'auto',width: '15rem' ,height:'22rem'}}>
      <CardActionArea>
      <CardMedia className='cardMedia' variant="top" style={{margin:'auto' ,height:'16rem' ,width:'19rem' }}
          image="https://images.pexels.com/photos/7579312/pexels-photo-7579312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
           <p className='listen'> We Listen</p>
          </Typography>
       
        </CardContent>
      </CardActionArea>
    </Card>

   

    <Card className='card' style={{ margin: 'auto',width: '15rem' ,height:'22rem'}}>
      <CardActionArea>
      <CardMedia className='cardMedia' variant="top" style={{margin:'auto' ,height:'16rem' ,width:'19rem' }}
        image= ' https://images.pexels.com/photos/4604599/pexels-photo-4604599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
          <p className='listen'> We Deliver to your doorstep.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='card' style={{ margin: 'auto',width: '15rem' ,height:'22rem'}}>
      <CardActionArea>
      <CardMedia className='cardMedia' variant="top" style={{margin:'auto' ,height:'16rem' ,width:'19rem' }}
          image="https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          <p className='listen'> We Follow up on your progress</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
 </div>
 </>
    )
}
export default Doctors;