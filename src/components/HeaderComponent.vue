<template>
  <header>
    <nav v-if="isLogin">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
    </nav>
    <div v-if="isLogin" class="text-white user-info">
      <!-- <span class="text-gray-200 mr-2"> Welcome, {{ userDetail }} </span> -->

      <!-- <router-link v-if="!isLogin" to="/login">Login </router-link> -->
      <router-link
        @click="logout"
        class="text-white p-1 bg-red-500"
        v-if="isLogin"
        to="/login"
        >Logout
      </router-link>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { computed } from "vue";
export default {
  setup() {
    const auth = useAuthStore();
    // const userDetail = computed(() => {
    //   const email = auth.userDetail.email;
    //   return email.substring(0, email.indexOf("@"));
    //   // return true;
    // });
    const isLogin = computed(() => {
      return auth.isLoggedIn;
    });
    function logout() {
      auth.logout();
    }
    return { isLogin, logout };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $primary;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  a {
    color: #fff;
    & + a {
      margin-left: 15px;
    }
  }
  .user-info {
    font-size: 14px;
  }
}
</style>
