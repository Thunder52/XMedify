import { Container, Stack, Box, Typography, Button } from "@mui/material";
import heroImage from "../../assets/home.webp";
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
        <Stack direction={{sm:'column' , md: "row"}} pt={2} alignItems={'center'} spacing={'6'}>
          <Box>
            <Typography variant="h3" component={"h1"} fontSize={31} fontWeight={500} lineHeight={'68px'}>
              Skip the travel! Find Online
            </Typography>
            <Typography variant="h1" component={"h1"} fontSize={56} fontWeight={700} lineHeight={'68px'} mb={1}>
              Medical <span style={{color:'#2AA7FF'}}>Centers</span>
            </Typography>
            <Typography fontSize={{md:20}} lineHeight={'32px'} letterSpacing={'2%'} mb={3} sx={{color:'#5C6169'}}>
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </Typography>
            <Link to={'/search'}>
            <Button variant="contained" sx={{backgroundColor:'#2AA7FF','&:hover':{backgroundColor:'#238DD9'},borderRadius:'8px',textTransform: 'none'}} size="large" disableElevation>
                Find Center
            </Button>
            </Link>
          </Box>
          <Box component={"img"} src={heroImage} width={'50%'} />
        </Stack>

  );
};

export default Hero;
