//var timeout;
var car=0;
len = cars.length

display_brochure();
car += 1

$("button#prev").on("click",function(event){
	//event.preventDefault(); // prevent default behaviour of reloading page
	display_brochure();
	console.log(car);

	car += 1;
	if(car==len)
		car=0;
});

$("button#next").on("click",function(event){
	display_brochure();   // diplay picture of automobile and information related to it
	console.log(car);

	car -= 1;
	if(car==-1)
		car=len-1;
});

function display_brochure(){
	$("div#div1").html("");
	$("div#div2").html("");
	mg = "<img src=\""+cars[car]["img"]+"\"  height=500 width=600 />";
	$("div#div1").append($(mg));

	//console.log(cars[car]["img"]);
	//console.log(mg);

	/*
	 * Just for Example
	 * $('#theDiv').prepend($('<img>',{id:'theImg',src:'theImg.png'}))
	*/
	
	$("div#div2").html($("<table id='display'></table>"));
	$("table#display").html($("<tr><th> Features </th><th> Value </th></tr>"));
	for(feature in cars[car]["info"]){
		tr = $("<tr></tr>");
		tr.append($("<td></td>").html(feature));
		tr.append($("<td></td>").html(cars[car]["info"][feature]));

		$("table#display").append(tr);
	}
}	
