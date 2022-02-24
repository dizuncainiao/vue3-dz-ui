<template>
    <button>{{ props }}</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

defineComponent({
    name: "button-default",
    props: {
        msg: String
    }
})
</script>

<style scoped lang="less">
button {
    color: red;

    &:hover {
        color: blue;
    }
}
</style>
