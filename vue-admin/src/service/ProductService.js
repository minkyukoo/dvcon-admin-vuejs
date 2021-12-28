import axios from 'axios';

export default class ProductService {
    getProductsSmall() {
        return axios.get('assets/demo/data/products-small.json').then((res) => res.data.data);
    }

    getProducts() {
        return axios.get('assets/demo/data/products.json').then((res) => res.data.data);
    }

    getProductsMixed() {
        return axios.get('assets/demo/data/products-mixed.json').then((res) => res.data.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get('http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/banner').then((res) => res.data.data);
    }
}
