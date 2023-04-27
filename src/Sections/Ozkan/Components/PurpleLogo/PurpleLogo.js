import React from "react";
import "./PurpleLogo.scss";

import { PurpleLogo as Logo } from "../../../../assets/images/Ozkan";

export const PurpleLogo = () => {
    return (
        <div className="purplehome">
            <img className="purplelogo" src={Logo} alt="PurpleLogo"/>
            <h2 className="home2-header">Used by millions.</h2>
            <h2 className="home2-header">Trusted with billions.</h2>
            <div className="home2-text">PancakeSwap has the most users of any decentralized platform, ever.</div>
            <div className="home2-text">And those users are now entrusting the platform with over $3 billion in funds.</div>
            <div className="home2-text">Will you join them?</div>
            
        </div>
    )
}



