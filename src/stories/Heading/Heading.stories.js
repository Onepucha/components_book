import lmmHeading from "./Heading.vue";

export default {
  title: "Example/Heading",
  component: lmmHeading,
  argTypes: {
    textColor: { control: "color" },
    size: {
      control: { type: "select", options: ["xl", "l", "m", "s", "xs"] },
    },
    margins: {
      control: { type: "select", options: ["xl", "l", "m", "s", "xs"] },
    },
  },
  parameters: {
    componentSubtitle: "Компонент заголовка.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmHeading },
  template: '<lmm-heading v-bind="$props" />',
});

export const Default = Template.bind({});
export const SizeXl = Template.bind({});
export const SizeL = Template.bind({});
export const SizeM = Template.bind({});
export const SizeS = Template.bind({});
export const SizeXs = Template.bind({});

Default.args = {
  title: "Heading Default",
  size: "xl",
  margins: "xl",
};

SizeXl.args = {
  title: "Heading XL",
  size: "xl",
  margins: "xl",
};

SizeXl.parameters = {
  docs: {
    storyDescription: "Заголовок размером XL",
  },
};

SizeL.args = {
  title: "Heading L",
  size: "l",
  margins: "l",
};

SizeL.parameters = {
  docs: {
    storyDescription: "Заголовок размером L",
  },
};

SizeM.args = {
  title: "Heading M",
  size: "m",
  margins: "m",
};

SizeM.parameters = {
  docs: {
    storyDescription: "Заголовок размером M",
  },
};

SizeS.args = {
  title: "Heading S",
  size: "s",
  margins: "s",
};

SizeS.parameters = {
  docs: {
    storyDescription: "Заголовок размером S",
  },
};

SizeXs.args = {
  title: "Heading XS",
  size: "xs",
  margins: "xs",
};

SizeXs.parameters = {
  docs: {
    storyDescription: "Заголовок размером XS",
  },
};
