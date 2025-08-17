import doctorIcon from "../../assets/Doctor.png";
import labsIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import capsuleIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";
import { Box, Grid, Typography } from "@mui/material";

const cardData = [
  { icon: doctorIcon, name: "Doctors" },
  { icon: labsIcon, name: "Labs" },
  { icon: hospitalIcon, name: "Hospitals",active:true },
  {icon:capsuleIcon,name:"Medical Store"},
  {icon:ambulanceIcon,name:"Ambulance"}
];
const HeroServices = () => {
  return (
  <Box textAlign={'center'} mb={2}>
    <Typography component={'h4'} fontSize={'20px'} lineHeight={'100%'} color="#102851" mb={3}>You may be looking for</Typography>
    <Grid container justifyContent={'center'} spacing={2}>
    {cardData.map((card)=>(
        <Grid item sm={4} md={2.4} key={card.name}>
        <IconCard icon={card.icon} title={card.name} bgColor="#FAFBFE" active={card.active}/>
        </Grid>
    ))}
</Grid>
  </Box>
  );
};

export default HeroServices;
