import { bookingService } from "../../src/api/services/index.js";
import { createBookingRequest } from "../../src/api/models/createBookingRequest.js";
import { test, expect } from "@playwright/test";

test.describe("Positive DELETE tests", () => {
  let myBooking;

  test.beforeEach(async () => {
    myBooking = await bookingService.createBooking(createBookingRequest());
  });

  test.afterEach(async () => {
    myBooking = null;
  });

  test("Should delete booking", async () => {
    await bookingService.deleteBooking(
      myBooking.bookingid,
      bookingService.getBasicAuth(),
    );
    await expect(
      bookingService.getBookingById(myBooking.bookingid),
    ).rejects.toThrow();
  });
});
