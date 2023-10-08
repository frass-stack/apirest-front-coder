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

export async function updateProductById(product_id, product){
    console.log("🚀 ~ file: productoService.js:16 ~ updateProductById ~ product:", product)
    const res = await instances.put(`http://localhost:8888/api/v1/product/${product_id}`, product)
}

export async function createProduct(product){
    // console.log("🚀 ~ file: productoService.js:16 ~ updateProductById ~ product:", product)
    const res = await instances.post(`http://localhost:8888/api/v1/product`, product)
}

export async function deleteProduct(product_id){
    // console.log("🚀 ~ file: productoService.js:20 ~ deleteProduct ~ product_id:", product_id)
    const res = await instances.delete(`http://localhost:8888/api/v1/product/${product_id}`)
}