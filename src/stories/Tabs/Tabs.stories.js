import lmmTab from "./Tab.vue";
import lmmTabs from "./Tabs.vue";

export default {
  title: "Components/Tabs",
  component: lmmTabs,
  argTypes: {},
  parameters: {
    componentSubtitle: "Компонент навигации в виде табов.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmTabs, lmmTab },
  template:
    '<lmm-tabs v-bind="$props"><lmm-tab v-for="item in children.label" :key="item.label"></lmm-tab></lmm-tabs>',
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
