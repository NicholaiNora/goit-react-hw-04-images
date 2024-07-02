import axios from 'axios';

const API_KEY = '43784096-87519b5a7d318238fedcc7f7a';

export const getAPI = async (search, page) => {
    const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

    const response = await axios.get(url);

    return response.data
}
