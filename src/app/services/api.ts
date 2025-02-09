import axios from "axios"
import { baseURL } from "./base"

export const getCategories = async () => {

    const revalidate =  3600/2;

    const response = await fetch(`${baseURL}categories/`, {next: {revalidate: revalidate}});

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Unauthorized');
        }

        throw new Error('Request Failed');
    }
    
    return response.json();
};