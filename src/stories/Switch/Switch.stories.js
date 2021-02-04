import lmmSwitch from "./Switch.vue";

export default {
    title: "Components/Switch",
    component: lmmSwitch,
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["primary", "danger", "success", "warning", "dark", "light"],
            },
        },
    },
    parameters: {
        componentSubtitle: "Компонент переключатель.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmSwitch,
    },
    template: `
        <lmm-switch v-bind="$props" v-model="switch1"> 
            <slot v-if="on" slot="on">
                {{on}}
            </slot>
            <slot v-if="off" slot="off">
                {{off}}
            </slot>
        </lmm-switch>
    `,
});

export const Default = Template.bind({});
export const Color = Template.bind({});
export const Text = Template.bind({});
export const Icon = Template.bind({});

Default.args = {
    value: false,
    lmmValue: false,
    switch1:false,
};

Color.args = {
    value: true,
    lmmValue: true,
    switch1:true,
    color: 'success',
};

Text.args = {
    value: false,
    lmmValue: false,
    switch1:true,
    on: 'On',
    off: 'Off'
};

Icon.args = {
    value: false,
    lmmValue: false,
    switch1:true,
    color: 'danger',
    lmmIcon: 'close',
    lmmIconOn: 'close'
};


