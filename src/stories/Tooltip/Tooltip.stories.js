import lmmTooltip from "./Tooltip.vue";

export default {
  title: "Components/Tooltip",
  component: lmmTooltip,
  argTypes: {
    color: {
      control: "color",
    },
    position: {
      control: {
        type: "select",
        options: ["top", "right", "bottom", "left"]
      },
    },
  },
};

const Template = (args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    lmmTooltip
  },
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
};

Left.args = {
  text: "Tooltip position Left",
  position: "left",
};

Top.args = {
  text: "Tooltip position Top",
  position: "top",
};

Bottom.args = {
  text: "Tooltip position Bottom",
  position: "bottom",
};

Right.args = {
  text: "Tooltip position Right",
  position: "right",
};