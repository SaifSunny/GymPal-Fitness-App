import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '214px', xs: '70px' }, 
    ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
      GymPal Exercise
      </Typography>

      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br /> And Repeat
      </Typography>

      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4}>
        Check out the most effective exercises personalized to you
      </Typography>

      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#ff2625',padding:'10px'}}>Explore Exercises
      </Button>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        GymPal
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner