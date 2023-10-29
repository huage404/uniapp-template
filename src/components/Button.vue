<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';

interface IButtonProps {
    text: string;
}

const props = defineProps<IButtonProps>();


</script>

<template>
    <button>{{ props.text }}</button>
</template>