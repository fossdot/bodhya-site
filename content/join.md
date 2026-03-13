+++
title = "Join Bodhya"
path = "/join"
description = "There are many ways to get involved — whether you're a student, educator, mentor, or community builder."
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
.join-page {
    background-color: var(--c-bg);
    color: var(--c-text-main);
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow-x: hidden;
}
.join-page h1, .join-page h2, .join-page h3 {
    font-family: var(--font-brand);
    font-weight: 700;
}
.join-hero {
    max-width: 720px;
    margin: 0 auto;
    padding: 72px 24px 56px;
    text-align: center;
}
.join-eyebrow {
    font-family: var(--font-brand);
    color: var(--c-accent);
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-bottom: 1rem;
    display: block;
}
.join-hero h1 {
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    line-height: 1.15;
    color: var(--c-text-main);
    margin-bottom: 1.25rem;
}
.join-hero p {
    font-size: 1.1rem;
    color: var(--c-text-muted);
    line-height: 1.7;
    max-width: 560px;
    margin: 0 auto;
}
.join-cards {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}
.join-card {
    background: var(--c-card-bg);
    border: 1px solid var(--c-border);
    border-radius: 12px;
    padding: 36px 32px;
    display: flex;
    flex-direction: column;
}
.join-card-tag {
    font-family: var(--font-brand);
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--c-accent);
    margin-bottom: 0.75rem;
}
.join-card h3 {
    font-size: 1.35rem;
    color: var(--c-text-main);
    margin-bottom: 1rem;
    line-height: 1.3;
}
.join-card ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;
    flex: 1;
}
.join-card ul li {
    color: var(--c-text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
    padding: 0.3rem 0 0.3rem 1.4rem;
    position: relative;
}
.join-card ul li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--c-accent);
    font-size: 0.85rem;
}
.join-card-cta {
    display: inline-block;
    background: var(--c-accent);
    color: #fff;
    font-family: var(--font-brand);
    font-weight: 600;
    font-size: 0.9rem;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    align-self: flex-start;
    transition: background 0.2s ease;
}
.join-card-cta:hover {
    background: var(--c-accent-hover);
    color: #fff;
    text-decoration: none;
}
.join-contact {
    border-top: 1px solid var(--c-border);
    text-align: center;
    padding: 56px 24px 72px;
}
.join-contact h2 {
    font-size: 1.8rem;
    color: var(--c-text-main);
    margin-bottom: 0.75rem;
}
.join-contact p {
    color: var(--c-text-muted);
    font-size: 1rem;
    margin-bottom: 1.5rem;
}
.join-contact a.join-email {
    color: var(--c-accent);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    border-bottom: 2px solid var(--c-border);
    padding-bottom: 2px;
    transition: border-color 0.2s;
}
.join-contact a.join-email:hover {
    border-bottom-color: var(--c-accent);
}
@media (max-width: 768px) {
    .join-hero {
        padding: 48px 20px 40px;
    }
    .join-cards {
        grid-template-columns: 1fr;
        padding: 0 16px 56px;
    }
    .join-card {
        padding: 28px 24px;
    }
}
</style>
<div class="join-page">
    <div class="join-hero">
        <span class="join-eyebrow">Get Involved</span>
        <h1>Be part of something that matters in Bihar.</h1>
        <p>Bodhya is built by students, mentors, educators, and volunteers. There's a place for you here — no matter where you are or how much time you have.</p>
    </div>
    <div class="join-cards">
        <div class="join-card">
            <div class="join-card-tag">Students</div>
            <h3>Learn, build, and get your first opportunity.</h3>
            <ul>
                <li>Join a community of peers building real-world projects</li>
                <li>Attend workshops and sessions in Bihar</li>
                <li>Find a peer group that matches your interests</li>
                <li>Start or join a FOSS Club at your college</li>
            </ul>
            <a href="https://chat.whatsapp.com/J3ZRgDd7iFR0blGMIsae4Q" target="_blank" rel="noopener noreferrer" class="join-card-cta">Join WhatsApp Community</a>
        </div>
        <div class="join-card">
            <div class="join-card-tag">Educators &amp; Colleges</div>
            <h3>Bring tech opportunities to your campus.</h3>
            <ul>
                <li>Host workshops and guest talks from industry experts</li>
                <li>Get curriculum guidance for tech courses</li>
                <li>Connect your students with internships and jobs</li>
            </ul>
            <a href="mailto:vishal@bodhya.net" class="join-card-cta">Get in Touch</a>
        </div>
        <div class="join-card">
            <div class="join-card-tag">Mentors &amp; Industry</div>
            <h3>Give Bihar's talent the shot it deserves.</h3>
            <ul>
                <li>Mentor students — flexible, fully remote</li>
                <li>Give a guest talk at a college event</li>
                <li>Review student projects and open-source code</li>
                <li>Offer internship or job opportunities</li>
            </ul>
            <a href="mailto:vishal@bodhya.net" class="join-card-cta">Become a Mentor</a>
        </div>
        <div class="join-card">
            <div class="join-card-tag">Volunteers</div>
            <h3>Help us organise, grow, and scale.</h3>
            <ul>
                <li>Event coordination and logistics</li>
                <li>Content creation and documentation</li>
                <li>Community management and outreach</li>
            </ul>
            <a href="https://ee.kobotoolbox.org/x/WVN2Y2fa" target="_blank" rel="noopener noreferrer" class="join-card-cta">Fill Volunteer Form</a>
        </div>
    </div>
    <div class="join-contact">
        <h2>Not sure where you fit?</h2>
        <p>Just reach out — we'll find the right place for you.</p>
        <a href="mailto:vishal@bodhya.net" class="join-email">vishal@bodhya.net</a>
    </div>
</div>
