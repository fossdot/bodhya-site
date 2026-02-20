+++
title = "Consulting"
path = "/consulting"
description = "Modern, reliable systems for teams that care."
[extra]
hide_title = true
+++

<title>Bodhya Consulting</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400;500&display=swap" rel="stylesheet">

<style>

:root {
    --c-bg: #FFF8F3;
    --c-accent: #AD544B;
    --c-accent-hover: #8e433c;
    --c-text-main: #2D2424;
    --c-text-muted: #6D5F5F;
    --c-border: rgba(173, 84, 75, 0.15);
    --c-card-bg: #FFFFFF;
    --font-brand: 'Funnel Display', sans-serif;
}

 .consulting-page-wrapper {
    background-color: var(--c-bg);
    color: var(--c-text-main);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
    width: fit-content;
    width: 100vw;
    position: relative;             
    left: 50%;                      
    right: 50%;
    margin-left: -50vw;            
    margin-right: -50vw;            
    padding-top: 0;                 
    overflow-x: hidden;
}

/* Utility Helpers */
.consulting-page-wrapper h1, 
.consulting-page-wrapper h2, 
.consulting-page-wrapper h3,
.btn-text {
    font-family: var(--font-brand);
    font-weight: 700;
}

/*hero section*/
.cons-hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    padding: 50px 20px;
    align-items: center;
    max-width: 1150px;
    margin: 0 auto;
    width: fit-content;
}

.cons-hero h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--c-text-main);
    font-weight: 700;
}

.cons-eyebrow {
    font-family: var(--font-brand);
    color: #90433c;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-weight: 500;
    margin-bottom: 1rem;
    display: inline-block;
    background: rgba(173, 84, 75, 0.08);
    padding: 4px 12px;
    border-radius: 4px;
}

.cons-hero p {
    font-size: 1.125rem;
    color: var(--c-text-muted);
    max-width: 540px;
    margin-bottom: 2rem;
}

/* Buttons */
.cons-btn-primary {
    background-color: var(--c-accent);
    color: white;
    padding: 14px 32px;
    border-radius: 6px;
    text-decoration: none;
    font-family: var(--font-brand);
    font-weight: 500;
    display: inline-block;
    transition: transform 0.2s;
}
.cons-btn-primary:hover {
    background-color: var(--c-accent-hover);
    transform: translateY(-2px);
}

.cons-btn-secondary {
    color: var(--c-accent);
    text-decoration: none;
    margin-left: 20px;
    font-family: var(--font-brand);
    font-weight: 500;
    border-bottom: 1px solid transparent;
}
.cons-btn-secondary:hover {
    border-bottom-color: var(--c-accent);
}

/* Hero Visual */
.cons-stack {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.cons-card-visual {
    background: var(--c-card-bg);
    border: 1px solid var(--c-border);
    padding: 24px;
    border-radius: 12px;
    font-family: var(--font-brand);
    font-weight: 500;
    color: var(--c-accent);
    box-shadow: 0 4px 20px rgba(173, 84, 75, 0.06);
    text-align: center;
    transition: transform 0.2s ease;
}
.cons-card-visual:hover {
    transform: translateX(10px);
}

/* clients */
.clients-section {
    padding: 40px;
    text-align: center;
    background-color: var(--color-bg);
    max-width: 1400px;
    margin: 0 auto;
}

.section-label {
    font-family: var(--font-display);
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #90433c;
    font-weight: 700;
    margin-bottom: 32px;
}

.clients-strip {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.client-logo {
    width: 120px;
    height: 60px;
    background-color: rgba(102, 102, 102, 0.15);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #999;
    transition: var(--transition);
    font-weight: 600;
}

.client-logo:hover {
    background-color: rgba(173, 84, 75, 0.15);
    color: var(--color-accent);
}

.client-logo-img {
    max-height: 50px;
    width: auto;
    max-width: 160px;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
    cursor: default;
}

.client-logo-img:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.05);
}

/* service grid */
.cons-section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}
.cons-header {
    text-align: center;
    margin-bottom: 40px;

}
.cons-header h2 {
    font-family: var(--font-display);
    font-size: 44px;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 10px;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    margin-top: -10px;
}
.cons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}
.cons-card {
    background: white;
    border: 1px solid var(--c-border);
    padding: 40px;
    border-radius: 16px;
    transition: 0.3s;
}
.cons-card:hover {
    border-color: var(--c-accent-hover);
    box-shadow: 0 10px 30px rgba(173, 84, 75, 0.08);
}

.cons-tag {
    color: var(--c-accent);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    margin-bottom: 1rem;
    display: inline-block;
    font-family: var(--font-brand);
    background: rgba(173, 84, 75, 0.08);
    padding: 4px 12px;
    border-radius: 4px;
}
.cons-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
}
.cons-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.cons-card li {
    color: var(--c-text-muted);
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
    font-size: 0.90rem;
}
.cons-card li::before {
    content: "→";
    color: var(--c-accent);
    position: absolute;
    left: 0;
    font-weight: bold;
}

/* timeline */
.cons-timeline {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    position: relative;
    margin-top: 60px;
}
.cons-timeline::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 50px;
    right: 50px;
    height: 1px;
    background: var(--c-border);
    z-index: 0;
}
.cons-step {
    position: relative;
    z-index: 1;
    flex: 1;
    text-align: center;
}
.cons-step-num {
    width: 80px;
    height: 80px;
    background-color: #90433c;  
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 36px;
    font-weight: 700;
    margin: 0 auto 20px;
    box-shadow: 0 4px 12px rgba(173, 84, 75, 0.15);
}

/* impact and form */
.impact-section {
    padding: 80px 60px;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
}

.cons-impact-box {
    background: linear-gradient(135deg, #FFF8F3 0%, #ffffff 100%);
    border: 1px solid var(--c-border);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    gap: 60px;
    align-items: center;
    font-size: 30px;
}

.cons-form-box {
    background: white;
    padding: 6px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid var(--c-border);
    margin-bottom: 1rem;
    margin-top: -50px;
}
.cons-input {
    width: 100%;
    padding: 14px;
    margin-bottom: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: var(--c-bg);
    font-family:'Funnel Display', sans-serif;
}
.cons-input:focus {
    outline: none;
    border-color: var(--c-accent);
}

/* Impact Section */
.impact-section {
    padding: 80px 60px;
    max-width: 1400px;
    margin: 0 auto;
}
.impact-card {
    background-color: var(--c-section-bg);
    border-radius: 12px;
    padding: 48px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: center;
    box-shadow: 0 4px 12px var(--c-shadow);
}
.impact-card h2 {
    font-family: var(--font-brand);
    font-size: 34px;
    font-weight: 700;
    color: var(--c-accent);
    margin-bottom: 10px;
    letter-spacing: -1px;
    align-items:center;
    margin-top: 0rem;
}
.impact-card p {
    font-size: 18px;
    color: var(--c-text-muted);
    line-height: 1.8;
    margin-bottom: 0;
}

.stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 0;
    width: 100%;
    align-items: stretch !important;

}

.stat-badge {
    background-color: rgba(173, 84, 75, 0.08);
    border: 1px solid var(--c-border);
    border-radius: 8px;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 600;
    color: var(--c-accent);
    text-align: center;
    font-family:'Funnel Display', sans-serif;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Mobile Responsive */

@media (max-width: 768px) {
    .consulting-page-wrapper {
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        left: auto !important;
        right: auto !important;
        padding: 0 !important;
        overflow-x: hidden;
    }

    .cons-hero {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 40px 24px;
        gap: 30px;
        align-items: center;
    }
    
    .cons-hero > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cons-hero h1 {
        font-size: 2rem;
        line-height: 1.25;
        margin-bottom: 1.5rem;
    }
    
    .cons-hero p {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }
    
    /* Buttons */
    .cons-hero > div:first-child > div:last-child {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 16px;
    }

    .cons-btn-primary { 
        width: 100%;
        text-align: center;
    }
    
    .cons-btn-secondary { 
        display: block; 
        margin: 0;
        width: 100%;
        text-align: center;
    }

    /* Visual Stack */
    .cons-stack {
        width: 100%;
        gap: 12px;
    }
    
    .cons-card-visual {
        width: 100%;
    }
    /* Clients */
    .clients-section {
        padding: 40px 24px;
    }
    
    .clients-strip {
        display: grid !important; 
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 30px 20px;
        width: 100%;
        align-items: center;
        justify-items: center;
    }
    
    .client-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        grid-column: span 1 !important;
    }
    
    .client-logo-img {
        max-width: 100%;
        height: auto;
        max-height: 45px;
        object-fit: contain;
    }

    /* Section Headers */
    .cons-header h2 {
        font-size: 2rem;
        padding: 0 10px;
        align-items:center;
    }

    /* Grid */
    .cons-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    .cons-section {
        padding: 60px 24px;
    }

    /* Timeline */
    .cons-timeline {
        flex-direction: column;
        gap: 40px;
    }
    .cons-timeline::before { display: none; }
    .cons-step { 
        margin-bottom: 0; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .impact-section {
        padding: 40px 24px;
    }

    .impact-card {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 32px 24px;
        text-align: center;
    }

    .impact-card h2 {
        font-size: 28px;
    }

    .stats {
        align-items: center;
    }
}

</style>

<div class="consulting-page-wrapper">
    <section class="cons-hero">
        <div>
            <span class="cons-eyebrow">Tech consulting for your organization</span>
            <h1>Modern, reliable systems for teams that care.</h1>
            <p>We help organizations, and lean teams move to simple, maintainable systems and operations that built on open-source stacks you can actually own.</p>
            <div>
                <a href="#contact" class="cons-btn-primary">Schedule a call</a>
                <a href="#approach" class="cons-btn-secondary">See how we work</a>
            </div>
        </div>
        <div class="cons-stack">
            <div class="cons-card-visual">Web & Back-office</div>
            <div class="cons-card-visual">Cloud Infrastructure</div>
            <div class="cons-card-visual">Open-Source Workflows</div>
        </div>
    </section>
    <!-- clients -->
    <div class="clients-section">
        <div class="section-label">Trusted by</div>
        <div class="clients-strip">
            <a href="https://takshashila.org.in/" target="_blank" rel="noopener noreferrer" class="client-link">
                <img src="/main-logo-dark.svg" alt="Takshashila" class="client-logo-img">
            </a>
            <a href="https://bhasharesearch.org/" target="_blank" rel="noopener noreferrer" class="client-link">
                <img src="/bhasha_logo.png" alt="Bhasha Research" class="client-logo-img">
            </a>
            <a href="https://www.periferry.com/" target="_blank" rel="noopener noreferrer" class="client-link">
                <img src="/periferry logo.png" alt="PeriFerry" class="client-logo-img">
            </a>
            <a href="https://indialabourline.org/" target="_blank" rel="noopener noreferrer" class="client-link">
                <img src="/labour.png" alt="India Labourline" class="client-logo-img">
            </a>
        </div>
    </div>
    <!-- section -->
    <section class="cons-section">
        <div class="cons-header">
            <h2>Modern systems, without the bloat.</h2>
            <p>Open-source, maintainable, easy-to-own systems built for impact.</p>
        </div>
        <div class="cons-grid">
            <div class="cons-card">
                <span class="cons-tag">Web & Data</span>
                <h3>Program Dashboards</h3>
                <ul>
                    <li>Program data dashboards your field teams actually use</li>
                    <li>Beneficiary tracking without spreadsheet chaos</li>
                    <li>Real-time reporting for stakeholders</li>
                </ul>
            </div>
            <div class="cons-card">
                <span class="cons-tag">Cloud Infra</span>
                <h3>Finance & Reporting</h3>
                <ul>
                    <li>Donor and grant reporting beyond spreadsheet</li>
                    <li>Expense tracking and budget alignment</li>
                    <li>Compliance-ready audit trails</li>
                </ul>
            </div>
            <div class="cons-card">
                <span class="cons-tag">Workflows</span>
                <h3>Operations & Team</h3>
                <ul>
                    <li>HR systems that don't feel like legacy software (ERPNext/Frappe)</li>
                    <li>Workflow automation to reduce admin burden</li>
                    <li>Team coordination tools that scale</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="cons-section" id="approach" style="background: rgba(173, 84, 75, 0.03);">
        <div class="cons-header">
            <h2>How we work with your team?</h2>
        </div>
        <div class="cons-timeline">
            <div class="cons-step">
                <div class="cons-step-num">1</div>
                <h3>Discover</h3>
                <p>We listen deeply to understand your current workflows, pain points, and the real constraints your team faces.</p>
            </div>
            <div class="cons-step">
                <div class="cons-step-num">2</div>
                <h3>Design</h3>
                <p>Together we sketch a simple, maintainable system that fits your actual budget and technical capacity.</p>
            </div>
            <div class="cons-step">
                <div class="cons-step-num">3</div>
                <h3>Build</h3>
                <p>We build on robust open-source stacks- Frappe, Docker, AWS with clear, readable code you can own.</p>
            </div>
            <div class="cons-step">
                <div class="cons-step-num">4</div>
                <h3>Hand over</h3>
                <p>Training, doc, and support so your team feels confident running systems independently.</p>
            </div>
        </div>
    </section>
    <section class="impact-section">
        <div class="impact-card">
            <div>
                <h2>Every project funds student opportunities in Bihar.</h2>
                <p>Consulting revenue directly supports workshops, mentorship programs, and local internship opportunities for students in underserved communities. When you work with us, you&apos;re investing in the next generation of tech leaders.</p>
            </div>
            <div class="stats">
                <div class="stat-badge">50+ students mentored</div>
                <div class="stat-badge">5+ open-source projects</div>
                <div class="stat-badge">6+ events organized</div>
            </div>
        </div>
    </section>
    <section class="cons-section" id="contact">
        <div class="cons-form-box">
            <h2>Let's fix your systems.</h2>
            <p style="margin-bottom: 30px;">Tell us about the workflow challenges you're facing.</p>
    <form id="consulting-form" style="max-width: 500px; margin: 0 auto;">
        <input id="cons-name" type="text" class="cons-input" placeholder="Your Name / Organization" required>
        <input id="cons-email" type="email" class="cons-input" placeholder="Email Address" required>
        <textarea id="cons-message" class="cons-input" rows="4" placeholder="What do you want to improve?" required></textarea>
        <button type="submit" class="cons-btn-primary" style="border:none; cursor:pointer; width:100%;">Send Message</button>
    </form>
    <script>
        document.getElementById('consulting-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('cons-name').value;
            const email = document.getElementById('cons-email').value;
            const message = document.getElementById('cons-message').value;
            const subject = `Consulting Inquiry from ${name}`;
            const body = `Name/Org: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            window.location.href = `mailto:hello@bodhya.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    </script>
            <p style="margin-top: 20px; font-size: 0.9rem;">or write to <a href="mailto:hello@bodhya.net" style="color: var(--c-accent);">hello@bodhya.net</a></p>
        </div>
    </section>

</div>