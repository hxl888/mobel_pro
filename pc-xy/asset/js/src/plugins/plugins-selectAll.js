~function($,window,document,undefined){
	function selCheck(allName,detailName){
		$('body').on('change','input[name='+allName+']',function(){
			if ($(this).is(':checked')) {
				$('input[name='+detailName+']').not(':disabled').prop('checked',true);
			}else{
				$('input[name='+detailName+']').not(':disabled').prop('checked',false);
			}
		});
		var checkLen = $('input[name='+detailName+']').not(':disabled').length;
		$('body').on('change','input[name='+detailName+']',function(){
			var checkedLen = $('input[name='+detailName+']:checked').length;
			if (checkedLen==checkLen) {
				$('input[name='+allName+']').prop('checked',true);
			}else{
				$('input[name='+allName+']').prop('checked',false);
			}
		})
	}

	$.selChecks = function(allName,detailName){
		selCheck(allName,detailName);
		return this;
	}

}(jQuery,window,document);
