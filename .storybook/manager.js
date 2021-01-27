import { addons } from "@storybook/addons";
import lmm from "./lmm";
import "./titleAddon";
import 'storybook-addon-vue-info/lib/register'

addons.setConfig({
  theme: lmm,
});
