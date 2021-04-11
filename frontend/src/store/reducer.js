const initialState = {
    books : [
       
    ],

    customer : [
        
    ],
    message : ''
}

const reducer = (state = initialState, { type, payload }) => {

    console.log(type);
    switch (type) {

    case "FIND_CUSTOMER" :
        return {customer : payload,message:''}
    
    case "ADD_CUSTOMER":
        return {customer: state.customer,message:payload.message}

    case "DELETE_CUSTOMER":
        var filteredList = state.customer.filter((customer)=> customer.fullName !== payload.customer.fullName)
        return {customer: filteredList,message:''}
    
    case "UPDATE_CUSTOMER":
        console.log(payload.message)
        return {customer: state.customer,message:payload.message}
    
    default:
        return state
    }
}

export default reducer