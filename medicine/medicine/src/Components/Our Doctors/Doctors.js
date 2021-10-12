import React from 'react';
import './Doctors.css';
import {Card,CardActionArea,Typography,CardContent, CardMedia, Button, ButtonBase} from '@material-ui/core';
import happy from '../images/happy.jpg';
function Doctors(){
    return(<>
 <div className='Doctors'>
   
      <div className='Card'>
      <Card className='card' style={{ margin: 'auto',width: '30%' ,height:'20rem'}}>
      <CardActionArea>
      <CardMedia className='cardMedia' variant="top" style={{margin:'auto' ,height:'14rem' ,width:'19rem'}}
          image='https://i.pinimg.com/564x/ea/67/06/ea67069e8a4ac0d01205651d3c6aad41.jpg'
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
           <p className='listen'> Are You tired of Acnee??</p>
          </Typography>
       
        </CardContent>
      </CardActionArea>
    </Card>

   

    <Card className='card' style={{margin: 'auto',width: '30%' ,height:'20rem'}}>
      <CardActionArea>
      <CardMedia className='cardMedia' variant="top" style={{margin:'auto' ,height:'14rem' ,width:'19rem' }}
        image= 'https://i2.wp.com/nimedhealth.com.ng/wp-content/uploads/2019/10/cd40cc241b1bf7a7463b4a927d3ba39e.jpg?fit=480%2C360&ssl=1&resize=1280%2C720'
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
          <p className='listen'> Are Dark Spots,getting in the way?.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='card' style={{ margin: 'auto',width: '30%' ,height:'20rem'}}>
      <CardActionArea>
      <CardMedia className='cardMedia' variant="top" style={{margin:'auto' ,height:'14rem' ,width:'19rem' }}
          image={happy}
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          <p className='listen'> Here is your last Resort.</p>
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