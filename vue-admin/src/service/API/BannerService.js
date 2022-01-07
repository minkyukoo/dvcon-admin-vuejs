import axios from 'axios';
export default class BannerService {
    async getBannerList(title, stat, sdate, edate) {
        return await axios
            .post(`/banner`, {
                searchData: title,
                status: stat,
                startDate: sdate,
                endDate: edate,
                // sortBy: 'id',
                // sortOrder: 'desc',
            })
            .then((res) => res.data.data.banners);
    }
    async viewBanner(ids) {
        return await axios.post(`/banner/id`, { id: ids }).then((res) => res);
    }
    async updateBanner(formdata) {
        return await axios.put(`/banner/edit`, formdata).then((res) => res);
    }
    // async createBanner(titl, subtit, lnk, stat, typ, img) {
    //     return await axios.post(`/banner/add`, { title: titl, subtitle: subtit, link: lnk, status: stat, type: typ, image: img }).then((res) => res.data.data[0]);
    // }
}
