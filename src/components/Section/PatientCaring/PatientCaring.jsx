import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import img from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick-blue.png";

const PatientCaring = () => {
  return (
    <Box mb={5}
      sx={{
        background: "linear-gradient(90deg, #E7F0FF, #E8F1FF 47%)",
        height: "90vh",
      }}
    >
      <Stack
        direction={{md:"row", sm:"column"}}
        alignItems={"center"}
        justifyContent={"center"}
        height="100%"
        gap={10}
      >
        <Box component={"img"} src={img} width={500} />
        <Box>
          <Typography color="#2AA7FF" fontWeight={600} fontSize={14} mb={2}>
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </Typography>
          <Typography variant="h2" fontWeight={600} color="#1B3C74" marginBottom={3}>
            Patient <span style={{ color: "#2AA7FF" }}>Caring</span>
          </Typography>
          <Typography lineHeight={1.8} color="#77829D" fontSize={12} marginBottom={2}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and <br /> compassionate manner. We hope you will allow us to care
            for you and <br /> strive to be the first and best choice for
            healthcare.
          </Typography>
          <List>
            <ListItem disableGutters>
              <ListItemIcon sx={{minWidth:35}}>
                <Box component={'img'} src={tick} width={22} height={22}/>
              </ListItemIcon>
              <ListItemText primary="Stay Updated About Your Health" color="#1B3C74" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{minWidth:35}}>
                <Box component={'img'} src={tick} width={22} height={22}/>
              </ListItemIcon>
              <ListItemText primary="Check Your Results Online" color="#1B3C74" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{minWidth:35}}>
                <Box component={'img'} src={tick} width={22} height={22}/>
              </ListItemIcon>
              <ListItemText primary="Manage Your Appointments" color="#1B3C74" />
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  );
};

export default PatientCaring;
