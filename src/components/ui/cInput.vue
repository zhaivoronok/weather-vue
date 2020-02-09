<template>
    <div>
        <input type="text"
               name=""
               id=""
               :placeholder="$slots.default[0].text"
               @input="$emit('input', $event.target.value)"
               :value="value"
               :required="required">
    </div>
</template>

<script>
    export default {
        name: "cInput",
        props: {
            value: {
                type: String
            },
            required: {
                type: Boolean
            }
        }
    }
</script>