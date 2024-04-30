import axios from "axios"

const baseUrl = 'http://localhost:3001/contacts'

function getAll(){
    const request = axios.get(baseUrl);
    return request.then(response => response.data)
}

function create(newContact){
    const request = axios.post(baseUrl, newContact)
    return request.then(response => response.data)
}

function remove(id){
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.status)
}

function update(id, newContact){
    const request = axios.put(`${baseUrl}/${id}`, newContact)
    return request.then(response => response.data)
}

export default {getAll, create, remove, update}