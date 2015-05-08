$(document).on("pagecreate","#page2",function(){
	$("p").on("swipe",function(){
		$("span").text("El mejor del mundo");
	});
});