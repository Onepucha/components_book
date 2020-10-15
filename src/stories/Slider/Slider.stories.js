import lmmSlider from "./Slider.vue";

export default {
  title: "Components/Slider",
  component: lmmSlider,
  argTypes: {
    color: { control: "color" },
  },
  parameters: {
    componentSubtitle: "Компонент выпадающего списка.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmSlider },
  template: `<div style="margin-top:40px;"><lmm-slider v-bind="$props" v-model="value" /></div>`,
});

export const Default = Template.bind({});
export const Color = Template.bind({});
export const Ticks = Template.bind({});
export const Range = Template.bind({});
export const Icons = Template.bind({});
export const TextFixed = Template.bind({});

Default.args = {
    value: 25,
    min: 1,
    max:50
};

Color.args = {
    value: 25,
    min: 1,
    max:50,
    color: "rgba(215, 14, 42, 1)",
};

Range.args = {
    value: [15, 25],
    min: 1,
    max:50
};

Ticks.args = {
    value: [15, 25],
    min: 1,
    max:50,
    ticks: true,
};

Icons.args = {
    value: 50,
    min: 1,
    max:100,
    icon: 'volume_up',
};

TextFixed.args = {
    value: 25,
    min: 1,
    max:50,
    textFixed: 'Default',
};
