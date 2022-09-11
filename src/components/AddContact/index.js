import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getListContact } from "../../actions/ContactAction";

function AddContact(){
    const [nama, setNama] = useState('');
    const [noHP, setNoHP] = useState('');

    // jika data terjadi perubahan
    const { addContactResult } = useSelector((state) => state.contactReducer);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        // mencegah terjadinya reload setelah klik submit
        console.log('1. Masuk Handle Submit');
        e.preventDefault();

        dispatch(addContact({ nama: nama, noHP: noHP }));
    }

    useEffect(() => {
        if(addContactResult){
            console.log('5. Masuk ComponentDidUpdate');
            dispatch(getListContact());

            setNama('');
            setNoHP('');
        }
    }, [addContactResult, dispatch]);
    
    return (
        <div>
            <h4>Add Contact</h4>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="nama" placeholder="Nama . . ." value={nama} onChange={(e) => setNama(e.target.value)} />
                <input type="text" name="noHP" placeholder="No HP . . ." value={noHP} onChange={(e) => setNoHP(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddContact;
