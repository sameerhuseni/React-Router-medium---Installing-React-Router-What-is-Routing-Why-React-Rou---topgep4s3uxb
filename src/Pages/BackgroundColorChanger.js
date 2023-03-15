import React from 'react';
import {useParams} from "react-router-dom";
// import './Style.css';


export const BackgroundColorChanger = () =>{
    const params=useParams();
    const mStyle={
        backgroundColor: params.colorname,
    }
  
    return(
       <main id='main-style'style={mStyle}> Background Color Changer
       </main>
    )
}
