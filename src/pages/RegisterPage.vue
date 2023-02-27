<template>
  <div
    class="p-10 w-1/5 text-left mx-auto shadow-md drop-shadow-md mt-10 shadow-gray-300 rounded-md"
  >
    <h2 class="text-2xl mt-0 mb-4 text-center">Register</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <input
          type="text"
          placeholder="Email"
          v-model="state.email"
          class="h-12 p-3 border border-solid border-gray-300 rounded-md block w-full"
        />
        <span v-if="v$.email.$error" style="color: red"
          >{{ v$.email.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <input
          type="password"
          placeholder="Password"
          v-model="state.password"
          class="h-12 p-3 border border-solid border-gray-300 rounded-md block w-full"
        />
        <span v-if="v$.password.$error" style="color: red"
          >{{ v$.password.$errors[0].$message }}
        </span>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="bg-blue-500 text-white px-5 py-2.5 rounded-md"
        >
          Register
        </button>
      </div>
    </form>
  </div>
  <div class="mt-3">
    Already registerd?
    <router-link to="/login" class="text-primary">Login </router-link>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
// import { toastError } from "@/utils/toast";
// import useEmitter from "@/utils/eventBus";

export default {
  components: {},
  setup() {
    // const emitter = useEmitter();

    const authStore = useAuthStore();
    const rules = computed(() => ({
      email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Email is not valid", email),
      },
      password: {
        required: helpers.withMessage("Password is required", required),
      },
    }));
    const state = reactive({
      email: "",
      password: "",
    });
    const v$ = useVuelidate(rules, state);
    const showToast = ref(false);
    const userDetail = computed(() => {
      return authStore;
    });

    function submitForm() {
      const params = {
        email: state.email,
        password: state.password,
      };

      v$.value.$validate();

      if (!v$.value.$errors.length > 0) {
        authStore.registerUser(params).then(() => {});
      }
    }

    return {
      submitForm,
      v$,
      state,
      userDetail,
      showToast,
    };
  },
};
</script>

<style lang="scss" scoped></style>
