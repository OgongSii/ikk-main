document.addEventListener("scroll", function () {
    console.log(`scroll`);
});

var timeout;


var mHtml = $("html");
var page = 1;


mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
    if (mHtml.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
        if (page == 4) return;
        page++;

    } else if (e.originalEvent.deltaY < 0) {
        if (page == 1) return;
        page--;
    }
    var posTop = (page - 1) * $(window).height();
    mHtml.animate({ scrollTop: posTop });

})

$(document).ready(function () {

    $("a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({

                scrollTop: $(hash).offset().top

            }, 800, function () {

                window.location.hash = hash;

            });

        }

    });

});

$(document).ready(function () {

    $("a").on('click', function (event) {
        // button1 클릭시 page를 1로 변경
        if (this.hash == "#section1") {
            page = 1;
        }
        // button2 클릭시 page를 2로 변경
        else if (this.hash == "#section2") {
            page = 2;
        }
        // button3 클릭시 page를 3로 변경
        else if (this.hash == "#section3") {
            page = 3;
        }
        // button4 클릭시 page를 4로 변경
        else if (this.hash == "#section4") {
            page = 4;
        }
    });
});