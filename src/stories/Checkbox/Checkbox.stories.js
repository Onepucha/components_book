import lmmCheckbox from "./Checkbox.vue";

export default {
  title: "Components/Checkbox",
  component: lmmCheckbox,
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
    componentSubtitle: "Компонент чекбокса.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmCheckbox },
  template:
    '<div><lmm-checkbox v-bind="$props" v-for="i in 2" :key="i">Checkbox</lmm-checkbox></div>',
});

export const Default = Template.bind({});
export const Color = Template.bind({});

Default.args = {

};

Color.args = {
  color: "success",
};
