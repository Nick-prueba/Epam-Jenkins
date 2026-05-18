import { bookingService, credentials } from "../../src/api/services/index.js";
import { createBookingRequest } from "../../src/api/models/createBookingRequest.js";
import { test, expect } from "@playwright/test";

test.describe("Positive PUT and PATCH tests", () => {
  let myBooking;
  let bookingInfo;

  test.beforeEach(async () => {
    myBooking = await bookingService.createBooking(createBookingRequest());
    bookingInfo = await bookingService.getBookingById(myBooking.bookingid);
  });

  test.afterEach(async () => {
    await bookingService.deleteBooking(
      myBooking.bookingid,
      credentials
    );
    myBooking = null;
    bookingInfo = null;
  });

  test("Should update booking", async () => {
    expect(bookingInfo.totalprice).toBe(111);

    await bookingService.updateBooking(
      myBooking.bookingid,
      {
        firstname: "Ana",
        lastname: "Brown",
        totalprice: 200,
        depositpaid: false,
        bookingdates: {
          checkin: "2010-01-01",
          checkout: "2011-01-01",
        },
        additionalneeds: "None",
      },
      credentials
    );

    bookingInfo = await bookingService.getBookingById(myBooking.bookingid);
    expect(bookingInfo.totalprice).toBe(200);
  });
  test("Should update booking partially", async () => {
    expect(bookingInfo.firstname).toBe("Jim");
    await bookingService.bookingPartialUpdate(
      myBooking.bookingid,
      { firstname: "Ana" },
      credentials
    );
    bookingInfo = await bookingService.getBookingById(myBooking.bookingid);
    expect(bookingInfo.firstname).toBe("Ana");
  });

  test.describe("Negative PUT tests", () => {
    test("Should not allow update with incomplete payload", async () => {
      await expect(
        bookingService.updateBooking(
          myBooking.bookingid,
          { firstname: "Ana" },
          credentials
        ),
      ).rejects.toThrow();
    });
  });
});
