function readyFunction(){
	var data = [
		{
			text: 'Overshadowing #UNGA is the big question: Will Obama and Rouhani meet?',
			href: 'https://twitter.com/cnnbrk/status/382528782738800641'
		},
		{
			text: "Marine's family hopes visiting Iranian president will help free their son",
			href: 'https://twitter.com/cnnbrk/status/382519683053649920'
		},
		{
			text: 'Obama addresses United Nations.',
			href: 'https://twitter.com/cnnbrk/status/382507500903202817'
		},
		{
			text: '',
			href: 'https://twitter.com/CNNMoney/status/382497891723804672'
		},
		{
			text: "If you're seeing this as a button, congratulations!",
			href: 'http://twitter.com'
		}
	];
	for (var i = 0; i<data.length; i++) {
		if (data.text) {
			var newDiv = document.getElementById("#news");
			newDiv += "<p><button type='button' class='btn btn-default' datahref='"+data.href+"''><span class='glyphicon glyphicon-star'></span> "+data.text+"</button></p>";
		}
	}
	
	
	var btnsArray = document.getElementsByTagName("button");
	console.log(btnsArray);
	for(var j = 0; j<btnsArray.length;j++)
	{
		btnsArray[j].addEventListener("click",function(event){
			if (!target.datahref) {
				document.location = target.datahref;
			}
		});
	}
}