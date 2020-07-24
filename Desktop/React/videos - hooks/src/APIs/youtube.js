import axios from 'axios';


const KEY = 'AIzaSyBlI_x0NmvlsgIdh8uYpek5lhV6jKhkzUU';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,

    }
    
});

