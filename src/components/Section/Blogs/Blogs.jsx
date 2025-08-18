import { Box, Container, Typography,Stack } from '@mui/material'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <Container maxWidth="lg">
        <Box textAlign={'center'}>
            <Typography fontWeight={600} fontSize={16} color='#2AA7FF'>Blog & News</Typography>
            <Typography mb={2} fontSize={48} fontWeight={600} color='#1B3C74'>Read Our Latest News</Typography>
            <Stack direction={'row'} gap={5} alignItems={'center'} justifyContent={'center'}>
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </Stack>
            
        </Box>
    </Container>
  )
}

export default Blogs