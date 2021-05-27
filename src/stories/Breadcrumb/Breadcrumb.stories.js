import lmmBreadcrumb from "./Breadcrumb.vue";

export default {
    title: "Components/Breadcrumb",
    component: lmmBreadcrumb,
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["primary", "danger", "success", "warning", "dark", "light"],
            },
        },
        align: {
            control: {
                type: "select",
                options: ["left", "center", "right"],
            },
        },
    },
    parameters: {
        componentSubtitle: "Компонент хлебные крошки.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmBreadcrumb,
    },
    template: `<lmm-breadcrumb v-bind="$props" />`,
    data: () => {
        return {

        }
    }
});

export const Default = Template.bind({});

Default.args = {
    items: [{
            title: 'Home',
            url: 'home'
        },
        {
            title: 'Link 1',
            url: 'link-1'
        },
        {
            title: 'Link 2',
            disabled: true
        },
        {
            title: 'Active',
            active: true
        }
    ]
};
