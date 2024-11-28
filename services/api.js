import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://udduveitskbzwibclkqb.supabase.co/rest/v1',
    headers: {
        apikey: API_KEY,
        authorization: API_AUTHORIZATION,
    }
})