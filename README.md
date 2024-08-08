# CodeAlpha_Language_Translation_Tool



## Overview

This project is a language translation tool that uses Node.js with Express for the backend and integrates with the Google Cloud Translation API. The frontend is built with HTML, CSS, and JavaScript to provide a user interface for interacting with the translation and language detection features.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Web application framework for Node.js.
- **Google Cloud Translation API**: Service for translating text and detecting languages.
- **dotenv**: Loads environment variables from a `.env` file.
- **cors**: Middleware for handling Cross-Origin Resource Sharing in Express.

## Setup

### Prerequisites

- Node.js and npm installed.
- Google Cloud account with the Translation API enabled.
- Service account key file from Google Cloud.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/translation-tool.git
   cd translation-tool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```plaintext
   CREDENTIALS={
     "type": "service_account",
     "project_id": "your-project-id",
     "private_key_id": "your-private-key-id",
     "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n",
     "client_email": "your-service-account-email",
     "client_id": "your-client-id",
     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
     "token_uri": "https://oauth2.googleapis.com/token",
     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account-email"
   }
   ```

   Replace placeholders with the actual values from your Google Cloud service account JSON file.

### Running the Server

Start the server:

```bash
node server.js
```

The server will be running on `http://localhost:3000`.

### Endpoints

- **GET /**: Serves the frontend HTML file.
- **POST /detect-language**: Detects the language of the provided text.

  **Request**:
  ```json
  {
    "text": "Hello, world!"
  }
  ```

  **Response**:
  ```json
  {
    "language": "en"
  }
  ```

- **POST /translate-text**: Translates the provided text into the target language.

  **Request**:
  ```json
  {
    "text": "Hello, world!",
    "targetLanguage": "es"
  }
  ```

  **Response**:
  ```json
  {
    "translatedText": "Hola, mundo!"
  }
  ```

## Frontend

The frontend files are located in the `frontend` directory. You can modify the HTML, CSS, and JavaScript files to customize the user interface.

## Error Handling

Errors in API requests are handled and returned with a 500 status code and an error message. Ensure proper handling on the frontend to provide a good user experience.

## Contributing

Feel free to open issues or submit pull requests if you have improvements or suggestions for this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

