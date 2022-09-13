import { GET_LIST_CONTACT, ADD_CONTACT, DELETE_CONTACT, GET_EDIT_DATA_CONTACT, EDIT_CONTACT } from "../../actions/ContactAction";

// standar penulisan reducer
const initialState = {
    getListContactResult: false,
    getListContactLoading: false,
    getListContactError: false,

    addContactResult: false,
    addContactLoading: false,
    addContactError: false,
    
    deleteContactResult: false,
    deleteContactLoading: false,
    deleteContactError: false,
    
    getEditDataContactResult: false,

    editContactResult: false,
    editContactLoading: false,
    editContactError: false,
}

const contact = ( state = initialState, action ) => {
    switch(action.type){
        case GET_LIST_CONTACT: 
            return {
                ...state,
                getListContactResult: action.payload.data,
                getListContactLoading: action.payload.loading,
                getListContactError: action.payload.errorMessage,
            }

        case ADD_CONTACT: 
            return {
                ...state,
                addContactResult: action.payload.data,
                addContactLoading: action.payload.loading,
                addContactError: action.payload.errorMessage,
            }
            
            case DELETE_CONTACT: 
            return {
                ...state,
                deleteContactResult: action.payload.data,
                deleteContactLoading: action.payload.loading,
                deleteContactError: action.payload.errorMessage,
            }
        
        case GET_EDIT_DATA_CONTACT: 
        return {
            ...state,
            getEditDataContactResult: action.payload.data,
        }
        
        case EDIT_CONTACT: 
            return {
                ...state,
                editContactResult: action.payload.data,
                editContactLoading: action.payload.loading,
                editContactError: action.payload.errorMessage,
            }

        default: 
            return state;
        }
    }
    
export default contact;
