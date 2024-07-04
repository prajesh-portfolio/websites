/* 
	define all other plugins here after bootstrap except jquery(which we already called in main.js file)
*/
$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  // Footer margin set for stick to bottom
  function footerAdj() {
    var footerH = $(".footer").innerHeight();
    $(".footer").css({ "margin-top": -footerH });
    $(".main-content").css({ "padding-bottom": footerH });
  }
  footerAdj();
  $(window).resize(function () {
    footerAdj();
  });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  // chart
  const barCtx = document.getElementById("bar-chart");
  if (barCtx) {
    new Chart(barCtx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Dataset 1",
            data: [10, 20, 30, 50, 20, 10, 30, 0, 25, 30, 12, 5],
            borderColor: "#0ACFCF",
            barThickness: 11,
            backgroundColor: "#0ACFCF",
          },
          {
            label: "Dataset 1",
            data: [30, 40, 50, 60, 50, 40, 60, 50, 80, 50, 30, 10],
            borderColor: "#D3F6F6",
            backgroundColor: "#D3F6F6",
            barThickness: 11,
            borderRadius: Number.MAX_VALUE,
          },
        ],
      },
      options: {
        aspectRatio: 1,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
  }

  const doughnutCtx = document.getElementById("doughnut-chart");
  if (doughnutCtx) {
    new Chart(doughnutCtx, {
      type: "doughnut",
      data: {
        labels: ["Cancelled", "Completed", "In Progress", "Pending"],
        datasets: [
          {
            label: "Dataset 1",
            data: [50, 50, 50, 50],
            borderWidth: 0,
            backgroundColor: ["#E04A4A", "#21C978", "#6C93F9", "#EDCB75"],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      },
    });
  }

  // custom ripple
  $(".btn").on("click", function (event) {
    const _this = $(this);
    const circle = $("<span class='ripple'></span");
    const maxVal = Math.max(_this.width(), _this.height());
    circle.innerHeight(maxVal + "px");
    circle.innerWidth(maxVal + "px");
    var x = event.pageX - _this.offset().left + "px"; 
    var y = event.pageY - _this.offset().top + "px";
    circle.css({ top: y , left: x });
    _this.append(circle);
    // if (_this.has("> ripple")) {
    //   setTimeout(function () {
    //     circle.remove();
    //   }, 400);
    // }
  });

  // select2
  $(".select.no-search").select2({
    minimumResultsForSearch: -1,
  });
  $(".select.no-search.sm-select").select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: "sm-select",
  });

  // hamburger
  if ($("#hamburger").length) {
    $("#hamburger").click(function () {
      document.body.classList.toggle("show-menu");
    });
    $(".dropover").click(function () {
      document.body.classList.toggle("show-menu");
    });
  }

	// Aos



  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});

	AOS.init();

