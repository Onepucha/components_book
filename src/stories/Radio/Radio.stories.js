import lmmRadio from "./Radio.vue";

export default {
  title: "Components/Radio",
  component: lmmRadio,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "danger", "success", "warning", "dark", "light"],
      },
    },
    fontSize: { control: { type: "range", min: 14, max: 50, step: 1 } },
  },
  parameters: {
    componentSubtitle: "Компонент радио-кнопки.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmRadio },
  template:
    '<div><lmm-radio v-bind="$props" v-for="i in 2" :key="i">Radio button</lmm-radio></div>',
});

export const Default = Template.bind({});
export const Color = Template.bind({});

Default.args = {
  lmmValue: ["Default"],
  value: ["Default"],
  name: ["Default"],
};

Color.args = {
  lmmValue: ["Color"],
  value: ["Color"],
  name: ["Color"],
  color: "danger",
};
