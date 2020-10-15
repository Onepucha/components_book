import lmmRow from "./lmmRow.vue";

export default {
  title: "Components/Row",
  component: lmmRow,
  argTypes: {},
  parameters: {
    componentSubtitle: "Компонент строка.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmRow },
  template: '<lmm-row v-bind="$props" />',
});

export const Row = Template.bind({});

Row.args = {};
