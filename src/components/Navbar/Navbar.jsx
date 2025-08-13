import { Box,Typography,Container,Stack,Button,useMediaQuery,IconButton } from '@mui/material'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import './navbar.css'
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
    <Box bgcolor={'#2AA7ff'} p={1}>
        <Typography textAlign={'center'} fontSize={12} style={{color:'white'}}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
    </Box>
    <div className='navContainer'>
    <Container maxWidth={'xl'}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={2} spacing={2}>
            <Link to={'/'}>
            <img src={logo} alt="medilify" height={27} />
            </Link>
            <Stack className={['links',menuOpen&&'active']} direction={{xs:'column', md:'row'}} alignItems={'center'} pt={{xs:12, md: 1}} pb={{xs:4, md:1}} px={{xs:4 ,md:0}} spacing={4}>
                <Link>Find Doctors</Link>
                <Link to={'/search'}>Hospitals</Link>
                <Link>medicines</Link>
                <Link>Surgeries</Link>
                <Link>Software for providers</Link>
                <Link>Facilities</Link>
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>
            {isMobile && <IconButton onClick={()=>setMenuOpen(false)} sx={{color:'white'}}>
                <CloseIcon />
                </IconButton>}
            </Stack>
            {isMobile && <IconButton onClick={()=>setMenuOpen(true)}>
                <MenuIcon />
                </IconButton>}
        </Stack>
    </Container>
    </div>
    </nav>
  )
}

export default Navbar