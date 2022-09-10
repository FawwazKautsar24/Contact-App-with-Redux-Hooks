import axios from "axios";

export const GET_LIST_CONTACT = 'GET_LIST_CONTACT';

export const getListContact = () => {
    // dispatch penghubung antara View -> Action -> Reducers
    console.log('2. Masuk Contact Action');

    return (dispatch) => {
        // loading
        dispatch({
            type: GET_LIST_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        });

        // get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/contacts',
            timeout: 120000
        })
            .then((response) => {
                // berhasil get API
                console.log('3. Berhasil Dapat Data: ', response.data);
                dispatch({
                    type: GET_LIST_CONTACT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    }
                });
            })
            .catch((error) => {
                // gagal get API
                console.log('3. Gagal Dapat Data: ', error.message);
                dispatch({
                    type: GET_LIST_CONTACT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    }
                });
            })
    }
}