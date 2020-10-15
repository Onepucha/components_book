import lmmCol from "./lmmCol.vue";

export default {
  title: "Components/Col",
  component: lmmCol,
  argTypes: {},
  parameters: {
    componentSubtitle: "Компонент колонка.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmCol },
  template: '<lmm-col v-bind="$props" />',
});

export const Col = Template.bind({});

Col.args = {};
