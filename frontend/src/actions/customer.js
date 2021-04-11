const saveCustomer = () =>{

    return {type : "ADD_CUSTOMER",payload : {message : "Successfully added customer"}}

}

export const addCustomer= (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8092/api/v1/customers', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveCustomer())
                }
            })
}}

const findCustomer = (payload) =>{
    return {type : "FIND_CUSTOMER",payload}
}

export const fetchCustomer = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8092/api/v1/customers/list', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findCustomer(data));
            })
        
    }

}



const removeCustomer = (payload) =>{

    return {type : "DELETE_CUSTOMER",payload}

}

export const deleteCustomer = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8092/api/v1customers" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'succesfully deleted customer'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removeCustomer({category : data,message}))
            })
            
}}




const updateCustomer = (payload) =>{
console.log('inside update customer')
    return {type : "UPDATE_CUSTOMER",payload : {message : "Successfully updated customer"}}

}

export const EditCustomer = (customer) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(customer)
    };
    return dispatch => {
        fetch('http://localhost:8092/customers/{id}'  , requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 204){
                    console.log("success");
                    dispatch(updateCustomer())
                }
            })
}}