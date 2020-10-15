import lmmSelect from "./Select.vue";
import lmmSelectItem from "./SelectItem.vue";
import lmmSelectGroup from "./SelectGroup.vue";

export default {
  title: "Components/Select",
  component: lmmSelect,
  argTypes: {},
  parameters: {
    componentSubtitle: "Компонент выпадающего списка.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmSelect, lmmSelectItem, lmmSelectGroup },
  template: `
  <div>
    <lmm-select v-model="select" :icon="icon" icon-clear="iconClear" :label="label" :autocomplete="autocomplete" placeholder="Select" :description-text="descriptionText"  :success="success" :danger="danger"
      :warning="warning" :success-text="successText" :danger-text="dangerText" :warning-text="warningText" :width="width" :disabled="disabled" :max-selected="maxSelected" :multiple="multiple">
      <lmm-select-item :is-selected.sync="item.isSelected" :key="index" :value="item.value" :text="item.text" v-for="item,index in options" />
    </lmm-select>
  </div>
  `,
});

export const Default = Template.bind({});
export const Validators = Template.bind({});
export const Multiple = Template.bind({});

Default.args = {
  label: "Default",
  select: [],
  options: [
    {
      text: "label 1",
      value: 1,
    },
    {
      text: "label 2",
      value: 2,
    },
    {
      text: "label 3",
      value: 3,
    },
  ],
};

Validators.args = {
  label: "Success",
  select: [],
  success: true,
  successText: "Success",
  dangerText: "Danger",
  warningText: "Warning",
  options: [
    {
      text: "label 1",
      value: 1,
    },
    {
      text: "label 2",
      value: 2,
    },
    {
      text: "label 3",
      value: 3,
    },
  ],
};

Multiple.args = {
  label: "Multiple",
  multiple: true,
  select: [],
  options: [
    { text: "Square", value: 1 },
    { text: "Rectangle", value: 2 },
    { text: "Rombo", value: 3 },
    { text: "Romboid", value: 4 },
    { text: "Trapeze", value: 5 },
    { text: "Triangle", value: 6 },
    { text: "Polygon", value: 7 },
    { text: "Regular polygon", value: 8 },
    { text: "Circumference", value: 9 },
    { text: "Circle", value: 10 },
    { text: "Circular sector", value: 11 },
    { text: "Circular trapeze", value: 12 },
  ],
};
