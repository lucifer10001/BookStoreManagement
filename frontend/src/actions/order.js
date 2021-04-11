const saveOrder = () =>{

    return {type : "ADD_ORDER",payload : {message : "Successfully order added"}}

}

export const addOrder= (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8093/api/v1/orders', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveOrder())
                }
            })
}}

const findOrder = (payload) =>{
    return {type : "FIND_ORDER",payload}
}

export const fetchOrder = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8093/api/v1/orders/list', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findOrder(data));
            })
        
    }

}



const removeOrder = (payload) =>{

    return {type : "DELETE_ORDER",payload}

}

export const deleteOrder = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8093/api/v1/orders" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'Order Deleted Succesfully'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removeOrder({category : data,message}))
            })
            
}}




const updateOrder = (payload) =>{
console.log('inside update order')
    return {type : "UPDATE_Order",payload : {message : "Successfully Order Updated "}}

}

export const EditOrder = (order) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(order)
    };
    return dispatch => {
        fetch('http://localhost:8092//orders/{id}'  , requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 204){
                    console.log("success");
                    dispatch(updateOrder())
                }
            })
}}