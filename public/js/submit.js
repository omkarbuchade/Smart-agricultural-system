$('.btn').click(function(){
	loop: {
     var index = document.getElementById("search_categories").selectedIndex;
    //alert("value =" + document.getElementById("search_categories").value); // show selected value
    // alert("text =" + document.getElementById("search_categories").options[index].text);
	var city = document.getElementById("search_categories").value;
	var cropline=null;
	if(city!="none")
	{
		var city = document.getElementById("search_categories").value;
		document.getElementById("submitbutton").style.visibility = "hidden";
		document.getElementById("map").style.visibility = "hidden";
		document.getElementById("crops").style.visibility = "hidden";

		sendlocation();
		
		 
       
	}
	else
	{
		alert("No Area selected!! Please select your Preference ");
		break loop;
	}


  $(this).toggleClass('load');
  $(this).find('i').toggleClass('loaded');
	$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    // code to execute after transition ends

    $(this).find('i').removeClass('fa-circle-o-notch');
    $(this).find('i').addClass('fa-check');
    $('button').toggleClass('green');

	
    
});
}
});

function sendlocation()
{
	var city = document.getElementById("search_categories").value
	
	var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
document.getElementsByTagName('script')[0].parentNode.appendChild(script);
	$.post("/location", { location: city }, (data, status) =>
	 {

			cropline= data;
       		
       	document.getElementById("search_categories").disabled = true;	
       	document.getElementById("crops").style.visibility = "visible";
       		cropDB = data.split(",");
       		
		for (var i =0; i < cropDB.length-1; i++)
		 {
		 	
			var table=document.getElementById("crops");
    	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var txt = document.createTextNode(cropDB[i]);
	var txt2 = document.createTextNode(cropDB[i+1]);
	var img = document.createElement('img');
    img.src = "crops/"+cropDB[i]+".jpg";
        img.style.width = '100%';
        img.style.height = '100px';
    var img2 = document.createElement('img');
    img2.src = "crops/"+cropDB[i+1]+".jpg";
        img2.style.width = '100%';
        img2.style.height = '100px';    
 		//td1.style.fontSize=='50px';
		td1.appendChild(txt);
		td2.appendChild(txt2);
		 tr.appendChild(img);
		tr.appendChild(td1);
		tr.appendChild(img2);
		tr.appendChild(td2);
		table.appendChild(tr);
		  i++;
		 
		}
		if(cropDB.length%2==1){
			var table=document.getElementById("crops");
    	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var txt = document.createTextNode(cropDB[cropDB.length-1]);
	var img = document.createElement('img');
    img.src = "crops/"+cropDB[cropDB.length-1]+".jpg";
        img.style.width = '100%';
        img.style.height = '100px';

        td1.appendChild(txt);
         tr.appendChild(img);
        tr.appendChild(td1);
        table.appendChild(tr);
		}

	
		if(img2.src== undefined.jpg){
			
			stop;
		 }
      });
}

/*

	*/
	

