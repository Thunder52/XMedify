import { Box, Typography } from "@mui/material";

const Card = ({ image, field, name }) => {
  return (
    <Box textAlign={"center"}>
      <Box
        component={"img"}
        src={image}
        width={1}
        sx={{
          boxShadow: "0 15px 55px -10px rgba(0,0,0,0.09)",
          borderRadius: "250px 240px 4px 4px",
        }}
      />
      <Typography fontWeight={400} fontSize={20} color="#1B3C74">
        {name}
      </Typography>
      <Typography fontWeight={500} fontSize={10} color="#2AA7FF">
        {field}
      </Typography>
    </Box>
  );
};

export default Card;
