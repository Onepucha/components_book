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
    data: () => {
        return {
            switch1: false,
        }
    }
});

export const Default = Template.bind({});
export const Color = Template.bind({});
export const Text = Template.bind({});
export const Icon = Template.bind({});

Default.args = {
    value: false,
    lmmValue: false,
};

Color.args = {
    value: true,
    lmmValue: true,
    color: 'success',
};

Text.args = {
    value: false,
    lmmValue: false,
    on: 'On',
    off: 'Off'
};

Icon.args = {
    value: false,
    lmmValue: false,
    color: 'danger',
    lmmIcon: 'close',
    lmmIconOn: 'close'
};


