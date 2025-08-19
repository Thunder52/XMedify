import {Chip,Typography,Stack,Divider} from "@mui/material";
const TimeSLot = ({selectedDate,slots,handleBooking,hospital}) => {

    const handleClick=(slot)=>{
        handleBooking({...hospital,bookingDate:selectedDate,bookingTime:slot});
    }
  return (
    <Stack pt={3} spacing={{md:3,sx:2}} divider={<Divider orientation="horizontal" flexItem />}>
        {slots.morning.length>0 && (
            <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} spacing={2}>
                <Typography fontWeight={400} color="#414146" fontSize={{xs:14,md:16}} width={'15%'}>
                    Morning
                </Typography>
                {slots.morning.map((slot)=>(
                    <Chip label={slot} variant="outlined" sx={{borderColor:'#2AA7FF',color:'#2AA7FF',borderRadius:1}} onClick={()=>handleClick(slot)} />
                ))}
            </Stack>
        )}
        {slots.afternoon.length>0 && (
            <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} spacing={2} >
                <Typography fontWeight={400} color="#414146" fontSize={{xs:14,md:16}} width={'15%'}>
                    Afternoon
                </Typography>
                {slots.afternoon.map((slot)=>(
                    <Chip label={slot} variant="outlined" sx={{borderColor:'#2AA7FF',color:'#2AA7FF',borderRadius:1}} onClick={()=>handleClick(slot)} />
                ))}
            </Stack>
        )}
        {slots.evening.length>0 && (
            <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} spacing={2} >
                <Typography fontWeight={400} color="#414146" fontSize={{xs:14,md:16}} width={'15%'}>
                    Evening
                </Typography>
                {slots.evening.map((slot)=>(
                    <Chip label={slot} variant="outlined" sx={{borderColor:'#2AA7FF',color:'#2AA7FF',borderRadius:1}} onClick={()=>handleClick(slot)} />
                ))}
            </Stack>
        )}
    </Stack>
  )
}

export default TimeSLot