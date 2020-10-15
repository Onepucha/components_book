import lmmCollapse from "./Collapse.vue";
import lmmCollapseItem from "./CollapseItem.vue";

export default {
  title: "Components/Collapse",
  component: lmmCollapse,
  subcomponents: [lmmCollapseItem],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["default", "shadow", "border", "margin"],
      },
    },
  },
  parameters: {
    componentSubtitle:
      "Список элементов, которые скрыты и отображаются только при необходимости для хранения содержимого.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmCollapse, lmmCollapseItem },
  template: `<div>
              <lmm-collapse v-bind="$props">
                <lmm-collapse-item v-for="(item, index) in items" :key="'item' + item">
                  <div slot="header">
                      {{ item.name }}
                  </div>
                  <div slot="content">
                      {{ item.value }}
                  </div>
                </lmm-collapse-item>
              </lmm-collapse>
            </div>`,
});

export const Default = Template.bind({});

Default.args = {
  type: 'border',
  accordion: true,
  items: [
    { value: "CA", name: "Canada" },
    { value: "UK", name: "United Kingdom" },
  ],
};
