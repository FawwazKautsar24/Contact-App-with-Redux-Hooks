import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact } from "../../actions/ContactAction";

function ListContact(){
    const { getListContactResult, getListContactLoading, getListContactError } = useSelector((state) => state.contactReducer);

    const dispatch = useDispatch();
    
    useEffect(() => {
        // get list contact dengan Redux (terpisah di ContactAction.js)
        console.log('1. useEffect ComponentDidMount');
        dispatch(getListContact());
    }, [dispatch]);
    
    return (
        <div>
            <h4>List Contact</h4>
            {getListContactResult ? (
                getListContactResult.map((contact) => {
                    return (
                        <p key={contact.id}>{contact.nama} - {contact.noHP}</p>
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
