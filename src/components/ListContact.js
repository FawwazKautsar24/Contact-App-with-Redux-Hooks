import React from "react";
import CardContact from "./CardContact";

function ListContact({name}){
    return (
        <div>
            <h2>List Contact</h2>
            <CardContact name={name} />
        </div>
    )
}

export default ListContact;
