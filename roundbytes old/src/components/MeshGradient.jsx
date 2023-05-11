import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './meshGradient.css'


const MeshGradient = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
  
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
  
    const handleMouseLeave = () => {
      setVisible(false);
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, [visible]);

    return (
        <Link to="/work">
            <div
                className="mesh-gradient"
                onMouseMove={handleMouseMove}
                onClick={() => {
                    // Perform any other actions here before navigating
                    // For example, you can log an event or update state.
                }}
            >
                <div
                    className="cursor"
                    style={{
                        top: mousePosition.y,
                        left: mousePosition.x,
                    }}
                >
                    <span>WORK</span>
                </div>
                <span>
                    <Typography variant='h2' sx={{ textAlign: 'center', fontSize: '140px', fontWeight: '500', color: "#141414" }}>
                        Be Different.
                    </Typography>
                </span>
            </div>
        </Link>
    );
}

export default MeshGradient;
