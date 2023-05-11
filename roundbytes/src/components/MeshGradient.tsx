import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { StyledMeshGradientContainer } from './styles/container/MeshGradientContainer.styled';
import { StyledCursor } from './styles/Cursor.styled';
import { Animator, Fade, MoveOut, ScrollContainer, ScrollPage, Sticky, batch } from 'react-scroll-motion';
import { H1 } from './styles/typography/typography.styled';
import StyledScrollDown from './styles/ScrollDown.styled';

type Props = {}

const MeshGradient = (props: Props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    const navitage = useNavigate();

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        setVisible(true);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [visible]);



    return (
        <>

            <StyledMeshGradientContainer
                onMouseMove={handleMouseMove}
                onClick={() => { navitage("/work") }}
            >
                <StyledCursor
                    className={visible ? "flex" : "hidden"}
                    style={{
                        top: mousePosition.y,
                        left: mousePosition.x,
                    }}
                >
                    <span className='text-black text-sm'>WORK</span>
                </StyledCursor>

                <div className="flex items-center">
                    <H1 className='font-medium'>
                        Unleash Creativity.
                    </H1>
                    <StyledScrollDown className="mb-4" />

                </div>


            </StyledMeshGradientContainer >
        </>


    )
}

export default MeshGradient