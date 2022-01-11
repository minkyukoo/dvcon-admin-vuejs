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
}
