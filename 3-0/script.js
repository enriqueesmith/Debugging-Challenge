function readyFunction(){

	var items = document.getElementsByClassName("badge");
	console.log(items);
	for(var i = 0; i<items.value;i++)
	{
		items[i].addEventListener("click",function(event) {

			for(var j = 0; j<event.target.childNodes.length;j++)
			{
				if(event.target.childNodes.tagname=='SPAN')
				{
					var num = parseInt(event.target.childNodes[j].innerHTML);
					num--;
					if (num <= 0) {
						num = '';
					}
					if(event.target.childNodes[j].innerHTML!='') event.target.childNodes[j].innerHTML = num;	
				}
			}
		});
	}
}