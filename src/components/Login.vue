<template>
  
<span>
    LoginStatus is like:
    {{isLoggedIn}}
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
    this.$store.dispatch('login',{username:'shuntao',password:'123456'})
  }
}
</script>