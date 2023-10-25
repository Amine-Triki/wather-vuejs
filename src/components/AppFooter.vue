<template>
    <footer class="footer py-3 bg-dark text-white  ">
        <p id="Rights" class="container text-center mb-0"> </p>
    </footer>
    
</template>


<script>
export default {
    name : 'AppFooter' ,
    mounted(){
    let year = new Date().getFullYear();
document.getElementById("Rights").innerHTML = `${year} &copy Amine Triki || All Rights Reserved`;
}
}

</script>