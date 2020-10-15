import lmmAvatar from "./Avatar.vue";

export default {
    title: "Components/Avatar",
    component: lmmAvatar,
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
        lmmAvatar
    },
    template: '<lmm-avatar v-bind="$props" />',
});

export const Small = Template.bind({});
export const Large = Template.bind({});
export const Custom  = Template.bind({});

Small.args = {
  size: "small",
  src: 'https://www.dermosil.ru/storage/D0DCB1D3E6009494550EE62644C8044CA190B6192F38D7052A97530651105B81/aedbabfa258d417792d474acc12280fe/jpg/media/4df8db6b20f940a698a06ed4e292cdd3/Man.jpg'
};

Large.args = {
  size: "large",
  src: 'https://www.dermosil.ru/storage/D0DCB1D3E6009494550EE62644C8044CA190B6192F38D7052A97530651105B81/aedbabfa258d417792d474acc12280fe/jpg/media/4df8db6b20f940a698a06ed4e292cdd3/Man.jpg'
};

Custom.args = {
  size: "70px",
  src: 'https://www.dermosil.ru/storage/D0DCB1D3E6009494550EE62644C8044CA190B6192F38D7052A97530651105B81/aedbabfa258d417792d474acc12280fe/jpg/media/4df8db6b20f940a698a06ed4e292cdd3/Man.jpg'
};
