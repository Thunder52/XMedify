import Navbar from '../components/NavBar/Navbar'
import Hero from '../components/Hero/Hero'
import { Box, Container, Stack } from '@mui/material'
import SearchHospital from '../components/SearchHospital/SearchHospital'
import HeroServices from '../components/HeroServices/HeroServices'
import Offer from '../components/Offer/Offer'
import Specialization from '../components/Specialization/Specialization'
import Specialist from '../components/Specialist/Specialist'

const Home = () => {
  return (
    <Box>
    <Box sx={{background:'linear-gradient(90deg, #E7F0FF, #E8F1FF 47%)',height:'130vh'}} mb={4}>
      <Navbar />
      <Container sx={{maxWidth:'90% !important',maxHeight:'100vh !important'}}>
        <Hero />
        <Stack borderRadius={5} p={{sm:2.5,md:5}} position={'relative'} zIndex={'12'} bottom={'90px'} bgcolor={'white'} boxShadow="0 0 12px rgba(0,0,0,0.1)" spacing={10}>
          <SearchHospital />
          <HeroServices />
        </Stack>
      </Container>
    </Box>
    <Offer />
    <Specialization />
    <Specialist />
    </Box>
  )
}

export default Home