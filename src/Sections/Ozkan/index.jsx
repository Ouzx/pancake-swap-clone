import React from "react";
import { Navbar } from "./Components/Navbar";
import { Home1 } from "./Components/Home1";
import { Home2 } from "./Components/Home2";

export const index = () => {
    return(
        <>
        <Navbar />
        <Home1 />
        <Home2 />
        </>
    )
}

