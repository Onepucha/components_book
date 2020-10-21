import lmmNumberInput from "./NumberInput.vue";

export default {
  title: "Components/NumberInput",
  component: lmmNumberInput,
  argTypes: {
    color: {
        control: {
            type: "select",
            options: ["primary", "danger", "success", "warning", "dark", "light"],
        },
    },
    size: {
        control: {
            type: "select",
            options: ["medium", "small", "mini"],
        },
    },
  },
  parameters: {
    componentSubtitle: "Компонент .",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmNumberInput },
  template: `
  <div class="row app-is-ltr">
    <lmm-number-input  v-model="number" v-bind="$props"></lmm-number-input>
  </div>
  `,
});

export const Default = Template.bind({});
export const Label = Template.bind({});
export const Step = Template.bind({});
export const Decimal = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
    number: 5,
    min: 1,
    max: 10,
};

Label.args = {
    number: 5,
    min: 1,
    max: 10,
    label: 'Default:',
};

Step.args = {
    number: 5,
    min: 0,
    max: 50,
    step: 5,
    label: 'Step 5:',
};

Decimal.args = {
    number: 1.25,
    min: 0,
    max: 50,
    step: 1.25,
};

Disabled.args = {
    number: 5,
    min: 1,
    max: 10,
    isDisabled: true,
};