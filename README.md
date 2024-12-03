SecureLab: WAPT Practice Framework
SecureLab is an interactive framework designed for students and cybersecurity enthusiasts to practice and learn Web Application Penetration Testing (WAPT) in a controlled environment.

Features:
Interactive Labs: Practice with real-world vulnerabilities like Command Injection, CSRF, File Upload, IDOR, Open Redirect, and XSS (Reflected/Stored).
Modular Design: Labs are standalone, with no external dependencies.
User-Friendly: Responsive, clean interface for an intuitive learning experience.
Folder Structure:
bash
Copy code
CTF Project/
 └── web challenges/
     └── web labs/
         ├── index.html    # Main landing page
         ├── styles.css    # Global styles
         ├── scripts.js    # JavaScript for interactions
         └── labs/         # Lab folders
             ├── Command Injection/
             ├── CSRF/
             ├── File Upload Vulnerability/
             ├── IDOR/
             ├── Open Redirect/
             └── XSS/
How to Use:
Clone the Repository:

bash
Copy code
git clone https://github.com/PunitShukla1/SecureLab.git
cd "CTF Project/web challenges/web labs/"
Launch the Labs: Open index.html in your browser to access and solve labs.

Explore Vulnerabilities: Follow the instructions within each lab to learn and practice penetration testing techniques.

Included Labs:
Command Injection
CSRF (Client/Server-side)
File Upload Vulnerability
IDOR
Open Redirect
XSS (Reflected & Stored)
Contributing:
Feel free to fork the repo and submit pull requests for new lab additions or improvements.

License:
Licensed under the MIT License.

