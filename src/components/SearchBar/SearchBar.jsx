import { useState, useMemo } from "react";

import SearchIcon from "@mui/icons-material/Search";
import {Stack,TextField,Box,Button} from "@mui/material";

const SearchBar = ({ booking, setFilteredBooking }) => {
  const [searchText, setSearchText] = useState("");

  const filteredBooking = useMemo(() => {
    if (!searchText.trim()) return booking;
    return booking.filter((item) =>
      item["Hospital Name"].toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, booking]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredBooking(filteredBooking);
  };
  return (
    <Box component="form" onSubmit={handleSubmit} width={"100%"}>
      <Stack direction={"row"} spacing={2}>
        <TextField
          type="text"
          value={searchText}
          fullWidth
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by hospital name"
          variant="outlined"
          sx={{border:"1px solid #F0F0F0",backgroundColor:"#FAFBFE",borderRadius:"10px"}}
          
        />
        <Button  size="large" sx={{ backgroundColor: "#2AA8FF",paddingY:'12px' }} startIcon={<SearchIcon />} type="submit" variant="contained">
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;
