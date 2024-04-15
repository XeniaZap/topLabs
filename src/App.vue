<script>
import Registration from "./components/auth/Registration.vue";
import Login from "@/components/auth/login.vue";
import RegistrationPass from "@/components/auth/RegistrationPass.vue";
export default {
  components: {
    Login,
    Registration,
    RegistrationPass
  }
}
</script>

<template>
  <Registration />
</template>

<style>~
body {
  font-family: "Inter", sans-serif;
}
</style>
