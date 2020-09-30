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
  listType: "ul",
  list: [
    {
      label: "label",
      list: [
        {
          label: "label 1.1",
        },
        {
          label: "label 1.2",
        },
      ],
    },
    {
      label: "label 2",
      list: [
        { label: "label 2.1" },
        {
          label: "label 2.2",
          list: [
            {
              label: "label 2.2.1",
            },
            {
              label: "label 2.2.2",
            },
          ],
        },
      ],
    },
  ],
};

ListOL.args = {
  listType: "ol",
  list: [
    {
      label: "label",
      list: [
        {
          label: "label 1.1",
        },
        {
          label: "label 1.2",
        },
      ],
    },
    {
      label: "label 2",
      list: [
        { label: "label 2.1" },
        {
          label: "label 2.2",
          list: [
            {
              label: "label 2.2.1",
            },
            {
              label: "label 2.2.2",
            },
          ],
        },
      ],
    },
  ],
};
