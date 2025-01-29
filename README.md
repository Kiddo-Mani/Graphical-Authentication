# Graphical Password Authentication

## 📌 Introduction
Graphical Password Authentication is a secure and innovative method for user authentication, replacing traditional text-based passwords with image-based selection. This system enhances security by requiring users to select a sequence of images instead of typing a password.

## 🚀 Features
- **User Registration & Login**: Sign up with an email and set a graphical password.
- **Graphical Password System**: Choose a sequence of images as a password instead of text-based credentials.
- **Two-Factor Authentication (2FA)**: OTP-based verification for enhanced security.
- **Secure Backend API**: Handles user authentication and OTP verification.
- **Interactive UI**: User-friendly interface for easy selection of graphical passwords.

## 📂 Project Structure
```
├── images/              # Image assets for graphical password
├── css/
│   ├── index.css       # Stylesheet for UI
├── js/
│   ├── main.js        # Core JavaScript logic
├── index.html         # Main UI file
├── server/            # Backend (Node.js/Express for handling authentication)
│   ├── server.js     # Main server file
├── README.md          # Project documentation
```

## 🛠️ Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (optional, for storing user credentials)
- **Email API**: Email.js / Nodemailer for OTP verification

## 📖 How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/graphical-password-authentication.git
   ```
2. Navigate to the project directory:
   ```bash
   cd graphical-password-authentication
   ```
3. Install dependencies (if using a backend):
   ```bash
   npm install
   ```
4. Run the server (if applicable):
   ```bash
   node server.js
   ```
5. Open `index.html` in a browser to use the authentication system.

## 📧 OTP Verification
- Upon successful login, an OTP is sent to the registered email.
- The user must enter the OTP to complete authentication.

## 🔒 Security Measures
- **Graphical passwords** are harder to guess than text-based passwords.
- **OTP-based 2FA** adds an extra layer of security.
- **Client-server architecture** ensures secure communication.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📬 Contact
For any inquiries, reach out to: **manikhan1612@gmail.com**

