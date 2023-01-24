import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from "../../theme";
import FullCarousel from 'src/components/carousel/FullCarousel';

import './main.css'
import CenterCarousel from 'src/components/carousel/CenterCarousel';

const Main = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>

      {/* HERO SECTION */}
      <section className='hero_section'>
        <Typography variant='h2' sx={{ textAlign: 'center', fontSize: '140px', fontWeight: '500', color: colors.grey[100] }}>
          Be Different.
        </Typography>
      </section>

      <section className='main_intro_section'>
        <div className='main_intro_content'>
          <div>
            <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: '300', color: colors.grey[100], pt: "5px" }}>
              ID/TW
            </Typography>
          </div>
          <div>
            <Typography variant='h2' sx={{ textAlign: 'left', fontWeight: '500', color: colors.grey[100] }}>
              Round Bytes is a digital agency that specializes in utilizing innovative technology, strategic planning, and design to establish long-lasting connections between businesses and their clientele.          </Typography>
          </div>
        </div>
      </section>

      <section>
        <FullCarousel />
      </section>


      <section className='main_intro_section'>
        <div className='main_intro_content'>
          <div>
            <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: '300', color: colors.grey[100], pt: "5px" }}>
              WHY US
            </Typography>
          </div>
          <div>
            <Typography variant='h2' sx={{ textAlign: 'left', fontWeight: '500', color: colors.grey[100] }}>
              As a full-service design company, we have a passion for creating the fantastic. Our goal is to create engaging brands that connect with consumers at every stage.
            </Typography>
          </div>
        </div>
      </section>


      <section>
        <CenterCarousel />
      </section>




    </div>
  )
}

export default Main