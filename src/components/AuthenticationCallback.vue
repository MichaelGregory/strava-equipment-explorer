<template>
  <div class="container">
    authentication callback
  </div>
</template>

<script>
  import store from '../store/index'
  import * as type from '../store/types'
  import { authenticationTokenExchange } from '../data/authentication'

  export default {
    methods: {
      authenticate () {
        let {code, error} = this.$route.query
        if (error || !code) {
          // todo handle auth error
          debugger
        }
        this.authenticationTokenExchange(code)
      },

      authenticationTokenExchange (code) {
        authenticationTokenExchange(code)
          .then(response => {
            let { access_token } = response.data
            console.log(store)
            console.log(store.dispatch)
            debugger
            store.dispatch({
              type: `authentication/${type.SetAuthentication}`,
              access_token
            }).then(() => {
              this.$router.replace('/')
            })
          })
      }
    },
    created () {
      this.authenticate()
    }
  }
</script>
