import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Box, Container, Stack, Typography } from "@mui/material";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import tick from '../assets/tick (1).png'
import HospitalCard from "../components/HospitalCard/HospitalCard";
import cta from '../assets/cta.jpg'
import BookingModal from "../components/BookingModal/BookingModal";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";

const slots = {
  morning: ["11:30 AM"],
  afternoon: [
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
  ],
  evening: ["06:00 PM", "06:30 PM", "7:00 PM", "07:30 PM"],
};

const Search = () => {
  const [searchParam] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [city, setCity] = useState(searchParam.get("city"));
  const [state, setState] = useState(searchParam.get("state"));
  const [isLoading,setLoading]=useState(false);
  const [open,setOpen]=useState(false);
  const [booking,setBooking]=useState({});
  const [success,setSuccess]=useState(false);


  const getHospitals = async () => {
    setLoading(true);
    setHospitals([]);
    try {
      const res = await axios.get(`
https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
      setHospitals(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getHospitals();
  }, [state, city]);

  useEffect(() => {
    setState(searchParam.get("state"));
    setCity(searchParam.get("city"));
  },[searchParam]);

  const handleBooking=(details)=>{
    setBooking(details);
    setOpen(true);
  }

  return (
    <>
      <Navbar />
      <Box 
        sx={{
          background: "linear-gradient(90deg, #E7F0FF, #E8F1FF 47%)",
          width: "100%",
          paddingBottom: "2rem",
          marginBottom: "2rem"
        }}
      >
        <Box mb={5}
          sx={{
            background: "linear-gradient(90deg,#2AA7FF,#0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            position: "relative",
          }}
        >
          <Container 
            sx={{
              background: "white",
              transform: "translatey(50px)",
              p: 3,
              borderRadius: 2,
              mb: "150px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <SearchHospital />
          </Container>
        </Box>
        <Container sx={{maxWidth:'90%'}}>
        {hospitals.length>0 && (
          <Box mb={3}>
          <Typography component={'h1'} mb={2} fontWeight={500} fontSize={24} color="#000000">{hospitals.length} medical centers available in <span>{city.toLowerCase()}</span></Typography>
          <Stack direction={'row'} spacing={2}>
            <Box component={'img'} src={tick} alt="white tick" height={24} width={24}/>
            <Typography color="#787887" fontWeight={400} fontSize={16}>Book appointments with minimum wait-time & verified doctor details</Typography>
          </Stack>
          </Box>
        )}
        <Stack direction={'row'} alignItems={'flex-start'} spacing={5}>
          <Stack spacing={3} marginBottom={'24px'}>
            {hospitals.map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} slots={slots} handleBooking={handleBooking} />
            ))}
          </Stack>
          {isLoading && (
            <Typography variant="h2" bgcolor={"white"} p={3} borderRadius={2}>Loading...</Typography>
          )}
          {!state &&(
            <Typography variant="h2" bgcolor={"white"} p={3} borderRadius={2}>Please select a state or city</Typography>
          )}
          <Box component={'img'} src={cta} width={350}/>
        </Stack>
  </Container>
  <BookingModal open={open} setOpen={setOpen} bookingDetail={booking} setSuccess={setSuccess}/>
  <AutohideSnackbar open={success} setOpen={setSuccess} />
      </Box>
    </>
  );
};

export default Search;
