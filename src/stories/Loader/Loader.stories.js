import lmmLoader from "./Loader.vue";

export default {
    title: "Components/Loader",
    component: lmmLoader,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"]
            },
        },
        color: {
            control: {
                type: "select",
                options: ["primary", "danger", "success", "warning", "dark", "light"],
            },
        },
    },
    parameters: {
        componentSubtitle: "Компонент loader.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmLoader,
    },
    template: `<lmm-loader style="margin-top: 20px;" v-bind="$props" />`,
    data: () => {
        return {

        }
    }
});

export const Default = Template.bind({});

Default.args = {

};
