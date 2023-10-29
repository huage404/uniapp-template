<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
interface ButtonProps extends Omit<ButtonVariantProps, "required">,
    Required<Pick<ButtonVariantProps, "required">> {
    text: string;
}


const props = withDefaults(defineProps<ButtonProps>(), {
    text: 'Hello123123'
})

const buttonVariants: VariantProps<typeof button> = cva(["font-semibold", "border", "rounded"], {
    variants: {
        intent: {
            primary: [
                "bg-blue-500",
                "text-white",
                "border-transparent",
                "hover:bg-blue-600",
            ],
            // **or**
            // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
            secondary: [
                "bg-white",
                "text-gray-800",
                "border-gray-400",
                "hover:bg-gray-100",
            ],
        },
        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
        },
    },
    compoundVariants: [
        {
            intent: "primary",
            size: "medium",
            class: "uppercase",
            // **or** if you're a React.js user, `className` may feel more consistent:
            // className: "uppercase"
        },
    ],
    defaultVariants: {
        intent: "primary",
        size: "medium",
    },
});



</script>

<template>
    <button :class="buttonVariants()">{{ props.text }}</button>
</template>