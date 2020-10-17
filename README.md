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
## PostgreSQL Schema:
```json
// calendar
    {
      "month": "Number",
      "day": "Number",
      "year": "Number",
    }
// rooms
    {
      "room_id": "Number",
      "max_guest": "Number",
      "price": "Number",
    }
// reservations
    {
      "room_id": "Number",
      "reservation_id": "Number",
      "month": "Number",
      "day": "Number",
      "year": "Number",
      "guests": "Number",
    }
```
## Cassandra Schema:
```json
// calendar
    {
      "month": "int",
      "day": "int",
      "year": "int",
    }
// rooms
    {
      "room_id": "int",
      "max_guest": "int",
      "price": "int",
      "PRIMARY KEY (room_id)"
    }
// reservations
    {
      "reservation_id": "int",
      "room_id": "int",
      "month": "int",
      "day": "int",
      "year": "int",
      "guests": "int",
      "PRIMARY KEY (reservation_id)"
    }
```
## Server API:

### Create a new reservation:
  * POST `/api/room/:roomID/reservations/`

**Path Parameters:**
  * `roomID` Room ID

**Success Status Code:** `201`

**Request Body:** Expects JSON with the following keys.

```json
    [{
      "roomId": "Number",
      "date": "String",
      "month": "Number",
      "day": "Number",
      "guests": "Number",
    }]
```


### GET reservations for a room:
  * GET `/api/room/:roomID/reservations/?month=1`

**Path Parameters:**
  * `month` Month ID
  * `roomID` Room ID

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "month": "Number",
      "day": "Number",
      "year": "Number",
      "guests": "Number",
    }
```

------------------------
### Update a booking
  * PATCH `/api/room/:roomID/reservations/:reservationID
`
**Path Parameters:**
  * `roomID` Room id
  * `reservationID` Reservation ID

**Success Status Code:** `200`

**Request Body**: Expects JSON with the following keys.
```json
    {
      "reservation_id": Number,
      "guests": Number,
    }
```

### Delete a Booking:
  * DELETE  `/api/room/:roomID/reservations/:reservationID`

**Path Parameters:**
  * `reservationID` Reservation ID

**Success Status Code:** `200`

========================
