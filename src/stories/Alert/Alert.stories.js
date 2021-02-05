import lmmAlert from "./Alert.vue";
import lmmIcon from "../lmmIcon/lmmIcon.vue";

export default {
    title: "Components/Alert",
    component: lmmAlert, lmmIcon,
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["primary", "danger", "success", "warning", "dark", "light"],
            },
        },
    },
    parameters: {
        componentSubtitle: "Компонент уведомления пользователю.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmAlert,
    },
    template: `
        <div class="lmm-app-is-ltr">
            <lmm-alert v-bind="$props" />
        </div>
    `,
});

export const Default = Template.bind({});
export const Color = Template.bind({});
export const Closable = Template.bind({});
export const Icon = Template.bind({});

Default.args = {
    title: 'Title Default',
    text: 'Default Text',
};

Color.args = {
    title: 'Title Default',
    text: 'Default Text',
    color: 'success',
};

Closable.args = {
    title: 'Title Default',
    text: 'Default Text',
    closable: true,
};

Icon.args = {
    title: 'Title Default',
    text: 'Default Text',
    icon: 'attachment',
};


