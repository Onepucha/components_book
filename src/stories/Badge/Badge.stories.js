import lmmBadge from "./Badge.vue";

export default {
  title: "Example/Badge",
  component: lmmBadge,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    status: {
      control: {
        type: "select",
        options: ["positive", "negative", "neutral", "error", "warning"],
      },
    },
  },
  parameters: {
    componentSubtitle: "Компонент значки.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmBadge },
  template: '<lmm-badge v-bind="$props" />',
});

export const Default = Template.bind({});

Default.args = {
  text: "Text Default",
  status: "neutral",
};
