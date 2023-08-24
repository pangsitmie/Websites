import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  font-weight: bold;
  cursor: none;
`;

const VideoBackground = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const StyledMeshGradientContainer: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 1000); // Adjust the mobile breakpoint as needed
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <VideoContainer>
      <VideoBackground autoPlay muted loop>
        {isMobile ? (
          <source src={'../../../src/assets/STG_flash_mobile.mp4'} type="video/mp4" />
        ) : (
          <source src={'../../../src/assets/STG_flash.mp4'} type="video/mp4" />
        )}
        {/* Add additional <source> tags for other video formats if needed */}
      </VideoBackground>
    </VideoContainer>
  );
};
