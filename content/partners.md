+++
title = "Partners"
path = "/partners"
description = "The organisations whose ecosystems, funding, and experience make Bodhya's work in Bihar possible."
[extra]
hide_title = true
+++

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
.partners-page {
    background-color: var(--c-bg);
    color: var(--c-text-main);
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow-x: hidden;
}
.partners-page h1, .partners-page h2, .partners-page h3 {
    font-family: var(--font-brand);
    font-weight: 700;
}
.partners-hero {
    max-width: 800px;
    margin: 0 auto;
    padding: 72px 24px 56px;
}
.partners-eyebrow {
    font-family: var(--font-brand);
    color: var(--c-accent);
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-bottom: 1.25rem;
    display: block;
}
.partners-hero h1 {
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    line-height: 1.1;
    color: var(--c-text-main);
    margin-bottom: 1.5rem;
    max-width: 680px;
}
.partners-lead {
    font-size: 1.15rem;
    color: var(--c-text-muted);
    line-height: 1.75;
    max-width: 620px;
    border-left: 3px solid var(--c-accent);
    padding-left: 1.25rem;
    margin: 0;
}
.partners-list {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 24px 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
}
.partner-card {
    background: var(--c-card-bg);
    border: 1px solid var(--c-border);
    border-radius: 8px;
    padding: 32px;
    display: flex;
    flex-direction: column;
}
/* Pushes the outbound link to the bottom so it lines up across a row
   even when the two cards carry different amounts of copy. */
.partner-card .partner-link { margin-top: auto; }
.partner-logo {
    display: block;
    width: auto;
    margin-bottom: 24px;
    /* The card is a flex column, so a bare width:auto would stretch the image
       to the full column and distort it. Shrink to the natural aspect. */
    align-self: flex-start;
    max-width: 100%;
    object-fit: contain;
}
.partner-logo.logo-fossunited { height: 44px; }
.partner-logo.logo-samagata { height: 30px; }
.partner-logo.logo-hikmat { height: 46px; }
.partner-logo.logo-ydf { height: 42px; }
.partner-card h2 {
    font-size: 1.4rem;
    color: var(--c-text-main);
    margin-bottom: 0.4rem;
}
.partners-group-label {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 24px;
    font-family: var(--font-brand);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--c-accent);
    display: block;
    margin-bottom: 16px;
}
.partners-group-label + .partners-list { padding-bottom: 40px; }
.partner-card p {
    font-size: 1rem;
    color: var(--c-text-muted);
    line-height: 1.75;
    margin-bottom: 1rem;
}
.partner-card p a {
    color: var(--c-accent);
    text-decoration: none;
    border-bottom: 1px solid var(--c-border);
    transition: border-color 0.2s;
}
.partner-card p a:hover { border-bottom-color: var(--c-accent); }
.partner-role {
    border-top: 1px solid var(--c-border);
    margin-top: 1.5rem;
    padding-top: 1.25rem;
}
/* On the programme cards the role block follows the heading directly, with
   no description above it — so the divider has nothing to divide. */
.partner-card h2 + .partner-role {
    border-top: none;
    margin-top: 1rem;
    padding-top: 0;
}
.partner-role-label {
    font-family: var(--font-brand);
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--c-accent);
    display: block;
    margin-bottom: 0.6rem;
}
.partner-role p {
    font-size: 0.95rem;
    margin: 0;
}
.partner-link {
    font-family: var(--font-brand);
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--c-accent);
    text-decoration: none;
    display: inline-block;
    margin-top: 1.25rem;
}
.partner-link:hover { color: var(--c-accent-hover); }
.partners-cta {
    border-top: 1px solid var(--c-border);
    text-align: center;
    padding: 56px 24px 72px;
    margin-top: 40px;
}
.partners-cta h2 {
    font-family: var(--font-brand);
    font-size: 1.8rem;
    color: var(--c-text-main);
    margin-bottom: 0.75rem;
}
.partners-cta p {
    color: var(--c-text-muted);
    font-size: 1rem;
    margin-bottom: 1.75rem;
}
.partners-btn {
    display: inline-block;
    background: var(--c-accent);
    color: #fff;
    font-family: var(--font-brand);
    font-weight: 600;
    font-size: 0.95rem;
    padding: 11px 24px;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.2s ease;
}
.partners-btn:hover {
    background: var(--c-accent-hover);
    color: #fff;
    text-decoration: none;
}
@media (max-width: 900px) {
    .partners-list { grid-template-columns: 1fr; max-width: 640px; }
}
@media (max-width: 768px) {
    .partners-hero { padding: 48px 20px 40px; }
    .partners-list { padding-left: 16px; padding-right: 16px; }
    .partner-card { padding: 28px 22px; }
}
</style>
<div class="partners-page">
    <div class="partners-hero">
        <span class="partners-eyebrow">Partners</span>
        <h1>We don't build this alone.</h1>
        <p class="partners-lead">Bodhya is a small initiative doing work that needs reach. These are the organisations whose ecosystems, funding, and hard-won experience make that possible.</p>
    </div>
    <span class="partners-group-label">Programme Partners</span>
    <div class="partners-list">
        <div class="partner-card">
            <img src="/hikmat-logo.webp" alt="Hikmat Foundation" class="partner-logo logo-hikmat" width="680" height="199">
            <h2>Hikmat Foundation</h2>
            <div class="partner-role">
                <span class="partner-role-label">What we run together</span>
                <p>With Hikmat we run <a href="https://www.hikmatfoundation.org/school-to-livelihood" target="_blank" rel="noopener noreferrer">School to Livelihood</a>, a three-year programme for girls who have finished Class 10 in Ramnagar Block. We teach functional English, computer applications, and practical AI tools, then move graduates into paid client work — 20 students in year one, scaling to 75 by year three, with earning starting in year two rather than after.</p>
            </div>
            <a href="https://www.hikmatfoundation.org" target="_blank" rel="noopener noreferrer" class="partner-link">hikmatfoundation.org →</a>
        </div>
        <div class="partner-card">
            <img src="/ydf-logo.png" alt="Youth Dreamers Foundation" class="partner-logo logo-ydf" width="268" height="88">
            <h2>Youth Dreamers Foundation</h2>
            <div class="partner-role">
                <span class="partner-role-label">What we run together</span>
                <p>With Youth Dreamers Foundation we run <strong>FOSS Clubs across colleges in Bihar</strong>, giving students a place to learn open source in practice. Their strength is the step we care most about and are weakest at alone: turning skills into actual jobs, through career guidance and employer links they have already built.</p>
            </div>
            <a href="https://ydfindia.org" target="_blank" rel="noopener noreferrer" class="partner-link">ydfindia.org →</a>
        </div>
    </div>
    <span class="partners-group-label">Founding Partners</span>
    <div class="partners-list">
        <div class="partner-card">
            <img src="/fossunited-logo.svg" alt="FOSS United" class="partner-logo logo-fossunited">
            <h2>FOSS United</h2>
            <p>A non-profit foundation working to promote and strengthen the Free and Open Source Software ecosystem in India. It runs city communities and student FOSS Clubs, the annual <strong>IndiaFOSS</strong> conference, and the <strong>FOSS Hack</strong> hackathon, and works to grow FOSS adoption across sectors that have been slow to it.</p>
            <a href="https://fossunited.org" target="_blank" rel="noopener noreferrer" class="partner-link">fossunited.org →</a>
        </div>
        <div class="partner-card">
            <img src="/samagata-logo.svg" alt="Samagata" class="partner-logo logo-samagata">
            <h2>Samagata Foundation</h2>
            <p>A registered Section 8 non-profit based in Bengaluru, supporting work across science, culture, art, technology, education, and research — with a particular interest in establishing public commons, institutions, and community spaces. Its name means <em>"those which have come together."</em></p>
            <a href="https://samagata.org" target="_blank" rel="noopener noreferrer" class="partner-link">samagata.org →</a>
        </div>
    </div>
    <div class="partners-cta">
        <h2>Want to support this work?</h2>
        <p>If your organisation wants to help build Bihar's tech ecosystem, we would like to hear from you.</p>
        <a href="/contact" class="partners-btn">Get in touch</a>
    </div>
</div>
