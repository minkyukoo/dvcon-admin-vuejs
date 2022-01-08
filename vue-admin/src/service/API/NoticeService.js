import axios from 'axios';
export default class NoticeService {
    async getNoticeList(titl, stat, sdate, edate) {
        return await axios
            .post(`/notice`, {
                title: titl,
                status: stat,
                startDate: sdate,
                endDate: edate,
            })
            .then((res) => res.data.data.notice);
    }
    async addNotice(titl, desc) {
        return await axios
            .post(`/notice/add`, {
                title: titl,
                description: desc,
            })
            .then((res) => res);
    }
}
