***********************************
API Endpoint: "api/client/read.php"
***********************************

HTTP Method: GET

Input: id_client (required)

Output:

If the client exists, return JSON object with client information, including ID, name, email, password, national ID (cin), and image.
If the client does not exist, return HTTP 404 with message "No record found."
Example Request:
GET http://example.com/api/client/read.php?id_client=123

Example Response:
{
"body": [{
"id_client": "123",
"nom": "John Doe",
"email": "john.doe@example.com",
"password": "hashed_password",
"cin": "1234567890",
"img": "https://example.com/images/john-doe.png"
}],
"itemCount": 1
}

Security:

No authentication or authorization mechanisms are implemented. Implement security mechanisms such as access control, rate limiting, and encryption to protect the data.

***********************************
API Endpoint: "api/client/login.php"
***********************************
HTTP Method: POST

Input: email (required), password (required)

Output:

If the login credentials are valid, return JSON object with client information, including ID, name, email, national ID (cin), and image, along with an "itemCount" field.
If the login credentials are invalid, return HTTP 404 with message "No record found."
Example Request:
POST http://example.com/api/client/login.php

Request Body:
{
"email": "john.doe@example.com",
"password": "password123"
}

Example Response:
{
"body": [{
"id_client": "123",
"nom": "John Doe",
"email": "john.doe@example.com",
"cin": "1234567890",
"img": "https://example.com/images/john-doe.png"
}],
"itemCount": 1
}

Security:

No authentication or authorization mechanisms are implemented. Implement security mechanisms such as access control, rate limiting, and encryption to protect the data. Input validation and password hashing should also be implemented to prevent attacks.