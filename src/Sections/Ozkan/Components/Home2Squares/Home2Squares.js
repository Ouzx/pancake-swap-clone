import React from "react";
import "./Home2Squares.scss"


function Home2Squares({Header1, Header2, ColorHeader, SquareIcon, SquareText}) {
    return ( 
        
            <div className="square-outer">
                <div className="square-inner">
                    <div className="squares">
                        <div>
                        <img className="squareSvg" src={SquareIcon} alt="squareSvg"/>
                        </div>
                        <div className="square-content-area">
                            <h2 className="square-header1">{Header1}</h2>
                            <h2 className="square-header1" style={{marginBottom: "24px", color: ColorHeader }}>{Header2}</h2>
                            <div className="square-text">{SquareText}</div>
                        </div>
                    </div>
                </div>
            </div>
        
     );
}

export default Home2Squares;