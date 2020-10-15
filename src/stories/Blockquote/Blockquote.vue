<template>
    <div :class="classes" :style="style">
        <div class="blockquote--icon" v-if="icon">
            <i class="icon material-icons" :class="classesIcon">
                {{ icon }}
            </i>
        </div>
        <div class="blockquote--content">
            <div class="blockquote--title">
                {{ title }}
            </div>
            <div class="blockquote--text">
                <slot name="text">
                    <span v-html="text"></span>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
    import "./Blockquote.scss";

    export default {
        name: "lmm-blockquote",

        props: {
            /**
            Произвольный текст заголовка
            */
            title: {
                default: null,
                type: String,
            },
            /**
            Произвольный текст
            */
            text: {
                default: null,
                type: String,
            },
            /**
            Тип компонента
            */
            type: {
                type: String,
                default: "primary",
                validator: function (value) {
                    return ["primary", "danger", "success", "dark", "warning", "light", "code"].indexOf(value) !== -
                        1;
                },
            },
            /**
            Свойство устанавливает цвет текста
            */
            textColor: {
                default: null,
                type: String,
            },
            /**
            Свойство устанавливает картинку
            */
            icon: {
                default: null,
                type: String,
            }
        },

        computed: {
            classes() {
                return {
                    blockquote: true,
                    [`blockquote--${this.type}`]: true,
                };
            },
            classesIcon() {
                return {
                    [`${this.icon} material-icons`]: true,
                };
            },
            style() {
                return {
                    color: this.textColor,
                };
            },
        },
    };
</script>