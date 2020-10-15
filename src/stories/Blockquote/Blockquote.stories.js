import lmmBlockquote from "./Blockquote.vue";

export default {
    title: "Components/Blockquote",
    component: lmmBlockquote,
    argTypes: {
        textColor: {
            control: "color"
        },
        type: {
            control: {
                type: "select",
                options: ["primary", "danger", "success", "dark", "warning", "light", "code"]
            },
        },
    },
    parameters: {
        componentSubtitle: "Компонент цитаты или информации.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmBlockquote
    },
    template: '<lmm-blockquote v-bind="$props" />',
});

export const Default = Template.bind({});
export const Code = Template.bind({});

Default.args = {
    title: 'Default',
    text: "Text Default",
};

Code.args = {
    title: 'npm install',
    text: '<pre class="language-html">npm install</pre>',
    type: 'code',
};