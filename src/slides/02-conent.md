
# Client-Server concepts

----

## Server Side Rendering

1. Browser asks for resource
2. Server prepares response based on URI and user data (session)
3. Server returns static content for the browser to render

---

## Server Side Rendering Flow

![Server Side Rendering](./resources/ssr-sequence.png)

---

## Single Page Application

1. Browser asks for application files (shell)
2. Browser renders content
3. Application requests data from the server and re-renders accordingly
4. Interactions with the app can be delegated to the server or remain local

---

## Single Page Application Sequence

![SPA](./resources/singel-page-app.png)

--- 

# HTTP

#### HyperText Transfer Protocol

---

- A stateless protocol originally used to transfer mainly HTML (HyperText Markup Language)
- The server does not retain state between client calls
- Each request consists of:
  - Request line (e.g: `GET /images/logo.png HTTP/1.1`)
  - Header fields (e.g: `Accept: text/html`)
  - Body (optional)

---

## HTTP Request methods

*GET*, *HEAD*, *POST*, *PUT*, *PATCH*, *DELETE*, *CONNECT*, *OPTIONS*, *TRACE*

---

## Example Request

```properties
:authority: www.google.com
:method: GET
:path: /
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7
cookie: SID=rgcMKOnKGY7-zqPae2vI0tJnWWs736Nw5Q41SadjrLbJoyaMrBvmUQA3eHlBe32Kt9nEaA.; __Secure-3PSID=rgcMKOnKGY7-zqPae2vI0tJnWWs736Nw5Q41SadjrLbJoyaM_2jlABXOGkG_74dFn2FIKA.; HSID=AJI4dKzBMoQLb4DJo; SSID=Aeu-C9sd1jeDVYQVQ; APISID=1E5M5BxoUX52O2W0/AUnImg8WpSqiNarbx; SAPISID=6_nUs1kvwBQTAsBY/Azi5ja5b2if7rvCmX; __Secure-HSID=AJI4dKzBMoQLb4DJo; __Secure-SSID=Aeu-C9sd1jeDVYQVQ; __Secure-APISID=1E5M5BxoUX52O2W0/AUnImg8WpSqiNarbx; __Secure-3PAPISID=6_nUs1kvwBQTAsBY/Azi5ja5b2if7rvCmX; SEARCH_SAMESITE=CgQIwY4B; DV=A8Qj_1mhF1CSIBy4P1MyROvASreQ7xbnmu2QZAjeVAEAAICI4yVSgVamsQAAABhFrO4c0K_MOAAAACZXk6Owkfa-FgAAAGtKqN59PbrftLIBQP_f7OZE3e4NrmwA3MVknOrwaoifKxsAggTFn8_lLCIyABUA; NID=193=KXDBNd674Cz9xOQO0EDKrSFcIBam_Nh6jdKP4-5icvrQ8tzChmCcM0zsBOZnp5_NTzADkQIgnrZo2JMMtzR9H6YDfo6KWe_uIWZGHRQJFVslwLwIyxdVDyMD4WJU8hfqYCBE1p52pVdOXN_vhTQPK-7YjaZgevm6BUQpKdZZ3UEi-fEKxEFnqHsh3fPivK5FovueLy4jU6DJnFHh4zjlTQPz9PuRkX1kew; 1P_JAR=2019-12-12-07; SIDCC=AN0-TYuDHprIX08dXKFRagY4C539cRB5gwn7SO7YQjFJaBHhFUn0rQDfbP0eMN_ssUOXsMC-kJc
sec-fetch-mode: navigate
sec-fetch-site: none
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36
x-client-data: CI+2yQEIpLbJAQjBtskBCKmdygEI4qjKAQjqrMoBCJytygEIy67KAQjfrsoBCM6wygEIxLLKAQj3tMoBCPG1ygEYq6TKARj1scoB
```

----

## HTTP Response

- Start Line (e.g `HTTP/1.1 403 Forbidden`)
- Headers (e.g `content-type: text/plain; charset=UTF-8`
- Body (optional)

---

## Example Response

```properties
alt-svc: quic=":443"; ma=2592000; v="46,43",h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000
cache-control: private, max-age=0
content-encoding: br
content-length: 65351
content-type: text/html; charset=UTF-8
date: Thu, 12 Dec 2019 07:47:04 GMT
expires: -1
server: gws
set-cookie: 1P_JAR=2019-12-12-07; expires=Sat, 11-Jan-2020 07:47:04 GMT; path=/; domain=.google.com; SameSite=none
set-cookie: SIDCC=AN0-TYuam1HnfzIHH0nAilLSbLjeIbq1iVuGGv0faL9zmoc_P52ldciXJ8SYK4kqI19RPBfXkZk; expires=Wed, 11-Mar-2020 07:47:04 GMT; path=/; domain=.google.com; priority=high
status: 200
strict-transport-security: max-age=31536000
x-frame-options: SAMEORIGIN
x-xss-protection: 0
```

---

## Cookies

Usually set by the server, are information tokens that are attached to all requests to the originationg domain.

Example usage: Session Cookie

1. The server generates a unique key when a client `first` requests a resource and sends it back as a cookie
2. The client attaches the cookie to every subsequent request so the server can "identify" the individual requests as a single session. 

---

# REST

---

## REST - `Re`presentational `S`tate `T`ransfer

- Allow the access and manipulation of textual resources
- A uniform and predefined set of stateless operations
  - Stateless protocol: *HTTP*
  - Standard operations: *GET*, *HEAD*, *POST*, *PUT*, *PATCH*, *DELETE*, *CONNECT*, *OPTIONS* and *TRACE*
- Resource identification by URI

---

## RESTFul Example

URI: http://myserver.com/api/v1/`user`

- **GET** http://myserver.com/api/v1/`user`
- **GET** http://myserver.com/api/v1/`user`/user-id-123
- **POST** http://myserver.com/api/v1/`user`
- **PUT** http://myserver.com/api/v1/`user`/user-id-123
- **DELETE** http://myserver.com/api/v1/`user`/user-id-123

---

## OpenAPI Specification (AKA Swagger)

#### A framework to describe and use RESTful APIs

- YMAL / JSON definition file
- Generators
  - File -> Code
  - Existing API -> Schema
- Visual usage tool [pet store demo](https://petstore.swagger.io/)
  
---

Example definition

```yaml
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
servers:
  - url: http://petstore.swagger.io/v1
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time (max 100)
          required: false
          schema:
            type: integer
            format: int32
      responses:
        '200':
          description: A paged array of pets
          headers:
            x-next:
              description: A link to the next page of responses
              schema:
                type: string
          content:
            application/json:    
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
    post:
      summary: Create a pet
      operationId: createPets
      tags:
        - pets
      responses:
        '201':
          description: Null response
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
  /pets/{petId}:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      tags:
        - pets
      parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    Pet:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
    Pets:
      type: array
      items:
        $ref: "#/components/schemas/Pet"
    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string


```





