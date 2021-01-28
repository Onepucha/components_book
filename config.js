import { configure, addDecorator } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
 
addDecorator(
  withOptions({
    name: 'Vue Pomodoro',
  })
);

function loadStories() {
  require('./')
}

configure(loadStories, module);



