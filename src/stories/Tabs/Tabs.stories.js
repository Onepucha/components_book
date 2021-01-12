import lmmTab from "./Tab.vue";
import lmmTabs from "./Tabs.vue";

export default {
  title: "Components/Tabs",
  component: lmmTabs,
  argTypes: {
    color: {
      control: {
          type: "select",
          options: ["primary", "danger", "success", "warning", "dark", "light"],
      },
    },
  },
  parameters: {
    componentSubtitle: "Компонент навигации в виде табов.",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { lmmTab, lmmTabs },
  template:
    `
    <div>
      <lmm-tabs v-bind="$props">
        <lmm-tab v-for="(item, index) in children" :key="'item' + index">
          <div class="con-tab-ejemplo">
            {{ item.content }}
          </div>
        </lmm-tab>
      </lmm-tabs>
    </div>
    `,
});

export const Default = Template.bind({});
export const Left = Template.bind({});
export const Right = Template.bind({});
export const Fixed = Template.bind({});

Default.args = {
  children: [
    {
      label: "Tab 1",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
    {
      label: "Tab 2",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
    {
      label: "Tab 3",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
  ],
};

Left.args = {
  children: [
    {
      label: "Tab 1",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
    {
      label: "Tab 2",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
    {
      label: "Tab 3",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
  ],
  position: 'left',
};

Right.args = {
  children: [
    {
      label: "Tab 1",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
    {
      label: "Tab 2",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
    {
      label: "Tab 3",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
  ],
  position: 'right',
};

Fixed.args = {
  children: [
    {
      label: "Tab 1",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
    {
      label: "Tab 2",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
    {
      label: "Tab 3",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex quis, veniam voluptatum consectetur repudiandae praesentium doloribus totam eius soluta iure ducimus, quam repellendus odit sapiente iusto sint mollitia nesciunt!'
    },
  ],
  alignment: 'fixed',
};