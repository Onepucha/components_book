import lmmImage from "./Image.vue";
import lmmImages from "./Images.vue";

export default {
    title: "Components/Images",
    component: lmmImage,
    argTypes: {},
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
                <lmm-image v-bind="$props" :key="index"  v-for="(image, index) in 8" />
            </lmm-images>
        
    `,
});

export const Default = Template.bind({});

Default.args = {
    src: 'https://i.picsum.photos/id/41/400/400.jpg?hmac=NH3IBQXgqMIidNwbm1htW8tY8jFEK3UxM0zswT9bdXI',
    hover: 'dark'
};


