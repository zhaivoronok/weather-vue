<template>
    <button @click.stop="emitClick">
        <slot/>
    </button>
</template>

<script>
    export default {
        name: "cButton",
        props: {
            prevent: Boolean,
            stop: Boolean,
        },
        methods: {
            emitClick(e) {
                if (this.prevent) e.preventDefault();
                if (this.stop) e.stopPropagation();

                this.$emit('click')
            }
        }
    }
</script>
