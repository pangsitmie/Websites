import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192,100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
}
p{
    opacity: 0.8;
    line-height: 1.5;
}
img{
    max-width: 100%;
}
`

export default GlobalStyle;