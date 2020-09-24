import MyPage from "./Page";

export default {
  title: "Example/Page",
  component: MyPage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
});
