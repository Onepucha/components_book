import { configure, addDecorator } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import Vue from 'vue';

import lmmButton from './src/stories/Button/Button.vue';

addDecorator(
  withOptions({
    name: 'Vue Pomodoro',
  })
);

Vue.component('lmm-button', lmmButton);

function loadStories() {
  require('./')
}

configure(loadStories, module);



