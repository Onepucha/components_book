import { configure, addDecorator } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from 'storybook-addon-vue-info';
import Vue from 'vue';
 

import lmmButton from './src/stories/Button/Button.vue';

addDecorator(withInfo);

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



