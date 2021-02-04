import lmmIcon from "./lmmIcon.vue";

export default {
    title: "Components/Icon",
    component: lmmIcon,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"],
            },
        },
        color: {
            control: "color"
        },
        bg: {
            control: "color"
        },
    },
    parameters: {
        componentSubtitle: "Компонент иконки.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmIcon,
    },
    template: `<lmm-icon v-bind="$props"></lmm-icon>`,
});

export const Default = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const Custom = Template.bind({});
export const Color = Template.bind({});
export const Round = Template.bind({});

Default.args = {
    icon: 'done'
};

Small.args = {
    icon: 'done',
    size: 'small'
};

Medium.args = {
    icon: 'done',
    size: 'medium'
};

Large.args = {
    icon: 'done',
    size: 'large'
};

Custom.args = {
    icon: 'done',
    size: '80px'
};

Color.args = {
    icon: 'done',
    size: 'large',
    color: 'green'
};

Round.args = {
    icon: 'done',
    size: 'large',
    color: 'white',
    bg: 'black',
    round: true,
};


