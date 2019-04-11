let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu>ul');

burger.addEventListener('click',() => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Initialisation du premier élément pour la lisibilité
$(".features-divs").find(".features-div:nth-of-type(1)").addClass("active");
$(".features-divs").find(".features-div:nth-of-type(1)").find(".fas").removeClass("fa-chevron-down");
$(".features-divs").find(".features-div:nth-of-type(1)").find(".fas").addClass("fa-chevron-up");
$(".features-divs").find(".features-div:nth-of-type(1)").find("p").slideDown(500);
//console.log($(".features-divs").find(".features-div:nth-of-type(1)").find("p"));

//$(".features-divs").find(".features-div:nth-of-type(1)").parent(".features-div").find("p").slideDown(500);

$(".features-header").click(function(){
  // Réinitialisation de touts les chevrons
  $(".fa-chevron-up").removeClass("fa-chevron-up");
  $(".fas").addClass("fa-chevron-down");
  // Si l'élément est déjà déroulé
  if($(this).hasClass("active")){
    // Fermeture et retrait de la class active de cet élément
    $(this).parent(".features-div").find("p").slideUp(500);
    $('.features-header').removeClass("active");
  }else{
    // Fermeture et retrait de la class active de touts les éléments    
    $(".features-divs").find(".active").parent(".features-div").find("p").slideUp(500);
    $(".features-divs").find(".active").removeClass("active");
    // Ouverture et ajout de la class active sur l'élément
    $(this).parent(".features-div").find("p").slideToggle(500);
    $(this).addClass("active");
    // Activation du chevron
    $(this).find(".fas").removeClass("fa-chevron-down");
    $(this).find(".fas").addClass("fa-chevron-up");
  }
});