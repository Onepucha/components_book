import {
    storiesOf
} from "@storybook/vue";
import lmmButton from "./Button.vue";
import {
    withInfo
} from 'storybook-addon-vue-info';

export default {
    title: "Components/Button",
    component: lmmButton,
    argTypes: {
        backgroundColor: {
            control: "color"
        },
        textColor: {
            control: "color"
        },
        borderColor: {
            control: "color"
        },
        borderRadius: {
            control: "text"
        },
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"]
            },
        },
        icon: {
            control: {
                type: "select",
                options: ["left", "center", "right"]
            },
        },
    },
    parameters: {
        componentSubtitle: "Кнопка используется как триггер для выполнения определённого действия. Кнопка однозначно сообщает пользователю, что произойдёт после нажатия на неё.",
    },
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        lmmButton
    },
    template: '<lmm-button @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
export const Round = Template.bind({});
export const Primary = Template.bind({});
export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
export const Block = Template.bind({});
export const IconBtn = Template.bind({});

Default.args = {
    label: "Button",
};

Default.parameters = {
    docs: {
        storyDescription: "Обычная кнопка",
    },
};

Round.args = {
    label: "Button",
    round: true,
};

Round.parameters = {
    docs: {
        storyDescription: "Кнопка со скруглёнными углами",
    },
};

Primary.args = {
    label: "Button",
    primary: true,
};

Primary.parameters = {
    docs: {
        storyDescription: "Главная кнопка",
    },
};

Large.args = {
    size: "large",
    label: "Button",
};

Large.parameters = {
    docs: {
        storyDescription: "Большая кнопка",
    },
};

Medium.args = {
    size: "medium",
    label: "Button",
};

Medium.parameters = {
    docs: {
        storyDescription: "Средняя кнопка",
    },
};

Small.args = {
    size: "small",
    label: "Button",
};

Small.parameters = {
    docs: {
        storyDescription: "Маленькая кнопка",
    },
};

Block.args = {
    size: "medium",
    label: "Button",
    block: true,
};

Block.parameters = {
    docs: {
        storyDescription: "Со 100% шириной",
    },
};

IconBtn.args = {
    size: "medium",
    label: "Button",
    icon: "left",
    includeIco: true,
    iconLabel: "search",
};

IconBtn.parameters = {
    docs: {
        storyDescription: "С иконкой",
    },
};


storiesOf("Examples/Basic usage", module)
    .addDecorator(withInfo)
    .add(
        "Button group filled",
        (function () {
            return {
                components: {
                    lmmButton
                },
                template: `
        <div>
            <lmm-button label="I'm a button!"/>
            <lmm-button label="I'm a button!" primary="true"/>
            <lmm-button label="I'm a button!" success="true"/>
            <lmm-button label="I'm a button!" danger="true"/>
            <lmm-button label="I'm a button!" warning="true"/>
            <lmm-button label="I'm a button!" dark="true"/>
        </div>
      `
            };
        }), {
            info: {
                info: true,
                summary: 'Summary for MyComponent'
            }
        }
    )
    .add(
        "Button group border",
        (function () {
            return {
                components: {
                    lmmButton
                },
                template: `
          <div>
              <lmm-button label="I'm a button!" border="true"/>
              <lmm-button label="I'm a button!" border="true" primary="true"/>
              <lmm-button label="I'm a button!" border="true" success="true"/>
              <lmm-button label="I'm a button!" border="true" danger="true"/>
              <lmm-button label="I'm a button!" border="true" warning="true"/>
              <lmm-button label="I'm a button!" border="true" dark="true"/>
          </div>
        `
            };
        }), {
            info: `
        # This is _summary_

        You can write summary in [Markdown](https://en.wikipedia.org/wiki/Markdown).

        There is also syntax highlighting powered by [Highlight.js](https://highlightjs.org/).

        \`\`\`js
        export function foo() {
          console.log('Hello, World!')
        }
        \`\`\`
      `
        }
    );