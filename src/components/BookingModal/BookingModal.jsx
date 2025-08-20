import {Modal,Box,Stack,Typography,Button} from '@mui/material'
import {format} from 'date-fns'

const BookingModal = ({open,setOpen,bookingDetail,setSuccess}) => {

    function formatdate(day){
        if(day) {
            const date=new Date(day);
            return format(date,'E,d LLL');
        }
    }

    const handleConfirm=()=>{
        const data=localStorage.getItem('booking')||"[]";
        const oldBooking=JSON.parse(data);
        localStorage.setItem('booking',JSON.stringify([...oldBooking,bookingDetail]))
        setSuccess(true);
        setOpen(false);
    }
  return (
    <Modal open={open} onClose={()=>setOpen(false)}>
        <Box p={4} sx={{position:'absolute',left:"50%",top:"50%",transform:'translate(-50%,-50%)',width:'600px',background:'white'}}>
            <Typography mb={3} color='#1B3C74' fontWeight={600} fontSize={24}>Confirm Booking</Typography>
            <Typography mb={3} color='#2AA7FF' fontSize={15} fontWeight={400}>Please confirm your booking for {bookingDetail.bookingTime} on {formatdate(bookingDetail.bookingDate)}</Typography>
            <Stack direction={'row'} spacing={2}>
                <Button onClick={handleConfirm} variant='contained' sx={{backgroundColor:'#2AA7FF'}}>Confirm</Button>
                <Button onClick={()=>setOpen(false)} variant='outlined' sx={{borderColor:'#2AA7FF'}}>Cancel</Button>
            </Stack>
        </Box>
    </Modal>
  )
}

export default BookingModal