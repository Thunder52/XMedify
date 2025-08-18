import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import mobile from "../../../assets/mobile.jpg.jpg";
import downArrow from "../../../assets/down-arr.png";
import googlePlay from "../../../assets/playstore.jpg";
import appStore from "../../../assets/apple-logo.jpg";

const DownloadApp = () => {
  return (
    <Box
      py={6}
      sx={{ background: "linear-gradient(90deg, #E7F0FF, #E8F1FF 47%)" }}
    >
      <Stack
        gap={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box component={"img"} src={mobile} width={600} />
        <Box component={"img"} src={downArrow} width={70} />
        <Stack gap={3}>
          <Typography fontWeight={600} fontSize={48} color="#1B3C74">
            Download the
            <br /> <span style={{ color: "#2AA7FF" }}>Medify</span> App
          </Typography>
          <Box mb={5}>
            <Typography fontWeight={600} mb={1}>
              Get the link to download the app
            </Typography>
            <Box
              component={"form"}
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { sm: "column", md: "row" },
              }}
            >
              <TextField
                sx={{ border: "1px solid #F0F0F0", flex: 1 }}
                placeholder="Enter phone number"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  },
                }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#2AA7FF",
                  "&:hover": { backgroundColor: "#238DD9" },
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                send SMS
              </Button>
            </Box>
          </Box>
                       <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size={"large"}
                  startIcon={<img src={googlePlay} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={appStore} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DownloadApp;
