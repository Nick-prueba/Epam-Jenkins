import { apiClient } from '../clients/apiClient.js';

export class AuthenticateUser {
    async generateToken(payload) {
        const response = await apiClient.post('/auth', payload);
        return response.data.token;
    }
}