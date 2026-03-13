+++
title = "About Bodhya"
path = "/about"
description = "Bodhya bridges Bihar's talented students with the tech opportunities and networks they deserve."
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
.about-page {
    background-color: var(--c-bg);
    color: var(--c-text-main);
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow-x: hidden;
}
.about-page h1, .about-page h2, .about-page h3 {
    font-family: var(--font-brand);
    font-weight: 700;
}
.about-hero {
    max-width: 800px;
    margin: 0 auto;
    padding: 72px 24px 56px;
}
.about-eyebrow {
    font-family: var(--font-brand);
    color: var(--c-accent);
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-bottom: 1.25rem;
    display: block;
}
.about-hero h1 {
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    line-height: 1.1;
    color: var(--c-text-main);
    margin-bottom: 1.5rem;
    max-width: 680px;
}
.about-hero .about-lead {
    font-size: 1.15rem;
    color: var(--c-text-muted);
    line-height: 1.75;
    max-width: 620px;
    border-left: 3px solid var(--c-accent);
    padding-left: 1.25rem;
    margin: 0;
}
.about-body {
    max-width: 680px;
    margin: 0 auto;
    padding: 0 24px 64px;
}
.about-body p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--c-text-muted);
    margin-bottom: 1.5rem;
}
.about-body p a {
    color: var(--c-accent);
    text-decoration: none;
    border-bottom: 1px solid var(--c-border);
    transition: border-color 0.2s;
}
.about-body p a:hover {
    border-bottom-color: var(--c-accent);
}
.about-pillars {
    background: var(--c-card-bg);
    border-top: 1px solid var(--c-border);
    border-bottom: 1px solid var(--c-border);
    padding: 56px 24px;
    margin-bottom: 64px;
}
.about-pillars-inner {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}
.about-pillar-label {
    font-family: var(--font-brand);
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--c-accent);
    margin-bottom: 0.6rem;
    display: block;
}
.about-pillar h3 {
    font-size: 1.1rem;
    color: var(--c-text-main);
    margin-bottom: 0.5rem;
}
.about-pillar p {
    font-size: 0.9rem;
    color: var(--c-text-muted);
    line-height: 1.65;
    margin: 0;
}
.about-name {
    max-width: 680px;
    margin: 0 auto;
    padding: 0 24px 64px;
}
.about-name-block {
    background: var(--c-card-bg);
    border: 1px solid var(--c-border);
    border-left: 4px solid var(--c-accent);
    border-radius: 0 8px 8px 0;
    padding: 28px 32px;
}
.about-name-block h2 {
    font-size: 1.1rem;
    color: var(--c-accent);
    margin-bottom: 0.6rem;
    font-family: var(--font-brand);
}
.about-name-block p {
    font-size: 1rem;
    color: var(--c-text-muted);
    line-height: 1.7;
    margin: 0;
}
.about-name-block em {
    font-style: italic;
    color: var(--c-text-main);
    font-weight: 600;
}
.about-supported {
    text-align: center;
    padding: 40px 24px;
    border-bottom: 1px solid var(--c-border);
}
.about-supported-label {
    font-family: var(--font-brand);
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--c-text-muted);
    display: block;
    margin-bottom: 16px;
}
.about-supported img {
    height: 36px;
    width: auto;
    opacity: 0.75;
    transition: opacity 0.2s;
    display: block;
    margin: 0 auto 16px;
}
.about-supported a {
    display: block;
}
.about-supported a:hover img {
    opacity: 1;
}
.about-cta {
    border-top: 1px solid var(--c-border);
    text-align: center;
    padding: 56px 24px 72px;
}
.about-cta h2 {
    font-family: var(--font-brand);
    font-size: 1.8rem;
    color: var(--c-text-main);
    margin-bottom: 0.75rem;
}
.about-cta p {
    color: var(--c-text-muted);
    font-size: 1rem;
    margin-bottom: 1.75rem;
}
.about-cta-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.about-btn {
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
.about-btn:hover {
    background: var(--c-accent-hover);
    color: #fff;
    text-decoration: none;
}
.about-btn-ghost {
    display: inline-block;
    color: var(--c-accent);
    font-family: var(--font-brand);
    font-weight: 600;
    font-size: 0.95rem;
    padding: 11px 24px;
    border-radius: 6px;
    border: 1.5px solid var(--c-accent);
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease;
}
.about-btn-ghost:hover {
    background: var(--c-accent);
    color: #fff;
    text-decoration: none;
}
@media (max-width: 768px) {
    .about-hero {
        padding: 48px 20px 40px;
    }
    .about-pillars-inner {
        grid-template-columns: 1fr;
        gap: 28px;
    }
    .about-body, .about-name {
        padding-left: 16px;
        padding-right: 16px;
    }
}
</style>
<div class="about-page">
    <div class="about-hero">
        <span class="about-eyebrow">About Bodhya</span>
        <h1>Bihar has the talent. We're building the bridge.</h1>
        <p class="about-lead">Bodhya emerged from a simple observation: Bihar has talented students, but they lack access to tech opportunities and networks that students in metros take for granted.</p>
    </div>
    <div class="about-pillars">
        <div class="about-pillars-inner">
            <div class="about-pillar">
                <span class="about-pillar-label">Community</span>
                <h3>FOSS Communities</h3>
                <p>Rooted in open source values — no gatekeeping, no geography, just contribution and collaboration.</p>
            </div>
            <div class="about-pillar">
                <span class="about-pillar-label">Network</span>
                <h3>Industry Professionals</h3>
                <p>Volunteer mentors from across India sharing real-world knowledge and opening doors to internships and jobs.</p>
            </div>
            <div class="about-pillar">
                <span class="about-pillar-label">Ecosystem</span>
                <h3>Local Educators</h3>
                <p>Partnering with colleges and educators to build tech culture on campuses across Bihar.</p>
            </div>
        </div>
    </div>
    <div class="about-supported">
        <span class="about-supported-label">Supported by</span>
        <a href="https://fossunited.org" target="_blank" rel="noopener noreferrer">
            <img src="/fossunited-logo.svg" alt="FOSS United">
        </a>
    </div>
    <div class="about-body">
        <p>Bodhya was created as a collective response to that gap. It brings together FOSS communities, industry professionals, and local educators to help students in Bihar build visibility, work on real-world open source projects, and access internships and jobs without having to leave home.</p>
        <p>Starting January 2026, Bodhya is being built full‑time as a community initiative — supported by <a href="https://fossunited.org" target="_blank" rel="noopener noreferrer">FOSS United's</a> ecosystem, volunteer mentors from across India, and students who are already proving that world‑class tech talent exists in Bihar when given the right opportunities.</p>
        <p>We will soon list the names of active volunteers here.</p>
    </div>
    <div class="about-name">
        <div class="about-name-block">
            <h2>The Name</h2>
            <p><em>Bodhya</em> means "worthy of knowledge" or "capable of being awakened" in Sanskrit. It reflects our belief that every student has potential — they just need the right spark and opportunity.</p>
        </div>
    </div>
    <div class="about-cta">
        <h2>Be part of the story.</h2>
        <p>Whether you're a student, educator, mentor, or just someone who believes in Bihar's potential.</p>
        <div class="about-cta-actions">
            <a href="/join" class="about-btn">Get Involved</a>
            <a href="mailto:vishal@bodhya.net" class="about-btn-ghost">vishal@bodhya.net</a>
        </div>
    </div>
</div>
