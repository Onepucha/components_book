import lmmInput from "./Input.vue";

export default {
  title: "Components/Input",
  component: lmmInput,
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
            options: ["large", "normal", "small"],
        },
    }
  },
  parameters: {
    componentSubtitle: "Компонент .",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmInput },
  template: `
  <div class="vuesax-app-is-ltr">
    <lmm-input v-bind="$props"></lmm-input>
  </div>
  `,
});

export const Default = Template.bind({});
export const AutoFocus = Template.bind({});
export const Icon = Template.bind({});
export const Placeholder = Template.bind({});
export const Validations = Template.bind({});
export const Disabled = Template.bind({});
export const DescriptionText = Template.bind({});

Default.args = {
    label: 'Default',
    value: 'Default'
};

AutoFocus.args = {
    label: 'AutoFocus',
    autofocus: true,
};

Icon.args = {
    label: 'Icon',
    iconAfter: true,
    icon: 'search',
};

Placeholder.args = {
    labelPlaceholder: 'Placeholder',
};

Validations.args = {
    labelPlaceholder: 'Email Success',
    success: true,
    successText: 'The email is valid',
    valIconSuccess: 'done',
    color: 'success'
};

Disabled.args = {
    label: 'Disabled',
    disabled: true,
};

DescriptionText.args = {
    label: 'Disabled',
    descriptionText: 'Description text',
};