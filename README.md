# Node.js Auth Starter Project

This is a simple Node.js project template, designed to get you started quickly with server-side development. It includes a basic setup with a minimal HTTP server, ideal for learning Node.js or kickstarting your backend development.

## Features
- **User Registration**: Secure registration with email verification. The user is temporarily stored in Redis and receives a confirmation email with a verification token.
- **JWT Authentication**: Login system using JWT (JSON Web Tokens) for secure session management. The JWT is stored in an HttpOnly cookie to prevent client-side access.
- **Redis Integration**: Redis is used for session management, temporary storage of user data, and blacklisting tokens during logout for added security.
- **Password Hashing**: Passwords are securely hashed using `bcrypt` before storing them in the database.
- **Email Confirmation**: A confirmation link with a JWT token is sent to the user for email verification, ensuring a valid email before user creation.
- **Login & Session Management**: User login with token-based authentication. If the user is already logged in, the existing token is returned.
- **Secure Logout**: JWT token is blacklisted in Redis, and the HttpOnly cookie is cleared during logout to invalidate the session.
- **HttpOnly Cookies**: JWT tokens are stored in HttpOnly cookies to protect them from XSS attacks and ensure server-side authentication.
- **Error Handling**: Detailed error handling for different stages of user registration, login, and token management.
