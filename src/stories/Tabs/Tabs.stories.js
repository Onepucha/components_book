import lmmTabs from "./Tabs.vue";

export default {
  title: "Example/Tabs",
  component: lmmTabs,
  argTypes: {},
  parameters: {
    componentSubtitle: "Компонент навигации в виде табов.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmTabs },
  template: '<lmm-tabs v-bind="$props" />',
});

export const Default = Template.bind({});

Default.args = {
  value: 0,
  children: [
    {
      label: "label1",
    },
    {
      label: "label2",
    },
    {
      label: "labe3",
    },
  ],
};
