/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 4.0.0
------------------------------------------------------------------------- */
!function(t){function e(){var t=location.href;return hashtag=-1!==t.indexOf("#prettyPhoto")&&decodeURI(t.substring(t.indexOf("#prettyPhoto")+1,t.length)),hashtag&&(hashtag=hashtag.replace(/<|>/g,"")),hashtag}function i(t,e){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null===i?"":i[1]}t.prettyPhoto={version:"4.0.0"},t.fn.prettyPhoto=function(p){p=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" allowfullscreen="true"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="https://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},p);var o,a,s,n,l,r,d,h=this,c=!1,_=t(window).height(),g=t(window).width();function m(){t(".pp_loaderIcon").hide(),projectedTop=scroll_pos.scrollTop+(_/2-o.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(".pp_content").animate({height:o.contentHeight,width:o.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:g/2-o.containerWidth/2<0?0:g/2-o.containerWidth/2,width:o.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(o.height).width(o.width),$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),isSet&&"image"===y(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide(),settings.allow_expand&&(o.resized?t("a.pp_expand,a.pp_contract").show():t("a.pp_expand").hide()),!settings.autoplay_slideshow||d||a||t.prettyPhoto.startSlideshow(),settings.changepicturecallback(),a=!0}),isSet&&settings.overlay_gallery&&"image"===y(pp_images[set_position])?(itemWidth=57,navWidth="facebook"===settings.theme||"pp_default"===settings.theme?50:30,itemsPerPage=Math.floor((o.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0===totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,t.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave"),p.ajaxcallback()}function u(e){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden"),$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){t(".pp_loaderIcon").show(),e()})}function f(t,e){if(resized=!1,v(t,e),imageWidth=t,imageHeight=e,(r>g||l>_)&&doresize&&settings.allow_resize&&!c){for(resized=!0,fitting=!1;!fitting;)r>g?(imageWidth=g-200,imageHeight=e/t*imageWidth):l>_?(imageHeight=_-200,imageWidth=t/e*imageHeight):fitting=!0,l=imageHeight,r=imageWidth;(r>g||l>_)&&f(r,l),v(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(l),containerWidth:Math.floor(r)+2*settings.horizontal_padding,contentHeight:Math.floor(s),contentWidth:Math.floor(n),resized:resized}}function v(e,i){e=parseFloat(e),i=parseFloat(i),$pp_details=$pp_pic_holder.find(".pp_details"),$pp_details.width(e),detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom")),$pp_details=$pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({position:"absolute",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(".ppt"),$pp_title.width(e),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo(t("body")).css({position:"absolute",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),s=i+detailsHeight,n=e,l=s+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height(),r=e}function y(t){return t.match(/youtube\.com\/watch/i)||t.match(/youtu\.be/i)?"youtube":t.match(/vimeo\.com/i)?"vimeo":t.match(/\b.mov\b/i)?"quicktime":t.match(/\b.swf\b/i)?"flash":t.match(/\biframe=true\b/i)?"iframe":t.match(/\bajax=true\b/i)?"ajax":t.match(/\bcustom=true\b/i)?"custom":"#"===t.substr(0,1)?"inline":t.match(/\b.mp4\b/i)?"html5":"image"}function w(){if(doresize&&"undefined"!=typeof $pp_pic_holder){if(scroll_pos=b(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=_/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>_)return;$pp_pic_holder.css({top:projectedTop,left:g/2+scroll_pos.scrollLeft-contentwidth/2})}}function b(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function k(e){if(settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href))),settings.markup=settings.markup.replace("{pp_social}",""),t("body").append(settings.markup),$pp_pic_holder=t(".pp_pic_holder"),$ppt=t(".ppt"),$pp_overlay=t("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject="";for(var i=0;i<pp_images.length;i++)pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",img_src=pp_images[i]):(classname="default",img_src=""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find("#pp_full_res").after(toInject),$pp_gallery=t(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li"),$pp_gallery.find(".pp_arrow_next").on("click",function(){return t.prettyPhoto.changeGalleryPage("next"),t.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(".pp_arrow_previous").on("click",function(){return t.prettyPhoto.changeGalleryPage("previous"),t.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(e){t(this).find("a").on("click",function(){return t.prettyPhoto.changePage(e),t.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").on("click",function(){return t.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme),$pp_overlay.css({opacity:0,height:t(document).height(),width:t(window).width()}).bind("click",function(){settings.modal||t.prettyPhoto.close()}),t("a.pp_close").bind("click",function(){return t.prettyPhoto.close(),!1}),settings.allow_expand&&t("a.pp_expand").bind("click",function(e){var i=t(this);return i.hasClass("pp_expand")?(i.removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(i.removeClass("pp_contract").addClass("pp_expand"),doresize=!0),u(function(){t.prettyPhoto.open()}),!1}),$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return t.prettyPhoto.changePage("previous"),t.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return t.prettyPhoto.changePage("next"),t.prettyPhoto.stopSlideshow(),!1}),w()}return doresize=!0,scroll_pos=b(),t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){w(),_=t(window).height(),g=t(window).width(),"undefined"!=typeof $pp_overlay&&$pp_overlay.height(t(document).height()).width(g)}),p.keyboard_shortcuts&&t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(e){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(e.keyCode){case 37:t.prettyPhoto.changePage("previous"),e.preventDefault();break;case 39:t.prettyPhoto.changePage("next"),e.preventDefault();break;case 27:settings.modal||t.prettyPhoto.close(),e.preventDefault()}}),t.prettyPhoto.initialize=function(){settings=p,"pp_default"===settings.theme&&(settings.horizontal_padding=16);var e=t(this);return theRel=e.attr(settings.hook),galleryRegExp=/\[(?:.*)\]/,isSet=!!galleryRegExp.exec(theRel),pp_images=isSet?jQuery.map(h,function(e,i){if(-1!==t(e).attr(settings.hook).indexOf(theRel))return t(e).attr("href")}):t.makeArray(e.attr("href")),pp_titles=isSet?jQuery.map(h,function(e,i){if(-1!==t(e).attr(settings.hook).indexOf(theRel))return t(e).find("img").attr("alt")?t(e).find("img").attr("alt"):""}):t.makeArray(e.find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(h,function(e,i){if(-1!==t(e).attr(settings.hook).indexOf(theRel))return t(e).attr("title")?t(e).attr("title"):""}):t.makeArray(e.attr("title")),pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1),set_position=jQuery.inArray(e.attr("href"),pp_images),rel_index=isSet?set_position:t("a["+settings.hook+"^='"+theRel+"']").index(t(this)),k(this),settings.allow_resize&&t(window).bind("scroll.prettyphoto",function(){w()}),t.prettyPhoto.open(),!1},t.prettyPhoto.open=function(e){return"undefined"==typeof settings&&(settings=p,pp_images=t.makeArray(arguments[0]),pp_titles=arguments[1]?t.makeArray(arguments[1]):t.makeArray(""),pp_descriptions=arguments[2]?t.makeArray(arguments[2]):t.makeArray(""),isSet=pp_images.length>1,set_position=arguments[3]?arguments[3]:0,k(e.target)),settings.hideflash&&t("object,embed,video,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),t(pp_images).size()>1?t(".pp_nav").show():t(".pp_nav").hide(),t(".pp_loaderIcon").show(),settings.deeplinking&&function(){if("undefined"==typeof theRel)return;location.hash=theRel+"/"+rel_index+"/"}(),settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)),$pp_pic_holder.find(".pp_social").html(facebook_like_link)),$pp_pic_holder.removeClass("pp_pic_have_only_one"),1===pp_images.length&&$pp_pic_holder.addClass("pp_pic_have_only_one"),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+t(pp_images).size()),void 0!==pp_descriptions[set_position]&&""!==pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(i("width",pp_images[set_position]))?i("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(i("height",pp_images[set_position]))?i("height",pp_images[set_position]):settings.default_height.toString(),c=!1,-1!==movie_height.indexOf("%")&&(movie_height=parseFloat(t(window).height()*parseFloat(movie_height)/100-150),c=!0),-1!==movie_width.indexOf("%")&&(movie_width=parseFloat(t(window).width()*parseFloat(movie_width)/100-150),c=!0),$pp_pic_holder.fadeIn(function(){switch(settings.show_title&&""!==pp_titles[set_position]&&void 0!==pp_titles[set_position]?$ppt.html(unescape(pp_titles[set_position])):$ppt.html("&nbsp;"),imgPreloader="",skipInjection=!1,y(pp_images[set_position])){case"image":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<t(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){o=f(imgPreloader.width,imgPreloader.height),m()},imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist."),t.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case"youtube":o=f(movie_width,movie_height),movie_id=i("v",pp_images[set_position]),""===movie_id&&(movie_id=pp_images[set_position].split("youtu.be/"),movie_id=movie_id[1],movie_id.indexOf("?")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),movie_id.indexOf("&")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("&")))),movie="https://www.youtube.com/embed/"+movie_id,i("rel",pp_images[set_position])?movie+="?rel="+i("rel",pp_images[set_position]):movie+="?rel=1",settings.autoplay&&(movie+="&autoplay=1"),toInject=settings.iframe_markup.replace(/{width}/g,o.width).replace(/{height}/g,o.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":o=f(movie_width,movie_height),movie_id=pp_images[set_position];var e=movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/);movie="https://player.vimeo.com/video/"+e[3]+"?title=0&amp;byline=0&amp;portrait=0",settings.autoplay&&(movie+="&autoplay=1;"),vimeo_width=o.width+"/embed/?moog_width="+o.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,o.height).replace(/{path}/g,movie);break;case"quicktime":(o=f(movie_width,movie_height)).height+=15,o.contentHeight+=15,o.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,o.width).replace(/{height}/g,o.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":o=f(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf("?")),toInject=settings.flash_markup.replace(/{width}/g,o.width).replace(/{height}/g,o.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":o=f(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1),toInject=settings.iframe_markup.replace(/{width}/g,o.width).replace(/{height}/g,o.height).replace(/{path}/g,frame_url);break;case"html5":o=f(movie_width,movie_height),toInject='<video preload="auto" autoplay controls><source type="video/mp4" src="'+pp_images[set_position]+'"></video>';break;case"ajax":doresize=!1,o=f(movie_width,movie_height),doresize=!0,skipInjection=!0,t.get(pp_images[set_position],function(t){toInject=settings.inline_markup.replace(/{content}/g,t),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,m()});break;case"custom":o=f(movie_width,movie_height),toInject=settings.custom_markup;break;case"inline":myClone=t(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(),doresize=!1,o=f(t(myClone).width(),t(myClone).height()),doresize=!0,t(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,t(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,m())}),!1},t.prettyPhoto.changePage=function(e){currentGalleryPage=0,"previous"===e?(set_position--,set_position<0&&(set_position=t(pp_images).size()-1)):"next"===e?(set_position++,set_position>t(pp_images).size()-1&&(set_position=0)):set_position=e,rel_index=set_position,doresize||(doresize=!0),settings.allow_expand&&t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),u(function(){t.prettyPhoto.open()})},t.prettyPhoto.changeGalleryPage=function(t){"next"===t?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"===t?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=t,slide_speed="next"===t||"previous"===t?settings.animation_speed:0,slide_to=currentGalleryPage*(itemsPerPage*itemWidth),$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},t.prettyPhoto.startSlideshow=function(){void 0===d?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").on("click",function(){return t.prettyPhoto.stopSlideshow(),!1}),d=setInterval(t.prettyPhoto.startSlideshow,settings.slideshow)):t.prettyPhoto.changePage("next")},t.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").on("click",function(){return t.prettyPhoto.startSlideshow(),!1}),clearInterval(d),d=void 0},t.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(t.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){t(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&t("object,embed,video,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible"),t(this).remove(),t(window).unbind("scroll.prettyphoto"),-1!==location.href.indexOf("#prettyPhoto")&&(location.hash="prettyPhoto"),settings.callback(),doresize=!0,a=!1,delete settings}))},!pp_alreadyInitialized&&e()&&(pp_alreadyInitialized=!0,hashIndex=e(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("/")),setTimeout(function(){t("a["+p.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)),this.unbind("click.prettyphoto").bind("click.prettyphoto",t.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;