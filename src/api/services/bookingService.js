import { apiClient } from '../clients/apiClient.js';

export class BookingService {

    basicAuth = "Basic YWRtaW46cGFzc3dvcmQxMjM=";

    getBasicAuth() {
        return this.basicAuth;
    }

    async getAllBookingIds() {
        try {
            const response = await apiClient.get('/booking');
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            throw new Error(error);
        }
    }

    async getBookingById(id) {
        try {
            const response = await apiClient.get(`/booking/${id}`);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            throw new Error(error);
        }
    }

    async createBooking(payload) {
        try {
            const response = await apiClient.post('/booking', payload);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            throw new Error(error);
        }
    }
    
    async updateBooking(id, payload, auth) {
        try {
            return await apiClient.put(`/booking/${id}`, payload, {
                headers: {
                    'Authorization': auth,
                },
            });
        } catch (error) {
            console.log(error.response.data);
            throw new Error(error);
        }
    }

    async bookingPartialUpdate(id, payload, auth) {
        try {
            return await apiClient.patch(`/booking/${id}`, payload, {
                headers: {
                    'Authorization': auth,
                },
            });
        } catch (error) {
            console.log(error.response.data);
            throw new Error(error);
        }
    }

    async deleteBooking(id, auth) {
        try {
            return await apiClient.delete(`/booking/${id}`, {
                headers: {
                    'Authorization': auth,
                },
            });
        } catch (error) {
            console.log(error.response.data);
            throw new Error(error);
        }
    }
        
}