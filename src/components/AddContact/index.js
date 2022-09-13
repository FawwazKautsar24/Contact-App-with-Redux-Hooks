import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getListContact, editContact } from "../../actions/ContactAction";

function AddContact(){
    const [nama, setNama] = useState('');
    const [noHP, setNoHP] = useState('');
    const [id, setId] = useState('');

    // jika data terjadi perubahan
    const { addContactResult, getEditDataContactResult, editContactResult } = useSelector((state) => state.contactReducer);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        // mencegah terjadinya reload setelah klik submit
        e.preventDefault();

        if(id){
            dispatch(editContact({ id: id, nama: nama, noHP: noHP }));
        }else{
            dispatch(addContact({ nama: nama, noHP: noHP }));
        }
    }

    useEffect(() => {
        if(addContactResult){
            dispatch(getListContact());

            // auto clear form after click submit
            setNama('');
            setNoHP('');
        }
    }, [addContactResult, dispatch]);

    useEffect(() => {
        if(getEditDataContactResult){
            // show data that will edited
            setNama(getEditDataContactResult.nama);
            setNoHP(getEditDataContactResult.noHP);
            setId(getEditDataContactResult.id);
        }
    }, [getEditDataContactResult, dispatch]);
    
    useEffect(() => {
        if(editContactResult){
            dispatch(getListContact());

            // auto clear form after click submit
            setNama('');
            setNoHP('');
            setId('');
        }
    }, [editContactResult, dispatch]);
    
    return (
        <div>
            <h4>{id ? 'Edit Contact' : 'Add Contact'}</h4>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="nama" placeholder="Nama . . ." value={nama} onChange={(e) => setNama(e.target.value)} />
                <input type="text" name="noHP" placeholder="No HP . . ." value={noHP} onChange={(e) => setNoHP(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddContact;
