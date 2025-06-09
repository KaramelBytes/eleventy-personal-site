---
layout: work
title: "{{ site.author.name | default('My') }} Work & Portfolio"
description: "Explore the professional work, projects, and experience of {{ site.author.name | default('me') }}."
permalink: /work/
currentPage: work # For active navigation link highlighting

hero_title: "My Work & Experience"
hero_subtitle: "A showcase of my professional journey, projects, and skills."

# Optional: Introductory paragraph for your work page.
intro_text: |
  Welcome to my professional showcase. Here you can find highlights of my career, 
  key projects I've worked on, and skills I've developed. Feel free to explore 
  and reach out if you have any questions or potential collaborations.

# Experience Section: Detail your roles and responsibilities.
# Add or remove sections as needed. `description_points` is a list of achievements/responsibilities.
experience_sections:
  - title: "Senior Awesome Developer"
    company: "Tech Solutions Inc."
    dates: "Jan 2020 - Present"
    description_points:
      - "Led the development of a groundbreaking new platform."
      - "Collaborated with cross-functional teams to deliver high-quality products."
      - "Mentored junior developers and improved team productivity by 20%."
    link: "https://example.com/project-alpha" # Optional link to company or project
  - title: "Junior Sparkle Engineer"
    company: "Innovatech Ltd."
    dates: "Jun 2018 - Dec 2019"
    description_points:
      - "Contributed to the core features of the flagship product."
      - "Assisted in debugging and optimizing existing codebase."
      - "Gained valuable experience in agile development methodologies."

# Portfolio Section: Showcase your projects.
# Add or remove items as needed.
portfolio_intro: |
  Below are some of the projects I'm proud to have worked on. Each represents a unique 
  challenge and an opportunity for growth.

portfolio_items:
  - title: "Project Retrowave"
    description: "A stunning personal website template with a retrowave aesthetic, built with Eleventy and Tailwind CSS."
    image_url: "/assets/images/portfolio-placeholder-1.jpg" # User should replace with their image (e.g., 600x400px)
    project_url: "#" # Link to live project or repository
  - title: "Data Visualization Dashboard"
    description: "An interactive dashboard for visualizing complex datasets, helping users gain insights quickly."
    image_url: "/assets/images/portfolio-placeholder-2.jpg" # User should replace with their image
    project_url: "#"
  - title: "E-commerce Platform Redesign"
    description: "Led the UX/UI redesign for a major e-commerce site, improving conversion rates by 15%."
    image_url: "/assets/images/portfolio-placeholder-3.jpg" # User should replace with their image
    project_url: "#"

# Call to Action / Resume Link
# You can link to a full resume, LinkedIn profile, or other relevant professional page.
call_to_action:
  text: "View Full Resume on LinkedIn"
  url: "https://linkedin.com/in/yourusername" # Replace with actual link
---

<!-- 
  You can also add more content directly here in Markdown if the front matter sections 
  don't cover everything you want to showcase. This content will be rendered by 
  `{{ content | safe }}` in the work.njk layout. 
-->
