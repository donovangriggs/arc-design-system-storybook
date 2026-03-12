import '@arctech/tokens/css/tokens.css';
import { defineCustomElements } from '@arctech/core/loader';
import { createApp } from 'vue';
import App from './App.vue';

defineCustomElements(window);

createApp(App).mount('#app');
