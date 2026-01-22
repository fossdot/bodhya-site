+++
title = "Projects"
path = "/projects"
+++

## Open source projects built and maintained at Bodhya.   
<br>

<style>
  .projects-stack {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
  }

  .project-card {
      padding: 1.5rem;
      border-radius: 8px;
      background: #f5f5f5;
      border: 1px solid transparent;
      transition: all 0.3s ease;
      display: block;
      color: inherit;
  }
  .project-card:hover {
      background: #fff3ef;
      border: 1px solid #f3c2b3;
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .project-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 0.5rem;
      flex-wrap: wrap;
  }

  /* Project Title Link */
  .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #000;
      text-decoration: none;
      margin: 0;
  }
  .project-title:hover {
      text-decoration: none;
      color: #E2725B;
  }

  /* Status Badge */
  .status-badge {
      font-size: 0.75rem;
      padding: 2px 10px;
      border-radius: 12px;
      font-weight: 500;
  }
  
  /* Author Link */
  .author-link {
      color: #555;
      text-decoration: none;
      transition: all 0.2s ease;
  }
  .author-link:hover {
      color: #E2725B;
  }
</style>

<div class="projects-stack">

  <div class="project-card">
    <div class="project-header">
      <a href="https://github.com/akshitbhardwajhere/mentor_matchmaking" class="project-title">Mentor Matchmaking</a>
      <span class="status-badge" style="background-color: #ffffff; color: #8a0000; border: 1px solid #ffb8c0;">Not Usable Yet</span>
    </div>
    <p style="margin: 0 0 1rem 0; color: #555; line-height: 1.5;">
      A platform designed to foster mentorship opportunities for students. It connects tech enthusiasts with industry professionals through personalized matching, goal tracking, and streamlined communication.
    </p>
    <div style="font-size: 0.875rem; color: #666; border-top: 1px solid #e1e4e8; padding-top: 0.75rem;">
      <strong>Author:</strong> <a href="https://github.com/akshitbhardwajhere" target="_blank" class="author-link">Akshit Bhardwaj</a> &nbsp;|&nbsp; <strong>License:</strong> MIT      
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <a href="https://github.com/pritkr/listbrew" class="project-title">Listbrew</a>
      <span class="status-badge" style="background-color: #ffffff; color: #8a0000; border: 1px solid #ffb8c0;">Production Ready</span>
    </div>
    <p style="margin: 0 0 1rem 0; color: #555; line-height: 1.5;">
      Realtime Auto sync from Frappe to Listmonk.
      <br>
       No more manual CSV exports and newsletter list always stays up-to-date to any frappe app data.
    </p>
    <div style="font-size: 0.875rem; color: #666; border-top: 1px solid #e1e4e8; padding-top: 0.75rem;">
      <strong>Author:</strong> <a href="https://github.com/pritkr" target="_blank" class="author-link">Prit</a> &nbsp;|&nbsp; <strong>License:</strong> MIT
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <a href="https://github.com/satyamsinha17/Bodhya-Volunteers" class="project-title">Bodhya Volunteers</a>
      <span class="status-badge" style="background-color: #ffffff; color: #8a0000; border: 1px solid #ffb8c0;">Not Usable Yet</span>
    </div>
    <p style="margin: 0 0 1rem 0; color: #555; line-height: 1.5;">
      Volunteers are the backbone of the Bodhya community in Bihar. From organizing events to managing hackathons, initiatives are driven entirely by the volunteers.
    </p>
    <div style="font-size: 0.875rem; color: #666; border-top: 1px solid #e1e4e8; padding-top: 0.75rem;">
      <strong>Author:</strong> <a href="https://github.com/satyamsinha17" target="_blank" class="author-link">Satyam Sinha</a> &nbsp;|&nbsp; <strong>License:</strong> MIT
    </div>
  </div>

</div>

