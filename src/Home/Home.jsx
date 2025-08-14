import Navbar from '../components/NavBar/Navbar'
import Hero from '../components/Hero/Hero'
import { Box, Container, Stack } from '@mui/material'
import SearchHospital from '../components/SearchHospital/SearchHospital'

const Home = () => {
  return (
    <Box>
    <Box sx={{background:'linear-gradient(90deg, #E7F0FF, #E8F1FF 47%)',height:'100vh'}} mb={4}>
      <Navbar />
      <Container sx={{maxWidth:'90% !important',maxHeight:'100vh !important'}}>
        <Hero />
        <Stack p={{sm:2.5,md:8}} position={'relative'} zIndex={'12'} bottom={'70px'} bgcolor={'white'} boxShadow="0 0 12px rgba(0,0,0,0.1)" spacing={10}>
          <SearchHospital />
        </Stack>
      </Container>   
    </Box>
    </Box>
  )
}

export default Home