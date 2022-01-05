import axios from 'axios';
export default class BannerService {
    async getBannerList(title, stat, sdate, edate) {
        return await axios
            .post(`/banner`, {
                searchData: title,
                status: stat,
                startDate: sdate,
                endDate: edate,
            })
            .then((res) => res.data.data.banners);
    }
    async viewBanner(ids) {
        return await axios.post(`/banner/id`, { id: ids }).then((res) => res);
    }
    async updateBanner(ids, titlee, stitlee) {
        return await axios
            .put(`/banner/edit`, {
                id: ids,
                title: titlee,
                subtitle: stitlee,
            })
            .then((res) => res);
    }
    async addBanner(name, mobile, email, gender, pass, confirm_pass) {
        return await axios.post(`/user/add`, { name: name, mobile: mobile, email: email, gender: gender, password: pass, confirm_password: confirm_pass }).then((res) => res.data.data[0]);
    }
}
