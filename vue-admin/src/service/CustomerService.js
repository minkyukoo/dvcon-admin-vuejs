import axios from "axios";

export default class CustomerService {
    getCustomersSmall() {
        return axios
            .get("assets/demo/data/customers-small.json")
            .then(res => res.data.data);
    }

    getCustomersMedium() {
        return axios
            .get("assets/demo/data/customers-medium.json")
            .then(res => res.data.data);
    }

    getCustomersLarge() {
        return axios
            .get("assets/demo/data/customers-large.json")
            .then(res => res.data.data);
    }

    getCustomersXLarge() {
        return axios
            .get("assets/demo/data/customers-xlarge.json")
            .then(res => res.data.data);
    }
    getUserList() {
         return axios({
            method: 'post',
            url: 'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1/admin/user',
            data: {
                status: 'active'
            },
            headers: {
                source: 'dvcon',
                apiKey: 'coN21di1202VII01Ed0OnNiMDa2P3p0M',
                token: localStorage.getItem('token'),
            },
        })
             .then(res => res.data.data.users);
    }
    getcontentlarge() {
        return axios
            .get("assets/demo/data/contentlarge.json")
            .then(res => res.data.data);
    }
}
