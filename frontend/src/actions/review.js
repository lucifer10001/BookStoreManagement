 const saveReview = () =>{

    return {type : "ADD_REVIEW",payload : {message : "Successfully added review"}}

}

export const addReview = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch("http://localhost:8090/reviews", requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveReview())
                }
            })
}}

const findReviews = (payload) =>{
    return {type : "FIND_REVIEWS",payload}
}

export const fetchReviews = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8090/reviews/list', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findReviews(data));
            })
        
    }

}

const findReview = (payload) =>{
    return {type : "FIND_REVIEW",payload}
}

export const fetchReview = (id) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8090/reviews/' + id, requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findReview(data));
            })
        
    }

}

const removeReview = (payload) =>{

    return {type : "DELETE_REVIEW",payload}

}

export const deleteReview = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8090/reviews/" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'succesfully deleted review'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removeReview({review : data,message}))
            })
            
}}


// const findUser = (user) =>{
//     return {type : "FIND_USER",payload : {user}}
// }

// export const fetchUser = (id) => {

//     const requestOptions = {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return dispatch => {
//         fetch('http://localhost:8080/api/v1/users/'+id, requestOptions)
//             .then(res => {
//                 console.log(res);
//                 return res.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 dispatch(findUser(data));
//             })
        
//     }

// }

const updateReview = (payload) =>{
console.log('inside update book')
    return {type : "UPDATE_REVIEW",payload : {message : "Successfully updated review"}}

}

export const EditReview = (review) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(review)
    };
    return dispatch => {
        fetch("http://localhost:8090/reviews" , requestOptions) 
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 204){
                    console.log("success");
                    dispatch(updateReview())
                }
            })
}}