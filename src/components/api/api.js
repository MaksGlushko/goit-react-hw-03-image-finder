import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params={
    key: '40266655-7594f659fb55abd6ad22e6064',
    image_type : 'photo',
    orientation : 'horizontal',
}

export async function fetchImagesFromAPI (q, page, per_page, abortCtrl) {
    const response = await axios.get(`?q=${q}&page=${page}&per_page=${per_page}`, {signal: abortCtrl.signal,});
    return response.data;
};