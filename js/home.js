$(document).ready(function () {
  $(".carousel-caption").fadeIn(3000);

  $(".btn-ViewDental").hover(
    function () {
      $(".btn-ViewDental").css({
        color: "white",
        "background-color": "#00bcd4",
      });
    },
    function () {
      $(".btn-ViewDental").css({
        "background-color": "white",
        color: "#00bcd4",
      });
    }
  );

  $(".btn-custom1").hover(
    function () {
      $(".btn-custom1").css({
        
        color: "white",
        "background-color": "#00bcd4",
      });
    },
    function () {
      $(".btn-custom1").css({
       
        "background-color": "white",
        color: "#00bcd4",
      });
    }
  );

  // $("#collapsibleNavbar")onclick=>(
  //   function () {
  //     $(this).css({
  //       "background-color": "#00bcd4",
  //       cursor: "pointer",
  //     });
  //   },
  //   function () {
  //     $(this).css({
  //       "background-color": "white",
  //     });
  //   }
  // );

  $(".form-control").focus(function () {
    $(".form-control").css("background-color", "transparent");
  });

  $(".offersDiv").hover(
    function () {
      $(this).css({
        "background-color": "#00bcd4",
        cursor: "pointer",
      });
    },
    function () {
      $(this).css({
        "background-color": "white",
      });
    }
  );

  $(".offersDiv").hover(
    function () {
      $(this).find(".offericons").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".offericons").css({
        color: "#00bcd4",
      });
    }
  );

  $(".offersDiv").hover(
    function () {
      $(this).find(".offertext").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".offertext").css({
        color: "#344275",
      });
    }
  );

  $(".offersDiv").hover(
    function () {
      $(this).find(".offerTextTitle").css({
        color: "black",
      });
    },
    function () {
      $(this).find(".offerTextTitle").css({
        color: "#170339",
      });
    }
  );

  $(".innerServiceDivs").hover(
    function () {
      $(this).css({
        "background-color": "#00BCD4",
        cursor: "pointer",
      });
    },
    function () {
      $(this).css({
        "background-color": "white",
      });
    }
  );
  $(".innerServiceDivs").hover(
    function () {
      $(this).find(".servicesTextInner").css({
        color: "black",
      });
    },
    function () {
      $(this).find(".servicesTextInner").css({
        color: "#170339",
      });
    }
  );
  $(".innerServiceDivs").hover(
    function () {
      $(this).find(".offertext").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".offertext").css({
        color: "#344275",
      });
    }
  );
  $(".innerServiceDivs").hover(
    function () {
      $(this).find(".iconsServices").css({
        "background-color": "white",
      });
    },
    function () {
      $(this).find(".iconsServices").css({
        "background-color": "#00bcd4",
      });
    }
  );
  $(".innerServiceDivs").hover(
    function () {
      $(this).find(".iconsServices span").css({
        color: "#00bcd4",
      });
    },
    function () {
      $(this).find(".iconsServices span").css({
        color: "white",
      });
    }
  );
  $(".Cards").hover(
    function () {
      $(this).css({
        "background-color": "#00bcd4",
      });
    },
    function () {
      $(this).css({
        "background-color": "white",
      });
    }
  );
  $(".Cards").hover(
    function () {
      $(this).css({
        color: "white",
      });
    },
    function () {
      $(this).css({
        color: "black",
      });
    }
  );
  $(".Cards").hover(
    function () {
      $(this).find(".cardDRPosition").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".cardDRPosition").css({
        color: "#00bcd4",
      });
    }
  );
  $(".Cards").hover(
    function () {
      $(this).find(".card-text").css({
        color: "white",
      });
    },
    function () {
      $(this).find(".card-text").css({
        color: "#999999",
      });
    }
  );
});
