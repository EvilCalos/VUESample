<template>
  
<span>
    LoginStatus is like:
    {{userIsLoggedIn}}
</span>

</template>


<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    userIsLoggedIn: 'userIsLoggedIn'
  }),
  methods: mapActions([
    'login'
  ]),
  created () {
    this.$store.dispatch('login',{username:'calos',password:'123456'}).then((user)=>{
        console.log(111)
        
        console.log(user)
    })
  }
}
</script>