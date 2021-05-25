import lmmComparify from "./Comparify.vue";

export default {
    title: "Components/Comparify",
    component: lmmComparify,
    argTypes: {
        
    },
    parameters: {
        componentSubtitle: "Компонент слайдер для сравнения содержимого адаптивных изображений.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmComparify
    },
    template: `
    <div class="container">
        <div class="row">
            <div class="col-lg-24 col-xs-12">
                <lmm-comparify class="bg-white h-64 w-full" value="45">
                    <img slot="first" class="h-64 object-fit-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1525936607120-6a787fb05d6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cb09a29812d04718a5855dc61442612&auto=format&fit=crop&w=800&q=90"
                        alt="">
                    <img slot="second" class="object-fit-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1510149053388-87292573d661?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18d7ef1ac6ffcd0a644aaa1d330278c6&auto=format&fit=crop&w=800&q=90"
                        alt="">
                </lmm-comparify>
            </div>
        </div>
    </div>
    `,
});

export const Default = Template.bind({});
