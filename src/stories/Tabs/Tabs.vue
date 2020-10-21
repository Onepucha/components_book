<template lang="html">
  <div
    :class="[`lmm-tabs-${color}`, `lmm-tabs-position-${position}`]"
    class="con-lmm-tabs lmm-tabs"
  >
    <div class="con-ul-tabs">
      <ul
        ref="ul"
        :class="[`ul-tabs-${alignment}`]"
        class="ul-tabs lmm-tabs--ul"
      >
        <li
          v-for="(child, index) in children"
          ref="li"
          :class="{ activeChild: childActive == index }"
          :style="childActive == index ? styleTab : {}"
          class="lmm-tabs--li"
        >
          <button
            v-bind="child.attrs"
            :style="styleAlignIcon(child.icon)"
            class="lmm-tabs--btn"
            type="button"
            @click="activeChild(index)"
            v-on="child.listeners"
          >
          <i
              v-if="child.icon"
              :color="color"
              class="lmm-tabs--btn-icon material-icons"
            >{{ child.icon }}</i>
            <span v-if="child.label">{{ child.label }}</span>
          </button>

          <button
            v-if="child.tag"
            class="lmm-tabs--btn-tag"
            @click="clickTag(child)"
          >
          <i
              v-if="child.icon"
              :color="child.tagColor"
              class="lmm-tabs--btn-icon material-icons"
            >{{ child.tag }}</i>
          </button>
        </li>
      </ul>
      <span :style="stylex" class="line-lmm-tabs" />
    </div>
    <div class="con-slot-tabs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import "./Tabs.scss";

export default {
  name: "lmm-tabs",
  props: {
    value: {
      default: 0,
      type: [Number, String],
    },
    color: {
      default: "primary",
      type: String,
    },
    tagColor: {
      default: "primary",
      type: String,
    },
    alignment: {
      default: "left",
      type: String,
    },
    position: {
      default: "top",
      type: String,
    },
    children: {
      type: Array,
    },
    childActive: {
      type: Number,
    },
    heightx: {
      type: String,
    },
    topx: {
      type: String,
      default: "auto",
    },
    leftx: {
      type: String,
    },
    widthx: {
      type: String,
    },
  },
  computed: {
    styleTab() {
      return {
        color: this.color,
      };
    },
    stylex() {
      return {
        top: `${this.topx}px`,
        left: `${this.leftx}px`,
        width: `${this.widthx}px`,
        height: `${this.heightx}px`,
        background: `linear-gradient(30deg, ${this.color} 0%, ${this.color} 100%)`,
        boxShadow: `0px 0px 8px 0px ${this.color}`,
      };
    },
  },
  watch: {
    value(index) {
      const activeIndex = this.parseIndex(index);
      this.activeChild(activeIndex);
    },
  },
  mounted() {
    const activeIndex = this.parseIndex(this.value);
    this.childActive = activeIndex;
    this.$nextTick(() => {
      this.activeChild(activeIndex, true);
    });
  },
  methods: {
    clickTag(child) {
      this.$emit("click-tag", child);
    },
    styleAlignIcon(icon) {
      return icon ? "display:flex;align-items:center" : "";
    },
    parseIndex(index) {
      let activeIndex = this.childActive;
      if (index < 0) {
        activeIndex = 0;
      } else if (index >= this.$children.length) {
        activeIndex = this.$children.length - 1;
      } else if (typeof this.$children[index].$attrs.disabled === "undefined") {
        activeIndex = parseInt(index);
      }
      return activeIndex;
    },
    activeChild(index, initialAnimation) {
      initialAnimation = !!initialAnimation;
      const elem = this.$refs.li[index];
      if (this.childActive == index && !initialAnimation) {
        elem.classList.add("isActive");
        setTimeout(() => {
          elem.classList.remove("isActive");
        }, 200);
      }

      this.$children.map((item, item_index) => {
        if (item_index != index) {
          item.active = false;
        }
      });

      if (this.childActive > index) {
        this.$children[index].invert = true;
        this.$children[this.childActive].invert = false;
      } else {
        this.$children[this.childActive].invert = true;
        this.$children[index].invert = false;
      }

      this.$children[index].active = true;
      this.childActive = index;
      this.$emit("input", this.childActive);

      if (this.position == "left" || this.position == "right") {
        this.$children[index].vertical = true;
      }

      this.changePositionLine(elem, initialAnimation);
    },
    changePositionLine(elem, initialAnimation) {
      if (this.position == "left" || this.position == "right") {
        this.topx = elem.offsetTop;
        this.heightx = elem.offsetHeight;
        this.widthx = 2;
      } else {
        const update = () => {
          this.leftx = elem.offsetLeft;
          this.widthx = elem.offsetWidth;
          this.topx =
            elem.offsetHeight +
            (elem.getBoundingClientRect().top -
              this.$refs.ul.getBoundingClientRect().top);
        };
        if (!initialAnimation) {
          update();
        } else {
          setTimeout(update, 100);
        }
      }
    },
  },
};
</script>
