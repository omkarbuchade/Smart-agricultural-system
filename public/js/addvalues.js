$(".select").click(function(){

	alert("clicked");
});

/*window.addEventListener('load', function() {

    $.getJSON( "l.json", function( json ) {
  alert( "JSON Data: " + json );
 });

    /*$.ajax({
    type: "GET",
    url:"/locations.csv",
    dataType:"text/csv",

    success:function(data)
    {
      alert(data);
      var city = data.split(/\r?\n|\r/);
      for (var count=0 ; count<city.length ; count++)
      {
        $('#search_categories').append($('<option>',
           {
              value: city[count],
              text : city[count],
            }));
      }
    }
     error: function (thrownError)
      {
      	alert("unable to load data");
        
      }

  })
  */
   /*  });/*
