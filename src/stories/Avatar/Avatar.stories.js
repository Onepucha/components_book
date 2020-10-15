import lmmAvatar from "./Avatar.vue";

export default {
    title: "Components/Avatar",
    component: lmmAvatar,
    argTypes: {
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

