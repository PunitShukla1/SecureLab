SecureLab: A Comprehensive WAPT Practice Framework
SecureLab is an interactive and hands-on Web Application Penetration Testing (WAPT) framework designed to empower students and cybersecurity enthusiasts. It provides a series of realistic labs tailored to help users learn and practice identifying and exploiting web vulnerabilities.

Features
Comprehensive Labs: Explore labs including Command Injection, Cross-Site Request Forgery (CSRF), File Upload Vulnerability, IDOR, Open Redirect, and Cross-Site Scripting (XSS - Reflected and Stored).
Professional Design: A user-friendly interface with a responsive layout to enhance learning.
Self-Contained Environment: Each lab is modular, requiring no external dependencies such as databases.
Real-World Scenarios: Labs are modeled on real-world vulnerability scenarios for practical learning.
Folder Structure
plaintext
Copy code
CTF Project/
│
└── web challenges/
    └── web labs/
        ├── index.html            # Main landing page with links to all labs
        ├── styles.css            # Global styles
        ├── scripts.js            # JavaScript for interactions
        └── labs/                 # Folder containing all labs
            ├── Command Injection/
            │   ├── index.html
            │   ├── scripts.js
            │   └── styles.css
            ├── CSRF/
            │   ├── Client side/
            │   │   ├── index.html
            │   │   ├── scripts.js
            │   │   └── styles.css
            │   └── Server side/
            │       ├── index.html
            │       ├── script.js
            │       └── styles.css
            ├── File Upload Vulnerability/
            │   ├── index.html
            │   ├── script.js
            │   └── styles.css
            ├── IDOR/
            │   ├── index.html
            │   ├── scripts.js
            │   └── styles.css
            ├── Open Redirect/
            │   ├── index.html
            │   ├── scripts.js
            │   └── styles.css
            ├── XSS/
            │   ├── Reflected/
            │   │   ├── index.html
            │   │   ├── scripts.js
            │   │   └── styles.css
            │   └── Stored/
            │       ├── index.html
            │       ├── scripts.js
            │       └── styles.css
How to Use
Clone the Repository

bash
Copy code
git clone https://github.com/<your-github-username>/SecureLab.git
cd "CTF Project/web challenges/web labs/"
Open the Main Page

Open index.html in your browser to access the central hub.
Navigate through the listed labs and select one to start.
Explore and Practice

Each lab contains detailed instructions and realistic scenarios.
Solve the labs and hone your penetration testing skills.
Labs Included
Command Injection
Cross-Site Request Forgery (CSRF)
Client Side
Server Side
File Upload Vulnerability
IDOR
Open Redirect
Cross-Site Scripting (XSS)
Reflected XSS
Stored XSS
Contributing
Contributions to SecureLab are welcome! Whether you want to add new labs, improve the UI, or enhance documentation, feel free to fork the repository and create pull requests.

License
This project is licensed under the MIT License. For more details, see the LICENSE file.

Acknowledgements
Inspired by real-world scenarios to provide practical learning.
Designed for students and professionals in cybersecurity.
