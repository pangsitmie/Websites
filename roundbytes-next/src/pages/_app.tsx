import { ThemeProvider } from "styled-components";
import { theme } from "../Theme";
import { useState } from "react";
import { SelectedPage } from "../shared/types";
import Navbar from "../components/navbar/Navbar";
import { AppProps } from 'next/app';
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
