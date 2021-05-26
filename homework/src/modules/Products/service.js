import { HttpClient } from "../../HttpClient/HttpClient";

class ProductService extends HttpClient {
    constructor(){
        super('https://isko88.github.io');
    }

    async getProducts(){
        return this.get('apipizza.json');
    }

    async getProductsById(id){
        let product = {};
        await this.get('apipizza.json').then(res=>{
            product = res;
        });
        let {data} = product;
        return data.find((pro)=>pro.id === id)
    }
}

export const productService = new ProductService();