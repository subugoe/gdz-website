
var initMenus,mobilecheck;$.fx.speeds._default=250,$(function(){var t,i,e,n,a,o,s,r,l,c,p,d,h,m;if(s=mobilecheck(),s&&($(".desktop-only").hide(),$(".mobile-only").show()),document.getElementById("page-1616")&&-1===window.location.search.indexOf("tx_solr")&&$("aside.infocontent").hide(),initMenus(),$(".contenttable tr td").each(function(t){var i,e;return i=$(this).closest(".contenttable").find("th").length,e=$(this).closest(".contenttable").find("th").eq(t%i),$(this).attr("data-label",e.text())}),$(".tree li").click=function(t){var i;return"undefined"!=typeof piwikTracker?(i="GOK"+document.location.pathname+$(".GOKID",this).text(),piwikTracker.trackPageView(i)):void 0},"tx_solr"===location.search.substring(1,8)&&"undefined"!=typeof piwikTracker&&(d=location.search.split("&")[0].split("=")[1],m="Searchterm/"+d,piwikTracker.trackPageView(m),piwikTracker.setCustomVariable(1,"Suchbegriff",d,"page")),$(".header_toggle-nav").click(function(){return $(".wrap").toggleClass("-show-off-canvas"),!1}),$(".wrap").click(function(){return $(this).removeClass("-show-off-canvas")}),a=$(".header").height(),p=[],c=[],$(".pagination").each(function(){var t;return p.push($(this).offset().top),t=$(this).siblings("ol, ul"),c.push(t.length?t.offset().top+t.outerHeight()-99:0)}),$(window).scroll(function(){return $(this).scrollTop()>a?$(".colophon_top-link:not(.-visible)").addClass("-visible"):$(".colophon_top-link.-visible").removeClass("-visible"),$(".pagination").each(function(t,i){var e;return e=$(window).scrollTop(),e>p[t]&&e<c[t]?$(this).addClass("-fixed"):$(this).removeClass("-fixed")})}),$(".colophon_top-link").click(function(){return $("html, body").animate({scrollTop:0}),!1}),$(".pagination.-alphabet a").click(function(){var t,i,e;return t=$(this).closest(".pagination"),i=$(this).attr("href").split("#")[1],e=t.outerHeight()*(t.is(".-fixed")?1:3),$("html, body").animate({scrollTop:$("#"+i).offset().top-e}),!1}),$("a[href$=pdf]").click(function(){return window.open($(this).attr("href")),!1}),t=$(".content h1:first"),h=[],$(".sidebar > .csc-default").each(function(){var t,i,e,n;return t=$(this),(e=t.attr("id"))?(i=$(this).find("h1, h2, h3, h4, h5, h6").first().text(),n={title:i,id:e},h.push(n)):!0}),h.length>0){for(n=$('<ol class="sidebar-nav_list"/>'),o=0,r=h.length;r>o;o++)l=h[o],l.title&&(i=$('<li class="sidebar-nav_item"/>'),e=$("<a class='sidebar-nav_link' href='#"+l.id+"'>"+l.title+"</a>"),e.click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-13}),!1}),i.append(e).appendTo(n));n.children().length>0&&$('<div class="sidebar-nav"/>').append(n).insertAfter(t)}return null!=window.pz2Initialised?$(".content").on("click","#pz2-termLists h4",function(){return $("#pazpar2").toggleClass("pz2-show-facets")}):void 0}),initMenus=function(){return $(".nav_list.-secondary").hide(),$(".nav_list").has(".-current").show(),$(".nav_link.-current").siblings().show(),$(".nav_list").each(function(){return $("#"+this.id).show()}),$(".nav_link.-toggle").click(function(){var t;return $(this).toggleClass("-open").attr("aria-expanded","true"!==$(this).attr("aria-expanded")),t=$(this).next(".nav_list"),$(".nav_link").not(this).removeClass("-open"),$(".nav_list.-secondary").not(t).slideUp(),t.slideToggle(),!1})},mobilecheck=function(){var t;return t=!1,function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t};
(function() {
  var $areaList, $noResults, filterTimeout, filterVal, sys_language_uid;

  $areaList = {};

  $noResults = {};

  sys_language_uid = 0;

  filterVal = '';

  filterTimeout = null;

  $(function() {
    var $target, language;
    language = $(document).children('html').attr('lang');
    sys_language_uid = (language === 'de' ? 0 : 1);
    $target = $('.search_content.-subjects');
    $('.search_tab.-subjects').click(function() {
      var noResults;
      if (!$areaList.length) {
        $areaList = $('<ul class="search_areas"/>');
        $areaList.loadSubjects("/uploads/tx_subtabs/data-" + sys_language_uid + ".js");
        $target.prepend($areaList);
        noResults = language === 'de' ? 'Keine Treffer' : 'No results';
        $noResults = $("<p class=\"search_no-results\">" + noResults + "</p>").hide();
        return $target.prepend($noResults);
      } else {
        return $('#q').keyup();
      }
    });
    $('#q').bind('keypress', function(e) {
      if (e.keyCode === 13) {
        return false;
      }
    });
    return $('#q').keyup(function(e) {
      clearTimeout(filterTimeout);
      if ($target.is(':hidden')) {
        return;
      }
      return filterTimeout = setTimeout((function(_this) {
        return function() {
          return $areaList.filterSubjects($(_this).val());
        };
      })(this), 100);
    });
  });

  $.fn.loadSubjects = function(url) {
    return this.each(function() {
      var $this;
      $this = $(this);
      return $.getJSON(url, function(areas) {
        var $area, $areaLink, $subject, $subjectLink, $subjectList, $tag, $tagList, area, i, j, k, len, len1, len2, ref, ref1, subject, tag;
        for (i = 0, len = areas.length; i < len; i++) {
          area = areas[i];
          $area = $("<li class='search_area'/>");
          $areaLink = $("<a><span class='search_title'>" + area.titel + "</span></a>");
          $areaLink.attr('href', area.seite);
          $area.append($areaLink);
          $subjectList = $('<ul class="search_subjects"/>').hide();
          ref = area.faecher;
          for (j = 0, len1 = ref.length; j < len1; j++) {
            subject = ref[j];
            $subject = $("<li class='search_subject'/>");
            $subjectLink = $("<a><span class='search_title'>" + subject.titel + "</span></a>");
            $subjectLink.attr('href', subject.seite);
            $subject.append($subjectLink);
            $tagList = $('<ul class="search_tags"/>');
            ref1 = subject.tags;
            for (k = 0, len2 = ref1.length; k < len2; k++) {
              tag = ref1[k];
              $tag = $("<li class='search_tag'><span class='search_title'>" + tag + "</span></li>");
              $tagList.append($tag);
            }
            $subject.append($tagList);
            $subjectList.append($subject);
          }
          $area.append($subjectList);
          $this.append($area);
        }
        return $('#q').keyup();
      });
    });
  };

  $.fn.filterSubjects = function(val) {
    return this.each(function() {
      var $items, $this, tokens;
      $this = $(this);
      if (val === filterVal) {
        return;
      }
      tokens = val.toLowerCase().replace(/[\^$]/g, '').split(' ');
      filterVal = val;
      $items = $this.find('li');
      if (val.length > 2 && tokens !== ['']) {
        $this.clearHighlight();
        $items.each(function(index, item) {
          var show;
          show = true;
          $.each(tokens, function(index, token) {
            var $html, $link, $newHtml, regex;
            if ($(item).text().toLowerCase().indexOf(token) === -1) {
              show = false;
              return false;
            }
            if (token > '') {
              $link = $(item).find('.search_title:first');
              $html = $link.html();
              regex = new RegExp("(" + token + ")", "gi");
              $newHtml = $html.replace(regex, '\^$1\$');
              if ($html !== $newHtml) {
                return $link.html($newHtml);
              } else {
                show = false;
                return false;
              }
            }
          });
          if (show) {
            $(item).show().parents().show();
          } else {
            $(item).hide();
          }
        });
        $noResults.toggle($items.filter(':visible').length === 0);
        $this.html($this.html().replace(/\^/g, '<span class="search_highlight">').replace(/\$/g, '</span>'));
      } else {
        $this.clearHighlight();
        $items.filter('.search_area').show();
        $items.not('.search_area').hide();
        $noResults.hide();
      }
    });
  };

  $.fn.clearHighlight = function() {
    return this.each(function() {
      return $(this).find('.search_highlight').contents().unwrap();
    });
  };

}).call(this);

(function() {
  $(function() {
    $('.search_input').focus(function() {
      if ($('.search.-show-popup').length) {
        return;
      }
      $('.search').addClass('-show-popup');
      if ($('.search_navigation .-active').length === 0) {
        $('.search_navigation a:first').trigger('click', true);
      }
      return $('.search_content').css({
        'min-height': $('.search_navigation').height() + 'px'
      });
    });
    $('.search_input').change(function() {
      return $('.search_input').val($(this).val());
    });
    $('.search, .main_left, .header_show-nav').click(function(e) {
      return e.stopPropagation();
    });
    $(window).click(function() {
      return $('.search_close').click();
    });
    $('.search_close').click(function() {
      $('.search_input').blur();
      $('.search').removeClass('-show-popup');
      return false;
    });
    $(document).bind('keydown', function(e) {
      if (e.keyCode === 27) {
        if ($('.search_input:focus').length === 0 || $('.search_input').val() === '') {
          $(window).click();
        } else {
          $('.search_input').val('').change();
        }
        return false;
      }
    });
    $('.search_navigation a').click(function() {
      var $parent, target;
      target = $(this).attr('href').split('#')[1];
      $parent = $(this).parent('li');
      $('.search_navigation li').not($parent).removeClass('-active');
      $parent.addClass('-active');
      $('.search_content, .search_form').not('.-' + target).removeClass('-visible');
      $('.search_content, .search_form').filter('.-' + target).addClass('-visible');
      $('.search_form.-' + target + ' .search_input').focus();
      return false;
    });
    $('.search_form.-catalog').submit(function() {
      var get, link, open, str, url;
      str = $('#mytextbox').val();
      link = $('.search_content.-catalog :checked').val();
      if (str === ':P') {
        $('body,button,input,select,textarea').css('fontFamily', 'Comic Sans MS,' + $('body').css('fontFamily'));
        $('#mytextbox').val(';)');
      }
      if (link.indexOf('/ezeit/') !== -1 || link.indexOf('/dbinfo/') !== -1) {
        get = escape(str);
      } else {
        get = encodeURIComponent(str);
      }
      url = link + get;
      if ($('.search_catalog-list input:checked').hasClass('-new-window')) {
        open = window.open(url);
        if (open === null || typeof open === 'undefined') {
          location.href = url;
        }
      } else {
        location.href = url;
      }
      return false;
    });
    return $('.search_info-toggle').click(function() {
      $(this).siblings('.search_info-toggle').addBack().toggle();
      $(this).closest('.search_item').find('.search_info').slideToggle();
      return false;
    });
  });

}).call(this);

$(function(){return $(".short-url_link").click(function(){var r;return r=$(this).parents(".short-url"),r.find(".short-url_popup").fadeToggle(),r.find(".short-url_input").select(),!1}),$("body").click(function(){return $(".short-url_popup").fadeOut()}),$(".short-url_popup").click(function(r){return!1})});
