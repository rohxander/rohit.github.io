---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 2
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="header-bar mb-4">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
{% endif %}

<!-- Dynamic Tag Pill Bar -->
<div class="tag-filter-container mb-5 pb-3 border-bottom border-dark">
  <button class="tag-btn active" data-filter="all">#All</button>
  
  {% assign raw_tags = "" | split: "," %}
  {% for post in site.posts %}
    {% for tag in post.tags %}
      {% assign raw_tags = raw_tags | push: tag %}
    {% endfor %}
  {% endfor %}
  {% assign unique_tags = raw_tags | uniq | sort %}
  
  {% for t in unique_tags %}
    {% if t != "" %}
    <button class="tag-btn" data-filter="{{ t | downcase }}">#{{ t }}</button>
    {% endif %}
  {% endfor %}
</div>

<!-- Featured Posts section disabled for simplicity to allow global filtering across all posts seamlessly -->

<ul class="post-list p-0" style="list-style: none;">
  {% assign postlist = site.posts %}
  {% for post in postlist %}

  {% if post.external_source == blank %}
    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
  {% else %}
    {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
  {% endif %}
  {% assign year = post.date | date: "%Y" %}

  <li class="post-item mb-5" data-tags="{% for tag in post.tags %}{{ tag | downcase }} {% endfor %}">
    <div class="row">
      <div class="col-sm-9 order-2 order-sm-1">
        <h3 class="mb-2 underline-sweep" style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 1.5rem; line-height: 1.2;">
          <a class="text-decoration-none" style="color: var(--global-text-color);" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p class="text-muted" style="font-family: 'Inter', sans-serif; font-size: 1.05rem; line-height: 1.5;">{{ post.description }}</p>
        
        <p class="post-meta text-uppercase mt-3" style="font-size: 0.85rem; font-weight: 700; color: var(--global-theme-color); font-family: 'Inter', sans-serif;">
          {{ read_time }} min read &nbsp; &middot; &nbsp; {{ post.date | date: '%B %d, %Y' }}
          
          {% if post.tags.size > 0 %}
          &nbsp; &middot; &nbsp;
            {% for tag in post.tags %}
              <span class="text-muted">#{{ tag }}</span>{% unless forloop.last %} {% endunless %}
            {% endfor %}
          {% endif %}
        </p>
      </div>

      {% if post.thumbnail %}
      <div class="col-sm-3 order-1 order-sm-2 mb-3 mb-sm-0">
        <a href="{{ post.url | relative_url }}">
          <div class="hover-zoom-container" style="border: 2px solid #333; height: 100%;">
            <img class="w-100 h-100 aspect-sq" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
          </div>
        </a>
      </div>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>

</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.tag-btn');
  const posts = document.querySelectorAll('.post-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active from all
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add active to clicked
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      posts.forEach(post => {
        if (filter === 'all') {
          post.style.display = 'block';
        } else {
          const tags = post.getAttribute('data-tags') || "";
          if (tags.includes(filter)) {
            post.style.display = 'block';
          } else {
            post.style.display = 'none';
          }
        }
      });
    });
  });
});
</script>

<style>
.tag-btn {
  background: transparent;
  color: var(--global-text-color);
  border: 1px solid var(--global-divider-color);
  padding: 6px 18px;
  border-radius: 20px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-transform: lowercase;
}
.tag-btn:hover {
  background: var(--global-theme-color);
  color: #000;
  border-color: var(--global-theme-color);
}
.tag-btn.active {
  background: var(--global-theme-color);
  color: #000;
  border-color: var(--global-theme-color);
}
</style>
