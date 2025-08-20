import image from "../../assets/hospitalicon.png";
import { Box, Divider, Stack, Typography, Button, Chip } from "@mui/material";
import like from "../../assets/thumbsup.png";
import { useState } from "react";
import Calender from "../Calender/Calender";
import { format } from "date-fns";

const HospitalCard = ({ hospital, handleBooking, slots, booking = false }) => {
  const [show, setShow] = useState(false);

  return (
    <Box bgcolor={"white"} borderRadius={2} p={4}>
      <Stack direction={"row"} spacing={4} flexWrap={"wrap"}>
        <Box component={"img"} src={image} width={130} height={130} />
        <Box flex={1}>
          <Typography
            component={"h3"}
            className="MuiAccordion-heading css-wnfves"
            mb={1}
            fontWeight={600}
            fontSize={20}
            color="#14BEF0"
          >
            {hospital["Hospital Name"].toLowerCase()}
          </Typography>
          {/* <h3
            style={{ color: "#14BEF0", marginBottom: "8px" }}
            className="MuiAccordion-heading css-wnfves"
          >
            {hospital["Hospital Name"].toLowerCase()}
          </h3> */}
          <Typography
            textTransform={"capitalize"}
            fontWeight={700}
            fontSize={12}
            color="#414146"
          >
            {hospital["City"].toLowerCase()}, {hospital["State"].toLowerCase()}
          </Typography>
          <Typography fontWeight={400} fontSize={12} color="#414146">
            {hospital["Hospital Type"]}
          </Typography>
          <Typography fontWeight={400} fontSize={12} color="#414146">
            more
          </Typography>
          <Stack spacing={1} direction={"row"} mb={1}>
            <Typography fontWeight={700} fontSize={12} color="#02A401">
              FREE
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={400}
              sx={{ textDecoration: "line-through" }}
              color="#787887"
            >
              ₹500
            </Typography>
            <Typography fontWeight={400} fontSize={12} color="#414146">
              Consultation fee at clinic
            </Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          <Stack
            bgcolor={"#00A500"}
            spacing={"4px"}
            direction={"row"}
            alignItems={"center"}
            py={"4px"}
            px={1}
            borderRadius={1}
            width={"fit-content"}
          >
            <Box component={"img"} src={like} height={15} width={15} />
            <Typography fontSize={12} color="white">
              {hospital["Hospital overall rating"] === "Not Available"
                ? 0
                : hospital["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>
        <Stack justifyContent={booking ? "flex-start" : "flex-end"}>
          {!booking ? (
            <>
              <Typography
                fontWeight={500}
                fontSize={14}
                textAlign={"center"}
                color="#01A400"
              >
                Available Today
              </Typography>
              <Button
                onClick={() => setShow((prev) => !prev)}
                variant="contained"
                sx={{ backgroundColor: "#2AA7FF" }}
              >
                {show ? "Hide Booking Calendar" : "Book FREE Center Visit"}
              </Button>
            </>
          ) : (
            <>
              <Stack direction={"row"} spacing={1} mt={{ xs: 2, md: 0 }}>
                <Chip
                  variant="outlined"
                  label={hospital.bookingTime}
                  sx={{
                    borderColor: "#2AA7FF",
                    borderRadius: 1,
                    color: "#2AA7FF",
                  }}
                />
                <Chip
                  variant="outlined"
                  label={format(new Date(hospital.bookingDate), "dd MMMM yyyy")}
                  sx={{
                    borderColor: "#00A500",
                    borderRadius: 1,
                    color: "#00A500",
                  }}
                />
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
      {show && (
        <Calender
          hospital={hospital}
          slots={slots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
};

export default HospitalCard;
