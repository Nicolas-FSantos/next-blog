import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://udduveitskbzwibclkqb.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZHV2ZWl0c2tiendpYmNsa3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MjE3NDcsImV4cCI6MjA0ODI5Nzc0N30.-GO6beJzMY7K2x9tsY5h94Ia_WsJXVBmlxD-g1koRA8",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZHV2ZWl0c2tiendpYmNsa3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MjE3NDcsImV4cCI6MjA0ODI5Nzc0N30.-GO6beJzMY7K2x9tsY5h94Ia_WsJXVBmlxD-g1koRA8"
    }
})