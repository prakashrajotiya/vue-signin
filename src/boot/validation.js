import * as methods from "@vuelidate/validators";
export default ({ app }) => {
  app.config.globalProperties.$rules = {
    required() {
      return (val) => methods.required.$validator(val);
    },
  };
};
