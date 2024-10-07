import React from 'react'
import './Programs.css'
import program_1 from '../../assets/physio.jpeg'
import program_2 from '../../assets/ultrasound.jpeg'
import program_3 from '../../assets/surgical.jpeg'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              OUR MISSION
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Our mission is to provide quality services to meet the needs and expectations of all clients.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="program">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              OUR VISION
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              To become a centre of excellence in the provision of specialist healthcare services
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="program">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              24/7 EMERGENCY SERVICES
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              You can access our medical emergency services  everyday of the week.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Programs;
