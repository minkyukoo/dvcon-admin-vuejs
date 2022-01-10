import axios from 'axios';
export default class FaqService {
    async getFaqList() {
        return await axios
            .post(`/faq`, {
                title: '',
                description: '',
                status: 'active',
                sortBy: 'id',
                sortOrder: 'asc', //desc
            })
            .then((res) => res.data.data.faq);
    }
    async addFaq(titl, desc) {
        return await axios
            .post(`/faq/add`, {
                title: titl,
                description: desc,
            })
            .then((res) => res);
    }
    // async viewNotice(ids) {
    //     return await axios
    //         .post(`/notice/id`, {
    //             id: ids,
    //         })
    //         .then((res) => res.data.data[0]);
    // }
    // async editNotice(titl, desc, ids) {
    //     return await axios
    //         .put(`/notice/edit`, {
    //             title: titl,
    //             description: desc,
    //             id: ids,
    //         })
    //         .then((res) => res);
    // }
}
