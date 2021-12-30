import axios from 'axios';

const url = 'http://dvcon-admin-nodejs.dvconsulting.org:4545/dvcon-dev/api/v1';
const apikey = 'coN21di1202VII01Ed0OnNiMDa2P3p0M';
const token = localStorage.getItem('token');
// let udata= localStorage.getItem('userdata')
export default class CustomerService {
    getCustomersSmall() {
        return axios.get('assets/demo/data/customers-small.json').then(res => res.data.data);
    }

    getCustomersMedium() {
        return axios.get('assets/demo/data/customers-medium.json').then(res => res.data.data);
    }

    getCustomersLarge() {
        return axios.get('assets/demo/data/customers-large.json').then(res => res.data.data);
    }

    getCustomersXLarge() {
        return axios.get('assets/demo/data/customers-xlarge.json').then(res => res.data.data);
    }
    getUserList(name,email,mobile) {
       
        return axios({
            method: 'post',
            url: `${url}/admin/user`,
            data: {
                status: 'active',
                name:name,
                email:email,
                mobile:mobile
            },
            headers: {
                source: 'dvcon',
                apiKey: apikey,
                token: token,
            },
        })
            .then(res => res.data.data.users)
            .catch(res => {
                localStorage.setItem('expirytoken', '403');
                console.log(res);
            });
    }
    getcontentlarge() {
        return axios.get('assets/demo/data/contentlarge.json').then(res => res.data.data);
    }
}
