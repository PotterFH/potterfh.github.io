var contenedorAnimacion=document.getElementById("miAnimacion"),avatarAnimacion=document.getElementById("avatarAnimacion"),opcionesAnimacion={container:contenedorAnimacion,renderer:"canvas",loop:!0,autoplay:!0,path:"public/build/animations/animation6.json"},opcionesAnimacionAvatar={container:avatarAnimacion,renderer:"svg",loop:!0,autoplay:!0,path:"public/build/animations/animation2.json"},animacion=lottie.loadAnimation(opcionesAnimacion),animacionAvatar=lottie.loadAnimation(opcionesAnimacionAvatar);