import { getCodeSandboxHost } from "@codesandbox/utils";
import { Endpoint } from "./apiEndpoints.ts";

const codeSandboxHost = getCodeSandboxHost(3001);
const API_URL = codeSandboxHost ? `https://${codeSandboxHost}` : 'http://localhost:3001'

/**
 * Get data by id
 * @param id
 * @param endpoint
 */
export const fetchById = async (id: string , endpoint: Endpoint ) => {

    try {
        const response = await fetch(`${API_URL}/${endpoint}/${id}`);
        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.log(`Error fetching data: ${error}`);
        throw error;
    }
}

/**
 * Get data by searchTerm
 * @param $searchTerm
 * @param endpoint
 */
export const fetchBySearchTerm = async ($searchTerm: string, endpoint: Endpoint ) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}?searchTerm=${$searchTerm}`);
        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.log(`Error fetching data: ${error}`);
        throw error;
    }

}