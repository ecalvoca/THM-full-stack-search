import { getCodeSandboxHost } from "@codesandbox/utils";
import { Endpoint } from "./apiEndpoints.ts";

/**
 * Call the api to fetch data by id
 * @param id
 * @param endpoint
 */
export const fetchById = async (id: string , endpoint: Endpoint ) => {
    const codeSandboxHost = getCodeSandboxHost(3001);
    const API_URL = codeSandboxHost ? `https://${codeSandboxHost}` : 'http://localhost:3001'
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