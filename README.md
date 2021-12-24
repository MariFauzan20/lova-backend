# API Specification

## Create Province

Request :

- Method : POST
- Endpoint : `/api/provinces`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "province_name": "string"
}
```

Response :

```json
{
    "province_name": "string",
    "createdAt": "date",
    "updatedAt": "date",
    "id": "string, unique"
}
```

## Get All Province

Request :

- Method : GET
- Endpoint : `/api/provinces`
- Header :
  - Accept: application/json

Response :

```json
{
  "province_name": "string",
  "createdAt": "date",
  "updatedAt": "date",
  "id": "string, unique"
}
```

## Get Province By Id

Request :

- Method : GET
- Endpoint : `/api/provinces/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "province_name": "string",
  "createdAt": "date",
  "updatedAt": "date",
  "id": "string, unique"
}
```

## Update Province By Id

Request :

- Method : PUT
- Endpoint : `/api/provinces/{id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "province_name": "string"
}
```

Response :

```json
{
  "message": "string"
}
```

## Delete Province By Id

Request :

- Method : DELETE
- Endpoint : `/api/province/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "string"
}
```

## Create City

Request :

- Method : POST
- Endpoint : `/api/cities`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "province": "string, unique",
  "city_name": "string"
}
```

Response :

```json
{
    "province": "string, unique",
    "city_name": "string",
    "createdAt": "date",
    "updatedAt": "date"
}
```

## Get All City

Request :

- Method : GET
- Endpoint : `/api/cities`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id-kota": "string, unique",
    "id-prov": "string",
    "name": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Kota/Kabupaten

Request :

- Method : PUT
- Endpoint : `/api/lova/{name_provinsi}/{id_kota}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Kota/Kabupaten

Request :

- Method : GET
- Endpoint : `/api/lova/{name_provinsi}`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "string, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Kota/Kabupaten

Request :

- Method : DELETE
- Endpoint : `/api/lova/{name_provinsi}/{id_kota}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

# Lokasi Vaksin

## Create Lokasi Vaksin

Request :

- Method : POST
- Endpoint : `/api/lova/provinsi/kota-kab`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id-lokasi": "string, unique",
  "id-kota": "string",
  "title": "string",
  "date-start": "date",
  "date-end": "date",
  "time-start": "date",
  "time-end": "date",
  "registration": "string",
  "agerange": "string",
  "decription": "string",
  "link": "string",
  "address": "string",
  "is-free": "boolean",
  "is-valid": "boolean",
  "createdAt": "date",
  "updatedAt": "date"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id-lokasi": "string, unique",
    "id-kota": "string",
    "title": "string",
    "date-start": "date",
    "date-end": "date",
    "time-start": "date",
    "time-end": "date",
    "registration": "string",
    "agerange": "string",
    "decription": "string",
    "link": "string",
    "address": "string",
    "is-free": "boolean",
    "is-valid": "boolean",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Lokasi

Request :

- Method : GET
- Endpoint : `/api/lova/{name_provinsi}/{id_kota}/{id_lokasi}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id-kota": "string, unique",
    "id-lokasi": "string, unique",
    "title": "string",
    "date-start": "date",
    "date-end": "date",
    "time-start": "date",
    "time-end": "date",
    "registration": "string",
    "agerange": "string",
    "decription": "string",
    "link": "string",
    "address": "string",
    "is-free": "boolean",
    "is-valid": "boolean",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Lokasi

Request :

- Method : PUT
- Endpoint : `/api/lova/{name_provinsi}/{id_kota}/{id_lokasi}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "title": "string",
  "date-start": "date",
  "date-end": "date",
  "time-start": "date",
  "time-end": "date",
  "registration": "string",
  "agerange": "string",
  "decription": "string",
  "link": "string",
  "address": "string",
  "is-free": "boolean",
  "is-valid": "boolean"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id-lokasi": "string, unique",
    "id-kota": "string",
    "title": "string",
    "date-start": "date",
    "date-end": "date",
    "time-start": "date",
    "time-end": "date",
    "registration": "string",
    "agerange": "string",
    "decription": "string",
    "link": "string",
    "address": "string",
    "is-free": "boolean",
    "is-valid": "boolean",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Lokasi

Request :

- Method : GET
- Endpoint : `/api/lova/{name_provinsi}/{name_kota}`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id-lokasi": "string, unique",
      "title": "string",
      "date-start": "date",
      "date-end": "date",
      "time-start": "date",
      "time-end": "date",
      "registration": "string",
      "agerange": "string",
      "decription": "string",
      "link": "string",
      "address": "string",
      "is-free": "boolean",
      "is-valid": "boolean",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id-lokasi": "string, unique",
      "title": "string",
      "date-start": "date",
      "date-end": "date",
      "time-start": "date",
      "time-end": "date",
      "registration": "string",
      "agerange": "string",
      "decription": "string",
      "link": "string",
      "address": "string",
      "is-free": "boolean",
      "is-valid": "boolean",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Lokasi

Request :

- Method : DELETE
- Endpoint : `/api/lova/{name_provinsi}/{id_kota}/{id_lokasi}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```
