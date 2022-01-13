import axios from 'axios';
export default class CmsService {
    async getCmsList() {
        return await axios
            .post(`/cms`, {
                title: '',
                sortBy: 'id',
                sortOrder: 'desc',
            })
            .then((res) => res.data.data.cms);
    }
    // async addNotice(titl, desc) {
    //     return await axios
    //         .post(`/notice/add`, {
    //             title: titl,
    //             description: desc,
    //         })
    //         .then((res) => res);
    // }
    async viewCms(ids) {
        return await axios
            .post(`/cms/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editCms(titl, desc, ids) {
        return await axios
            .put(`/cms/edit`, {
                title: titl,
                description: desc,
                id: ids,
            })
            .then((res) => res);
    }
}
