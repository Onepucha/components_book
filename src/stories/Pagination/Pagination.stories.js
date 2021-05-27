import lmmPagination from "./Pagination.vue";

export default {
  title: "Components/Pagination",
  component: lmmPagination,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "danger", "success", "warning", "dark", "light"],
      },
    },
  },
  parameters: {
    componentSubtitle: "Компонент пагинация.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    lmmPagination,
  },
  template: `<lmm-pagination v-bind="$props" />`,
  data: () => {
    return {

    }
  }
});

export const Default = Template.bind({});

Default.args = {
    total: 20,
    vModel: 'currentx',
};
