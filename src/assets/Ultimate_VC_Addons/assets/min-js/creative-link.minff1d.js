function ult_creative_link_ht(){jQuery(".ult_cl_link_9").each(function(t){var n=jQuery(this).find(".ult_colorlink").outerHeight(),n=parseInt(n/2);jQuery(this).find(".ult_btn9_link_top").css({"-webkit-transform":"translateY(-"+n+"px)","-ms-transform":"translateY(-"+n+"px)","-moz-transform":"translateY(-"+n+"px)",transform:"translateY(-"+n+"px)"}),jQuery(this).find(".ult_btn9_link_btm").css({"-webkit-transform":"translateY("+n+"px)","-moz-transform":"translateY("+n+"px)","-ms-transform":"translateY("+n+"px)",transform:"translateY("+n+"px)"})})}jQuery(document).ready(function(){jQuery(".ult_colorlink").hover(function(){var t=jQuery(this).data("style");"Style_6"==t&&(n=jQuery(this).find(".ult_btn6_link_top").data("color"),jQuery(this).find(".ult_btn6_link_top").css("text-shadow","10px 0 "+n+", -10px 0 "+n),jQuery(this).find(".ult_btn6_link_top").css("color",n)),"Style_10"==t&&(r=jQuery(this).find(".ult_btn10_span").data("bhover")," "!=jQuery(this).find(".ult_btn10_span").data("bstyle")&&(jQuery(this).find(".ult_btn10_span").css("border-top-style","solid"),jQuery(this).find(".ult_btn10_span").css("border-top-color",r)));var n=jQuery(this).data("texthover"),r=jQuery(this).data("bghover");jQuery(this).css("color",n),jQuery(this).find(".ult_btn10_span").css("color",n),"Style_2"==t&&jQuery(this).find(".ult_btn10_span").css("background",r)},function(){var t=jQuery(this).data("style");"Style_6"==t&&jQuery(this).find(".ult_btn6_link_top").removeAttr("style"),"Style_10"==t&&(r=jQuery(this).find(".ult_btn10_span").data("color")," "!=(n=jQuery(this).find(".ult_btn10_span").data("bstyle"))&&(jQuery(this).find(".ult_btn10_span").css("border-top-style",n),jQuery(this).find(".ult_btn10_span").css("border-top-color",r)));var n=jQuery(this).data("textcolor"),r=jQuery(this).data("bgcolor");jQuery(this).css("color",n),jQuery(this).find(".ult_btn10_span").css("color",n),"Style_2"==t&&jQuery(this).find(".ult_btn10_span").css("background",r)})}),jQuery(window).on("load",function(){ult_creative_link_ht()}),jQuery(document).ready(function(t){ult_creative_link_ht()}),jQuery(window).resize(function(t){ult_creative_link_ht()});