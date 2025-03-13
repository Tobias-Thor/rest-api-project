# Express.js REST API - Documentation

## English

### Overview
This is a simple REST API built with Express.js. It provides basic routes for handling user-related requests and general information. The API is structured using the Model-View-Controller (MVC) pattern.

### Features
- **Root Route (`/`)**: Returns a welcome message.
- **User Routes (`/user/:id`)**: Returns user information based on the provided user ID.
- **Data Route (`/data`)**: Accepts POST requests and responds with a confirmation message.
- **About Route (`/about`)**: Provides general information about the server.

### Installation
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository:
   ```sh
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```sh
   cd your-project-folder
   ```
4. Install dependencies:
   ```sh
   npm install
   ```

### Usage
1. Start the server:
   ```sh
   node server.js
   ```
2. The API will be running at:
   ```
http://localhost:3000
   ```

### API Endpoints

#### **General Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Welcome message |
| GET    | `/about` | Returns server information |
| POST   | `/data` | Receives and responds to a POST request |

#### **User Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/user/:id` | Returns user information based on the provided user ID |

### Example Requests

**GET `/`**
```sh
curl -X GET http://localhost:3000/
```
_Response:_
```json
{
  "message": "Welcome to this Express server!"
}
```

**GET `/user/:id`**
```sh
curl -X GET http://localhost:3000/user/123
```
_Response:_
```json
{
  "userId": "123"
}
```

**POST `/data`**
```sh
curl -X POST http://localhost:3000/data -H "Content-Type: application/json" -d '{"message": "Hello"}'
```
_Response:_
```json
{
  "message": "Your POST request has been received!"
}
```

---

## **Svenska**

### Översikt
Detta är ett enkelt REST API byggt med Express.js. Det tillhandahåller grundläggande routes för att hantera användarrelaterade förfrågningar och allmän information.

### Installation
1. Se till att du har [Node.js](https://nodejs.org/) installerat.
2. Klona detta repository:
   ```sh
   git clone <repo_url>
   ```
3. Navigera till projektmappen:
   ```sh
   cd your-project-directory
   ```
4. Installera beroenden:
   ```sh
   npm install
   ```

### Användning
1. Starta servern:
   ```sh
   npm start
   ```
2. API:et kommer att köras på:  `http://localhost:3000/`

### API-endpoints

#### **Allmänna routes**
| Metod | Endpoint | Beskrivning |
|--------|----------|--------------|
| `GET` | `/` | Välkomstmeddelande |
| `GET` | `/about` | Returnerar serverinformation |
| `POST` | `/data` | Tar emot och svarar på en POST-förfrågan |

#### **Användar-routes**
| Metod | Endpoint | Beskrivning |
|--------|----------|--------------|
| `GET` | `/user/:id` | Returnerar information om en användare baserat på ID |

### Exempel på anrop

**GET `/`**
```sh
curl -X GET http://localhost:3000/
```
_Response:_
```json
{
  "message": "Welcome to this Express server!"
}
```

**GET `/user/:id`**
```sh
curl -X GET http://localhost:3000/user/123
```
_Response:_
```json
{
  "userId": "123"
}
```

**POST `/data`**
```sh
curl -X POST http://localhost:3000/data -H "Content-Type: application/json" -d '{"message": "Hello"}'
```
_Response:_
```json
{
  "message": "Your POST request has been received!"
}
```


