import lmmAvatar from "./Avatar.vue";
import mdx from './Avatar.mdx';

export default {
    title: "Components/Avatar",
    component: lmmAvatar,
    argTypes: {
      borderRadius: { control: "text" },
      textColor: {
        control: "color"
      },
      color: {
        control: "color"
      },
      size: {
        control: {
          type: "select",
          options: ["small", "medium", "large"]
        },
      },
      badgeColor: {
        control: {
          type: "select",
          options: ["primary", "danger", "success", "warning", "dark", "light"]
        },
      },
    },
    parameters: {
        docs: {
            page: mdx,
        },
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

export const Default = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});
export const Custom  = Template.bind({});

Default.args = {
  size: "large",
  text: "Text Default"
};

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
