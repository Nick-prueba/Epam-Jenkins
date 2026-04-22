import { bookingService } from "../../api/services";
import { createBookingRequest } from "../../api/models/createBookingRequest";
import { test, expect } from "@playwright/test";

test.describe("Get bookings positive tests", () => {
    test("Get booking with ID", async () => {
        const myBooking = await bookingService.createBooking(createBookingRequest());
        const bookingInfo = await bookingService.getBookingById(myBooking.data.bookingid);
        expect(bookingInfo.data.firstname).toBe("Jim");
    });
});