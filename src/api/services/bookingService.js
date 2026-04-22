import { apiClient } from '../clients/apiClient.js';

export class BookingService {

    basicAuth = "Basic YWRtaW46cGFzc3dvcmQxMjM=";

    async getAllBookingIds() {
        try {
            return await apiClient.get('/booking');
        } catch (error) {
            throw new Error(error);
        }
    }

    async getBookingById(id) {
        try {
            return await apiClient.get(`/booking/${id}`);
        } catch (error) {
            throw new Error(error);
        }
    }

    async createBooking(payload) {
        try {
            return await apiClient.post('/booking', payload);
        } catch (error) {
            console.log(error.response.data);
            throw new Error(error);
        }
    }
    
    async updateBooking(payload, auth) {
        try {
            return await apiClient.put('/booking', payload, {
                headers: {
                    'Authorization': auth,
                },
            });
        } catch (error) {
            throw new Error(error, "Update booking failed.");
        }
    }

    async deleteBooking(payload, auth) {
        try {
            return await apiClient.delete('/booking', payload, {
                headers: {
                    'Authorization': auth,
                },
            });
        } catch (error) {
            throw new Error(error, "Delete booking failed.");
        }
    }
        
}