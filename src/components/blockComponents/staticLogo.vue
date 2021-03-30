<template lang="">
    <div>
        <transition>
            <nav id="logoAbracol" class="fixed-top navbar navbar-light">
            <a class="navbar-brand">
                <img src="../../../public/images/logos/logo-abracol.png" id="imgLogo" class="img-fluid"  >
            </a>
            </nav>
        </transition>
    </div>
</template>
<script>
export default {
    mounted() {
        window.addEventListener("scroll", () => {
            const scrollPx = window.scrollY;
            const logo = document.getElementById('logoAbracol');
            if (scrollPx >= 580 && scrollPx <= 2977) {
                logo.classList.add('bounce-enter-active');
                logo.removeAttribute("style")
            }  
            
            if(scrollPx < 580 ){
                logo.classList.remove('bounce-enter-active');
                logo.style.display = "none";
            }     
        });
    },
};
</script>
<style lang="css">
    #logoAbracol {
        z-index: 2;
        width: 100%;
        height: 10%;
        background-color: #ffd333;
    }

    #imgLogo{
        position: fixed;
        top: 0px;
        right: 0px;
        width: 15%;
    }

    .bounce-enter-active {
        animation: bounce-in 0.3s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>