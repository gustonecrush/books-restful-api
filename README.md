# API Spec

## Create Book

Request :

-   Method : POST
-   Endpoint : `/api/books`
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
-   Endpoint : `/api/books/{id}`
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
-   Endpoint : `/api/books/{id}`
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
-   Endpoint : `/api/books`
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
-   Endpoint : `/api/books/{id}`
-   Header :
    -   Accept: application/json

Response :

```json
{
    "status": "boolean",
    "message": "string"
}
```
