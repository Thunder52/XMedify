import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import doctor1 from "../../../assets/ahmad-stevens.png";
import doctor2 from "../../../assets/ahmad.png";
import doctor3 from "../../../assets/ankur.png";
import doctor4 from "../../../assets/lesley.png";
import doctor5 from "../../../assets/heena.png";
import Card from "./Card";

const data = [
  { img: doctor1, field: "Neurologist", name: "Dr. Ahamd Stevens" },
  { img: doctor2, field: "Neurologist", name: "Dr. Ahmad Khan" },
  {img:doctor3,field:"Medicine",name:"Dr. Ankur Sharma"},
  {img:doctor5,field:"Orthopedics",name:"Dr. Heena Sachdev"},
  {img:doctor4,field:"Medicine", name:"Dr. lesley"},
  { img: doctor1, field: "Neurologist", name: "Dr. Ahamd Stevens" },
  { img: doctor2, field: "Neurologist", name: "Dr. Ahmad Khan" },
  {img:doctor3,field:"Medicine",name:"Dr. Ankur Sharma"},
  {img:doctor5,field:"Orthopedics",name:"Dr. Heena Sachdev"},
  {img:doctor4,field:"Medicine", name:"Dr. lesley"},
  { img: doctor1, field: "Neurologist", name: "Dr. Ahamd Stevens" },
  { img: doctor2, field: "Neurologist", name: "Dr. Ahmad Khan" },
  {img:doctor3,field:"Medicine",name:"Dr. Ankur Sharma"},
  {img:doctor5,field:"Orthopedics",name:"Dr. Heena Sachdev"},
  {img:doctor4,field:"Medicine", name:"Dr. lesley"},
];

const Specialist = () => {
  return (
    <Box py={4} textAlign={'center'}>
        <Typography variant="h2" color="#1B3C74" mb={4}>Our Medical Specialist</Typography>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{767:{slidesPerView:4}}}
        grabCursor={true}
        style={{paddingBottom:"40px"}}

      >
        {data.map((doctor,index)=>(
            <SwiperSlide key={index}><Card image={doctor.img} field={doctor.field} name={doctor.name}/></SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Specialist;
