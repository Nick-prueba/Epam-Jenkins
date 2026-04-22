import { bookingService } from "../../api/services";
import { createBookingRequest } from "../../api/models/createBookingRequest";
import { test, expect } from "@playwright/test";

test.describe("Positive PUT and PATCH tests", () => {

    let myBooking;
    let bookingInfo;

    test.beforeEach(async () => {
        myBooking = await bookingService.createBooking(createBookingRequest());
        bookingInfo = await bookingService.getBookingById(myBooking.bookingid);
    });

    test.afterEach(async () => {
        await bookingService.deleteBooking(myBooking.bookingid, bookingService.basicAuth);
        myBooking = null;
        bookingInfo= null;
    });

    test("Should update booking", async () => {
        expect(bookingInfo.totalprice).toBe(111);

        await bookingService.updateBooking(myBooking.bookingid, {
            "firstname" : "Ana",
            "lastname" : "Brown",
            "totalprice" : 200,
            "depositpaid" : false,
            "bookingdates" : {
                "checkin" : "2010-01-01",
                "checkout" : "2011-01-01"
            },
            "additionalneeds" : "None"
        }, bookingService.getBasicAuth());

        bookingInfo = await bookingService.getBookingById(myBooking.bookingid);
        expect(bookingInfo.totalprice).toBe(200);
    });
    test("Should update booking partially", async () => {
        expect(bookingInfo.firstname).toBe("Jim");
        await bookingService.bookingPartialUpdate(myBooking.bookingid, { firstname: "Ana" }, bookingService.getBasicAuth());
        bookingInfo = await bookingService.getBookingById(myBooking.bookingid);
        expect(bookingInfo.firstname).toBe("Ana");
    });

});