import { bookingService } from "../../api/services";
import { createBookingRequest } from "../../api/models/createBookingRequest";
import { test, expect } from "@playwright/test";

test.describe("Positive POST and GET tests", () => {
  let myBooking;

  test.beforeEach(async () => {
    myBooking = await bookingService.createBooking(createBookingRequest());
  });

  test.afterEach(async () => {
    await bookingService.deleteBooking(
      myBooking.bookingid,
      bookingService.getBasicAuth(),
    );
    myBooking = null;
  });

  test("Create booking", async () => {
    expect(myBooking).toHaveProperty("bookingid");
  });
  test("Get booking by ID", async () => {
    const bookingInfo = await bookingService.getBookingById(
      myBooking.bookingid,
    );
    expect(bookingInfo.firstname).toBe("Jim");
  });
});
