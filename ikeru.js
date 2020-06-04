/**
 * 到達したら要素を表示させる
 */
function showElementAnimation() {

    var element = document.getElementsByClassName('js-animation');
    if(!element) return; // 要素がなかったら処理をキャンセル
    
    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
  
    for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);












// $('#animation').css('visibility','hidden');
// $(window).scroll(function(){
//  var windowHeight = $(window).height(),
//      topWindow = $(window).scrollTop();
//  $('#animation').each(function(){
//   var targetPosition = $(this).offset().top;
//   if(topWindow > targetPosition - windowHeight + 100){
//    $(this).addClass("fadeInDown");
//   }
//  });
// });

// window.addEventListener("DOMContentLoaded", function() {
//     window.onscroll = function (){
//       var myFade = document.getElementsByClassName("fade");
//       for(var i = 0; i < myFade.length; i++){
//         var targetElement = myFade[i].getBoundingClientRect(); //ターゲット要素の高さ
//         var scroll = document.documentElement.scrollTop || document.body.scrollTop;  //スクロール
//         var windowHeight = window.innerHeight;  //ウィンドウの高さ
//         if (scroll > scroll + targetElement.top - windowHeight + 200){
//           myFade[i].style.opacity = "1";
//           myFade[i].style.transform = "translateY(0)";
//         }
//       }
//     }
// }, false);


