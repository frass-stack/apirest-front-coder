import instances from "../config/axios";

export const getAllClient = () => {

}

export const getClientById = (idClient) => {
    
}

export const updateClientByid = (idClient) => {
    
}

export const deleteClientByid = (idClient) => {
    
}

export const registerClient = async (clientData) => {
    console.log("🚀 ~ file: clientService.js:20 ~ registerClient ~ clientData:", clientData)
    const res = await instances.post('http://localhost:8888/api/v1/client', clientData);
}