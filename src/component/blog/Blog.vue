<template>
  <div id="blog_item">
      <div class="blog_thumb">
          <img v-bind:src="blog.url_image" alt="">
      </div>
      <div class="blog_description">
          <div class="title">{{blog.title}}</div>
          <div class="author">Tác giả: {{blog.author}}</div>
          <div class="post_time">{{blog.post_time}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        blog: {
            type: Object,
            default: null
        }
    }
}
</script>

<style>
    #blog_item{
        display: flex;
        margin-bottom: 15px;
    }
    .blog_thumb{
        margin-right: 5px;
    }
    .blog_description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .blog_description .title{
        font-size: 20px;
        font-weight: 700;

    }
    .author{
        font-size: 14px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    .post_time{
        font-size: 16px;
        font-weight: 500;
    }
</style>