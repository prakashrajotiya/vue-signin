<template>
  <div
    class="p-10 w-1/5 text-left mx-auto shadow-md drop-shadow-md mt-10 shadow-gray-300 rounded-md"
  >
    <h2 class="text-2xl mt-0 mb-4 text-center">Login</h2>
    <form @submit.prevent="loginSumbit">
      <div class="mb-3">
        <input
          type="text"
          class="h-12 p-3 border border-solid border-gray-300 rounded-md block w-full"
          v-model="useremail"
          placeholder="email"
        />
        <span class="text-danger" v-if="v$.useremail.$error">
          {{ v$.useremail.$errors[0].$message }}
        </span>
      </div>
      <div>
        <input
          type="password"
          class="h-12 p-3 border border-solid border-gray-300 rounded-md block w-full"
          name=""
          v-model="userpassword"
          id="password"
          placeholder="Password"
        />
      </div>
      <span class="text-danger" v-if="v$.userpassword.$error">
        {{ v$.userpassword.$errors[0].$message }}
      </span>
      <div class="text-center mt-3">
        <button class="bg-blue-500 text-white px-5 py-2.5 rounded-md">
          Login
        </button>
      </div>
    </form>
  </div>
  <div class="mt-3">
    Don't have account?
    <router-link to="/register" class="text-primary">Register</router-link>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import { useAuthStore } from "@/store/auth";
export default {
  name: "loginPage",
  setup() {
    const useremail = ref("");
    const userpassword = ref("");
    const rules = {
      useremail: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Email is not valid", email),
      },
      userpassword: {
        required: helpers.withMessage("Password is required", required),
      },
    };
    const v$ = useVuelidate(rules, { useremail, userpassword });
    const authStore = useAuthStore();
    const userDetail = computed(() => {
      return authStore.userDetail;
    });
    async function loginSumbit() {
      // console.log(v$.value.$errors);
      if (!v$.value.$errors.length > 0) {
        console.log("clear");
        const body = {
          email: useremail.value,
          password: userpassword.value,
        };
        v$.value.$validate();
        if (!v$.value.$errors.length > 0) {
          await authStore.loginUser(body).then((res) => {
            console.log("rest", res);
          });
        }
      }
    }
    return {
      useremail,
      userpassword,
      v$,
      loginSumbit,
      userDetail,
    };
  },
};
</script>

<style lang="scss" scoped></style>
