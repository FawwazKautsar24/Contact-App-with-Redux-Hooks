import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact, deleteContact, getEditDataContact } from "../../actions/ContactAction";

function ListContact(){
    const { getListContactResult, getListContactLoading, getListContactError, deleteContactResult } = useSelector((state) => state.contactReducer);

    const dispatch = useDispatch();
    
    useEffect(() => {
        // get list contact dengan Redux (terpisah di ContactAction.js)
        console.log('0. useEffect ComponentDidMount');
        dispatch(getListContact());
    }, [dispatch]);

    useEffect(() => {
        if(deleteContactResult){
            dispatch(getListContact());
        }
    }, [deleteContactResult, dispatch]);
    
    return (
        <div>
            <h4>List Contact</h4>
            {getListContactResult ? (
                getListContactResult.map((contact) => {
                    return (
                        <p key={contact.id}>
                            {contact.nama} - 
                            {contact.noHP} - 
                            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
                            <button style={{ marginLeft: '10px'}} onClick={() => dispatch(getEditDataContact(contact))}>Edit</button>
                        </p>
                    )
                })
            ) : getListContactLoading ? (
                <p>Loading . . . </p>
            ) : (
                <p>{getListContactError ? getListContactError : "Tidak Ada Data"}</p>
            )}
        </div>
    )
}

export default ListContact;
