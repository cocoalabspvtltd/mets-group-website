/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

!function($){"use strict";function VcChart(element,options){this.el=element,this.$el=$(this.el),this.options=$.extend({color:"#f7f7f7",units:"",label_selector:".vc_pie_chart_value",back_selector:".vc_pie_chart_back",responsive:!0},options),this.init()}VcChart.prototype={constructor:VcChart,_progress_v:0,animated:!1,init:function(){this.color=this.options.color,this.value=this.$el.data("pie-value")/100,this.label_value=this.$el.data("pie-label-value")||this.$el.data("pie-value"),this.$wrapper=$(".vc_pie_wrapper",this.$el),this.$label=$(this.options.label_selector,this.$el),this.$back=$(this.options.back_selector,this.$el),this.$canvas=this.$el.find("canvas"),this.draw(),this.setWayPoint(),!0===this.options.responsive&&this.setResponsive()},setResponsive:function(){var that=this;$(window).on("resize",function(){that.$el&&that.$el.is(":visible")&&(!0===that.animated&&that.circle.stop(),that.draw(!0))})},draw:function(redraw){var radius,w=this.$el.addClass("vc_ready").width();w||(w=this.$el.parents(":visible").first().width()-2),radius=(w=w/100*80)/2-5-1,this.$wrapper.css({width:w+"px"}),this.$label.css({width:w,height:w,"line-height":w+"px"}),this.$back.css({width:w,height:w}),this.$canvas.attr({width:w+"px",height:w+"px"}),this.$el.addClass("vc_ready"),this.circle=new ProgressCircle({canvas:this.$canvas.get(0),minRadius:radius,arcWidth:5}),!0===redraw&&!0===this.animated&&(this._progress_v=this.value,this.circle.addEntry({fillColor:this.color,progressListener:$.proxy(this.setProgress,this)}).start())},setProgress:function(){if(this._progress_v>=this.value)return this.circle.stop(),this.$label.text(this.label_value+this.options.units),this._progress_v;this._progress_v+=.005;var label_value=this._progress_v/this.value*this.label_value,val=Math.round(label_value)+this.options.units;return this.$label.text(val),this._progress_v;
	
	/* NAAPO FIX */
	if(!isNaN(val))return this.$label.text(val),this._progress_v
	else return this.$label.text(this.label_value),this._progress_v
	/* ENDOF NAAPO FIX */

},animate:function(){!0!==this.animated&&(this.animated=!0,this.circle.addEntry({fillColor:this.color,progressListener:$.proxy(this.setProgress,this)}).start(5))},setWayPoint:function(){void 0!==$.fn.vcwaypoint?this.$el.vcwaypoint($.proxy(this.animate,this),{offset:"85%"}):this.animate()}},$.fn.vcChat=function(option,value){return this.each(function(){var $this=$(this),data=$this.data("vc_chart"),options="object"==typeof option?option:{color:$this.data("pie-color"),units:$this.data("pie-units")};void 0===option&&$this.data("vc_chart",data=new VcChart(this,options)),"string"==typeof option&&data[option](value)})},"function"!=typeof window.vc_pieChart&&(window.vc_pieChart=function(){$(".vc_pie_chart:visible").vcChat()}),$(document).ready(function(){window.vc_iframe||vc_pieChart()})}(window.jQuery);