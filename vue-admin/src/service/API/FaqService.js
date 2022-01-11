import axios from 'axios';
export default class FaqService {
    async getFaqList() {
        return await axios
            .post(`/faq`, {
                title: '',
                description: '',
                status: '',
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
    async viewFaq(ids) {
        return await axios
            .post(`/faq/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editFaq(titl, stat, desc, ids) {
        return await axios
            .put(`/faq/edit`, {
                title: titl,
                status: stat,
                description: desc,
                id: ids,
            })
            .then((res) => res);
    }
}
