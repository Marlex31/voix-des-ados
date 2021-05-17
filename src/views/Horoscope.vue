<template>
    <div>
        <h1 class="title">Horoscope</h1>
        <h2 class="title">Bonda Alisa</h2>

        <div class="container">
            <h2 class="title">Lion</h2>
            <br>
            <p style="text-indent: 5%;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </div>

    </div>
</template>

<script>
export default {
    mounted(){
        document.body.style.backgroundColor = "rgb(0, 204, 255)";
    }
}
</script>

<style scoped>

.container{
    color: white;
    font-size: 22px;
    background-color: navy;
    height: 300px;
    margin: 50px 20%;
    border-radius: 10px;
    padding: 25px;
}

.flex-container{
    display: flex;
    flex-direction: row;
}

/* .flex-item{

} */

</style>