import image from "../../../assets/faqs-banner.jpg";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
} from "@mui/material";

const data = [
  {
    question: "Why choose our medical for your family?",
    answer: "Because we have best and most affordable doctors",
  },
  {
    question: "Why we are different from others?",
    answer: "Because we provide best doctors",
  },
  {
    question: "Trusted & experience senior care & love",
    answer: "Best care for seniors",
  },
  {
    question: "How to get appointment for emergency cases?",
    answer: "By contact personally",
  },
];
const FAQ = () => {
  return (
    <Box textAlign={"center"} mb={5}>
      <Typography color="#2AA7FF" fontWeight={600} fontSize={15}>
        Get Your Answer
      </Typography>
      <Typography color="#1B3C74" fontWeight={600} fontSize={40}>
        Frequently Asked Questions
      </Typography>
      <Stack gap={5} direction={{md:"row",sm:"column"}} alignItems={"center"} justifyContent={"center"}>
        <Box component={"img"} src={image} height={500} borderRadius={3}/>
        <Stack gap={5} width={500} >
        {data.map((accoData, index) => (
          <Accordion key={index} disableGutters elevation={0} square sx={{
                border: "none",
                boxShadow: "none",
                "&:before": { display: "none" },
                "&:hover": { boxShadow: "0px 4px 15px rgba(0,0,0,0.05)" },
              }}>
            <AccordionSummary
              expandIcon={<AddIcon sx={{color:"#2AA7FF"}}/>}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography color="#1B3C74" fontWeight={600} fontSize={18}>
                {accoData.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{accoData.answer}</AccordionDetails>
          </Accordion>
        ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FAQ;
