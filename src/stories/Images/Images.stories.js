import lmmImage from "./Image.vue";
import lmmImages from "./Images.vue";

export default {
    title: "Components/Images",
    component: lmmImage,
    argTypes: {
        hover: {
            control: {
                type: "select",
                options: ["blur", "zoom", "default", "dark", "scale", "curtain"]
            },
        },
    },
    parameters: {
        componentSubtitle: "Компонент эффект картинок.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmImage,
        lmmImages
    },
    template: `
        <lmm-images v-bind="$props">
            <lmm-image v-bind="$props" :key="index" v-for="(image, index) in 8" />
        </lmm-images>
    `,
});

export const Default = Template.bind({});

Default.args = {
    src: 'https://demo.cloudimg.io/v7/https://img.scaleflex.com/truck.jpg?&w=594',
    hover: 'dark',
    alternating: false,
    notBorderRadius: false,
    notMargin: false,
};


