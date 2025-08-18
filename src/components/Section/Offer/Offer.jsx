import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import { Box, Container } from "@mui/material";
import offerImage1 from "../../../assets/offer1.jpg";
import offerImage2 from "../../../assets/offer2.jpg";
import "swiper/css";
import "swiper/css/pagination";

const Offer = () => {
  return (
    <Box py={14}>
      <Container
        sx={{ maxWidth: "93% !important", maxHeight: "100vh !important" }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination,Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{delay:4000,disableOnInteraction:false}}
          breakpoints={{900:{slidesPerView:3}}}
          style={{paddingBottom:'40px'}}
        >
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage1}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage2}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage1}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage2}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage1}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage2}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage1}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage2}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={"img"}
              src={offerImage1}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Offer;
