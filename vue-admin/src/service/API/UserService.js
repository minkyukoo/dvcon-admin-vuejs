import axios from 'axios';

export default class UserService {
   async getUserList(name, email, mobile) {
        return await axios.post(`/user`, { status: 'active', name: name, email: email, mobile: mobile }).then(res => res.data.data.users);
    }

    async addUser(name, mobile, email, gender, pass, confirm_pass) {
        return await axios.post(`/user/add`, { name: name, mobile: mobile, email: email, gender: gender, password: pass, confirm_password: confirm_pass }).then(res => res.data.data[0]);
    }
    async updateUser(name, mobile, email, gender,id) {
        return await axios.put(`/user/edit`, { name: name, mobile: mobile, email: email, gender: gender,id:id}).then(res => res);
    }

    async deleteUser(id) {
        return await axios.delete(`/user/delete`, {deleteIdArray:id }).then(res => res);
    }
    async viewUser(ids) {
        return await axios.post(`/user/view/id`, {id:ids }).then(res => res);
    }
    async downloadExcel(){
        return await  axios({
            url: '/user//generate-excel/?status=active',
            method: 'GET',
            responseType: 'blob', // important
        }).then(res => res);
    }
}
