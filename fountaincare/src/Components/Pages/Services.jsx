import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import headerImage from '../../assets/fountain.jpg'; // Adjust the path as necessary

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#007bff', // Blue color
  color: '#fff', // White text color
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  height: '100%', // Make sure the button covers the full grid
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
}));

const Header = styled('div')({
  width: '100%',
  height: '250px', // Adjust the height as necessary
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${headerImage})`,
  marginBottom: '2rem', // Increased margin to push content further down
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff', // White text color for better visibility
  fontSize: '2rem', // Font size of the overlay text
  fontWeight: 'bold',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow for better readability
  backgroundAttachment: 'fixed', // Ensure background covers the whole page
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, marginX: 0, marginTop: '100px' }}>
      <Header>
        /Our Services
      </Header>
      <Grid 
        container 
        spacing={2} 
        columns={{ xs: 12, sm: 12, md: 12 }} // Use the same number of columns for all screen sizes
      >
        {['Out Patient Dept (OPD)', 'In Patient Dept', 'ENT Clinic', 'EYE Clinic', 'Dental Clinic', 'Antenatal Care', 
          'Postnatal Care', 'Child Welfare Clinic', 'Diabetic/Hypertensive', 'Sickle Cell Clinic', 'Herbal Clinic',
          'Public Health', 'Wellness Clinic', 'Maternity', 'General Surgery', 'Mental Health and Rehab', 
          'Obstetrics & Gynaecology', 'Physiotherapy', 'Diagnostic Imaging', 'Laboratory Services', 'Pharmacy', 
          'VIP Ward', 'Dermatology', '24Hr Accident & Emergency'].map((service, index) => (
          <Grid 
            item 
            xs={12}  // Stack vertically only on extra small screens
            sm={6}   // For small screens, 2 items per row
            md={4}   // For medium and above, 3 items per row
            key={index}
          >
            <ButtonBase sx={{ width: '100%', height: '100%' }}>
              <Item>
                {service}
              </Item>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      <br/>
    </Box>
  );
}

export default Services;
