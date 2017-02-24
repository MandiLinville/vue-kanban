<template>
<div class="card">
<comment></comment>
</div>
</template>

<script>
import comment from './Comment'


    export default {
        name: 'card',
        components: {
            comment
        },

        data() {
            return {
                msg: 'asdfasdfasdf'

            }
        }
    }
</script>



<style>


</style>