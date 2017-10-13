---
layout: "post"
title: "Multiple Galleries"
subtitle: "A post with multiple galleries arranged with ISOTOPE"
active: "tutorial"
image:
  feature: "pc007.jpg"
date: "2016-02-01"
header-img: "assets/img/postcover/pc007.jpg"
comments: "true"
gallery1: 
  - image_path: /assets/img/postcover/pc007.jpg
    image-caption: IMAGE TITLE
    image-copyright: © photorama
  - image_path: /assets/img/postcover/pc007.jpg
    image-caption: IMAGE TITLE
    image-copyright: © photorama
  - image_path: /assets/img/postcover/pc007.jpg
    image-caption: IMAGE TITLE
    image-copyright: © photorama 
gallery2: 
  - image_path: /assets/img/postcover/pc007.jpg
    image-caption: IMAGE TITLE
    image-copyright: © photorama
  - image_path: /assets/img/postcover/pc007.jpg
    image-caption: IMAGE TITLE
    image-copyright: © photorama
  - image_path: /assets/img/postcover/pc007.jpg
    image-caption: IMAGE TITLE
    image-copyright: © photorama 
---

<section id="content" role="main">
    <div class="wrapper">
        <br>
        <h2>{{page.title}}</h2>
        <p> Content of your post HERE </p>
        <p> Add as many paragraphs amongst your galleries as you want. </p>

        <!-- Gallery __-->
        {% include subgallery.html id="gallery1" %}
        <!-- end of GALLERY __ -->

        <p> Add as many galleries as you want, including as many photos as you want. Simply edit the <b>FRONT MATTER</b> of the post, adding the corresponding <b>path</b>, <b>caption</b> and <b>copyright</b> info for each one of your photos. </p>

        <!-- Gallery __-->
        {% include subgallery.html id="gallery2" %}
        <!-- end of GALLERY __ -->
    </div>
</section>

Photography by: <a href="https://unsplash.com/photos/j0g8taxHZa0">UNSPLASH</a>