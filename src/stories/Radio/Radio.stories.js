import lmmRadio from "./Radio.vue";

export default {
  title: "Example/Radio",
  component: lmmRadio,
  argTypes: {
    color: { control: "color" },
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
    '<div><lmm-radio v-bind="$props" v-for="i in 2" :key="i">1231</lmm-radio></div>',
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
  color: "rgba(215, 14, 42, 1)",
};
