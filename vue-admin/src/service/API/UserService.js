import axios from 'axios';

export default class UserService {
    getUserList(name, email, mobile) {
        return axios.post(`/user`, { status: 'active', name: name, email: email, mobile: mobile }).then(res => res.data.data.users);
    }

    addUser(name, mobile, email, gender, pass, confirm_pass) {
        return axios.post(`/user/add`, { name: name, mobile: mobile, email: email, gender: gender, password: pass, confirm_password: confirm_pass }).then(res => res.data.data[0]);
    }

    deleteUser(id) {
        return axios.delete(`/user/delete`, {deleteIdArray:id }).then(res => res);
    }
}
