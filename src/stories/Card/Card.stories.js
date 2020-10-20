import lmmCard from "./Card.vue";
import lmmButton from "../Button/Button.vue";

export default {
    title: "Components/Card",
    component: lmmCard,
    argTypes: {},
    parameters: {
        componentSubtitle: "Компонент .",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmCard,
        lmmButton
    },
    template: `
    <div>
        <lmm-card v-bind="$props" style="width:33%;">
            <slot slot="header">
                <div>
                    <h3 class="heading heading--m">{{ title }}</h3>
                </div>
            </slot>
            <slot slot="media">
                <div>
                    <img :src="image" alt="image">
                </div>
            </slot>
            <slot slot="content">
                <div>
                    <p class="paragrap paragrap--m">{{ text }}</p>
                </div>
            </slot>
            <slot slot="footer">
                <div>
                    <div class="container">
                    <div class="row end">
                        <lmm-button label="Button" />
                    </div>
                    </div>
                </div>
            </slot>
        </lmm-card>
    </div>    
    `,
});

export const Default = Template.bind({});

Default.args = {
    title: 'Default Title',
    image: 'https://image.freepik.com/free-vector/blue-gradient-geometric-shapes-background_23-2148262366.jpg',
    text: 'Default Text',
};
