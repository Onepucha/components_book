<template>
  <div>
    <div class="container mt-30 mt-xs-30 mb-50 mb-xs-50">
      <div class="row between">
        <div class="col-lg-24 d-flex">
          <button type="button" class="btn waves-effect waves-light" style="font-size: 14px;padding: 11px 20px;"
            @click.prevent="logout">Выйти</button>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-24 col-xs-12">
          <div class="card-title">Выберите цвета</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-xs-12">
          <div class="row">
            <div class="col-lg-24 col-xs-12 mb-20 mb-xs-20">
              <p class="text">Primary:</p>
              <span class="color-picker">
                <label for="primary">
                  <input type="color" value="#005dfe" id="primary">
                </label>
              </span>
            </div>
            <div class="col-lg-24 col-xs-12 mb-20 mb-xs-20">
              <p class="text">Danger:</p>
              <span class="color-picker">
                <label for="danger">
                  <input type="color" value="#ff4756" id="danger">
                </label>
              </span>
            </div>
            <div class="col-lg-24 col-xs-12 mb-20 mb-xs-20">
              <p class="text">Success:</p>
              <span class="color-picker">
                <label for="success">
                  <input type="color" value="#46c93a" id="success">
                </label>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xs-12">
          <div class="row">
            <div class="col-lg-24 col-xs-12 mb-20 mb-xs-20">
              <p class="text">Warning:</p>
              <span class="color-picker">
                <label for="warning">
                  <input type="color" value="#ffbb00" id="warning">
                </label>
              </span>
            </div>
            <div class="col-lg-24 col-xs-12 mb-20 mb-xs-20">
              <p class="text">Dark:</p>
              <span class="color-picker">
                <label for="dark">
                  <input type="color" value="#1e1e1e" id="dark">
                </label>
              </span>
            </div>
            <div class="col-lg-24 col-xs-12 mb-20 mb-xs-20">
              <p class="text">Light:</p>
              <span class="color-picker">
                <label for="light">
                  <input type="color" value="#f5f5f5" id="light">
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-100">
        <div class="col-lg-24 col-xs-12">
          <button type="button" class="btn waves-effect waves-light" style="font-size: 14px;padding: 11px 20px;"
            @click.prevent="redirect">Перейти</button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-24 col-xs-12">
          <lmm-button class="mb-30" primary size="large" label="Default" @click="increment" :danger="select == 'danger'" />
          <select name="bg" id="bg" v-model="select">
            <option value="primary" selected>primary</option>
            <option value="success">success</option>
            <option value="danger">danger</option>
            <option value="warning">warning</option>
            <option value="dark">dark</option>
          </select>
          <lmm-chip color="primary">Default</lmm-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  /*@import '~materialize-css/dist/css/materialize.min.css';*/
  @import '../assets/auth.scss';
  @import "../stories/variables.scss";

  .text {
    margin-bottom: 10px;
  }

  code {
    padding: 5px 8px;
    border-radius: 10px;
    background-color: #f8f9f9;
    color: #CC0066;
  }

  [type='color'] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding: 0;
    width: 15px;
    height: 15px;
    border: none;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  [type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  [type='color']::-webkit-color-swatch {
    border: none;
  }

  .color-picker {
    appearance: none;
    border: 0px none;
    margin: 0px;
    background: rgb(255, 255, 255);
    padding: 6px 30px;
    font-size: 13px;
    position: relative;
    transition: box-shadow 200ms ease-out 0s, opacity 200ms ease-out 0s;
    color: rgb(0, 0, 0);
    box-shadow: rgba(0, 0, 0, 0.10) 0px 0px 0px 1px inset;
    border-radius: 4px;
    line-height: 20px;
    display: flex;
    text-align: left;
    min-height: 32px;
    width: 100%;
    max-width: 250px;
    box-sizing: border-box;
    font-family: "PT Root UI_Regular", sans-serif;

    label {
      width: 100%;
    }

    #bg {
      display: block !important;
    }

  }
</style>

<script>
  import lmmButton from '../../src/stories/Button/Button.vue';
  import lmmChip from '../../src/stories/Chip/Chip.vue';

  export default {
    name: 'home',
    components: {
      lmmButton,
      lmmChip,
    },
    data() {
      return {
        select: null,
      }
    },
    mounted() {
      document.querySelectorAll('input[type=color]').forEach(function (picker) {

        var targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
          codeArea = document.createElement('span');

        codeArea.innerHTML = picker.value;
        targetLabel.appendChild(codeArea);

        picker.addEventListener('change', function () {
          codeArea.innerHTML = picker.value;
          targetLabel.appendChild(codeArea);
        });
      });
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    methods: {
      async logout() {
        await this.$store.dispatch('logout')
        this.$router.push('/login?message=logout')
      },
      redirect() {
        window.location.assign('http://localhost:6006/?test=123');
      },
      changeOption: function(event){
        console.log(event.target.value);
      },
      increment() {
        this.$store.commit('increment')
        console.log(this.$store.state.count)
      }
    },
  }
</script>
