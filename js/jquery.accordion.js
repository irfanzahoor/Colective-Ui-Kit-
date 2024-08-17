/**
	插件介绍：手风琴式标签页
	方法名：accordion
	参数：options={
		clickItem : $('.same_open'),//展开详情页的点击按钮元素
		contentItem : $('.same_open_content'),//详情页元素容器
		contentWidth : '340px',//详情页元素容器的宽度，（这个参数更改后需要修改相应的css样式）
		closeTime : 500,//关闭当前展开页容器的时间，默认500毫秒
		openTime : 500,//展开被选取的详情页容器的时间，默认500毫秒
		tmpInput : $('#tmp'),//临时隐藏记录域元素，作用：记录当前展开的详情页的标记
		clickItemBgColor : '#9d8757',//展开详情页的点击按钮元素的背景色
		contentItemBgColor : '#e2dbcc'//详情页元素容器的背景色
	}
*/
;(function($){
	$.fn.accordion = function(options){

		var defaults = {
			clickItem : $('.same_open'),
			contentItem : $('.same_open_content'),
			contentWidth : '100%',
			closeTime : 500,
			openTime : 500,
			tmpInput : $('#tmp'),
			clickItemBgColor : '#9d8757',
			contentItemBgColor : '#e2dbcc'

		}
		var obj = $.extend(defaults,options);

		obj.clickItem.css('backgroundColor',obj.clickItemBgColor);
		obj.contentItem.css('backgroundColor',obj.contentItemBgColor);

		obj.clickItem.click(function(){
			var _item = obj.tmpInput.val();
			var _data = $(this).attr('data');
			obj.contentItem.animate({width:0},obj.closeTime);
			$('#'+_data).animate({width:obj.contentWidth},obj.openTime,function(){
				obj.tmpInput.val(_data);
			});
		});

		return this;
	}
})(jQuery);