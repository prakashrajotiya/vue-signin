import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const toastSuccess = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
  });
};
export const toastError = (msg) => {
  toast.error(msg, {
    position: "bottom-right",
  });
};
