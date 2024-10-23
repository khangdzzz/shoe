// // composables/useValidation.js
// import { ref } from 'vue';

// export function useValidation() {
//   const errors = ref('');

//   const setError = (code: string, message: string) => {
//     errors.value[field] = message;
//   };

//   const clearError = (field) => {
//     delete errors.value[field];
//   };

//   const clearAllErrors = () => {
//     errors.value = {};
//   };

//   return {
//     errors,
//     setError,
//     clearError,
//     clearAllErrors,
//   };
// }
