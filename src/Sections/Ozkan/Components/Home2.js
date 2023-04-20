import React from "react"
import { PurpleLogo } from "./PurpleLogo/PurpleLogo"
import Home2Squares from "./Home2Squares/Home2Squares"
import { Square1Icon } from "../../../assets/images/Ozkan"
import { Square2Icon } from "../../../assets/images/Ozkan"
import { Square3Icon } from "../../../assets/images/Ozkan"
import "../../../globals.scss"
import "./Home2.scss"

export const Home2 = () => {
    return(
        <div className="home2">
            <PurpleLogo />
            <div className="square-container">
                <Home2Squares 
                    Header1="1.5 million" Header2="users" ColorHeader="var(--color-purple)"
                    SquareIcon={Square1Icon} SquareText="in the last 30 days" 
                />
                <Home2Squares 
                    Header1="18 million" Header2="trades" ColorHeader="var(--color-accent)" 
                    SquareIcon={Square2Icon} SquareText="made in the last 30 days"
                />
                <Home2Squares 
                    Header1="$3 billion" Header2="staked" ColorHeader="var(--colors-failure)" 
                    SquareIcon={Square3Icon} SquareText="Total Value Locked"
                />
            </div>
        </div>
    )
}
