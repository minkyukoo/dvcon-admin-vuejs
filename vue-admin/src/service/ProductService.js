import axios from 'axios';

export default class ProductService {
    getProductsSmall() {
        return axios.get('assets/demo/data/products-small.json').then(res => res.data.data);
    }

    getProducts() {
        return axios.get('assets/demo/data/products.json').then(res => res.data.data);
    }

    getProductsMixed() {
        return axios.get('assets/demo/data/products-mixed.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall(title, dropdownValue, calendarValue1, calendarValue2) {
        return axios.post(
            'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/banner',
            {
                searchData: title,
                status: dropdownValue,
                startDate: calendarValue1,
                endDate: calendarValue2,
                sortBy: 'createdDate',
                sortOrder: 'desc',
            },
            {
                headers: {
                    source: 'dvcon',
                    apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                    token: localStorage.getItem('token'),
                },
            }
        ).then(res => res.data.data.banners)
        .catch(res => {
            localStorage.setItem('expirytoken', '403');
            console.log(res);
        });
        // .then(res => res.data.data);
    }
}
