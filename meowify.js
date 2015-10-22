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
};

$('a').meowify();
