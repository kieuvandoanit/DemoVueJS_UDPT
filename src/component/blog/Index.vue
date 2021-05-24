<template>
  <div id='Blog'>
      <Header/>
      <hr>
      <Blog 
        v-for="blog in blogs"
        :key="blog.id"
        v-bind:blog="blog"
        />
      
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Header from '../Header';
import Blog from './Blog';
export default {
  components: {
    Header,
    Blog
  },
  created(){
    this.getBlogs()
  },
  computed:{...mapGetters(['blogs'])},
  methods:{...mapActions(['getBlogs'])}

}
</script>

<style>

</style>