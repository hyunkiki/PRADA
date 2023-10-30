// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "njFQaXr-YzA", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "njFQaXr-YzA", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      },
    },
  });
}

var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

$(function () {
  //gnb
  $(".gnb > li").on("mouseenter focusin", function () {
    $(this).addClass("active");
  });
  $(".gnb > li").on("mouseleave focusout", function () {
    $(this).removeClass("active");
  });

  //lnb
  $(".lnb > li").on("mouseenter focusin", function () {
    $(this).addClass("active");
  });

  $(".lnb > li").on("mouseleave focusout", function () {
    $(this).removeClass("active");
  });

  var target = $(".animated");

  target.each(function (i, v) {
    $(this).waypoint(
      function () {
        $(v).addClass("on");
      },
      {
        offset: "100%",
      }
    );
  });
});

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

// var accHeader = document.getElementsByClassName("header_accordion");
// var i;
// for (i = 0; i < accHeader.length; i++) {
//   accHeader[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 200 + "px";
//     }
//   });
// }

// $(function () {
//   $(".heder_accordion_wrap > li > a").click(function () {
//     //$(".panel").removeClass("active");
//     $(this)
//       .closest("li")
//       .addClass("active")
//       .siblings("li")
//       .removeClass("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 200 + "px";
//     }
//   });
// });

var swiper = new Swiper(".mySwiper_main", {
  slidesPerView: "auto",
  spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // }
});
