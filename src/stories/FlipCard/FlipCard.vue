<template>
    <div class="features" style="width: 333px;">
        <div :class="[`features--item features--item-${color}`]" @click="active = !active" @mouseleave="mouseleaveflip"
            @mouseenter="mouseenterflip">
            <div :class="[`features--item__inner features--item__inner-${color}`, { 'flip':active }]">
                <div class="features--front">
                    <lazy-image :src="image" :alt="name" class="img-fluid mb-25" />
                    <lmm-heading :size="sizeTitleFront" :margins="margins" :title="titleFront" />
                    <lmm-text :size="sizeTextFront" :text="textFront" />
                </div>
                <div class="features--back">
                    <lmm-heading :size="sizeTitleBack" :margins="margins" :title="titleBack" />
                    <lmm-text :size="sizeTextBack" :text="textBack" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "./FlipCard.scss";

    export default {
        name: "lmm-flip-card",

        props: {
            active: {
                default: false,
                type: Boolean
            },
            color: {
                default: 'primary',
                type: String
            },
            titleFront: {
                default: null,
                type: String
            },
            textFront: {
                default: null,
                type: String
            },
            sizeTextFront: {
                default: null,
                type: String
            },
            sizeTitleFront: {
                default: null,
                type: String
            },
            titleBack: {
                default: null,
                type: String
            },
            sizeTitleBack: {
                default: null,
                type: String
            },
            textBack: {
                default: null,
                type: String
            },
            sizeTextBack: {
                default: null,
                type: String
            },
            name: {
                default: null,
                type: String
            },
            image: {
                default: null,
                type: String
            },
            size: {
                default: null,
                type: String
            }, 
            margins: {
                default: null,
                type: String
            }, 
        },
        mounted() {
            this.heightFlipCard();
        },
        computed: {
            flipHover() {
                return this.$parent.flipHover;
            },
        },
        methods: {
            heightFlipCard() {
                var features = document.querySelectorAll('.features');

                features.forEach((item) => {
                    var card = item.querySelector('.features--item__inner img');
                    var minHeightItem = item.querySelector('.features--front').offsetHeight;
                    item.querySelector('.features--item').style.minHeight = minHeightItem + 'px';
                })
            },
            mouseenterflip() {
                if (this.flipHover) {
                    this.active = true;
                }

            },
            mouseleaveflip() {
                if (this.flipHover) {
                    this.active = false;
                }
            },
        }
    };
</script>