Ollama Web Interface

This repository contains a web interface for interacting with Ollama, a service running locally on your Windows machine. The project leverages Express.js as the web framework and integrates components from the NativeUI library along with vanilla JavaScript for a modern, modular UI design.

Features

Customizable Interface: Built with the NativeUI component library for modular, reusable UI elements.

Express.js Backend: A lightweight and efficient backend for routing and handling API calls.

Live Chat Interaction: Users can send messages and view responses directly in the web interface.

Custom Components: Includes a custom-built nui-textarea component for text input.

Prerequisites

Before starting, ensure you have the following installed:

Node.js (v14 or later): Download Node.js

Git (optional, for cloning the repository): Download Git

Installation

Clone the repository:

git clone https://github.com/chrlzs/ollama-web-interface.git
cd ollama-web-interface

Install dependencies:

npm install

Ensure your NativeUI library is available in the public folder. If it’s not, move your NativeUI folder to public/NativeUI.

Start the server:

npm start

Open your browser and navigate to:

http://localhost:3000

Project Structure

ollama-web-interface/
├── public/                # Static assets served by Express
│   ├── css/               # Stylesheets
│   ├── js/                # Frontend JavaScript (e.g., app.js)
│   ├── NativeUI/          # NativeUI library components
│   └── index.html         # Main HTML file
├── server.js              # Express.js server
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── ...                    # Other config files (e.g., .gitignore)

Usage

Sending a Message

Open the web interface in your browser.

Type your message into the nui-textarea input field.

Click the Send button to send your message to Ollama.

View the response displayed below the text area.

Custom Components

nui-textarea

A custom NativeUI component for handling text input. It supports placeholder text and is styled for seamless integration with the web interface.

Example Usage

<nui-textarea placeholder="Type your message..."></nui-textarea>

Other NativeUI Components

This project also includes:

nui-button: For actions like sending messages.

nui-modal: To display additional information or errors.

And more...

Troubleshooting

MIME Type Errors

If you encounter MIME type errors (e.g., "Refused to apply style"), ensure that:

All NativeUI files are correctly placed in the public/NativeUI directory.

The server is running and properly serving static assets.

Module Import Errors

Ensure the <script> tags for JavaScript files in index.html include the attribute type="module".

Contributing

Contributions are welcome! Feel free to:

Open issues for bugs or feature requests.

Submit pull requests to improve the codebase.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

NativeUI: For providing modular UI components.

Express.js: For the lightweight and efficient backend framework.
