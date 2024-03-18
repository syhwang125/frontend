<template>
    <header>
        <h1>{{ propsdata }}</h1>
        <button v-on:click="sendEvent">send</button>
    </header>
</template>


<script>

// sendEvent 버튼을 클릭하면 아래 메소드가 호출되고 
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');    // emit() 은 상위(App.vue)컴포넌트로 전달됨 
        }
    }
}
</script>


<style scoped>

</style>