<template>
    <div class="centerx">
        <lmm-button label="Loading" @onClick="setIsLoaderShow()" :primary="true" />
        <div class="loader-overlay" @click="setIsLoaderHide()" v-if="active">
            <div class="loader" :class="classes">
                <div class="loader-dot"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import "./Loader.scss";
    import lmmButton from "../Button/Button.vue";

    export default {
        name: "lmm-loader",
        components: {
            lmmButton,
        },
        props: {
            size: {
                type: String,
                default: "medium",
            },
            color: {
                type: String,
                default: "primary",
            },
            active: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            classes() {
                return {
                    loader: true,
                    [`loader_size_${this.size}`]: true,
                    [`loader-${this.color}`]: true,
                };
            },
        },
        methods: {
            setIsLoaderShow() {
                this.active = true;
            },
            setIsLoaderHide() {
                this.active = false;
            },
        },
    }
</script>
