import { Box, Typography, Stack, Container, Grid,Divider } from "@mui/material";
import logo from '../../../assets/logo.png'
import fbIcon from '../../../assets/fb.png'
import ytIcon from '../../../assets/yt.png'
import pinterestIcon from '../../../assets/pinterest.png'
import twitterIcon from '../../../assets/twitter.png'
import LinkFooter from "./LinkFooter";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#1B3C74", 
        mt: -12,           
        pt: 6,            
        pb: 6,
        color: "white",
        zIndex: 1,
      }}
    >
        <Container maxWidth="xl">
        <Stack gap={50} direction={'row'} alignItems={'center'} justifyContent={'center'} mb={3}>
            <Stack gap={15} width='40%'>
                <Box component={'img'} src={logo} width={130} mb={2}/>
                <Stack direction={'row'} gap={1}>
                    <Box component={'img'} src={fbIcon} width={36}/>
                    <Box component={'img'} src={ytIcon} width={36}/>
                    <Box component={'img'} src={twitterIcon} width={36}/>
                    <Box component={'img'} src={pinterestIcon} width={36}/>
                </Stack>
            </Stack>
            <Grid container width='100%' spacing={20}>
                <Grid item md={2.5} sm={12}>
                    <Stack spacing={2}>
                        <LinkFooter>About me</LinkFooter>
                        <LinkFooter>Our pricing</LinkFooter>
                        <LinkFooter>Our galary</LinkFooter>
                        <LinkFooter>Appointment</LinkFooter>
                        <LinkFooter>privacy policy</LinkFooter>
                    </Stack>
                </Grid>
                <Grid item md={2.5} sm={12}>
                    <Stack spacing={2}>
                        <LinkFooter>Orthology</LinkFooter>
                        <LinkFooter>Neurology</LinkFooter>
                        <LinkFooter>Dental Care</LinkFooter>
                        <LinkFooter>Opthalmology</LinkFooter>
                        <LinkFooter>Cardiology</LinkFooter>
                    </Stack>
                </Grid>
                <Grid item md={2.5} sm={12}>
                    <Stack spacing={2}>
                        <LinkFooter>About me</LinkFooter>
                        <LinkFooter>Our pricing</LinkFooter>
                        <LinkFooter>Our galary</LinkFooter>
                        <LinkFooter>Appointment</LinkFooter>
                        <LinkFooter>privacy policy</LinkFooter>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
        <Divider sx={{ borderColor: "#26457B", borderWidth: 2 }}/>
        <Typography mt={3} fontWeight={400} fontSize={16}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
        </Container>
    </Box>
  );
};

export default Footer;
