import instances from "../config/axios";

export const getAllClient = () => {

}

export const getClientById = async (id) => {
    const res = await instances.get(`http://localhost:8888/api/v1/client/${id}`);
    return res.data.data
}

export const updateClientByid = async (id, data) => {
    const res = await instances.put(`http://localhost:8888/api/v1/client/${id}`, data);
}

export const deleteClientByid = (idClient) => {
    
}

export const registerClient = async (clientData) => {
    const res = await instances.post('http://localhost:8888/api/v1/client', clientData);
}

export const loginClient = async (docnumber) => {
    // console.log("🚀 ~ file: clientService.js:24 ~ loginClient ~ docnumber:", docnumber)
    const res = await instances.get(`http://localhost:8888/api/v1/client/login/${docnumber}`);
    console.log("🚀 ~ file: clientService.js:28 ~ loginClient ~ res:", res)
}