var meows = ['meow1.wav', 'meow2.wav', 'meow3.wav', 'meow4.wav', 'meow5.wav', 'meow6.wav'];
var meow = meows[Math.floor(Math.random() * meows.length)];

//make html for all audio files
var audio="";
function makeAudioTag() {
	meows.forEach(function(element, index){
		audio+= '<audio id="meow'+ index +'" src="src/' + element + '" preload="auto"></audio>';
	});
	return audio;
}

$.fn.meowify = function () {
	$('body').append(makeAudioTag());

	this.each(function(i){
		if(i != 0) {
			i = Math.floor(Math.random() * meows.length);
			$('#meow'+i)
				.clone()
				.attr('id', 'meow' + i)
				.appendTo($(this).parent());
		}
		$(this).data('meower', i);
	})
	.mouseenter(function() {
		$('#meow' + $(this).data('meower'))[0].play();
	});
	$('#meow').attr('id', 'meow0');

	function makeCatImg(element) {
		var text_nodes = [];
		(function recursiveWalk(node){
			if (node) {
				node = node.firstChild;
				while (node != null) {
					if (node.nodeType ==3) {
						text_nodes.push(node);
					} else if (node.nodeType ==1) {
						recursiveWalk(node);
					}
					node = node.nextSibling;
				}
			}
		})(element);
console.log(text_nodes)


		$.each(text_nodes, function(index, val){
			var img = '<img style="height:1em;margin:0 1px; margin-top:-3px;" src="img/catface.png" />'
			if (val.textContent) {
				var text = val.textContent;
				var html= text.replace(/\o/g, img);
				// console.log(val.parentElement.innerHTML)
				// val.parentElement.innerHTML= html;
				val.textContent= html;
				
				
				// val.parentElement.replaceWith(html);
				// val.parentElement.innerHTML = val.textContent.replace(/\o/g, img);
				// val.textContent= val.textContent.replace(/\o/g, img)
				// text.html(html);
				
				
			}

			
		})
			console.log(text_nodes)
			
	}

	makeCatImg(document.body);


	// var textNodes = $("body").contents().filter(function(){
	// 		return (this.nodeType === 3);
	// });

	//console.log(typeof textNodes);
	//console.log(textNodes);

	var img = '<img style="height:1em;margin:0 1px; margin-top:-3px;" src="img/catface.png" />';

	// Object.keys(textNodes).forEach(function(el){
	// 	console.log(textNodes[el]);
	// 	var html = el.textContent.replace(/\o/g, img);
	// 	$(this).html(html);
	// });

	// $('h1, a').each(function() {
	//     var txt = $(this).text();
	//     var img = '<img style="height:1em;margin:0 1px; margin-top:-3px;" src="img/catface.png" />'
	//     var html = txt.replace(/\o/g, img);
	//     $(this).html(html);
	// });
};

$('a').meowify();
