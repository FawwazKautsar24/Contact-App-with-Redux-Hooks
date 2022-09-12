import axios from "axios";

export const GET_LIST_CONTACT = 'GET_LIST_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const getListContact = () => {
    // dispatch penghubung antara View -> Action -> Reducers

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

export const addContact = (data) => {
    // dispatch penghubung antara View -> Action -> Reducers

    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        });

        // get API
        axios({
            method: 'POST',
            url: 'http://localhost:3000/contacts',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                // berhasil get API
                dispatch({
                    type: ADD_CONTACT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    }
                });
            })
            .catch((error) => {
                // gagal get API
                dispatch({
                    type: ADD_CONTACT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    }
                });
            })
    }
}

export const deleteContact = (id) => {
    // dispatch penghubung antara View -> Action -> Reducers
    console.log('2. Masuk Contact Action');

    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        });

        // get API
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/contacts/${id}`,
            timeout: 120000,
        })
            .then((response) => {
                // berhasil get API
                console.log('3. Berhasil Dapat Data: ', response.data);
                dispatch({
                    type: DELETE_CONTACT,
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
                    type: DELETE_CONTACT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    }
                });
            })
    }
}
