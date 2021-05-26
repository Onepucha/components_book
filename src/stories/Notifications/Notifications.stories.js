import lmmNotifications from "./Notifications.vue";

export default {
  title: "Components/Notifications",
  component: lmmNotifications,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "danger", "success", "warning", "dark", "light"],
      },
    },
    colorText: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmNotifications },
  template: '<lmm-notifications v-bind="$props"  />',
});

export const topRight = Template.bind({});
export const topLeft = Template.bind({});
export const bottomRight = Template.bind({});
export const bottomLeft = Template.bind({});
export const bottomCenter = Template.bind({});
export const topCenter = Template.bind({});

topRight.args = {
  title: "Position top-right",
  text: "Lorem ipsum dolor sit amet, consectetur",
  position: "top-right",
};

topLeft.args = {
  title: "Position top-left",
  text: "Lorem ipsum dolor sit amet, consectetur",
  position: "top-left",
};

bottomRight.args = {
  title: "Position bottom-right",
  text: "Lorem ipsum dolor sit amet, consectetur",
  position: "bottom-right",
};

bottomLeft.args = {
  title: "Position bottom-left",
  text: "Lorem ipsum dolor sit amet, consectetur",
  position: "bottom-left",
};

bottomCenter.args = {
  title: "Position bottom-center",
  text: "Lorem ipsum dolor sit amet, consectetur",
  position: "bottom-center",
};

topCenter.args = {
  title: "Position top-center",
  text: "Lorem ipsum dolor sit amet, consectetur",
  position: "top-center",
};
