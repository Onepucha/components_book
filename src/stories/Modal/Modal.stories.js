import lmmModal from "./Modal.vue";

export default {
    title: "Components/Modal",
    component: {
        lmmModal,
    },
    argTypes: {},
    parameters: {
        componentSubtitle: "Компонент модальное окно.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmModal,
    },
    template: `
        <lmm-modal v-bind="$props" />
    `,
});

export const Default = Template.bind({});

Default.args = {
    buttonsHidden: true,
    closeButton: false,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum cumque natus distinctio assumenda temporibus quidem praesentium ipsum fugit facere officia alias soluta impedit, repellendus eveniet ducimus asperiores illo itaque.',
};