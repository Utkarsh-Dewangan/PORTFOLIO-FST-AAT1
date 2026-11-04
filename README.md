# Utkarsh Dewangan | Personal Portfolio & DevOps Engineering Platform
> **Alternative Assessment Test - 1 (AAT-1) Project Submission**  
> **Course:** Full Stack Track (FST) | **Institution:** New Horizon College of Engineering (NHCE), Bengaluru  
> **Affiliation:** Visvesvaraya Technological University (VTU) | **Academic Year:** 2025–2026

---

## 1. Project Title
**Deterministic Cloud & DevOps Engineering Portfolio Platform**  
*Interactive Web Portfolio, Simulated Linux CLI Sandbox & Multi-Cloud Architecture Showcase*

---

## 2. Project Overview
This repository hosts the source code and documentation for the professional portfolio website of **Utkarsh Dewangan** (USN: `1NH23CS282`), a Computer Science & Engineering undergraduate at New Horizon College of Engineering (NHCE), Bengaluru. 

The application is engineered to showcase authentic technical proficiencies across **DevOps automation, multi-cloud architecture (Oracle Cloud Infrastructure & AWS), deterministic Linux systems administration, and machine learning cyber threat analysis**. Unlike generic boilerplate templates, this platform features a custom interactive **DevOps CLI Sandbox** that simulates a POSIX Bash terminal, modular architecture popups for featured engineering projects, real-time client-side form validation with accessible error recovery, and an integrated certificate preview modal for industry credentials.

---

## 3. Problem Statement
In the competitive landscape of software engineering and cloud infrastructure, traditional static resumes often fail to:
1. **Convey Practical Competence:** Static PDF resumes provide text descriptions but cannot demonstrate real-time interaction with command-line environments, automation pipelines, or system diagnostics.
2. **Offer Transparent Verification:** Academic recruiters and hiring managers struggle to verify credentials, architecture flows, and repository code without navigating through disjointed external platforms.
3. **Ensure Responsive Accessibility:** Many portfolio websites suffer from layout breakage on mobile devices, horizontal scrolling anomalies, unvalidated web forms, and reliance on bloated third-party frameworks.

This project addresses these shortcomings by delivering a **zero-dependency, accessible, highly responsive web application** that balances modern cyber-minimalist UI/UX design with practical engineering tools (such as an embedded terminal sandbox and interactive pipeline specifications).

---

## 4. Project Objectives
The primary technical and academic objectives of this project include:
- **Zero-Dependency Architecture:** Build a lightweight, high-performance web platform using semantic HTML5, modern modular CSS3, and vanilla ES6+ JavaScript without third-party frameworks.
- **Section 8 Compliance:** Prioritize and comprehensively present the candidate's professional trajectory, IEEE research internship, and published Indian patent (`IN202641005295 A`).
- **Standardized Skills Categorization:** Structure core technical proficiencies into the six academic pillars: *Programming Languages, Cloud Computing, DevOps, Operating Systems, Networking, and Developer Tools*.
- **Interactive Terminal Sandbox:** Implement a bug-free, simulated Linux DevOps terminal with command history, autocomplete shortcuts, process triage simulation, and clear distinction between simulated routines and system data.
- **Accessible & Responsive UX:** Ensure full visual and functional fidelity across desktop monitors, laptops, tablets, Android smartphones, and iPhones (tested down to 320px width) without horizontal overflow.
- **Verified Credential Delivery:** Provide seamless certificate viewing via embedded modal previews and clean, URL-safe asset paths for official credentials (OCI Architect Associate, Scaler DBMS, NPTEL Cloud, IEEE VIBETHON, and IISc Symposium).
- **AAT-1 Guideline Adherence:** Fulfill all submission requirements mandated by NHCE VTU for the practical project, GitHub documentation, and hard-copy report format.

---

## 5. Features
- **Dynamic Glassmorphic UI:** Modern dark-mode aesthetic with ambient mesh background lighting, glowing accent states, and high contrast typography (WCAG 2.1 AA compliant).
- **Interactive DevOps CLI Sandbox:**
  - Functional command processor supporting `help`, `skills`, `projects`, `certs`, `patent`, `deploy`, `whoami`, `contact`, `ls`, `cat`, `uptime`, `uname`, `pwd`, `date`, and `clear`.
  - Up/Down arrow command history navigation without event listener memory leaks.
  - Quick-action command chips with instant execution.
- **Project Filtering System:**
  - Category filtering across `All`, `Completed`, `In Progress`, `Research / Internship`, and `Planned`.
  - Architecture pipeline callouts detailing step-by-step CI/CD and data flows.
  - Interactive Project Architecture Modal with technical highlights and direct GitHub repository links.
- **Certificate Preview Modal:**
  - In-browser interactive preview for both PDF documents and image certificates.
  - Metadata verification displaying issuing organizations, credential IDs, and direct download buttons.
- **Validated Contact Module:**
  - Real-time client-side field validation for Name, Email, Subject, and Message.
  - Specific inline error indicators for malformed inputs.
  - Pre-filled `mailto:` client fallback generator ensuring messages are never lost even without an active SMTP backend.
- **Professional Timeline:**
  - Chronological representation of the **IEEE IamPro 2026 Internship** (NIDS classification of 2.8M+ connection flows).
  - Documentation of the **Published Indian Patent** (Application No. `202641005295 A`) for renewable fog and energy harvesting.
- **Smooth Navigation & ScrollSpy:**
  - Precision scroll tracking with fixed navbar offset compensation.
  - Mobile drawer menu with animated hamburger toggle and outside-click dismiss.

---

## 6. Technologies Used

### Frontend Architecture
- **HTML5:** Semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Custom CSS variables, CSS Grid, Flexbox, glassmorphic backdrop filters, fluid typography, and responsive media queries.
- **JavaScript (ES6+):** Pure vanilla JavaScript for state management, terminal processing, DOM manipulation, modal dialogs, and regex form validation.

### Design System & Typography
- **Primary Fonts:** *Plus Jakarta Sans* (Headings), *Inter* (Body copy), *JetBrains Mono* (Terminal & Code identifiers).
- **Color Palette:** Cyber Dark (`#070a13`), Cyan (`#06b6d4`), Indigo (`#6366f1`), Emerald (`#10b981`), Amber (`#f59e0b`), Slate (`#94a3b8`).

### Tools & Development Environment
- **Version Control:** Git & GitHub
- **Local Development Server:** Python HTTP Server (`http.server`)
- **Code Quality:** W3C HTML5 Validator, CSS Linting, ESLint guidelines

---

## 7. Project Folder Structure
```text
Portfolio/
│
├── index.html                               # Main Application Entry Point
├── README.md                                # GitHub Repository Documentation
├── .gitignore                               # Git Ignore Specification
├── AAT1_REPORT.md                           # Hard-Copy College Report Template
│
├── css/
│   └── style.css                            # Design System, Glassmorphic Styles & Media Queries
│
├── js/
│   └── script.js                            # Interactivity, Terminal Sandbox & Form Validation
│
├── assets/
│   ├── images/
│   │   └── profile_pic.jpg                  # Candidate Profile Picture
│   ├── certificates/
│   │   ├── oci-architect-associate.pdf      # OCI Certified Architect Associate
│   │   ├── oci-foundations-associate.pdf    # OCI Foundations Associate
│   │   ├── scaler-dbms.jpg                  # Scaler Topics DBMS Course Mastery
│   │   ├── nptel-cloud-computing.pdf        # NPTEL Cloud Computing (IIT)
│   │   ├── vibethon-runner-up.pdf           # IEEE VIBETHON Runner-Up Award
│   │   ├── iisc-data-symposium.pdf          # IISc Symposium on Data for Public Good
│   │   ├── quantumx-25-hackathon.pdf        # Quantum Hacks National Hackathon (1NH23CS282)
│   │   └── quantumx-24-datascience.pdf      # QuantumX-24 Data Science Completion
│   └── resume/
│       └── Utkarsh_Dewangan_Resume.pdf      # Complete Academic & Professional Resume
│
└── screenshots/
    ├── README.md                            # Screenshot Inventory & Guide
    ├── homepage.png                         # Hero section, profile card & metrics
    ├── about.png                            # About section, philosophy & patent callout
    ├── skills.png                           # 6 Categorized technical skill pillars
    ├── projects.png                         # Featured engineering projects & status filters
    ├── certifications.png                   # Verified industry credentials & preview modal
    └── contact.png                          # Validated contact form & direct reach details
```

---

## 8. Installation Instructions
No complex runtimes (Node.js, npm, webpack, or Docker) are strictly required to run or edit this portfolio.

### Prerequisites
- Modern Web Browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
- Python 3.x (optional, recommended for running a local HTTP server) or any static file server.
- Git (for repository cloning and version control).

### Step-by-Step Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/utkarshdewangan/portfolio-devops-aat1.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd portfolio-devops-aat1
   ```
3. **Verify directory structure:**
   Ensure `index.html`, `css/style.css`, `js/main.js`, and the `assets/` directory are intact.

---

## 9. Execution Instructions

### Option A: Using Python Standard HTTP Server (Recommended)
Running through an HTTP server ensures that relative PDF paths and embedded iframes render smoothly without browser local file security (`file://`) restrictions:
```bash
# In the project root directory:
python -m http.server 8000
```
Open your web browser and navigate to:
```text
http://localhost:8000
```

### Option B: Using VS Code Live Server Extension
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option C: Direct Browser Opening
Double-click `index.html` in your file explorer to open it directly in your default browser.

---

## 10. Screenshots
The visual catalog of the running application is documented in the [`screenshots/`](screenshots/) directory:

| Screenshot File | Section / Component | Preview Description |
| :--- | :--- | :--- |
| **`screenshots/homepage.png`** | Hero Section | Displays full introduction, CGPA 8.7 status badge, action buttons, framed profile photo, and quick metrics bar. |
| **`screenshots/about.png`** | About & Philosophy | Detailed academic background, patented fog harvesting callout, and 4 core technical pillars. |
| **`screenshots/skills.png`** | Categorized Skills | Six structured pillars: Programming, Cloud Computing, DevOps, Operating Systems, Networking, and Tools. |
| **`screenshots/projects.png`** | Featured Projects | Interactive cards with status badges, difficulty levels, and ASCII architecture flows. |
| **`screenshots/certifications.png`** | Verified Certifications | Official credential cards with badges, credential IDs, and dual action preview buttons. |
| **`screenshots/contact.png`** | Contact & Validation | Validated contact form with inline error alerts and pre-filled email client dispatch. |

> *Refer to [`screenshots/README.md`](screenshots/README.md) for capturing instructions.*

---

## 11. Future Enhancements
- **Backend Email Integration:** Connect the contact form to a serverless AWS Lambda endpoint backed by Amazon SES (Simple Email Service) or an EmailJS integration for direct server-side mail dispatch.
- **Dynamic Telemetry Dashboard:** Connect the Terminal Sandbox or Projects section to a live Prometheus/Grafana instance deployed on an OCI compute shape to display real-time host metrics.
- **WebAssembly Terminal Engine:** Expand the simulated CLI sandbox using WebAssembly (Wasm) or WebContainer technology to allow real in-browser execution of POSIX shell commands.
- **PWA (Progressive Web App):** Add a service worker and web manifest to enable offline browsing and mobile home screen installation.

---

## 12. Author Information
- **Name:** Utkarsh Dewangan
- **USN:** `1NH23CS282`
- **Institution:** New Horizon College of Engineering (NHCE), Bengaluru
- **Degree:** Bachelor of Engineering (B.E.) in Computer Science & Engineering
- **VTU CGPA:** 8.7 / 10.0
- **Email:** [utkarshdewangan1112@gmail.com](mailto:utkarshdewangan1112@gmail.com)
- **Phone:** +91 8431628325
- **LinkedIn:** [linkedin.com/in/utkarsh-dewangan-a8038b2a3](https://linkedin.com/in/utkarsh-dewangan-a8038b2a3)
- **GitHub:** [github.com/utkarshdewangan](https://github.com/utkarshdewangan)

---

## 13. GitHub Repository Link Placeholder
- **Repository URL:** `https://github.com/utkarshdewangan/portfolio-devops-aat1` *(Placeholder: Replace with final repository link upon pushing)*
- **Live Deployment URL:** `https://utkarshdewangan.github.io/portfolio-devops-aat1` *(Optional GitHub Pages live deployment)*

---
*Submitted in partial fulfillment of the academic requirements for Alternative Assessment Test 1 (AAT-1).*

