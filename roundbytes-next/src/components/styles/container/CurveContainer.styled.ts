import styled from "styled-components";

export const CurveContainer = styled.div`
   padding: 10rem 10%;

   @media(max-width: ${({ theme }) => theme.mobile}) {
      padding: 5rem 5%;
   }
`