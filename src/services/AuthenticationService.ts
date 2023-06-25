import api from "./api";

export async function authenticate(username: string, password: string) {
    if(!username || !password) return false;

    try{
        const response = await api.post('http://44.204.4.1:8081/auth/token', {
            username, 
            password
        })
        return response.data;
    }
    catch(error){
        return null;
    }
}

