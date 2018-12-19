<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <transition name="fade">
      <div class="left" v-show="show"></div>
    </transition>
    <transition name="top">
    <div class="center" v-show="show"></div>
    </transition>
    <transition name="right">
        <div class="right" v-show="show"></div>
    </transition>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = true;
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
}
div{
  width: 200px;
  height: 200px;
  display: inline-block;
}
.left{
  background-color: red;
}
.center{
  background-color: black;
}
.right{
  background:skyblue;
}



    .fade-enter-active, .fade-leave-active {
      transition: all .5s;
animation: move .5s ease-out;
  }
  @keyframes move {
      from{
          transform: translate(-100%)
      }
      to{
          transform: translate(0)
    
      }
  }
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



    .top-enter-active, .top-leave-active {
      transition: all .5s;
animation: top .5s ease-out;
  }
  @keyframes top {
      from{
          transform: translateY(100%)
      }
      to{
          transform: translateY(0)
      }
  }
.top-enter, .top-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



    .right-enter-active, .right-leave-active {
      transition: all .5s;
animation: right .5s ease-out;
  }
  @keyframes right {
      from{
          transform: translate(100%)
      }
      to{
          transform: translate(0)
    
      }
  }
.right-enter, .right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
