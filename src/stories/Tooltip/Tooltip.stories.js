import lmmTooltip from "./Tooltip.vue";

export default {
  title: "Components/Tooltip",
  component: lmmTooltip,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmTooltip },
  template: '<lmm-tooltip v-bind="$props" />',
});

export const Default = Template.bind({});
export const Left = Template.bind({});
export const Top = Template.bind({});
export const Bottom = Template.bind({});
export const Right = Template.bind({});

Default.args = {
  text: "Tooltip position Left",
  position: "left",
  value: true,
};

Left.args = {
  text: "Tooltip position Left",
  position: "left",
  value: true,
};

Top.args = {
  text: "Tooltip position Top",
  position: "top",
  value: true,
};

Bottom.args = {
  text: "Tooltip position Bottom",
  position: "bottom",
  value: true,
};

Right.args = {
  text: "Tooltip position Right",
  position: "right",
  value: true,
};
