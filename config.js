import { configure, addDecorator } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import '!style-loader!css-loader!sass-loader!./src/scss-loader.scss';

addDecorator(
  withOptions({
    name: 'Vue Pomodoro',
  })
);

function loadStories() {
  require('./')
}

configure(loadStories, module);

