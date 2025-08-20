import { Snackbar,Alert } from "@mui/material"

const AutohideSnackbar = ({open,setOpen}) => {
  return (
<Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)}>
  <Alert
    onClose={()=>setOpen(false)}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Booking successful!
  </Alert>
</Snackbar>
  )
}

export default AutohideSnackbar