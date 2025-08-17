import { Box, Stack, Typography } from "@mui/material";

const IconCard = ({ icon, title, bgColor, active = false, shadow = false }) => {
  return (
    <Stack
      p={4}
      boxShadow={shadow ? "0px 34px 44px rgba(213, 219, 228, 0.44)" : "none"}
      bgcolor={active ? "#EEf8FF" : bgColor}
      border={active ? "1px solid #2AA7FF" : "none"}
      width={shadow ? 200: 130}
      borderRadius={"8px"}
      alignItems={"center"}
      mx={shadow?0:2}
    >
      <Box component={"img"} src={icon} width={60} height={60} mb={2} />
      <Typography color="#ABB6C7">{title}</Typography>
    </Stack>
  );
};

export default IconCard;
