import lmmText from "./BodyText.vue";

export default {
  title: "Components/BodyText",
  component: lmmText,
  argTypes: {
    textColor: { control: "color" },
    size: {
      control: { type: "select", options: ["xl", "l", "m", "s", "xs"] },
    },
  },
  parameters: {
    componentSubtitle: "Компонент текста.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmText },
  template: '<lmm-text v-bind="$props" />',
});

export const Default = Template.bind({});
export const SizeXl = Template.bind({});
export const SizeL = Template.bind({});
export const SizeM = Template.bind({});
export const SizeS = Template.bind({});
export const SizeXs = Template.bind({});

Default.args = {
  text: "Text Default",
  size: "xl",
};

SizeXl.args = {
  text: "Text XL",
  size: "xl",
};

SizeXl.parameters = {
  docs: {
    storyDescription: "Текст размером XL",
  },
};

SizeL.args = {
  text: "Text L",
  size: "l",
};

SizeL.parameters = {
  docs: {
    storyDescription: "Текст размером L",
  },
};

SizeM.args = {
  text: "Text M",
  size: "m",
};

SizeM.parameters = {
  docs: {
    storyDescription: "Текст размером M",
  },
};

SizeS.args = {
  text: "Text S",
  size: "s",
};

SizeS.parameters = {
  docs: {
    storyDescription: "Текст размером S",
  },
};

SizeXs.args = {
  text: "Text XS",
  size: "xs",
};

SizeXs.parameters = {
  docs: {
    storyDescription: "Текст размером XS",
  },
};
