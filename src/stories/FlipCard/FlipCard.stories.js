import lmmFlipCard from "./FlipCard.vue";
import cactus from '../assets/cactus.jpg'

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
    image: cactus,
    sizeTitleFront: 'm',
    sizeTitleBack: 'm',
    sizeTextFront: 'm',
    sizeTextBack: 'm',
    margins: 'xl'
};