<template lang="html">
    <div>
        <lmm-button label="Открыть модальное окно" @onClick="setIsModalOpen()" :primary="true" />
        <transition name="modal" v-if="showModal">
            <div class="modal-mask" @click="setIsModalClose()">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <lmm-icon v-if="closeButton" :icon="closeIcon" :icon-pack="iconPack" class="modal-close" @click="setIsModalClose()" />
                        <div class="modal-header">
                            <lmm-heading :title="title" size="l" />
                        </div>
                        <div class="modal-body">
                            <slot name="body">
                                <lmm-text size="l" :text="text" />
                            </slot>
                        </div>
                        <div class="modal-footer" v-if="buttonsHidden">
                            <slot name="footer">
                                <lmm-button label="OK" @onClick="setIsModalClose()" :primary="true" class="modal-default-button" />
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import lmmButton from "../Button/Button.vue";
    import lmmHeading from "../Heading/Heading.vue";
    import lmmText from "../BodyText/BodyText.vue";
    import lmmIcon from "../lmmIcon/lmmIcon.vue";
    import "./Modal.scss";

    export default {
        name: 'lmmModal',
        components: {
            lmmButton,
            lmmHeading,
            lmmText,
            lmmIcon
        },
        props: {
            color: {
                default: 'primary',
                type: String
            },
            buttonsHidden: {
                default: false,
                type: Boolean
            },
            closeButton: {
                default: false,
                type: Boolean
            },
            title: {
                default: null,
                type: String
            },
            text: {
                default: null,
                type: String
            },
            iconPack: {
                default: 'material-icons',
                type: String
            },
            closeIcon: {
                default: 'close',
                type: String
            }
        },
        data:() => {
            return {
                showModal: false
            }
        },
        methods: {
            setIsModalOpen() {
                this.showModal = true;
            },
            setIsModalClose() {
                this.showModal = false;
            }
        }
    }
</script>