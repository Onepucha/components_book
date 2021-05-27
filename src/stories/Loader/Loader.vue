<template>
    <div>
        <div class="loader" :class="classes">
            <div class="loader-dot"></div>
        </div>
    </div>
</template>

<script>
    import "./Loader.scss";

    export default {
        name: "lmm-loader",
        props: {
            size: {
                type: String,
                default: "medium",
            },
            color: {
                type: String,
                default: "primary",
            },
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

        },
    }
</script>
