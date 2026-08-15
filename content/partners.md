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
    max-width: 760px;
    margin: 0 auto;
    padding: 0 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.partner-card {
    background: var(--c-card-bg);
    border: 1px solid var(--c-border);
    border-radius: 8px;
    padding: 36px;
}
.partner-logo {
    display: block;
    width: auto;
    margin-bottom: 24px;
}
.partner-logo.logo-fossunited { height: 44px; }
.partner-logo.logo-samagata { height: 30px; }
.partner-card h2 {
    font-size: 1.4rem;
    color: var(--c-text-main);
    margin-bottom: 0.4rem;
}
.partner-kind {
    font-family: var(--font-brand);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--c-accent);
    display: block;
    margin-bottom: 1.25rem;
}
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
    <div class="partners-list">
        <div class="partner-card">
            <img src="/fossunited-logo.svg" alt="FOSS United" class="partner-logo logo-fossunited">
            <h2>FOSS United</h2>
            <span class="partner-kind">Non-profit foundation · Ecosystem partner</span>
            <p>FOSS United is a non-profit foundation working to promote and strengthen the Free and Open Source Software ecosystem in India. Its work runs along three lines: promoting the spirit of hacking and tinkering, building quality open source software for public benefit, and pushing FOSS adoption across sectors that have been slow to it.</p>
            <p>It does this through city communities and student FOSS Clubs, the OASIS Coalition for open source in the social sector, the annual <strong>IndiaFOSS</strong> conference, and <strong>FOSS Hack</strong>, its flagship hackathon.</p>
            <div class="partner-role">
                <span class="partner-role-label">What this means for Bodhya</span>
                <p>Bodhya's events are listed and run through the <a href="https://fossunited.org/c/bihar" target="_blank" rel="noopener noreferrer">FOSS United Bihar</a> chapter, which handles registration and ticketing under its own policies. The FOSS Clubs model is how we reach engineering colleges across the state, and FOSS United's mentor network is what lets a student in Bihar get feedback from someone building software anywhere in India.</p>
            </div>
            <a href="https://fossunited.org" target="_blank" rel="noopener noreferrer" class="partner-link">fossunited.org →</a>
        </div>
        <div class="partner-card">
            <img src="/samagata-logo.svg" alt="Samagata" class="partner-logo logo-samagata">
            <h2>Samagata Foundation</h2>
            <span class="partner-kind">Section 8 non-profit · Supporting partner</span>
            <p>Samagata Foundation is a registered Section 8 non-profit based in Bengaluru. Its name means <em>"those which have come together"</em> across several Indian languages, and that is close to its method: bringing intent, skills, and resources into the same room and seeing what results.</p>
            <p>It supports work across science, culture, art, technology, education, and research, with a particular interest in establishing public commons, institutions, and community spaces — the kind of infrastructure that lets collaboration happen at all. The foundation describes its approach through the butterfly effect: small, well-placed interventions that can produce outsized outcomes.</p>
            <div class="partner-role">
                <span class="partner-role-label">What this means for Bodhya</span>
                <p>Samagata backs the community-space and public-commons side of our work — the unglamorous groundwork of giving students in Bihar somewhere to gather, learn, and build together. It is also a long-standing supporter of FOSS United.</p>
            </div>
            <a href="https://samagata.org" target="_blank" rel="noopener noreferrer" class="partner-link">samagata.org →</a>
        </div>
    </div>
    <div class="partners-cta">
        <h2>Want to support this work?</h2>
        <p>If your organisation wants to help build Bihar's tech ecosystem, we would like to hear from you.</p>
        <a href="/contact" class="partners-btn">Get in touch</a>
    </div>
</div>
