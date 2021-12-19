"# lova-backend"

# API Spec

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

## Delete Product

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
