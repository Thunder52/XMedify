import { useState } from "react";
import { startOfDay } from "date-fns";
import { Box } from "@mui/material";
import DayPicker from "./DayPicker";
import TimeSlot from "./TimeSLot";

const Calender = ({ slots, handleBooking, hospital }) => {
  const totalSlots = slots.morning.length + slots.afternoon.length + slots.evening.length;
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  return (
    <Box>
      <DayPicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlot
        selectedDate={selectedDate}
        slots={slots}
        handleBooking={handleBooking}
        hospital={hospital}
      />
    </Box>
  );
};

export default Calender;
