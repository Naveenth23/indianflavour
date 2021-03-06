! function(e) {
    "use strict";
    e(window);
    var s, i, n, t, l, o = e("body");
    e("[data-bg-image]").each(function() {
        var s = e(this),
            i = s.data("bg-image");
        s.css("background-image", "url(" + i + ")")
    }), e(window).on("scroll", function(s) {
        e(window).scrollTop() + 1 > 250 ? e(".sticky-nav").addClass("menu_fixed animated fadeInDown") : e(".sticky-nav").removeClass("menu_fixed animated fadeInDown")
    }), e(".dropdown").on("show.bs.dropdown", function() {
        e(this).find(".dropdown-menu").first().stop(!0, !0).slideDown()
    }), e(".dropdown").on("hide.bs.dropdown", function() {
        e(this).find(".dropdown-menu").first().stop(!0, !0).slideUp()
    }), s = e(".offcanvas-toggle"), i = e(".offcanvas"), n = e(".offcanvas-overlay"), t = e(".mobile-menu-toggle"), s.on("click", function(s) {
        s.preventDefault();
        var i = e(this),
            t = i.attr("href");
        o.addClass("offcanvas-open"), e(t).addClass("offcanvas-open"), n.fadeIn(), i.parent().hasClass("mobile-menu-toggle") && i.addClass("close")
    }), e(".offcanvas-close, .offcanvas-overlay").on("click", function(e) {
        e.preventDefault(), o.removeClass("offcanvas-open"), i.removeClass("offcanvas-open"), n.fadeOut(), t.find("a").removeClass("close")
    }), (l = e(".offcanvas-menu, .overlay-menu")).find(".sub-menu").parent().prepend('<span class="menu-expand"></span>'), l.on("click", "li a, .menu-expand", function(s) {
        var i = e(this);
        ("#" === i.attr("href") || i.hasClass("menu-expand")) && (s.preventDefault(), i.siblings("ul:visible").length ? (i.parent("li").removeClass("active"), i.siblings("ul").slideUp(), i.parent("li").find("li").removeClass("active"), i.parent("li").find("ul:visible").slideUp()) : (i.parent("li").addClass("active"), i.closest("li").siblings("li").removeClass("active").find("li").removeClass("active"), i.closest("li").siblings("li").find("ul:visible").slideUp(), i.siblings("ul").slideDown()))
    });
    new Swiper(".hero-slider.swiper-container", {
        loop: !0,
        speed: 2e3,
        effect: "fade",
        autoplay: {
            delay: 7e3,
            disableOnInteraction: !1
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".tab-slider.swiper-container", {
        loop: !0,
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            478: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            }
        }
    }), new Swiper(".content-top", {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1500,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            478: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        }
    }), new Swiper(".feature-product-slider.swiper-container", {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1500,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            478: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        }
    }), new Swiper(".new-product-slider.swiper-container", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1500,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            478: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
    var r = new Swiper(".gallery-thumbs", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: !0,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            centerMood: !0
        }),
        a = (new Swiper(".gallery-top", {
            spaceBetween: 0,
            loop: !0,
            slidesPerView: 1,
            centerMood: !0,
            thumbs: {
                swiper: r
            }
        }), new Swiper(".zoom-thumbs", {
            spaceBetween: 18,
            slidesPerView: 3,
            freeMode: !0,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        })),
        p = (new Swiper(".zoom-top", {
            spaceBetween: 0,
            slidesPerView: 1,
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            },
            thumbs: {
                swiper: a
            }
        }), a = new Swiper(".zoom-thumbs-2", {
            spaceBetween: 20,
            slidesPerView: 5,
            direction: "vertical",
            freeMode: !0,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0
        }), new Swiper(".zoom-top-2", {
            spaceBetween: 0,
            loop: !0,
            thumbs: {
                swiper: a
            }
        }), r = new Swiper(".gallery-thumbs", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: !0,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        }), new Swiper(".gallery-top", {
            spaceBetween: 0,
            loop: !0,
            thumbs: {
                swiper: r
            }
        }), e(".cart-plus-minus"));
    p.prepend('<div class="dec qtybutton">-</div>'), p.append('<div class="inc qtybutton">+</div>'), e(".qtybutton").on("click", function() {
        var s = e(this),
            i = s.parent().find("input").val();
        if ("+" === s.text()) var n = parseFloat(i) + 1;
        else if (i > 1) n = parseFloat(i) - 1;
        else n = 1;
        s.parent().find("input").val(n)
    });
    new Swiper(".single-product-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 1500,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            478: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
    e(".checkout-toggle2").on("click", function() {
        e(".open-toggle2").slideToggle(1e3)
    }), e(".checkout-toggle").on("click", function() {
        e(".open-toggle").slideToggle(1e3)
    }), e.scrollUp({
        scrollText: '<i class="pe-7s-angle-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    }), e("[data-countdown]").each(function() {
        var s = e(this),
            i = e(this).data("countdown");
        s.countdown(i, function(e) {
            s.html(e.strftime('<span class="cdown hour"><span class="cdown-1">%-H</span><p>Hrs</p></span> <span class="cdown minutes"><span class="cdown-1">%M</span> <p>Min</p></span> <span class="cdown second"><span class="cdown-1"> %S</span> <p>Sec</p></span>'))
        })
    });
    new Swiper(".blog-post-media.swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: !0,
        autoplay: {
            delay: 2e3,
            disableOnInteraction: !1
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".brand-slider.swiper-container", {
        slidesPerView: 4,
        speed: 1500,
        loop: !0,
        autoplay: {
            delay: 2e3,
            disableOnInteraction: !1
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
    e(".venobox").venobox()
}(jQuery);