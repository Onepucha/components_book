<template>
  <button type="button" name="button" v-on="$listeners" :class="classes" :disabled="disabled" :style="style">
    <i class="icon material-icons" :class="classesIcon" v-if="icon">{{
      iconLabel
    }}</i>
    <span>{{ label }}</span>
  </button>
</template>

<script>
  import "./button.scss";

  export default {
    name: "lmm-button",

    props: {
      /**
      Текст кнопки
      */
      label: {
        type: String,
        required: true,
      },
      /**
      Управление шириной кнопки. При значении 'true' растягивает кнопку на ширину родителя
      */
      block: {
        type: Boolean,
      },
      /**
      Вкл/Выкл иконки
      */
      includeIco: {
        type: Boolean,
      },
      /**
      Иконка кнопки
      */
      iconLabel: {
        type: String,
        default: null,
      },
      /**
      Позиция иконки
      */
      icon: {
        type: String,
        default: null,
        validator: function (value) {
          return ["left", "center", "right"].indexOf(value) !== -1;
        },
      },
      /**
      Тип кнопки с фоном
      */
      primary: {
        type: Boolean,
      },
      success: {
        type: Boolean,
      },
      danger: {
        type: Boolean,
      },
      warning: {
        type: Boolean,
      },
      dark: {
        type: Boolean,
      },
      /**
      Тип кнопки с закруглением
      */
      round: {
        type: Boolean,
      },
      /**
      Радиус для всех четырех углов
      */
      radius: {
        type: Boolean,
      },
      /**
      Управление возможности взаимодействия с компонентом
      */
      disabled: {
        type: Boolean,
        default: false,
      },
      /**
      Размер компонента кнопки
      */
      size: {
        type: String,
        default: "medium",
        validator: function (value) {
          return ["small", "medium", "large"].indexOf(value) !== -1;
        },
      },
      /**
      Свойство устанвливает цвет фона
      */
      backgroundColor: {
        type: String,
      },
      /**
      Свойство устанвливает цвет обводки
      */
      borderColor: {
        type: String,
      },
      border: {
        type: Boolean,
      },
      /**
      Свойство устанавливает радиус скругления уголков
      */
      borderRadius: {
        type: String,
      },
      /**
      Свойство устанавливает цвет текста
      */
      textColor: {
        default: null,
        type: String,
      },
    },

    computed: {
      classes() {
        return {
          button: true,
          "button--round": this.round,
          "button--primary": this.primary,
          "button--success": this.success,
          "button--danger": this.danger,
          "button--warning": this.warning,
          "button--dark": this.dark,
          "button--disabled": this.disabled,
          includeIco: this.includeIco,
          includeIconOnly: !this.label,
          "button--block": this.block,
          "button--radius": this.radius,
          "button--border": this.border,
          [`button--${this.size}`]: true,
        };
      },
      classesIcon() {
        return {
          [`${this.icon} material-icons`]: true,
        };
      },
      style() {
        return {
          backgroundColor: this.backgroundColor,
          color: this.textColor,
          borderRadius: `${this.borderRadius}px`,
          borderColor: this.borderColor,
        };
      },
    },
    methods: {
      onClick() {
        this.$emit("onClick");
      }
    },
  };
</script>
