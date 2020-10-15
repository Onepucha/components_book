import lmmAvatar from "./Avatar.vue";

export default {
    title: "Components/Avatar",
    component: lmmAvatar,
    argTypes: {
        textColor: {
            control: "color"
        },
        color: {
            control: "color"
        },
        badgeColor: {
            control: "color"
        },
        size: {
            control: {
                type: "select",
                options: ["large", "small"]
            },
        },
    },
    parameters: {
        componentSubtitle: "Компонент .",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmAvatar
    },
    template: '<lmm-avatar v-bind="$props" />',
});

export const Default = Template.bind({});

Default.args = {
   
};

