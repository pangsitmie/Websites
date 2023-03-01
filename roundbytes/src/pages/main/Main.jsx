import React, { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from "../../theme";
import FullCarousel from 'src/components/carousel/FullCarousel';

import './main.css'
import CenterCarousel from 'src/components/carousel/CenterCarousel';
import ENGINEERING_ICON from 'src/assets/engineering_icon.png';
import DESIGN_ICON from 'src/assets/design_icon.png';
import PRODUCT_ICON from 'src/assets/product_icon.png';
import BRANDING_ICON from 'src/assets/branding_icon.png';
import SOLUTION_ICON from 'src/assets/solution_icon.png';
import MeshGradient from 'src/components/MeshGradient';

const Main = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const items = [
    { icon: ENGINEERING_ICON, label: 'Engineering' },
    { icon: DESIGN_ICON, label: 'Design' },
    { icon: PRODUCT_ICON, label: 'Product' },
    { icon: BRANDING_ICON, label: 'Branding' },
    { icon: SOLUTION_ICON, label: 'Solution' },
  ];

  return (
    <div >

      {/* HERO SECTION */}
      <MeshGradient/>     

      <section className='main_intro_section'>
        <div className='main_intro_content'>
          <div>
            <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: '300', color: colors.grey[100], pt: "1rem" }}>
              ID/TW
            </Typography>
          </div>
          <div>
            <Typography variant='h2' sx={{ textAlign: 'left', fontWeight: '500', color: colors.grey[100] }}>
              Round Bytes is a company that uses technology, planning, and design to help businesses connect with their customers for a long time.
            </Typography>
          </div>
        </div>
      </section>


      <Box padding={"10rem 0 0"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: '500', color: "#111" }}>
          We got you covered in
        </Typography>
        <Box className={'main_page_item_container'} p={'4rem'}>
          {items.map((item, index) => (
            <Box
              key={index}
              className={`flex_cc main_page_item ${activeItem === index ? 'active' : ''
                }`}
              flexDirection={'column'}
              onClick={() => handleItemClick(index)}
            >
              <img
                src={item.icon}
                width='60px'
                height={'60px'}
                alt=''
              />
              <Typography
                variant='h5'
                sx={{
                  textAlign: 'center',
                  fontWeight: '500',
                  color: colors.grey[100],
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>


      </Box>


      <Box padding={"0 5rem"}>
        <FullCarousel />
      </Box>

      <Box padding={"0 5rem"}>
        <CenterCarousel />
      </Box>




      <section className='main_intro_section'>
        <div className='main_intro_content'>
          <div>
            <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: '300', color: colors.grey[100], pt: "5px" }}>
              WHY US
            </Typography>
          </div>
          <div>
            <Typography variant='h2' sx={{ textAlign: 'left', fontWeight: '500', color: colors.grey[100] }}>
              We strive for perfection and create engaging brands that connect with consumers at every stage.
            </Typography>
          </div>
        </div>
      </section>







    </div >
  )
}

export default Main