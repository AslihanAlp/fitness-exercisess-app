import { Box, Stack, Typography, Button} from "@mui/material"
import HeroBannerImage from "../assets/images/banner.png"


const HeroBanner = () => {
  return (
    <Box position="relative" p="20px" 
      sx={{
        mt:{ lg: "212px", xs:"70px"},
        ml:{ sm: "50px"}
    }}>
      <Typography color="#FF2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} mt="30px" mb="23px" sx={{fontSize: {lg: "44px", xs:"40px"}}}>
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" 
              sx={{backgroundColor:"#ff2625", padding:"10px"}}>
            Explore Exercises
    </Button>
      <Typography fontWeight={600} fontSize="200px" color="#ff2625" sx={{opacity:"0.1", display: {lg: "block" ,xs:"none"}}}>Exercise</Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
      
    </Box>
  )
}

export default HeroBanner