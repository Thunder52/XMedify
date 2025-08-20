import Navbar from "../components/Navbar/Navbar";
import {Box,Typography,Container,Stack} from '@mui/material'
import SearchBar from "../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import cta from '../assets/cta.jpg'

const MyBooking = () => {
  const [booking,setBooking]=useState([]);
  const [filteredBooking, setFilteredBooking] = useState([]);

  useEffect(()=>{
    const data=localStorage.getItem('booking')||'[]';
    setBooking(JSON.parse(data)); 
  },[]);

  useEffect(()=>{
    setFilteredBooking(booking);
  },[booking]);
  return (
    <>
      <Navbar />
      <Box paddingBottom={5} sx={{
          background: "linear-gradient(90deg, #E7F0FF, #E8F1FF 47%)",
        }}>
          <Box mb={'100px'} pt={1} sx={{
            background: "linear-gradient(90deg,#2AA7FF,#0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            position: "relative",
          }}>
        <Stack direction={'row'} spacing={12} alignItems={'center'} justifyContent={'center'} >
              <Typography  variant="h1" fontWeight={700} color="white" fontSize={40}>My Bookings
                </Typography>
         <Box
          sx={{
            mb: 6,
            mx: "auto",
            width: { xs: "90%", sm: "70%", md: "50%" }, 
            background: "white",
            p: 2,
            borderRadius: 2,
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            translate:"0 30px",
            gap: 2,
          }}
        >
          <SearchBar booking={booking} setFilteredBooking={setFilteredBooking} />
        </Box>
      </Stack>
          </Box>
          <Container sx={{maxWidth:"90%"}}>
            <Stack direction={'row'} spacing={5}>
              <Stack spacing={3} marginBottom={'24px'}>
                {filteredBooking.length>0?filteredBooking.map((item)=>(
                  <HospitalCard key={item["Hospital Name"]} hospital={item} booking={true} />
                )):(<Typography>No Booking Found</Typography>)}
              </Stack>
              <Box component={"img"} src={cta} width={350} height={250} />
            </Stack>
          </Container>
        </Box>
    </>
  )
}

export default MyBooking