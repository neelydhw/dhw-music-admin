module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0,
  },
  plugins: ['prettier'],
};
