<template>
    <div class="compare-wrapper">
        <div class="compare">

            <div class="compare__content" :style="{'width': width}">
                <slot name="first"></slot>
            </div>

            <resize-observer @notify="handleResize"></resize-observer>
            <div class="handle-wrap" :style="{left:`calc(${compareWidth + '%'} - 2px / 2`}">
                <div class="handle">
                    <svg class="handle__arrow handle__arrow--l" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6" /></svg>
                    <svg class="handle__arrow handle__arrow--r" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6" /></svg>

                </div>
                <span class="handle-line"></span>
            </div>


            <div class="compare-overlay " :style="{width:`calc(${compareWidth + '%'})`}">

                <div class="compare-overlay__content" :style="{ 'width': width}">
                    <slot name="second"></slot>
                </div>
            </div>



        </div>
        <input type="range" min="0" max="100" :step="step" class="compare__range" :value="compareWidth"
            @input="handleInput" tabindex="-1">

    </div>
</template>


<script>
    import "./Comparify.scss";

    export default {
        name: 'lmmComparify',
        props: {
            value: {
                default: 50
            },
            step: {
                default: '.1'
            }
        },
        data() {
            return {
                width: null,
                compareWidth: this.value,
            }
        },
        watch: {
            value() {
                this.compareWidth = this.value
            }
        },
        mounted() {
            this.width = this.getContainerWidth();
        },
        methods: {
            handleInput(e) {
                this.compareWidth = e.target.value
                this.$emit('input', e.target.value)
            },
            handleResize() {
                const w = this.getContainerWidth();
                if (w === this.width)
                    return;
                this.width = w
                console.log(this.width)
            },
            getContainerWidth() {
                return window.getComputedStyle(this.$el, null).getPropertyValue('width')
            },
        }
    }
</script>
