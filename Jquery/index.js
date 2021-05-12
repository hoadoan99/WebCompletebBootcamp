// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[2].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }
// $("button").click(function(){
//   $("h1").css("color","red");
// });
  // $("input").keypress(function(event){
  //     console.log(event.key);
  // });
//   $("h1").on("mouseover",function(){
//       $("h1").css("color","red");
//   });
// $("h1").after("<h2>HAHAHA</h2>");
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({
        opacity:0.5
    });
});
