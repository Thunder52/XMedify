import { Box, Container, Grid, Typography, Button } from "@mui/material";
import storeIcon from "../../../assets/Drugstore.png";
import primaryCareIcon from "../../../assets/primary-care.png";
import cardiologyIcon from "../../../assets/cardiology.png";
import mriIcon from "../../../assets/mri-removebg-preview.png";
import bloodTesticon from "../../../assets/blood-test-removebg-preview.png";
import piscologistIcon from "../../../assets/piscologist-removebg-preview.png";
import xrayIcon from "../../../assets/X-Ray-removebg-preview.png";
import IconCard from "../../IconCard/IconCard";

const data = [
  { icon: storeIcon, title: "Dentistry" },
  { icon: primaryCareIcon, title: "Primary care" },
  { icon: cardiologyIcon, title: "Cardiology" },
  { icon: mriIcon, title: "MRI Resonance" },
  { icon: bloodTesticon, title: "Blood Test" },
  { icon: piscologistIcon, title: "Piscologist" },
  { icon: storeIcon, title: "Laboratory" },
  { icon: xrayIcon, title: "X-ray" },
];

const Specialization = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #E7F0FF, #E8F1FF 47%)",
      }}
      py={6}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography
          mb={4}
          fontWeight={600}
          fontSize={40}
          color="#1B3C74"
          lineHeight={"67px"}
        >
          Find By Specialisation
        </Typography>
        <Grid container spacing={3} justifyContent={"center"} mb={5}>
          {data.map((card) => (
            <Grid item sm={4} md={3} columnSpacing={1} key={card.title}>
              <IconCard
                icon={card.icon}
                title={card.title}
                bgColor="#FFFFFF"
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          disableElevation
          size="large"
          sx={{
            backgroundColor: "#2AA7FF",
            "&:hover": { backgroundColor: "#238DD9" },
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          View All
        </Button>
      </Container>
    </Box>
  );
};

export default Specialization;
