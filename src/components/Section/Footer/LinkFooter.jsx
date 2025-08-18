import {Link,Stack} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const LinkFooter = ({children}) => {
  return (
    <Link underline='none' color='white' fontWeight={300} fontSize={14}>
        <Stack direction={'row'} gap={0.5}>
            <KeyboardArrowRightIcon />
            {children}
        </Stack>
    </Link>
  )
}

export default LinkFooter