!function(c,l){function t(){c(".flip-box").each(function(i,t){c(document).width();var f,s,e,n,b,h,d,a,o=l.innerWidth;""!=o&&(768<=o?""!=(f=c(this).attr("data-min-height")||"")?c(this).hasClass("ifb-custom-height")&&(c(this).css("min-height",f),c(this).css("height",f),c(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")&&(b=c(this).find(".ifb-back").outerHeight(),h=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight(),(b=parseInt(f))<=(h=parseInt(h))&&c(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")),c(this).find(".ifb-front").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")&&(d=c(this).find(".ifb-front").outerHeight(),d=parseInt(f),a=c(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight(),d<=(a=parseInt(a))&&c(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle"))):c(this).hasClass("ifb-jq-height")?(e=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight(),e=parseInt(e),n=c(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight(),(n=parseInt(n))<=e?c(this).find(".ifb-face").css("height",e):c(this).find(".ifb-face").css("height",n)):c(this).hasClass("ifb-auto-height")&&c(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")&&(b=c(this).find(".ifb-back").outerHeight(),b=parseInt(b),h=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight(),b<=(h=parseInt(h))&&c(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")):(f=c(this).attr("data-min-height")||"",c(this).hasClass("style_9")?(c(this).css("height","initial"),s=c(this).find(".ifb-front-1 .ifb-front").outerHeight(),(o=c(this).find(".ifb-back-1 .ifb-back").outerHeight())<s?c(this).css("height",s):c(this).css("height",o)):c(this).hasClass("ifb-jq-height")?(e=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight(),e=parseInt(e),n=c(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight(),(n=parseInt(n))<=e?c(this).find(".ifb-face").css("height",e):c(this).find(".ifb-face").css("height",n)):c(this).hasClass("ifb-auto-height")?c(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")&&(b=c(this).find(".ifb-back").outerHeight(),h=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight(),(b=parseInt(b))<(h=parseInt(h))&&c(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")):c(this).hasClass("ifb-custom-height")?""!=f&&(c(this).css("min-height",f),c(this).css("height",f),c(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")&&(b=c(this).find(".ifb-back").outerHeight(),b=parseInt(b),h=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight(),b<=(h=parseInt(h))&&c(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")),c(this).find(".ifb-front").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")&&(d=c(this).find(".ifb-front").outerHeight(),d=parseInt(d),a=c(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight(),a=parseInt(a),c(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle"))):c(this).css("height","initial")))})}c(l).on("load",function(i){t()}),c(document).ready(function(i){t()}),c(l).resize(function(i){t()})}(jQuery,window);