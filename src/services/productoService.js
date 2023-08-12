import instances from "../config/axios";

export async function getAll(){
    const res = await instances.get('http://localhost:8888/api/v1/product')
    // console.log("🚀 ~ file: productoService.js:5 ~ getAll ~ res:", res.data.data)
    return res.data.data;
}

export async function getProductById(product_id){
    const res = await instances.get(`http://localhost:8888/api/v1/product/${product_id}`)
    // console.log("🚀 ~ file: productoService.js:5 ~ getAll ~ res:", res.data.data)
    return res.data.data;
}