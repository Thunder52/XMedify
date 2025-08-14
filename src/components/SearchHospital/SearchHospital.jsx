import {useEffect, useState} from 'react'
import axios from 'axios';
import {Box, Select,InputLabel, FormControl, MenuItem,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchHospital = () => {
    const[cities,setCities]=useState([]);
    const [states,setStates]=useState([]);
    const [data,setData]=useState({state:"",city:""});
    const navigate=useNavigate();

    const getStates=async()=>{
        try {
            const res=await axios.get('https://meddata-backend.onrender.com/states');
            setStates(res.data);
        } catch (error) {
            console.log('Error fetching states',error);
        }
    }
    const getCities=async()=>{
        setCities([]);
        setData((prev)=>({...prev,city:""}));
        try {
            const res=await axios.get(`https://meddata-backend.onrender.com/cities/${data.state}`);
            setCities(res.data);
        } catch (error) {
            console.log('Error Fetching citie',error);
        }
    }

    useEffect(()=>{
        getStates();
    },[]);
    useEffect(()=>{
        if(data.state){
        getCities();
        }
    },[data.state]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/search?state=${data.state}&city=${data.city}`);
    }
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData((prev)=>({...prev,[name]:value}));
    }
  return (
    <Box component={'form'} onSubmit={handleSubmit} sx={{display:'flex',flexDirection:{sm:'column' ,md:'row'},gap:4,justifyContent:'center'}}>
        <FormControl >
        <InputLabel id="states"><SearchIcon style={{ verticalAlign: 'middle', marginRight: 4 }}/> 
        State
        </InputLabel>
        <Select labelId='states' id='states' name='state' value={data.state} onChange={(e)=>handleChange(e)} required sx={{minWidth:300,width:'100%'}}>
            {states.map((state)=>(
                <MenuItem value={state}>{state}</MenuItem>
            ))}
        </Select>
        </FormControl>
        <FormControl>
        <InputLabel id="cities"><SearchIcon style={{ verticalAlign: 'middle', marginRight: 4 }}/> 
        city
        </InputLabel>
        <Select labelId='cities' id='cities' name='city' value={data.city} onChange={(e)=>handleChange(e)} required sx={{minWidth:300,width:'100%'}}>
            {data.state && cities.map((city)=>(
                <MenuItem value={city}>{city}</MenuItem>
            ))}
        </Select>
        </FormControl>
        <Button variant='contained' sx={{backgroundColor:'#2AA7FF','&:hover':{backgroundColor:'#238DD9'},borderRadius:'8px',textTransform: 'none'}}><SearchIcon /> Search</Button>
    </Box>
  )
}

export default SearchHospital