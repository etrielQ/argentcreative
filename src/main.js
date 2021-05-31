import "swiper/swiper-bundle.css";
import Swiper from "swiper/bundle";

window.$ = require("jquery");
var app = {
  load() {
    console.log("load");
  },
  swiperTest() {
    // for (var i = 0; i < countryes.length; i++) {
    //   var countryesId = countryes[i].getAttribute("id");
    //   var pinLeft = countryes[i].getBoundingClientRect().x;
    //   $(".pin#" + countryesId).getBoundingClientRect().x;
    //   // var pinTop = e.getBoundingClientRect().y;
    //   // var pinWidth = e.getBoundingClientRect().width / 2;
    //   // var pinHeight = e.getBoundingClientRect().height / 2;
    //   console.log("bu değer pin left değerleri: " + pinLeft);
    //   console.log(countryesId);
    //   document.querySelector("#" + countryesId).classList.add("aaa");
    //   var pin = document.querySelectorAll(".pin");
    //   for (var i = 0; i < pin.length; i++) {
    //     console.log(pin[i].getAttribute("id"));
    //   }
    // }
    $(".country").each(function () {
      var countryId = $(this).attr("id");
      var countryLeft = $(this).position().left;
      var countryTop = $(this).position().top;
      var countryWidth = this.getBoundingClientRect().width / 2.5;
      var countryHeight = this.getBoundingClientRect().height / 4.5;
      $(".pin#pin-" + countryId).css({
        left: countryLeft + countryWidth,
        top: countryTop + countryHeight,
      });
    });
    $(".pin").each(function () {
      var pinLength = $(this).find(".pin-popup__item").length;
      $(this).find(".pin-number").text(pinLength);
    });
    $(".pin").on("click", function () {
      var pinPopup = $(this).find(".pin-popup");
      if (pinPopup.hasClass("active")) {
        pinPopup.removeClass("active");
      } else {
        $(".pin-popup").removeClass("active");
        pinPopup.addClass("active");
      }
    });
  },
  init: function () {
    app.load();
    app.swiperTest();
  },
};

export default () => {
  $(function () {
    app.init();
  });

  $(window).on("resize", function () {
    app.swiperTest();
  });
  $(window).on("scroll", function () {});
};
