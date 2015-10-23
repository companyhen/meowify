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

//add random audio to specified element
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

//replace all O's with cat o's

	function makeCatImg(element) {
		var text_nodes = [];

//find all text nodes and push to above array
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

//create a new text node and replace 

		$.each(text_nodes, function(index, val){
			var img = '<img style="height:1em;margin:0 1px; margin-top:-3px;" src="img/catface.png" />'
			if (val.textContent) {
				var text = val.textContent;
				var html= text.replace(/\o/g, img);
				var replacement= document.createElement('span');
				replacement.innerHTML= html;
				val.parentNode.insertBefore(replacement, val);
				val.parentNode.removeChild(val);
			}			
		});
	};

	makeCatImg(document.body);


};

$('a').meowify();
