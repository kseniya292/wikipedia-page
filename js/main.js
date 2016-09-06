$(document).ready(function(){

$(".fa-search").click(function() { 

    var searchTerm = $("#searchTerm").val();
    var api_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&list=search&utf8=1&search=' + searchTerm + '&callback=?';

    $.ajax( {
        url: api_URL,
        //data: queryData,
        dataType: 'json',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
        	console.log(data);
                    $(".article").html('');
                    for (var i = 1; i < data[1].length; i++) {
                        $(".article").append('<div class="wiki-story"><a href="' + data[3][i] + 
                            '" target="_blank"><h2>' + data[1][i] + 
                            '</h2><li>' + data[2][i] + '</li></a></div>');
                    }  //j for loop        
        } //success function

    }); //ajax call

}); //click

$("#searchTerm").keypress(function(e){
    if(e.which == 13){//Enter key pressed
        e.preventDefault();
        $(".fa-search").click();//Trigger search button click event
    }
}); // search on enter function

var appHeight, windowHeight, appTop;

function centerApp() {
    appHeight = $(".wikiApp").height();
    windowHeight = $(window).height();
    appTop = (windowHeight - appHeight)/2;
  $(".wikiApp").css({
    "top" : appTop
  }); //css

} //resize main image

$(window).resize(function () {
  centerApp();
  }); //resize

centerApp();
  

}); //ready method end

