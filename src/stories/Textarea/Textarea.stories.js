import lmmTextarea from "./Textarea.vue";

export default {
  title: "Components/Textarea",
  component: lmmTextarea,
  argTypes: {
    height: { control: "text" },
    width: { control: "text" },
    color: {
      control: {
        type: "select",
        options: ["primary", "danger", "success", "warning", "dark", "light"],
      },
    },
  },
  parameters: {
    componentSubtitle: "Компонент многострочного текстового ввода.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmTextarea },
  template: '<lmm-textarea v-bind="$props" />',
});

export const Default = Template.bind({});
export const Label = Template.bind({});
export const Counter = Template.bind({});

Default.args = {
  value: "To add a Textarea we have the component",
};

Label.args = {
  label: "Label in Textarea",
  value: "To add a Textarea we have the component",
};

Label.parameters = {
  docs: {
    storyDescription: "Элемент с меткой.",
  },
};

Counter.args = {
  label: "Label in Textarea",
  value: "To add a Textarea we have the component",
  counter: "40",
};

Counter.parameters = {
  docs: {
    storyDescription:
      "Бывают случаи, когда нам нужно, чтобы пользователь вводил для него только определенное количество символов, у нас есть свойство counter, значение представляет собой число и определяет максимальное.",
  },
};
