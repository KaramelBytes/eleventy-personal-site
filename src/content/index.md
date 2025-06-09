---
layout: home
title: "{{ site.title | default('Home Page') }}"
description: "{{ site.description | default('Welcome to the homepage. This is a great place to introduce yourself or your project.') }}"
permalink: /
currentPage: home # For active navigation link highlighting

hero_title: "Your Catchy Headline Here"
hero_subtitle: "A brief, engaging subtitle that explains what this site is about. Make it compelling!"

# Highlights Section: Customize these to showcase key features or aspects.
# Icons are from Font Awesome (e.g., fas fa-star, far fa-heart, fab fa-github)
# bg_color and hover_bg_color are Tailwind CSS color classes (e.g., pink-400, hover:pink-500)
highlights:
  - title: "Feature One"
    description: "Describe an important feature, skill, or section of your site."
    icon: "fas fa-star"
    bg_color: "pink-400"
    hover_bg_color: "pink-500"
  - title: "Feature Two"
    description: "Showcase another key aspect that users should know about."
    icon: "fas fa-lightbulb"
    bg_color: "purple-500"
    hover_bg_color: "purple-600"
  - title: "Feature Three"
    description: "Highlight a third important point or offering."
    icon: "fas fa-rocket"
    bg_color: "blue-400"
    hover_bg_color: "blue-500"
  - title: "Call to Action / Next Step"
    description: "Guide users towards an important action or page."
    icon: "fas fa-arrow-right"
    bg_color: "teal-500"
    hover_bg_color: "teal-600"

# Introduction Section: Edit this to provide a brief intro and a call to action.
intro_section:
  title: "Welcome to My Site"
  description: >
    This is a template. You can use this section to briefly introduce yourself or your project. 
    Tell your visitors who you are and what they can find here. 
  button_text: "Learn More About Me"
  button_link: "/about/" # Links to the about page by default
---
