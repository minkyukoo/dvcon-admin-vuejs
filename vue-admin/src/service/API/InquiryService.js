import axios from 'axios';
export default class InquiryService {
    async getInquirytypeList() {
        return await axios.post(`/inquery_type`).then((res) => res.data.data.inqueryType);
    }
    async addInquiryType(titl) {
        return await axios
            .post(`/inquery_type/add`, {
                title: titl,
                status: 'active',
            })
            .then((res) => res);
    }
    async viewInquiryType(ids) {
        return await axios
            .post(`/inquery_type/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editInquiryType(titl, stat, ids) {
        return await axios
            .put(`/inquery_type/edit`, {
                title: titl,
                status: stat,
                id: ids,
            })
            .then((res) => res);
    }
}
