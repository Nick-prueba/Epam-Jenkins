import { apiClient } from "../clients/apiClient.js";

export class BookingService {
  basicAuth = "Basic YWRtaW46cGFzc3dvcmQxMjM="; //NO poner claves en proyectos a pushear! En todo caso, archivo aparte y al .gitignore

  getBasicAuth() {
    return this.basicAuth;
  }

  async getBookingById(id) {
    try {
      const response = await apiClient.get(`/booking/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch booking by ID.", {
        cause: error,
      });
    }
  }

  async createBooking(payload) {
    try {
      const response = await apiClient.post("/booking", payload);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create booking.", {
        cause: error,
      });
    }
  }

  async updateBooking(id, payload, auth) {
    try {
      return await apiClient.put(`/booking/${id}`, payload, {
        headers: {
          Authorization: auth,
        },
      });
    } catch (error) {
      throw new Error("Failed to update booking.", {
        cause: error,
      });
    }
  }

  async bookingPartialUpdate(id, payload, auth) {
    try {
      return await apiClient.patch(`/booking/${id}`, payload, {
        headers: {
          Authorization: auth,
        },
      });
    } catch (error) {
      throw new Error("Failed to partially update booking.", {
        cause: error,
      });
    }
  }
  async deleteBooking(id, auth) {
    try {
      return await apiClient.delete(`/booking/${id}`, {
        headers: {
          Authorization: auth,
        },
      });
    } catch (error) {
      throw new Error("Failed to delete booking.", {
        cause: error,
      });
    }
  }
}
