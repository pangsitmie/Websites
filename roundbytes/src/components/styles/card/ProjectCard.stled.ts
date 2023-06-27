import styled from "styled-components";

export const StyledProjectCard = styled.div`
border-radius: 25px;
height: 450px;
width: 350px;
cursor: pointer;
position: relative;
margin: 1rem;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);


&:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);}


&:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 25px;
}

&:hover h4 {
    visibility: visible;
    opacity: 1;
}

& h4 {
    padding: 1.5rem;
    /* existing styles */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease-in-out;
  }



&:hover .portfolio__item-image::before {
    visibility: visible;
    opacity: 1;
}


@media(max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
   h3{
          font-size: 1rem;
   }
}
`