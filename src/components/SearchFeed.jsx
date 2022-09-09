import {useState, useEffect} from 'react'
import {Box,Typography} from "@mui/material"
import Videos from './Videos'
import fetchapi from "../utils/fetchapi"


function SearchFeed() {
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    fetchapi(`search?part=snippet&q=`)
    .then((data)=>{setVideos(data.items)})
  },[]);

  return (
    <Box p={2} sx={{overflow:"auto", height:"90vh", flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
          Search for Result: <span style={{color:"#F31503"}}>video's</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed;