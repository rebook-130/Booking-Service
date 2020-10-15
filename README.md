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
  * POST '/api/calendar?month=9`

**Path Parameters:**
  * `month` month number

**Success Status Code:** `200`

**Post Data:** JSON

```json
    {
    "_id":"5f87373027eccd2a628d7099",
    "roomId":"2",
    "date":"Fri Oct 02 2020 07:00:00 GMT-0700 (Pacific Daylight Time)",
    "month":9,
    "day":2,
    "price":121,
    "maxGuest":3,
    "cleaningFee":40,
    "taxes":50,
    "rating":4,
    "booked":true,
    "__v":0
    }
```

### Read all date information for a room
  * GET '/api/calendar?month=9`

**Path Parameters:**
  * `month` month number

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
    "_id":"5f87373027eccd2a628d7099",
    "roomId":"2",
    "date":"Fri Oct 02 2020 07:00:00 GMT-0700 (Pacific Daylight Time)",
    "month":9,
    "day":2,
    "price":121,
    "maxGuest":3,
    "cleaningFee":40,
    "taxes":50,
    "rating":4,
    "booked":true,
    "__v":0
    }
```
