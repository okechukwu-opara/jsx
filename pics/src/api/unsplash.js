import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID SEJgSTyBFLQI6l1JkKROBvIQc3vNSk09nw1z1R1IA-M'
    }
});