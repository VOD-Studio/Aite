module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser'
        // sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 2,
        'prettier/prettier': ['error'],
        'semi': 2
    }
}