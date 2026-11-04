/**
 * UTKARSH DEWANGAN - PORTFOLIO INTERACTIVITY & LOGIC
 * Full Stack Track AAT-1 | DevOps & Cloud Infrastructure Specialization
 * New Horizon College of Engineering (VTU) | USN: 1NH23CS282
 */

// ===================================================================
// 1. DATA DICTIONARIES: PROJECTS & CERTIFICATIONS
// ===================================================================

const PROJECT_SPECS = {
  'docker-cicd': {
    title: 'Automated Website Deployment with Docker and GitHub Actions',
    difficulty: 'Intermediate',
    status: 'In Progress (Active Development)',
    statusClass: 'status-inprogress',
    overview: 'An automated continuous integration and continuous deployment (CI/CD) pipeline built to streamline web application deployments. Every code commit triggers an automated pipeline that checks code quality, builds an optimized multi-stage Docker container image, runs health checks, pushes the image to a container registry, and automatically deploys the updated container onto a Linux staging server without manual intervention.',
    tags: ['Docker', 'GitHub Actions', 'Linux (Ubuntu)', 'Nginx', 'Bash', 'Git', 'CI/CD'],
    githubUrl: 'https://github.com/utkarshdewangan',
    liveUrl: '#terminal',
    architectureFlow: [
      '1. Developer commits and executes `git push origin main`',
      '2. GitHub Actions runner detects push and triggers `.github/workflows/deploy.yml`',
      '3. Automated Linter & Syntax validation check runs in runner container',
      '4. Multi-stage Dockerfile builds minimal production container image with Nginx (<25MB Alpine)',
      '5. Automated container health check tests port 80/443 responses in isolated runner',
      '6. Docker image pushed to registry (Docker Hub / GitHub Container Registry - GHCR)',
      '7. Automated SSH action executes remote Bash deployment script on Linux host',
      '8. Host pulls latest image, executes zero-downtime container swap, and prunes dangling images'
    ],
    technicalHighlights: [
      'Multi-stage Dockerfile minimizing image footprint to under 25MB using Alpine base',
      'Encrypted GitHub Secrets for secure SSH keys, host IPs, and registry tokens',
      'Automated rollback if container health check fails after initial launch',
      'Linux systemd process management integration for host resilience'
    ],
    statusDetails: 'Currently in active development. Pipeline workflow syntax and Docker multi-stage configuration finalized. Testing automated runner integration on Ubuntu staging VM.'
  },

  'finance-dashboard': {
    title: 'Personal Finance and Expense Analytics Dashboard',
    difficulty: 'Intermediate',
    status: 'Completed (Production Ready)',
    statusClass: 'status-completed',
    overview: 'A secure desktop personal finance management application with expense tracking, budget monitoring, and real-time stock market analysis. Engineered with robust password authentication using bcrypt encryption, a normalized SQLite relational database supporting full CRUD operations, and integrated Yahoo Finance API for live market data, technical indicators (SMA, EMA, RSI, MACD), and a Linear Regression price prediction module.',
    tags: ['Python 3', 'Tkinter GUI', 'SQLite', 'bcrypt', 'yfinance API', 'Pandas', 'Linear Regression'],
    githubUrl: 'https://github.com/utkarshdewangan',
    liveUrl: '#projects',
    architectureFlow: [
      '1. User logs in with bcrypt-hashed salted password verification for local data security',
      '2. Tkinter graphical desktop dashboard loads personal expense records and budget status',
      '3. Normalized SQLite database executes CRUD queries with ACID transactions and constraint validations',
      '4. Analytics module connects to Yahoo Finance API fetching live ticker pricing and historical quotes',
      '5. Pandas data pipeline computes mathematical technical indicators: SMA, EMA, RSI, and MACD',
      '6. Scikit-learn Linear Regression engine fits price trend curves to forecast short-term movements',
      '7. Interactive Matplotlib / Canvas charts render real-time visual expense breakdowns and portfolio analytics'
    ],
    technicalHighlights: [
      'Zero plaintext credentials: Cryptographic security using bcrypt password hashing',
      'Normalized 3NF relational database schema handling accounts, expenses, categories, and logs',
      'Resilient REST API integration with yfinance handling rate limits and offline fallback',
      'Algorithmic computation of technical momentum indicators (RSI, Exponential Moving Averages)'
    ],
    statusDetails: 'Fully completed, verified on resume, and tested locally. Source code organized with modular OOP design.'
  },

  'nids-ml': {
    title: 'Multi-Attack Network Intrusion Detection System (NIDS)',
    difficulty: 'Advanced',
    status: 'Research Internship (Ongoing)',
    statusClass: 'status-research',
    overview: 'An enterprise-grade cyber threat classification framework engineered during an IEEE internship. Detects and categorizes 14+ cyber attack signatures across 2.8M+ network flow records from CICIDS2017 & UNSW-NB15 benchmark sets using Random Forest, XGBoost, and Artificial Neural Networks, with SHAP explainability for interpretable incident response.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'SHAP', 'CICIDS2017', 'Cybersecurity'],
    githubUrl: 'https://github.com/utkarshdewangan',
    liveUrl: '#experience',
    architectureFlow: [
      '1. Ingestion of raw network PCAP flows and telemetry records (2.8M+ samples)',
      '2. Data sanitization: Infinite value removal, Min-Max scaling, and categorical encoding',
      '3. Class rebalancing using Synthetic Minority Over-sampling Technique (SMOTE)',
      '4. Feature selection via Pearson correlation and Random Forest feature importance',
      '5. Multi-model training: Ensemble Trees (Random Forest, XGBoost) and Deep Neural Network (ANN)',
      '6. Model explainability layer using SHAP (SHapley Additive exPlanations) values',
      '7. SOC alert generation identifying exact attack vectors (DDoS, Botnet, Infiltration)'
    ],
    technicalHighlights: [
      'Classifies 14+ distinct cyber attack families with high recall and precision',
      'Evaluated against industry-benchmark CICIDS2017 and UNSW-NB15 security datasets',
      'SHAP summary visualizations enabling SOC analysts to inspect feature importance per alert',
      'Modular Python pipeline containerizable for edge gateway packet inspection'
    ],
    statusDetails: 'Under active research through IEEE IamPro 2026 Internship. Model baseline trained and feature ablation testing in progress.'
  },

  'cloud-monitoring': {
    title: 'Cloud Infrastructure Monitoring and Automated Alerting',
    difficulty: 'Advanced',
    status: 'Planned (Architecture Phase)',
    statusClass: 'status-planned',
    overview: 'A resilient cloud-native observability and telemetry monitoring framework built across AWS and Oracle Cloud Infrastructure (OCI). Designed to collect compute, memory, disk I/O, and network metrics, visualize real-time health on Grafana dashboards, and trigger multi-channel alerts upon threshold anomalies.',
    tags: ['AWS EC2', 'Oracle Cloud (OCI)', 'Prometheus', 'Grafana', 'Alertmanager', 'Bash Scripting', 'SNS / Webhooks'],
    githubUrl: 'https://github.com/utkarshdewangan',
    liveUrl: '#projects',
    architectureFlow: [
      '1. Cloud Compute instances (OCI Compute / AWS EC2) run lightweight Prometheus Node Exporter daemons',
      '2. Centralized Prometheus server scrapes metric endpoints at defined 15-second scrape intervals',
      '3. Custom Bash metric exporters collect specialized Linux kernel and disk queue telemetry',
      '4. Grafana pulls time-series data from Prometheus, rendering dynamic cluster health dashboards',
      '5. Prometheus evaluates alerting rules (e.g. CPU > 85% for 5m, Memory exhaustion, Service downtime)',
      '6. Alertmanager deduplicates and groups firing alarms',
      '7. Automated webhooks dispatch urgent notifications to Slack / Discord channels and AWS SNS SMS/Email'
    ],
    technicalHighlights: [
      'Multi-cloud telemetry coverage across Oracle Cloud Infrastructure and AWS VPCs',
      'Secure Prometheus metric scraping over encrypted TLS tunnels and private subnets',
      'Dynamic Grafana dashboard templates for instant cluster node scaling visualization',
      'Automated Alertmanager routing matrix based on severity (Critical, Warning, Info)'
    ],
    statusDetails: 'Architecture and telemetry topology designed based on OCI Certified Architect principles. Scheduled for implementation following deployment pipeline completion.'
  }
};

const CERT_SPECS = {
  'oci-architect': {
    title: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
    issuer: 'Oracle University',
    date: 'Oct 31, 2025',
    credentialId: '103049556OCI25CAA',
    type: 'pdf',
    filePath: 'assets/certificates/oci-architect-associate.pdf',
    description: 'Validates hands-on knowledge in architecting secure, reliable, and scalable cloud solutions on OCI, including Virtual Cloud Networks (VCN), compute shapes, high-availability architectures, storage solutions, and governance.'
  },
  'oci-foundations': {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'Oct 31, 2025',
    credentialId: '103049556OCI25FNDCFA',
    type: 'pdf',
    filePath: 'assets/certificates/oci-foundations-associate.pdf',
    description: 'Demonstrates foundational mastery of cloud computing concepts, core OCI cloud architecture, security and compliance, governance, billing, and resource management models.'
  },
  'scaler-dbms': {
    title: 'DBMS Course – Master Fundamentals and Advanced Concepts',
    issuer: 'Scaler Topics / Anshuman Singh',
    date: 'Oct 31, 2025',
    credentialId: 'SCALER-DBMS-16MOD',
    type: 'image',
    filePath: 'assets/certificates/scaler-dbms.jpg',
    description: 'Rigorous curriculum covering 74 Video Tutorials, 16 Modules, and 16 Challenges. Mastered relational schemas, indexing, concurrency controls, B-Trees, transaction isolation, and SQL optimization.'
  },
  'nptel-cloud': {
    title: 'Cloud Computing Certification (NPTEL)',
    issuer: 'NPTEL Online Courses (IIT)',
    date: 'Nov 2025',
    credentialId: 'NPTEL-CLOUD-ELITE',
    type: 'pdf',
    filePath: 'assets/certificates/nptel-cloud-computing.pdf',
    description: 'Academic certification in Cloud Computing architectures, distributed systems, virtualization, hypervisors, service models (IaaS/PaaS/SaaS), resource scheduling, and cloud economics.'
  },
  'vibethon': {
    title: 'Runner-Up – VIBETHON (IEEE Computer Society)',
    issuer: 'IEEE Computer Society NHCE Student Branch',
    date: 'Hackathon Award',
    credentialId: 'VIBETHON-RUNNER-UP',
    type: 'pdf',
    filePath: 'assets/certificates/vibethon-runner-up.pdf',
    description: 'Awarded Certificate of Appreciation for demonstrating commendable technical excellence, rapid software prototyping, innovation, and teamwork at the VIBETHON event hosted by IEEE Computer Society NHCE.'
  },
  'iisc': {
    title: 'Symposium on Data for Public Good (IISc)',
    issuer: 'Indian Institute of Science (IISc), Bengaluru',
    date: 'Oct 19, 2024',
    credentialId: 'IISC-CDPG-3RD-ED',
    type: 'pdf',
    filePath: 'assets/certificates/iisc-data-symposium.pdf',
    description: 'Certificate of Attendance awarded for participating in the 3rd edition of the Symposium on Data for Public Good held at the J.N. Tata Auditorium, Indian Institute of Science (IISc), Bengaluru.'
  },
  'quantumx25': {
    title: 'Quantum Hacks — National Level Hackathon',
    issuer: 'QuantumX-25 / IEEE NHCE',
    date: 'Apr 12, 2025',
    credentialId: 'USN: 1NH23CS282',
    type: 'pdf',
    filePath: 'assets/certificates/quantumx-25-hackathon.pdf',
    description: 'Certificate of Participation awarded to Utkarsh Dewangan (USN: 1NH23CS282) for competing in the intensive 3-day Quantum Hacks National Level Hackathon during the QuantumX-25 Techno-Managerial Fest at NHCE Bengaluru.'
  },
  'quantumx24': {
    title: 'Data Science Certificate of Completion',
    issuer: 'QuantumX-24 & BlankSpace Tech',
    date: 'Jan 23, 2024',
    credentialId: 'QX24-DS-NHCE',
    type: 'pdf',
    filePath: 'assets/certificates/quantumx-24-datascience.pdf',
    description: 'Awarded in recognition of active participation and technical completion in the Data Science intensive track organized by QuantumX-24 and BlankSpace Tech at New Horizon College of Engineering, Bengaluru.'
  }
};

// ===================================================================
// 2. DOM CONTENT LOADED INITIALIZER
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  initProjectFiltering();
  initDevOpsTerminal();
  initScrollSpy();
  initMobileNav();
  initFormValidationListeners();
});

// ===================================================================
// 3. PROJECT FILTERING LOGIC
// ===================================================================

function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state and ARIA tab attributes
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardStatus = card.getAttribute('data-status');
        if (filterValue === 'all' || cardStatus === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ===================================================================
// 4. PROJECT ARCHITECTURE MODAL
// ===================================================================

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-project-content');
  const project = PROJECT_SPECS[projectId];

  if (!project || !modal || !content) return;

  const flowListHtml = project.architectureFlow.map(step => `
    <li style="margin-bottom:0.5rem; display:flex; align-items:flex-start; gap:0.5rem;">
      <span style="color:var(--accent-cyan); font-family:var(--font-mono); font-size:0.8rem;">▶</span>
      <span>${escapeHtml(step)}</span>
    </li>
  `).join('');

  const highlightsHtml = project.technicalHighlights.map(h => `
    <li style="margin-bottom:0.4rem; display:flex; align-items:flex-start; gap:0.5rem;">
      <span style="color:#10b981; font-family:var(--font-mono);">✓</span>
      <span>${escapeHtml(h)}</span>
    </li>
  `).join('');

  const tagsHtml = project.tags.map(t => `
    <span class="project-tag">${escapeHtml(t)}</span>
  `).join('');

  content.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
      <span class="project-status-badge ${project.statusClass}">${escapeHtml(project.status)}</span>
      <span class="mono" style="font-size:0.8rem; color:#94a3b8;">Level: ${escapeHtml(project.difficulty)}</span>
    </div>

    <h2 id="modal-project-title" style="font-size:1.6rem; margin-bottom:1rem; color:#fff;">${escapeHtml(project.title)}</h2>
    
    <p style="font-size:0.95rem; line-height:1.7; color:#cbd5e1; margin-bottom:1.5rem;">
      ${escapeHtml(project.overview)}
    </p>

    <div style="background:rgba(7,10,19,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:1.25rem; margin-bottom:1.5rem;">
      <h4 style="font-size:0.95rem; color:#38bdf8; font-family:var(--font-mono); text-transform:uppercase; margin-bottom:0.75rem; letter-spacing:0.05em;">
        ⚙️ Step-by-Step Architecture Pipeline
      </h4>
      <ul style="list-style:none; font-size:0.88rem; color:#e2e8f0;">
        ${flowListHtml}
      </ul>
    </div>

    <div style="margin-bottom:1.5rem;">
      <h4 style="font-size:0.95rem; color:#10b981; font-family:var(--font-mono); text-transform:uppercase; margin-bottom:0.6rem; letter-spacing:0.05em;">
        🛡️ Key Technical Highlights
      </h4>
      <ul style="list-style:none; font-size:0.88rem; color:#cbd5e1;">
        ${highlightsHtml}
      </ul>
    </div>

    <div style="background:rgba(99,102,241,0.08); border-left:3px solid #6366f1; padding:0.85rem 1rem; border-radius:4px; margin-bottom:1.5rem;">
      <strong style="color:#a5b4fc; font-family:var(--font-mono); font-size:0.82rem;">STATUS AUDIT:</strong>
      <p style="font-size:0.85rem; color:#cbd5e1; margin-top:0.25rem;">${escapeHtml(project.statusDetails)}</p>
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1.5rem;">
      ${tagsHtml}
    </div>

    <div style="display:flex; align-items:center; gap:0.85rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.08); flex-wrap:wrap;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub Repository
      </a>
      <button class="btn btn-secondary btn-sm" onclick="closeProjectModal()">
        Close View
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function closeModalOnOverlay(e) {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
}

// ===================================================================
// 5. CERTIFICATE PREVIEW MODAL
// ===================================================================

function openCertModal(certId) {
  const modal = document.getElementById('cert-modal');
  const content = document.getElementById('modal-cert-content');
  const cert = CERT_SPECS[certId];

  if (!cert || !modal || !content) return;

  let viewerHtml = '';
  if (cert.type === 'pdf') {
    viewerHtml = `
      <iframe src="${cert.filePath}" class="cert-preview-frame" title="${escapeHtml(cert.title)}" loading="lazy">
        <p>Your browser does not support embedded PDFs. <a href="${cert.filePath}" target="_blank">Click here to download the certificate PDF.</a></p>
      </iframe>
    `;
  } else {
    viewerHtml = `
      <img src="${cert.filePath}" alt="${escapeHtml(cert.title)}" class="cert-preview-image" loading="lazy">
    `;
  }

  content.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
      <span class="cert-issuer-badge" style="font-size:0.8rem;">${escapeHtml(cert.issuer)}</span>
      <span class="mono" style="font-size:0.82rem; color:#94a3b8;">${escapeHtml(cert.date)}</span>
    </div>

    <h2 id="modal-cert-title" style="font-size:1.5rem; margin-bottom:0.5rem; color:#fff;">${escapeHtml(cert.title)}</h2>
    
    <div style="font-family:var(--font-mono); font-size:0.82rem; color:var(--accent-cyan); margin-bottom:1rem;">
      ID / Verification: <strong>${escapeHtml(cert.credentialId)}</strong>
    </div>

    <p style="font-size:0.92rem; line-height:1.6; color:#cbd5e1; margin-bottom:1rem;">
      ${escapeHtml(cert.description)}
    </p>

    ${viewerHtml}

    <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-top:1.5rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.08); flex-wrap:wrap;">
      <a href="${cert.filePath}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        Open Full File in New Tab
      </a>
      <button class="btn btn-secondary btn-sm" onclick="closeCertModal()">
        Close Preview
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  const content = document.getElementById('modal-cert-content');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (content) {
      content.innerHTML = ''; // Clear iframe to stop memory consumption
    }
  }
}

function closeCertModalOnOverlay(e) {
  if (e.target.id === 'cert-modal') {
    closeCertModal();
  }
}

// Global modal escape key listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeCertModal();
  }
});

// ===================================================================
// 6. INTERACTIVE DEVOPS TERMINAL SANDBOX
// ===================================================================

const terminalState = {
  commandHistory: [],
  historyIndex: -1,
  initialized: false
};

function initDevOpsTerminal() {
  const input = document.getElementById('terminal-input');
  const body = document.getElementById('terminal-body');

  if (!input || !body || terminalState.initialized) return;

  terminalState.initialized = true;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = input.value.trim();
      if (command) {
        terminalState.commandHistory.push(command);
        terminalState.historyIndex = terminalState.commandHistory.length;
        processTerminalCommand(command);
        input.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (terminalState.commandHistory.length > 0 && terminalState.historyIndex > 0) {
        terminalState.historyIndex--;
        input.value = terminalState.commandHistory[terminalState.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (terminalState.historyIndex < terminalState.commandHistory.length - 1) {
        terminalState.historyIndex++;
        input.value = terminalState.commandHistory[terminalState.historyIndex];
      } else {
        terminalState.historyIndex = terminalState.commandHistory.length;
        input.value = '';
      }
    }
  });

  // Focus terminal input when clicking inside terminal window
  body.addEventListener('click', () => {
    input.focus();
  });
}

function executeQuickCommand(cmd) {
  const input = document.getElementById('terminal-input');
  if (input) {
    input.value = cmd;
    processTerminalCommand(cmd);
    input.value = '';
    input.focus();
  }
}

function processTerminalCommand(cmd) {
  const body = document.getElementById('terminal-body');
  const promptLine = document.querySelector('.terminal-prompt-line');
  const cleanCmd = cmd.toLowerCase().trim();

  // Print entered command prompt
  const promptEcho = document.createElement('div');
  promptEcho.className = 'terminal-output-line';
  promptEcho.innerHTML = `<span class="t-user">utkarsh</span>@<span class="t-host">devops-box</span>:<span class="t-path">~</span>$ <strong>${escapeHtml(cmd)}</strong>`;

  const responseLine = document.createElement('div');
  responseLine.className = 'terminal-output-line';

  switch (cleanCmd) {
    case 'help':
      responseLine.innerHTML = `
        <span style="color:#38bdf8;">AVAILABLE COMMANDS:</span><br>
        &nbsp;&nbsp;<strong>skills</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print 6 categorized technical skill pillars<br>
        &nbsp;&nbsp;<strong>projects</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List 4 featured engineering works with status<br>
        &nbsp;&nbsp;<strong>certs</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Display 8 verified certifications &amp; credentials<br>
        &nbsp;&nbsp;<strong>patent</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Inspect published patent details (IN202641005295 A)<br>
        &nbsp;&nbsp;<strong>deploy</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Simulate GitHub Actions CI/CD Docker build<br>
        &nbsp;&nbsp;<strong>whoami</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print candidate profile, USN &amp; university details<br>
        &nbsp;&nbsp;<strong>contact</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Display email, phone, LinkedIn, and GitHub<br>
        &nbsp;&nbsp;<strong>ls</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List current sandbox workspace contents<br>
        &nbsp;&nbsp;<strong>cat &lt;file&gt;</strong>&nbsp;&nbsp;&nbsp;- Display file contents (e.g., cat resume.txt)<br>
        &nbsp;&nbsp;<strong>uname</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print Linux kernel environment info<br>
        &nbsp;&nbsp;<strong>uptime</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Show container and host operational uptime<br>
        &nbsp;&nbsp;<strong>date</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print current UTC system timestamp<br>
        &nbsp;&nbsp;<strong>pwd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print current working directory path<br>
        &nbsp;&nbsp;<strong>clear</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear the terminal sandbox screen
      `;
      break;

    case 'skills':
      responseLine.innerHTML = `
        <span style="color:#10b981;">CORE TECHNICAL SKILLS (6 CATEGORIES):</span><br>
        1. <strong>Programming Languages</strong>: Python 3, Bash / Shell Scripting, C++, SQL (SQLite), HTML5/CSS3/JavaScript.<br>
        2. <strong>Cloud Computing</strong>: Oracle Cloud Infrastructure (OCI Architect Associate &amp; Foundations), AWS EC2, S3, VCN/VPC.<br>
        3. <strong>DevOps</strong>: Docker Engine, Multi-Stage Builds, GitHub Actions CI/CD, Docker Compose, Nginx, GHCR.<br>
        4. <strong>Operating Systems</strong>: Ubuntu Server, Debian Linux, systemd services, Cron scheduling, POSIX shell, SSH hardening.<br>
        5. <strong>Networking</strong>: TCP/IP, OSI 7-Layer, CIDR subnetting, DNS, HTTP/HTTPS, TLS, iptables, Network flow analysis.<br>
        6. <strong>Developer Tools</strong>: Git CLI, GitHub PR workflows, VS Code, Vim, Postman, DB Browser for SQLite.
      `;
      break;

    case 'projects':
      responseLine.innerHTML = `
        <span style="color:#38bdf8;">PORTFOLIO FEATURED PROJECTS:</span><br>
        [1] <span style="color:#fbbf24;">[IN PROGRESS]</span> <strong>Automated Website Deployment with Docker and GitHub Actions</strong><br>
        &nbsp;&nbsp;&nbsp;&nbsp;↳ CI/CD pipeline building minimal Alpine Docker images and deploying to Linux staging host.<br>
        [2] <span style="color:#34d399;">[COMPLETED]</span> <strong>Personal Finance and Expense Analytics Dashboard</strong><br>
        &nbsp;&nbsp;&nbsp;&nbsp;↳ Desktop Tkinter GUI, SQLite CRUD, bcrypt encryption, Yahoo Finance API, Linear Regression.<br>
        [3] <span style="color:#38bdf8;">[RESEARCH]</span> <strong>Multi-Attack Network Intrusion Detection System (NIDS)</strong><br>
        &nbsp;&nbsp;&nbsp;&nbsp;↳ IEEE IamPro Internship: 14+ attack types across 2.8M records (CICIDS2017 &amp; UNSW-NB15) with SHAP.<br>
        [4] <span style="color:#c084fc;">[PLANNED]</span> <strong>Cloud Infrastructure Monitoring and Automated Alerting</strong><br>
        &nbsp;&nbsp;&nbsp;&nbsp;↳ Prometheus metric scraping, Grafana dashboards, Alertmanager webhooks across AWS and OCI.
      `;
      break;

    case 'certs':
      responseLine.innerHTML = `
        <span style="color:#fb923c;">OFFICIAL CREDENTIALS &amp; CERTIFICATIONS (8 VERIFIED):</span><br>
        1. <strong>OCI 2025 Certified Architect Associate</strong> (Oracle University | ID: 103049556OCI25CAA)<br>
        2. <strong>OCI 2025 Certified Foundations Associate</strong> (Oracle University | ID: 103049556OCI25FNDCFA)<br>
        3. <strong>Scaler Topics DBMS Mastery</strong> (74 Videos, 16 Modules, 16 Challenges completed)<br>
        4. <strong>NPTEL Cloud Computing</strong> (IIT Academic Elite Certification)<br>
        5. <strong>Runner-Up – VIBETHON</strong> (IEEE Computer Society NHCE Student Branch)<br>
        6. <strong>Symposium on Data for Public Good</strong> (Indian Institute of Science - IISc Bengaluru)<br>
        7. <strong>Quantum Hacks — National Level Hackathon</strong> (QuantumX-25, NHCE Bengaluru)<br>
        8. <strong>Data Science Certificate of Completion</strong> (QuantumX-24, NHCE Bengaluru)
      `;
      break;

    case 'patent':
      responseLine.innerHTML = `
        <span style="color:#fbbf24;">INTELLECTUAL PROPERTY / PUBLISHED PATENT:</span><br>
        • <strong>Title:</strong> An Integrated Fog Collection System with Multi-Source Energy Harvesting<br>
        • <strong>Application Number:</strong> 202641005295 A (Intellectual Property India)<br>
        • <strong>Filing Date:</strong> 19/01/2026 | <strong>Publication Date:</strong> 30/01/2026<br>
        • <strong>Status:</strong> Published (Govt. of India Official Patent Journal)<br>
        • <strong>Output Capacity:</strong> 9,000 – 12,000 L potable water &amp; 700 – 900 kWh electricity annually (~40% efficiency gain).
      `;
      break;

    case 'whoami':
      responseLine.innerHTML = `
        <strong>Utkarsh Dewangan</strong> (USN: 1NH23CS282)<br>
        B.E. in Computer Science &amp; Engineering | New Horizon College of Engineering (VTU Bengaluru)<br>
        CGPA: 8.7 / 10.0 | Focused on DevOps, Cloud Infrastructure, and Deterministic Linux Automation.
      `;
      break;

    case 'contact':
      responseLine.innerHTML = `
        Email:    <a href="mailto:utkarshdewangan1112@gmail.com" style="color:#38bdf8;">utkarshdewangan1112@gmail.com</a><br>
        Phone:    +91 8431628325<br>
        LinkedIn: <a href="https://linkedin.com/in/utkarsh-dewangan-a8038b2a3" target="_blank" style="color:#38bdf8;">linkedin.com/in/utkarsh-dewangan-a8038b2a3</a><br>
        GitHub:   <a href="https://github.com/utkarshdewangan" target="_blank" style="color:#38bdf8;">github.com/utkarshdewangan</a><br>
        Location: Bengaluru, Karnataka, India
      `;
      break;

    case 'deploy':
      responseLine.innerHTML = `
        <span style="color:#38bdf8;">[SIMULATION] Triggering GitHub Actions CI/CD Pipeline...</span><br>
        [00:01] ➔ git checkout main (HEAD at commit a8f9c12)<br>
        [00:02] ➔ Verifying syntax, HTML5 validation, and Dockerfile health... <span style="color:#34d399;">PASSED</span><br>
        [00:04] ➔ docker build -t utkarsh/portfolio:v2.4.0 --target production . [Alpine 23.4MB]<br>
        [00:06] ➔ Executing isolated HTTP container health check on port 8080... <span style="color:#34d399;">200 OK</span><br>
        [00:08] ➔ Pushing artifact to GitHub Container Registry (ghcr.io)... <span style="color:#34d399;">SUCCESS</span><br>
        [00:10] ➔ Executing SSH remote webhook rolling swap on staging server... <span style="color:#34d399;">DEPLOYED SUCCESSFULLY!</span><br>
        <span style="color:#94a3b8; font-size:0.8rem;">[NOTE: This was an interactive simulation of the project's automated workflow.]</span>
      `;
      break;

    case 'ls':
      responseLine.innerHTML = `
        <span style="color:#818cf8;">drwxr-xr-x</span>  projects/<br>
        <span style="color:#818cf8;">drwxr-xr-x</span>  certificates/<br>
        <span style="color:#34d399;">-rw-r--r--</span>  Utkarsh_Dewangan_Resume.pdf<br>
        <span style="color:#34d399;">-rw-r--r--</span>  patent_IN202641005295A.txt<br>
        <span style="color:#34d399;">-rw-r--r--</span>  docker-compose.yml<br>
        <span style="color:#34d399;">-rw-r--r--</span>  .github/workflows/deploy.yml
      `;
      break;

    case 'cat resume.txt':
    case 'cat resume.pdf':
    case 'cat resume':
      responseLine.innerHTML = `
        === UTKARSH DEWANGAN - RESUME SUMMARY ===<br>
        • Candidate: Utkarsh Dewangan | USN: 1NH23CS282<br>
        • Institution: New Horizon College of Engineering, Bengaluru (VTU) | CGPA: 8.7<br>
        • Core Focus: DevOps Engineering, Cloud Systems, Linux Scripting<br>
        • Certifications: OCI Architect Associate, OCI Foundations, Scaler DBMS, NPTEL Cloud<br>
        • Research: IEEE IamPro 2026 Machine Learning NIDS (CICIDS2017 &amp; UNSW-NB15)<br>
        • Patent: An Integrated Fog Collection System with Multi-Source Energy Harvesting<br>
        <a href="assets/resume/Utkarsh_Dewangan_Resume.pdf" target="_blank" style="color:#38bdf8;">[Click here to download full Resume PDF]</a>
      `;
      break;

    case 'cat docker-compose.yml':
      responseLine.innerHTML = `
        <pre style="color:#cbd5e1; font-family:var(--font-mono); font-size:0.82rem;">version: '3.8'
services:
  portfolio-web:
    image: ghcr.io/utkarshdewangan/portfolio:latest
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3</pre>
      `;
      break;

    case 'uptime':
      responseLine.innerHTML = `
        system uptime: 42 days, 14:26:08 | active tasks: 12 running | load average: 0.14, 0.08, 0.05
      `;
      break;

    case 'uname':
    case 'uname -a':
      responseLine.innerHTML = `
        Linux devops-box 6.5.0-35-generic #35~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
      `;
      break;

    case 'pwd':
      responseLine.innerHTML = `/home/utkarsh/portfolio-sandbox`;
      break;

    case 'date':
      responseLine.innerHTML = new Date().toUTCString();
      break;

    case 'clear':
      // Clear output lines cleanly without removing input or re-binding listeners
      const outputLines = body.querySelectorAll('.terminal-output-line');
      outputLines.forEach(l => l.remove());
      return;

    default:
      responseLine.innerHTML = `<span style="color:#ef4444;">bash: command not found: ${escapeHtml(cleanCmd)}</span>. Type <span style="color:#38bdf8;">'help'</span> for a list of valid commands.`;
      break;
  }

  // Insert prompt echo & command response before prompt line
  body.insertBefore(promptEcho, promptLine);
  body.insertBefore(responseLine, promptLine);

  // Scroll to bottom
  body.scrollTop = body.scrollHeight;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ===================================================================
// 7. TOAST NOTIFICATIONS & CLIPBOARD UTILITIES
// ===================================================================

function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || 'Copied to clipboard!');
    }).catch(() => {
      fallbackCopyToClipboard(text, message);
    });
  } else {
    fallbackCopyToClipboard(text, message);
  }
}

function fallbackCopyToClipboard(text, message) {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    if (successful) {
      showToast(message || 'Copied to clipboard!');
    } else {
      showToast('Could not auto-copy. Please copy manually.');
    }
  } catch (err) {
    showToast('Could not auto-copy. Please copy manually.');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.innerText = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ===================================================================
// 8. CONTACT FORM VALIDATION & CLIENT-SIDE SUBMISSION
// ===================================================================

function initFormValidationListeners() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  // Clear error states on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    if (field) {
      field.addEventListener('input', () => {
        field.classList.remove('is-invalid');
        const errEl = document.getElementById(`${field.name || field.id.replace('contact-', '')}-error`);
        if (errEl) {
          errEl.classList.remove('visible');
        }
      });
    }
  });
}

function handleContactSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const subject = subjectInput ? subjectInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  let isValid = true;

  // Validate Name (>= 2 chars)
  if (!name || name.length < 2) {
    nameInput.classList.add('is-invalid');
    nameError.classList.add('visible');
    isValid = false;
  } else {
    nameInput.classList.remove('is-invalid');
    nameError.classList.remove('visible');
  }

  // Validate Email (standard regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    emailInput.classList.add('is-invalid');
    emailError.classList.add('visible');
    isValid = false;
  } else {
    emailInput.classList.remove('is-invalid');
    emailError.classList.remove('visible');
  }

  // Validate Subject (>= 3 chars)
  if (!subject || subject.length < 3) {
    subjectInput.classList.add('is-invalid');
    subjectError.classList.add('visible');
    isValid = false;
  } else {
    subjectInput.classList.remove('is-invalid');
    subjectError.classList.remove('visible');
  }

  // Validate Message (>= 10 chars)
  if (!message || message.length < 10) {
    messageInput.classList.add('is-invalid');
    messageError.classList.add('visible');
    isValid = false;
  } else {
    messageInput.classList.remove('is-invalid');
    messageError.classList.remove('visible');
  }

  if (!isValid) {
    showToast('Please fix the errors in the form before submitting.');
    return;
  }

  // Generate mailto link fallback so user can send immediately via their email client
  const mailtoBody = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}\n\n--- Sent from Utkarsh Dewangan Portfolio Website ---`);
  const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
  const mailtoUrl = `mailto:utkarshdewangan1112@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  // Clear form
  document.getElementById('contact-form').reset();

  // Clear validation classes
  [nameInput, emailInput, subjectInput, messageInput].forEach(f => f && f.classList.remove('is-invalid'));

  // Notify user honestly according to prompt guidelines (do not falsely claim email sent by server)
  showToast(`Thank you, ${name}! Your message is prepared. Opening your default email client...`);

  // Trigger mailto client after brief delay
  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 1200);
}

// ===================================================================
// 9. NAVBAR SCROLL SPY & MOBILE MENU
// ===================================================================

function initScrollSpy() {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (id && scrollPos >= top && scrollPos < top + height) {
        currentSection = id;
      }
    });

    if (currentSection) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const menu = document.getElementById('nav-menu-list');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('mobile-open');
  });

  // Close menu when clicking any nav link
  const links = menu.querySelectorAll('a');
  links.forEach(l => {
    l.addEventListener('click', () => {
      menu.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target) && menu.classList.contains('mobile-open')) {
      menu.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
