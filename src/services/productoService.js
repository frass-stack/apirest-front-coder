import instances from "../config/axios";

export async function getAll(){
    const res = await instances.get('http://localhost:8888/api/v1/product')
    // console.log("🚀 ~ file: productoService.js:5 ~ getAll ~ res:", res.data.data)
    return res.data.data;
}