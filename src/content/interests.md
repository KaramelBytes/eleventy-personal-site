---
layout: interests
title: "{{ site.author.name | default('My') }} Interests & Hobbies"
description: "Explore the diverse interests, hobbies, and passions of {{ site.author.name | default('me') }}."
permalink: /interests/
currentPage: interests # For active navigation link highlighting

hero_title: "My Interests & Hobbies"
hero_subtitle: "A look into the passions and activities that inspire and recharge me."

# Interests Categories: Showcase your hobbies and passions.
# Each category has an ID (used for JavaScript toggles), title, description, icon, and subinterests.
# Each subinterest has a title, image (e.g., 600x400px), and description.
# Replace these examples with your own interests.
categories:
  - id: "creative-pursuits"
    title: "Creative Pursuits"
    description: "Exploring different forms of art and expression."
    icon: "fas fa-palette" # Font Awesome icon
    subinterests:
      - title: "Digital Art"
        image: "/assets/images/interests/placeholder-creative-1.jpg" # Replace with your image
        description: "Creating illustrations, designs, and digital paintings."
      - title: "Photography"
        image: "/assets/images/interests/placeholder-creative-2.jpg" # Replace with your image
        description: "Capturing moments, landscapes, and portraits through the lens."
      - title: "Creative Writing"
        image: "/assets/images/interests/placeholder-creative-3.jpg" # Replace with your image
        description: "Crafting stories, poems, and articles."

  - id: "tech-and-gaming"
    title: "Technology & Gaming"
    description: "Diving into the world of code, innovation, and interactive entertainment."
    icon: "fas fa-laptop-code"
    subinterests:
      - title: "Coding Side Projects"
        image: "/assets/images/interests/placeholder-tech-1.jpg" # Replace with your image
        description: "Building fun and useful applications in my spare time."
      - title: "Exploring New Tech"
        image: "/assets/images/interests/placeholder-tech-2.jpg" # Replace with your image
        description: "Keeping up with the latest advancements in the tech world."
      - title: "Retro & Modern Gaming"
        image: "/assets/images/interests/placeholder-gaming-1.jpg" # Replace with your image
        description: "Enjoying a wide range of video games, from classic titles to new releases."

  - id: "outdoor-activities"
    title: "Outdoor Activities"
    description: "Connecting with nature and staying active."
    icon: "fas fa-hiking"
    subinterests:
      - title: "Hiking & Trekking"
        image: "/assets/images/interests/placeholder-outdoor-1.jpg" # Replace with your image
        description: "Exploring scenic trails and challenging myself with new hikes."
      - title: "Cycling"
        image: "/assets/images/interests/placeholder-outdoor-2.jpg" # Replace with your image
        description: "Enjoying bike rides through city parks and countryside paths."
---

This page showcases some of the activities and passions that inspire and recharge me. You can customize the categories and sub-interests above to reflect your own hobbies. 

<!-- 
  The layout for this page uses a card-based system where clicking a category 
  can reveal its sub-interests. This interactivity is handled by JavaScript. 
  Ensure your category IDs are unique. 
-->
