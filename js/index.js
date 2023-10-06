document.addEventListener("contextmenu", (event) => event.preventDefault());
$(".option").click(function () {
   $(".option").removeClass("active");
   $(this).addClass("active");
});