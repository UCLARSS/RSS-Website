let packinglist = ['backpack', 'water-bottle', 'sleeping-bag', 'toiletries', 'sunglasses', 'sunscreen', 'student-id', 'waivers', 'prescribed-medications', 'snacks', 'money'];

let change = function(element) {
	let a = document.getElementById(element + '-text');
	if (a.innerHTML == document.getElementById(element).value) {
		a.innerHTML = '<s>'+a.innerHTML+'</s>';
	}
	else {
		a.innerHTML = document.getElementById(element).value;
	}
	complete();
}

let complete = function() {
	let f = document.getElementById('complete');
	for (let i = 0; i < packinglist.length; i++) {
		if (document.getElementById(packinglist[i]+'-text').innerHTML != '<s>'+document.getElementById(packinglist[i]).value+'</s>') {
			f.innerHTML="<br>";
			return;
		}
	}
	f.innerHTML="You're all set!";
}