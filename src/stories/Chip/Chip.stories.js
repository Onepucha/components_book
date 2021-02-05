import lmmChip from "./Chip.vue";
import lmmAvatar from "../Avatar/Avatar.vue";

export default {
  title: "Components/Chip",
  component: lmmChip,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "danger", "success", "warning", "dark", "light"],
      },
    },
  },
  parameters: {
    componentSubtitle: "Компонент выпадающего списка.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    lmmChip, lmmAvatar 
  },
  template: `
  <div class="app-is-ltr">
    <lmm-chip v-bind="$props" @closeChip="closeChip()">{{ text }}</lmm-chip>
  </div>
  `,
});

export const Default = Template.bind({});
export const Color = Template.bind({});
export const Transparent = Template.bind({});
export const Closable = Template.bind({});

Default.args = {
  text: 'Default'
};


Color.args = {
  text: 'Default',
  color: "danger",
};

Transparent.args = {
  text: 'Default',
  color: "primary",
  transparent: true,
};

Closable.args = {
  text: 'Default',
  color: "primary",
  closable: true,
};

