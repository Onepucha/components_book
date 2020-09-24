import lmmList from "./List.vue";

export default {
  title: "Example/List",
  component: lmmList,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmList },
  template: '<lmm-list v-bind="$props" />',
});

export const ListUL = Template.bind({});
export const ListOL = Template.bind({});
ListUL.args = {
  typeList: "ul",
  tree: {
    label: "A cool folder",
    children: [
      {
        label: "A cool sub-folder 1",
        children: [
          { label: "A cool sub-sub-folder 1" },
          { label: "A cool sub-sub-folder 2" },
        ],
      },
      { label: "This one is not that cool" },
    ],
  },
};

ListOL.args = {
  typeList: "ol",
  tree: {
    label: "A cool folder",

    children: [
      {
        label: "A cool sub-folder 1",
        children: [
          { label: "A cool sub-sub-folder 1" },
          { label: "A cool sub-sub-folder 2" },
        ],
      },
      { label: "This one is not that cool" },
    ],
  },
};
