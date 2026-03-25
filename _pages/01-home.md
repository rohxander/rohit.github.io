---
layout: default
permalink: /
title: Home
nav: true
nav_order: 1
---

<div class="editorial-frontpage pb-5">

  <!-- 1. HERO FEATURE (Latest Post) -->
  {% assign hero_post = site.posts.first %}
  {% if hero_post %}
  <section class="hero-block mb-5">
    <a href="{{ hero_post.url | relative_url }}" class="text-decoration-none d-block hover-zoom-container bg-dark position-relative" style="height: 60vh; min-height: 400px; max-height: 600px; border-bottom: 4px solid var(--global-theme-color);">
      {% if hero_post.thumbnail %}
      <img src="{{ hero_post.thumbnail | relative_url }}" class="w-100 h-100 aspect-pano" style="filter: brightness(0.6);" alt="{{ hero_post.title }}">
      {% endif %}
      <div class="position-absolute w-100 h-100 p-4 p-md-5 d-flex flex-column justify-content-end" style="top: 0; left: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%); z-index: 2;">
        <h1 class="text-white underline-sweep d-inline mb-3" style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-family: 'Inter', sans-serif; font-weight: 900; line-height: 1.1; text-transform: uppercase; letter-spacing: -0.04em;">
          {{ hero_post.title }}
        </h1>
        <p class="text-light lead mb-2" style="max-width: 700px; font-family: 'Inter', sans-serif; font-size: 1.25rem; line-height: 1.4;">{{ hero_post.description }}</p>
        <p class="text-white-50 text-uppercase m-0" style="font-family: 'Inter', sans-serif; font-weight: 700;">{{ hero_post.date | date: '%B %d, %Y' }}</p>
      </div>
    </a>
  </section>
  {% endif %}

  <!-- 2. THE LATEST ACTIVITIES (Horizontal Row of 3) -->
  <section class="latest-activities mb-5">
    <h2 class="text-uppercase mb-4 pb-2 border-bottom border-secondary" style="font-family: 'Inter', sans-serif; font-weight: 900; font-size: 2rem;">Latest Activities</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      
      {% assign all_activities = site.posts | concat: site.projects | sort: "date" | reverse %}
      
      {% assign count = 0 %}
      {% for activity in all_activities %}
        {% if activity.url == hero_post.url %}
          {% continue %}
        {% endif %}
        
        <div class="col mb-4">
          <article class="hoverable h-100">
            <a href="{{ activity.url | relative_url }}" class="text-decoration-none">
              <div class="hover-zoom-container mb-3" style="border: 2px solid #333;">
                {% if activity.thumbnail or activity.img %}
                <img src="{{ activity.thumbnail | default: activity.img | relative_url }}" class="w-100 aspect-sq" alt="{{ activity.title }}">
                {% endif %}
              </div>
              <small class="text-uppercase d-block mb-2" style="color: var(--global-theme-color); font-weight: 800; font-family: 'Inter', sans-serif;">{{ activity.date | date: '%b %d, %Y' }}</small>
              <h3 class="text-uppercase mb-2 underline-sweep" style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 1.25rem; line-height: 1.2; color: var(--global-text-color);">{{ activity.title }}</h3>
              <p class="text-muted" style="font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.4;">{{ activity.description | truncate: 100 }}</p>
            </a>
          </article>
        </div>
        
        {% assign count = count | plus: 1 %}
        {% if count == 3 %}
          {% break %}
        {% endif %}
      {% endfor %}

    </div>
  </section>

</div>
