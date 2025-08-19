import { startOfDay, add, format, isEqual } from "date-fns";
import { Tabs, Tab, Stack,Typography, Divider, Box} from "@mui/material";
import { useState } from "react";
import RightArrow from '../../assets/next.png'
import leftArrow from '../../assets/prev.png'

const DayPicker = ({ selectedDate, setSelectedDate, totalSlots }) => {
    const [currIndex, setCurrIndex] = useState(0);
  const date = startOfDay(new Date());
  const dates = Array.from({ length: 7 }, (_, i) => add(date, { days: i }));

  const getDay = (day) => {
    if (isEqual(day, date)) return "Today";
    if (isEqual(day, add(date, { days: 1 }))) return "Tomorrow";
    return format(day, "E, d LLL");
  };

  const activeIndexRaw = dates.findIndex((d) =>
    isEqual(startOfDay(selectedDate ?? date), d)
  );

  const activeIndex = activeIndexRaw === -1 ? 0 : activeIndexRaw;

  const handlePrev=()=>{
    if(currIndex>0) setCurrIndex(currIndex-1);
  }
  const handleNext=()=>{
    if(currIndex<dates.length-1) setCurrIndex(currIndex+1);
  }

  return (
    <Stack position={"relative"} pt={3}> 
      <Divider sx={{ mb: 2 }} />
      <Stack direction={"row"} spacing={1} alignItems={'center'}>
      <Box component={'img'} src={leftArrow} onClick={handlePrev} width={50} height={50} sx={{cursor:"pointer"}}/>
      <Tabs
        TabIndicatorProps={{
          style: {
            backgroundColor: "#2AA7FF",
            height: "4px",
            borderRadius: "2px",
          },
        }}
        sx={{
            flexGrow: 1,
          "& .MuiTab-root": {
            minWidth: "33.33%",
          },
        }}
        variant="scrollable"
        value={activeIndex}
        aria-label="scrollable auto tabs example"
        onChange={() => {}}
        scrollButtons="false"
      >
        {dates.slice(currIndex, currIndex + 3).map((day, index) => {
            const realIdx = index + currIndex;
            return(
          <Tab
            key={realIdx}
            label={
              <Stack textAlign={"center"}>
                <Typography color="#414146" fontWeight={700} fontSize={16}>
                  {getDay(day)}
                </Typography>
                <Typography
                  textTransform={"capitalize"}
                  color="#01A400"
                  fontWeight={400}
                  fontSize={12}
                >
                  {totalSlots} slots available
                </Typography>
              </Stack>
            }
            onClick={() => setSelectedDate(day)}
            value={realIdx}
          />
        )
})}
      </Tabs>
      <Box component={'img'} src={RightArrow} onClick={handleNext} width={50} height={50} sx={{cursor:"pointer"}}/>
      </Stack>
    </Stack>
  );
};

export default DayPicker;
