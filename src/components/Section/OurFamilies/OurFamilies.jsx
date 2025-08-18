import { Box, Stack, Typography } from "@mui/material";
import banner from '../../../assets/our-families-banner.png'

const OurFamilies = () => {
  return (
    <Box mb={5} pt={3} sx={{ background: "linear-gradient(90deg, #E7F0FF, #E8F1FF 47%)"}}>
      <Stack direction={{md:'row',sm:"column"}} alignItems={'center'} justifyContent={'center'} gap={10} width='100%'>
        <Stack>
          <Typography color="#2AA7FF" fontSize={17} fontWeight={600}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>
          <Typography fontWeight={600} fontSize={48} color="#1B3C74">
            Our Families
          </Typography>
          <Typography lineHeight={2} fontFamily={500} color="#77829D" fontSize={17}>
            We will work with you to develop individualised care plans,<br/>
            including management of chronic diseases. If we cannot assist,<br /> we
            can provide referrals or advice about the type of practitioner<br /> you
            require. We treat all enquiries sensitively and in the strictest<br />
            confidence.
          </Typography>
        </Stack>
        <Box component={'img'} src={banner} width={'500px'}/>
      </Stack>
    </Box>
  );
};

export default OurFamilies;
