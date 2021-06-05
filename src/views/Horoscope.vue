<template>
    <div>
        <h1 class="title">Horoscope</h1>
        <h2 class="title">Bonda Alisa</h2>

        <div class="container">
            <h2 class="title">Lion</h2>
            <div class="flex-row">
                <button @click="back">Back</button>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button @click="next">Next</button>
            </div>

        </div>

    </div>
</template>


<script>
export default {
    methods:{
        next(){
            console.log("Next");
        },
        back(){
            console.log("Back");
        }
    },
    mounted(){
        document.body.style.backgroundColor = "rgb(0, 204, 255)";
    }
}
</script>


<style lang="scss" scoped>

button{
    margin: 30px;
}

.flex-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: center;
}
.flex-column{
    display: flex;
    flex-direction: column;
    // align-items: center;
}

p{
    text-indent: 5%;
    text-align:justify;
}

.container{
    color: white;
    background-color: navy;
    height: 400px;
    margin: 50px 20%;
    border-radius: 10px;
    padding: 30px;
}

.flex-container{
    display: flex;
    flex-direction: row;
}

/* .flex-item{

} */

</style>