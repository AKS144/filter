<template>
    <div>
        <h1>{{name | Ucase}}</h1>
        <h3>{{amount | currencyConverter}}</h3>
    </div>
</template>

<script>
export default {
    name:'Home',
    data()
    {
        return {
            name:"abhi",
            amount:100
        }
    }
}
</script>