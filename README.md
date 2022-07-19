# API Spec

## Create Book

Request :

-   Method : POST
-   Endpoint : `/api/products`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json
{
    "id": "string, unique",
    "name": "string",
    "author": "string",
    "description": "string",
    "price": "integer"
}
```

Response :

```json
{
    "success": "boolean",
    "message": "string",
    "data": {
        "id": "string, unique",
        "name": "string",
        "author": "string",
        "description": "string",
        "price": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

## Get Book

Request :

-   Method : GET
-   Endpoint : `/api/products/{id_product}`
-   Header :
    -   Accept: application/json

Response :

```json
{
    "success": "boolean",
    "message": "string",
    "data": {
        "id": "string, unique",
        "name": "string",
        "author": "string",
        "description": "string",
        "price": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

## Update Book

Request :

-   Method : PUT
-   Endpoint : `/api/products/{id_product}`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json
{
    "name": "string",
    "author": "string",
    "description": "string",
    "price": "integer"
}
```

Response :

```json
{
    "success": "boolean",
    "message": "string",
    "data": {
        "id": "string, unique",
        "name": "string",
        "author": "string",
        "description": "string",
        "price": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

## List Book

Request :

-   Method : GET
-   Endpoint : `/api/products`
-   Header :
    -   Accept: application/json

Response :

```json
{
    "code": "number",
    "status": "string",
    "data": [
        {
            "id": "string, unique",
            "name": "string",
            "author": "string",
            "description": "string",
            "price": "integer",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            "id": "string, unique",
            "name": "string",
            "author": "string",
            "description": "string",
            "price": "integer",
            "createdAt": "date",
            "updatedAt": "date"
        }
    ]
}
```

## Delete Book

Request :

-   Method : DELETE
-   Endpoint : `/api/products/{id_product}`
-   Header :
    -   Accept: application/json

Response :

```json
{
    "status": "boolean",
    "message": "string"
}
```
