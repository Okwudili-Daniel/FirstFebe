import axios from "axios";

const URL: string = "http://localhost:4444/api/v1"

export const getChild = async () =>{
    return await axios.get(`${URL}/read`).then((res: any) =>{
        return res.data.data
    })
}

export const sorted = async () =>{
    return await axios.get(`${URL}/sorted`).then((res: any) =>{
        return res.data.data
    });
}