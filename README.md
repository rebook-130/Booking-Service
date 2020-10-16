# Rebook

>This is the booking service for a vacation rental listing webapp.

## Related Projects
  - https://github.com/rebook-130
## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

- Node 6.13.0

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Development
```
npm run build:dev
npm run seed
npm start
```
## Database Schema
```
  roomId: String,
  date: String,
  month: Number,
  day: Number,
  price: Number,
  maxGuest: Number,
  cleaningFee: Number,
  taxes: Number,
  rating: Number,
  booked: Boolean,
```
## Server API

### Create an entry in the room database
  * POST '/api/room/calendar

**Success Status Code:** `201`

**Request Body:** Expects JSON with the following keys.

```json
    {
      "roomId": Number,
      "date": String,
      "month": Number,
      "day": Number,
      "price": Number,
      "maxGuest": Number,
      "cleaningFee": Number,
      "taxes": Number,
      "rating": Number,
      "booked": Boolean,
    }
```


### GET all data for month
  * GET '/api/room/calendar?month=Number
  * '/api/room/calendar/9

**Path Parameters:**
  * `month` month id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "roomId": Number,
      "date": String,
      "month": Number,
      "day": Number,
      "price": Number,
      "maxGuest": Number,
      "cleaningFee": Number,
      "taxes": Number,
      "rating": Number,
      "booked":true,
    }
```

------------------------
### Update a booking
  * PATCH `/api/room/calendar`
Specify Room id in Route
**Path Parameters:**
  * `month` month id

**Success Status Code:** `200`


```json
    {
      "month": Number,
      "day": Number,
      "booked": Boolean,
    }
```

### Delete a Booking
  * DELETE  '/api/room/calendar?month=9`

**Path Parameters:**
  * `month` month id

**Success Status Code:** `200`




