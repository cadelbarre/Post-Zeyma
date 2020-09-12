<template>
  <div id="app">
      	<transition 
      	    name="router-animated" mode="out-in"
      	    leave-active-class="animated fadeOut" 
      	    enter-active-class="animated fadeIn">
      	    <router-view/>
    	</transition>
  </div>
</template>

<script>
export default {
  components:{
    }
  }
</script>


<style>
@import url('./assets/css/style.css');
@import url('./assets/css/animate.css');
@import url('./assets/css/post.css');

.router-link-exact-active {
  color: #035aa6 !important;
  font-weight: 400;
  border-bottom: 2px solid #035aa6;
}
</style>
