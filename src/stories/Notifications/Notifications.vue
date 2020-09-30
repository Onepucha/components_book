<template lang="html">
  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div
      name="lmm-notifications"
      v-if="active"
      ref="notifications"
      :style="stylex"
      :class="[
        `lmm-noti-${position}`,
        `lmm-noti-${color}`,
        { activeNoti: active },
      ]"
      class="lmm-notifications"
      @click="clickNoti"
    >
      <div class="content-noti">
        <div class="con-text-noti">
          <h3 v-html="title" />
          <p v-html="text" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import "./Notifications.scss";

export default {
  name: "lmm-notifications",

  props: {
    fullWidth: {
      type: Boolean,
    },
    color: {
      type: String,
      default: "rgb(0, 92, 254)",
    },
    colorText: {
      type: String,
      default: "rgb(255, 255, 255)",
    },
    active: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: "bottom-right",
    },
    time: {
      type: Number,
      default: 3000,
    },
    fixed: {
      type: Boolean,
    },
  },
  data: () => ({
    cords: {
      top: null,
      left: null,
      right: null,
      bottom: null,
    },
  }),
  computed: {
    fillingStyle() {
      return {
        left: this.cords.left ? "-100px" : null,
        right: this.cords.right ? "-100px" : null,
        background: this.color,
      };
    },
    stylex() {
      return {
        ...this.cords,
        background: this.color,
        color: this.colorText,
        width: this.fullWidth ? `calc(100% - 14px)` : ``,
        maxWidth: this.fullWidth ? "none" : `350px`,
      };
    },
  },
  created() {
    setTimeout(() => {
      this.moverNotis();
    }, 0);
    this.changeCords();
  },
  mounted() {
    if (!this.fixed) {
      setTimeout(() => {
        this.closeNoti();
      }, this.time);
    }
  },
  methods: {
    clickNoti() {
      this.active = false;
      this.click ? this.click() : null;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.opacity = 0;
      let transformx = el.style.transform;
      if (this.cords.left == "50%" || this.fullWidth) {
        transformx += ` translateY(${this.cords.top ? "-" : ""}100%)`;
      } else {
        transformx += ` translateX(${this.cords.left ? "-" : ""}100%)`;
      }
      el.style.transform = transformx;
      setTimeout(() => {
        done();
        this.moverNotis();
      }, 150);
    },
    closeNoti() {
      this.active = false;
    },
    changeCords() {
      let positions = this.position.split("-");
      let search = (text) => {
        return positions.indexOf(text) != -1;
      };
      if (search("top")) {
        this.cords.top = "0px";
      }
      if (search("bottom")) {
        this.cords.bottom = "0px";
      }
      if (search("right")) {
        this.cords.right = "0px";
      }
      if (search("left")) {
        this.cords.left = "0px";
      }

      if (search("center")) {
        this.cords.left = "50%";
      }
    },
    moverNotis() {
      let notisx = document.querySelectorAll(".lmm-noti-" + this.position);
      for (var i = 0; i < notisx.length; i++) {
        let hx = 10;
        for (var i2 = 0; i2 < i; i2++) {
          hx += notisx[i2].clientHeight + 6;
        }
        if (this.position.search("center") == -1) {
          if (this.position.search("top") != -1) {
            notisx[i].style.transform = `translatey(${hx}px)`;
          } else if (this.position.search("bottom") != -1) {
            notisx[i].style.transform = `translatey(-${hx}px)`;
          }
        }

        if (
          this.position.search("top") != -1 &&
          this.position.search("center") != -1
        ) {
          notisx[i].style.transform = `translate(-50%,${hx}px)`;
          notisx[i].style.zIndex = 10000 - i;
        }
        if (
          this.position.search("bottom") != -1 &&
          this.position.search("center") != -1
        ) {
          notisx[i].style.transform = `translate(-50%,-${hx}px)`;
          notisx[i].style.zIndex = 10000 - i;
        }
      }
    },
  },
};
</script>
