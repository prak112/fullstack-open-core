import axios from "axios"

const baseUrl = '/api/contacts' // relative URL

function getAll(){
    const request = axios.get(baseUrl);
    return request
        .then(response => response.data)
        .catch(error => {
            console.log(error.response.data.error)
            throw error;
        })
}

function create(newContact){
    const request = axios.post(baseUrl, newContact)
    return request
        .then(response => response.data)
        .catch(error => {
            console.log(error.response.data.error)
            throw error;
        })
}

function remove(id){
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
        .then(response => response.status)
        .catch(error => {
            console.log(error.response.data.error)
            throw error;
        })
}

function update(id, newContact){
    const request = axios.put(`${baseUrl}/${id}`, newContact)
    return request
        .then(response => response.data)
        .catch(error => {
            console.log(error.response.data.error)
            throw error;
        })
}

export default {getAll, create, remove, update}