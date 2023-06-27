import styled from "styled-components";

export const CurveContainer = styled.div`
   padding: 5rem 8%;

   @media(max-width: ${({ theme }) => theme.mobile}) {
      padding: 5rem 5%;
   }
`