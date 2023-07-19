// // 禁止+-
// window.onload = function() {document.addEventListener('keydown', function(event) {if ((event.ctrlKey === true || event.metaKey === true) && (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187 || event.which === 189)) {event.preventDefault(); } }, false); }
// // 禁止滚轮
// window.addEventListener('mousewheel', function(event) {if (event.ctrlKey === true || event.metaKey) {event.preventDefault(); } }, {passive: false });
// //firefox
// window.addEventListener('DOMMouseScroll', function(event) {if (event.ctrlKey === true || event.metaKey) {event.preventDefault(); } }, {passive: false });
/* 视频 弹窗 */
function openvideo(src) {
    var video = $('.videobox1 video')[0];
    $('.videomark1,.videobox1').fadeIn(600);
    $('.videobox1 video').attr('src', src);
    video.play();
}
function closevideo() {
    var video = $('.videobox1 video')[0];
    video.pause();
    $('.videobox1 video').attr('src', '');
    $('.videomark1,.videobox1').fadeOut(600);
}

$(document).ready(function () {

    layui.use(["form", "layer", "laydate", "rate", "table"], function () {
        let form = layui.form, layer = layui.layer, table = layui.table, laydate = layui.laydate, rate = layui.rate;
        layer.photos({ photos: '#layer_images', anim: 5 });
        let c = 'active';

        // 导航栏阴影 
        $(window).scroll(function () {
            if ($(document).scrollTop() > 0) {
                $('#header').addClass(c)
                $('#m_header').addClass(c)
            } else {
                $('#header').removeClass(c)
                $('#m_header').removeClass(c)
            }
        })

        // 手机版头部
        function mobileDown() {
            let container = $('#m_header'),
                btn = container.find('.menu').children(),
                content = container.find('.content_box');
            btn.click(function () {
                if (!$(this).hasClass(c)) {
                    $(this).addClass(c)
                    content.slideDown()
                } else {
                    $(this).removeClass(c)
                    content.slideUp()
                }
            })
        }
        mobileDown()

        // 首页-banner
        function idxBanner() {
            let container = $('#idx_banner'),
                swiper = container.find('.swiper'),
                pager = container.find('.pager');
            new Swiper(swiper, {
                loop: true,
                effect: 'fade',
                slideActiveClass: 'slide_active',
                autoplay: {
                    delay: 3000,
                },
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                on: {
                    init() {
                        swiperAnimateCache(this); //隐藏动画元素 
                        swiperAnimate(this); //初始化完成开始动画
                    },
                    slideChangeTransitionEnd() {
                        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    }
                }
            })
        }
        idxBanner()

        // 首页-产品中心
        function idxProduct() {
            let container = $('#idx_product'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager'),
                tab = container.find('.tab_list').children();
            const swiper = new Swiper(swiper_box, {
                pagination: { el: pager, bulletActiveClass: c },
                effect: 'fade',
                fadeEffect: { crossFade: true },
                on: {
                    init() {
                        swiperAnimateCache(this);
                        swiperAnimate(this);
                    },
                    slideChangeTransitionEnd() {
                        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    }
                }
            })
            tab.click(function () {
                $(this).addClass(c).siblings().removeClass(c);
                swiper.slideTo($(this).index(), 200)
            })
        }
        idxProduct()

        // 首页-关于我们
        function idxAbout() {
            let container = $('#idx_about'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.about_pager');

            const swiper = new Swiper(swiper_box, {
                direction: 'vertical',
                speed: 800,
                loop: true,
                pagination: {
                    el: pager,
                    type: 'progressbar',
                    bulletClass: 'my_pager',
                },
                slideActiveClass: 'active_slide',
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 20,
                breakpoints: {
                    768: {
                        direction: 'horizontal',
                        slidesPerView: 2,
                        centeredSlides: false,
                        spaceBetween: 10,
                        pagination: {
                            type: 'bullets',
                            bulletActiveClass: c,
                        }
                    }
                }
            })
        }
        idxAbout()

        // 首页-客户故事
        function idxStory() {
            let container = $('#idx_store'),
                swiper_box = container.find('.swiper'),
                prev = container.find('.prev'),
                next = container.find('.next'),
                pager = container.find('.pager');
            new Swiper(swiper_box, {
                slidesPerView: 2,
                spaceBetween: 30,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                breakpoints: {
                    990: {
                        loop: true,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    480: {
                        slidesPerView: 1,
                    }
                }
            })
        }
        idxStory()

        // 首页-合作伙伴
        function idxPartner() {
            let container = $('#idx_partner'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager')

            new Swiper(swiper_box, {
                slidesPerView: 5,
                slidesPerColumn: 2,
                slidesPerColumnFull: 'column',
                spaceBetween: 20,
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                breakpoints: {
                    990: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerColumn: 3,
                    },
                    600: {
                        slidesPerView: 2,
                        slidesPerColumn: 3,
                    }
                }

            })
        }
        idxPartner()

        // 首页-新闻中心
        function idxNews() {
            let container = $('#idx_news'),
                tab = container.find('.switch').children(),
                outSwiper = container.find('.out-swiper'),
                isdSwiper = container.find('.isd-swiper'),
                pager = container.find('.pager'),
                prev = container.find('.prev'),
                next = container.find('.next');

            const mySwiperOut = new Swiper(outSwiper, {
                speed: 800,
                allowTouchMove: false,
                slideActiveClass: c,
            })

            tab.click(function () {
                $(this).addClass(c).siblings().removeClass(c);
                mySwiperOut.slideTo($(this).index());
            })
            new Swiper(isdSwiper, {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                pagination: { el: pager, type: 'progressbar', },
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 2,
                    },
                    990: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    560: {
                        slidesPerView: 1,
                    }
                }
            })
        }
        idxNews()

        // business-产品推荐1
        function isdBusinessRec() {
            let container = $('#isd_business').find('.product'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager');
            new Swiper(swiper_box, {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                breakpoints: {
                    990: { slidesPerView: 2, spaceBetween: 20, },
                    480: { slidesPerView: 1.5, spaceBetween: 20, },
                }
            })
        }
        isdBusinessRec()

        // business-产品推荐2
        function isdBusinessRecNd() {
            let container = $('#isd_business').find('.product_nd'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager');
            new Swiper(swiper_box, {
                slidesPerView: 4,
                spaceBetween: 30,
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                breakpoints: {
                    990: { slidesPerView: 3, spaceBetween: 20, },
                    768: { slidesPerView: 2, spaceBetween: 20, },
                    480: { slidesPerView: 1.5, spaceBetween: 20, },
                }
            })
        }
        isdBusinessRecNd()

        // solution-产品推荐1
        function solutionSt() {
            let container = $('#solution').find('.product'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager');
            new Swiper(swiper_box, {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                breakpoints: {
                    990: { slidesPerView: 2, spaceBetween: 20, },
                    480: { slidesPerView: 1.5, spaceBetween: 20, },
                }
            })
        }
        solutionSt()

        // solution-产品推荐2
        function solutionNd() {
            let container = $('#solution').find('.product_nd'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager');
            new Swiper(swiper_box, {
                slidesPerView: 4,
                spaceBetween: 30,
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                breakpoints: {
                    990: { slidesPerView: 3, spaceBetween: 20, },
                    768: { slidesPerView: 2, spaceBetween: 20, },
                    480: { slidesPerView: 1.5, spaceBetween: 20, },
                }
            })
        }
        solutionNd()

        // products-banner
        function isdProducts() {
            let container = $('#products'),
                swiper_box = container.find('.isd_product').find('.swiper'),
                pager = container.find('.pager');
            const swiper = new Swiper(swiper_box, {
                pagination: { el: pager, bulletActiveClass: c },
                effect: 'fade',
                fadeEffect: { crossFade: true },
                on: {
                    init() {
                        swiperAnimateCache(this);
                        swiperAnimate(this);
                    },
                    slideChangeTransitionEnd() {
                        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    }
                }
            })
        }
        isdProducts()

        // prodocus-产品推荐2
        function isdProductsRecommend() {
            let container = $('#products').find('.product_nd'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager');
            new Swiper(swiper_box, {
                slidesPerView: 4,
                spaceBetween: 30,
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                breakpoints: {
                    990: { slidesPerView: 3, spaceBetween: 20, },
                    768: { slidesPerView: 2, spaceBetween: 20, },
                    480: { slidesPerView: 1.5, spaceBetween: 20, },
                }
            })
        }
        isdProductsRecommend()

        // about-发展历程
        function history() {
            let container = $('#about').find('.history'),
                swiper_box = container.find('.swiper');
            new Swiper(swiper_box, {
                slidesPerView: 4,
                spaceBetween: 120,
                speed: 800,
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    768: {
                        slidesPerView: 2.3,
                        spaceBetween: 50,
                    },
                    480: {
                        slidesPerView: 1.4,
                        spaceBetween: 30,
                    }
                }
            })
        }
        history()

        // about-荣誉资质
        function honor() {
            let container = $('#about').find('.honor'),
                swiperOut = container.find('.swiper_out'),
                swiperIsd1 = container.find('.swiper_isd1'),
                swiperIsd2 = container.find('.swiper_isd2'),
                pager1 = swiperIsd1.find('.pager1'),
                pager2 = swiperIsd2.find('.pager2'),
                tab = container.find('.tab_list').children();
            const mySwiper = new Swiper(swiperOut, {
                speed: 0,
                allowTouchMove: false,
                slideActiveClass: c,
            })
            tab.click(function () {
                $(this).addClass(c).siblings().removeClass(c);
                mySwiper.slideTo($(this).index())
            })
            new Swiper(swiperIsd1, {
                speed: 800,
                slidesPerView: 4,
                spaceBetween: 30,
                pagination: { el: pager1, bulletActiveClass: c, },
                breakpoints: {
                    1366: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 2,
                    }
                }
            })
            new Swiper(swiperIsd2, {
                speed: 800,
                slidesPerView: 4,
                spaceBetween: 30,
                pagination: { el: pager2, bulletActiveClass: c, },
                breakpoints: {
                    1366: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 2,
                    }
                }
            })
        }
        honor()

        // about-公司优势
        function advantage() {
            let container = $('#about').find('.advantage'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager'),
                prev = container.find('.prev'),
                next = container.find('.next');
            console.log(pager, prev, next);
            new Swiper(swiper_box, {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                pagination: { el: pager, type: 'fraction' },
                navigation: { prevEl: prev, nextEl: next, }
            })
        }
        advantage()

        // about-合作伙伴
        function aboutPartner() {
            let container = $('#about').find('.partner'),
                swiper_box = container.find('.swiper'),
                pager = container.find('.pager');

            new Swiper(swiper_box, {
                slidesPerView: 5,
                slidesPerColumn: 2,
                slidesPerColumnFull: 'column',
                spaceBetween: 20,
                pagination: {
                    el: pager,
                    bulletActiveClass: c,
                },
                breakpoints: {
                    990: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerColumn: 3,
                    },
                    600: {
                        slidesPerView: 2,
                        slidesPerColumn: 3,
                    }
                }

            })
        }
        aboutPartner()

        // join-客户案例
        function joinCase() {
            let container = $('#join').find('.case'),
                swiperBox = container.find('.swiper'),
                tab = container.find('.tab_list').children();

            const swiper = new Swiper(swiperBox, {
                speed: 1000,
                allowTouchMove: false,
                slideActiveClass: c,
            })

            tab.click(function () {
                $(this).addClass(c).siblings().removeClass(c);
                swiper.slideTo($(this).index())
            })

            container.find('.swiper_isd').each(function () {
                let s = $(this).find('.swiper-slide').length;
                new Swiper($(this), {
                    speed: 800,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    allowTouchMove: false,
                    slideActiveClass: c,
                    slideToClickedSlide: true,
                    normalizeSlideIndex: false,
                    centeredSlides: true,
                    loop: s > 2 ? true : false,
                    breakpoints: {
                        990: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        }
                    }
                })
            })

        }
        joinCase()

        // news_list-新闻列表
        function newsList() {
            let container = $('#news_list').find('.news'),
                swiper_box = container.find('.swiper'),
                tab = container.find('.tab_list').children();

            const mySwiper = new Swiper(swiper_box, {
                speed: 800,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                slideActiveClass: c,
                preventClicks: false,
                allowTouchMove: false,
                simulateTouch: false,
            })

            tab.click(function () {
                $(this).addClass(c).siblings().removeClass(c)
                mySwiper.slideTo($(this).index())
            })

        }
        newsList()


        if ($('.wow').length > 0) { const wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false, live: true, }); wow.init(); }

    });

});

