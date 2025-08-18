import {Card,CardContent,CardMedia,Typography,Box,Stack} from '@mui/material'
import cardImage from '../../../assets/blog.jpg'
import person from '../../../assets/person.jpg'

const BlogCard = () => {
  return (
    <Card sx={{maxWidth:350}}>
        <CardMedia component='img' image={cardImage} height={250}/>
        <CardContent>
              <Typography mb={2} fontWeight={500} fontSize={12} align='left'>Medical | March 31,2022</Typography>
              <Typography mb={2} align='left'>6 Tips To Protect Your Mental Health When You’re Sick</Typography>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Box component={'img'} src={person} borderRadius="50%" height={30} width={30}/>
                <Typography fontWeight={600} fontSize={15} color='#1B3C74'>Rebecca Lee</Typography>
              </Stack>
        </CardContent>
    </Card>
  )
}

export default BlogCard