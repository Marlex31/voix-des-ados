<template>
<div class="main">

    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi temporibus vero praesentium, debitis omnis earum quidem ullam, necessitatibus deserunt neque at voluptatem odit ab animi nesciunt sunt perspiciatis eius?
    </div>

</div>
</template>

<script>
export default {
    mounted(){
        document.body.style.backgroundColor = "#F07167";
    }
}
</script>


<style lang="scss" scoped>

.content{
    color: white;
    width: 70%;
    margin: auto;
    padding-top: 150px;
    text-align: justify;
}

.main{
    height: 1500px;
    background-image: url("~@/assets/misc/portal.gif");
    border-image-source: url("~@/assets/misc/frames.png");
    border-image-slice: 500;
    border-image-width: 150px;
    border-image-outset: 8px;
    border-image-repeat: round;
}


</style>