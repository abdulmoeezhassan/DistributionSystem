import React from "react";
import "./newComp.css";
import axios from "axios";

const NewComp=(props)=>{
    const DeleteInvoice=async()=>{
    const DeleteIn=await axios.delete(props.apiEndpoint);

    }
    return(
<div className="NewComp">
    <h4 >PRINT</h4>
    <hr className="Abc"/>
    <h4 >DELETE</h4>
    <hr className="Abc"/>
    <h4>EDIT</h4>
</div>
);
}
export default NewComp;