import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BillingImg from '../Images/PatientBIll.png'
import AppointmentImg from '../Images/Appointment.png'
import PatientReport from '../Images/patientRecords.png'
import Footer from './Footer';
import ContactForm from './ContactUs';


const Featurestwo = () => {
  return (
  <>
  <heading>
         <h1 className=" font-bold text-8xl xl:text-8xl sm:text-4xl flex items-center justify-center  text-center  lg:font-bold lg:my-10 my-10 mt-20">Feature <span className='text-orange-700'>s</span> </h1>
        </heading>
   <div className="flex mx-10 items-center justify-evenly lg:mb-10 md:mx-2 md:flex-col md:gap-3  md:items-center lg:gap-2 lg:flex-col">
   <div className='lg:mr-96 xs:m-0 md:m-0'>
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
         className='h-72'
        component="img"
        height="140"
        image={PatientReport}
        alt="green iguana"
        style={{ width: '100%' , objectFit: 'contain',
        height: '100%',
        paddingTop:'140px', paddingBottom:'140px' }} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3 className='text-green-500 font-semibold '> Patient Records</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Carekloud, the advanced CRM software, offers seamless patient report record management for healthcare providers. With its user-friendly interface, it empowers professionals to efficiently organize and retrieve patient data. Additionally, Carekloud allows easy downloading of essential records for comprehensive analysis and decision-making.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
</div>

<div clasName="">
  <Card sx={{ maxWidth: 345 }} className="">
    <CardActionArea>
      <CardMedia
         className='h-72'
        component="img"
        height="50"
        image={BillingImg}
        alt="green iguana"
        style={{ width: '100%' ,  objectFit: 'contain',
        height: '100%',
        padding:'5px' }} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <h3 className='font-semibold text-green-500'> Dynamic Bill Generation</h3> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Streamline your billing process with our digital bill generation solution. Say goodbye to manual calculations and paperwork as our software automates the process, ensuring accuracy and efficiency. Generate professional-looking bills effortlessly, saving time and improving customer satisfaction.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
</div>

<div className="lg:ml-96 xs:m-0 md:m-0">
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <CardMedia
  className="h-72"
  component="img"
  image={AppointmentImg}
  alt="green iguana"
  style={{
    width: '100%',
    objectFit: 'contain',
    height: '100%',
    paddingTop:'40px', paddingBottom:'40px'
  }}
/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3 className='font-semibold text-green-500'>Appointments</h3> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Effortlessly manage appointments with our intuitive appointment scheduling software. Seamlessly book, reschedule, and track appointments, ensuring a smooth and organized workflow. Enhance customer experience with automated reminders and notifications, minimizing no-shows and maximizing efficiency.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
</div>

    </div>
    <ContactForm/>
  
    <Footer/>


    
  
  
   


    
  </>
  )
}

export default Featurestwo
