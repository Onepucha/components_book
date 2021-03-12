import lmmFlipCard from "./FlipCard.vue";

export default {
    title: "Components/FlipCard",
    component: lmmFlipCard,
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["primary", "danger", "success", "warning", "dark", "light"],
            },
        },
    },
    parameters: {
        componentSubtitle: "Компонент переворачивающиеся карточки.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmFlipCard
    },
    template: '<lmm-flip-card v-bind="$props" />',
});

export const Default = Template.bind({});

Default.args = {
    titleFront: 'Title front',
    textFront: 'Text front',
    titleBack: 'Title back',
    textBack: 'Text back',
    name: 'Example slide description',
    image: 'https://images.pexels.com/photos/6869100/pexels-photo-6869100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    sizeTitleFront: 'm',
    sizeTitleBack: 'm',
    sizeTextFront: 'm',
    sizeTextBack: 'm',
    margins: 'xl'
};