<template>
  <div>
    <!--
      <app-header v-bind:프롭스 속성이름=상위컴포넌트의 데이터이름></app-header>
    -->
    <app-header v-bind:propsdata="str"
                v-on:renew="renewStr">  <!-- AppHeader.vue()의 $emit('renew')이 이벤트 발생되어 전달받음-->
    </app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

// var AppHeader = {
//  template: '<header><h1>Header</h1></header>'
// }

// new Vue ({
//  data: {
//    str: 'h1'
//  }
// })

export default {
  data: function() {
    return {
      str: 'Header'
    }
  }, 
  components: {
    'app-header': AppHeader
  },
  methods: {
    'renewStr': function() {
      this.str = 'hi';
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
