!function(i){var e,s=i(window),o=i("body"),t=i("#wrapper"),l=i("#header"),a=i("#footer"),n=i("#main"),r=i("#coscenter"),c=n.children("article");(breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:["361px","480px"],xxsmall:[null,"360px"]}),s.on("load",function(){window.setTimeout(function(){location.hash="",i(".loading").remove(),o.removeClass("preload"),r.removeClass("is-preload")},100)}),"ie"==browser.name)&&s.on("resize.flexbox-fix",function(){clearTimeout(e),e=setTimeout(function(){t.prop("scrollHeight")>s.height()?t.css("height","auto"):t.css("height","100vh")},250)}).triggerHandler("resize.flexbox-fix");var h=l.children("nav"),d=h.find("li");d.length%2==0&&(h.addClass("use-middle"),d.eq(d.length/2).addClass("is-middle"));var u=!1;if(n._show=function(i,e){var t=c.filter("#"+i);if(0!=t.length){if(u||void 0!==e&&!0===e)return o.addClass("is-switching"),o.addClass("is-article-visible"),c.removeClass("active"),l.hide(),a.hide(),n.show(),t.show(),t.addClass("active"),u=!1,void setTimeout(function(){o.removeClass("is-switching")},e?1e3:0);if(u=!0,o.hasClass("is-article-visible")){var r=c.filter(".active");r.removeClass("active"),setTimeout(function(){r.hide(),t.show(),setTimeout(function(){t.addClass("active"),s.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){u=!1},325)},25)},325)}else o.addClass("is-article-visible"),setTimeout(function(){l.hide(),a.hide(),n.show(),t.show(),setTimeout(function(){t.addClass("active"),s.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){u=!1},325)},25)},325)}},n._hide=function(i){var e=c.filter(".active");if(o.hasClass("is-article-visible")){if(void 0!==i&&!0===i&&history.pushState(null,null,"#"),u)return o.addClass("is-switching"),e.removeClass("active"),e.hide(),n.hide(),a.show(),l.show(),o.removeClass("is-article-visible"),u=!1,o.removeClass("is-switching"),void s.scrollTop(0).triggerHandler("resize.flexbox-fix");u=!0,e.removeClass("active"),setTimeout(function(){e.hide(),n.hide(),a.show(),l.show(),setTimeout(function(){o.removeClass("is-article-visible"),s.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){u=!1},325)},25)},325)}},c.each(function(){var e=i(this);i('<div class="close">Close</div>').appendTo(e).on("click",function(){location.hash=""}),e.on("click",function(i){i.stopPropagation()})}),o.on("click",function(i){o.hasClass("is-article-visible")&&n._hide(!0)}),s.on("keyup",function(i){switch(i.keyCode){case 27:o.hasClass("is-article-visible")&&n._hide(!0)}}),s.on("hashchange",function(i){""==location.hash||"#"==location.hash?(i.preventDefault(),i.stopPropagation(),n._hide()):c.filter(location.hash).length>0&&(i.preventDefault(),i.stopPropagation(),n._show(location.hash.substr(1)))}),"scrollRestoration"in history)history.scrollRestoration="manual";else{var f=0,v=0,p=i("html,body");s.on("scroll",function(){f=v,v=p.scrollTop()}).on("hashchange",function(){s.scrollTop(f)})}n.hide(),c.hide(),""!=location.hash&&"#"!=location.hash&&s.on("load",function(){n._show(location.hash.substr(1),!0)})}(jQuery);