# API Specification

## Create Provinsi

Request :

- Method : POST
- Endpoint : `/api/lova/provinsi`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
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

## Get Provinsi

Request :

- Method : GET
- Endpoint : `/api/lova/{id_provinsi}`
- Header :
  - Accept: application/json

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

## Update Provinsi

Request :

- Method : PUT
- Endpoint : `/api/lova/{id_provinsi}`
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

## List Provinsi

Request :

- Method : GET
- Endpoint : `/api/lova/provinsi`
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

## Delete Provinsi

Request :

- Method : DELETE
- Endpoint : `/api/lova/provinsi/{id_provinsi}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## Create Kota/Kabupaten

Request :

- Method : POST
- Endpoint : `/api/lova/provinsi/kota-kab`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id-kota": "string, unique",
  "id-prov": "string",
  "name": "string"
}
```

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

## Get Kota/Kabupaten

Request :

- Method : GET
- Endpoint : `/api/lova/{name_provinsi}/{id_kota}`
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
