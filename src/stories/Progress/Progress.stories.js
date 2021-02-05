import lmmProgress from "./Progress.vue";

export default {
  title: "Components/Progress",
  component: lmmProgress,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "danger", "success", "warning", "dark", "light"],
      },
    },
  },
  parameters: {
    componentSubtitle: "Компонент индикатор.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { 
    lmmProgress,
  },
  template: `<lmm-progress v-bind="$props" />`,
});

export const Default = Template.bind({});
export const Color = Template.bind({});
export const Indeterminate = Template.bind({});

Default.args = {
    percent: 50,
    color: 'primary'
};

Color.args = {
    percent: 30,
    color: 'success'
};

Indeterminate.args = {
    color: 'primary',
    indeterminate: true,
};

