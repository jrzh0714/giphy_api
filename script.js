function search(){
    var x = document.getElementById("query").value;
    var result = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC";
    var js;
    $.getJSON(result, 
    function(data) {
        for (var i=0;i<10;i++){
        js = data;
        var urls= js.data[i].images.original.url;
        var slugs = js.data[i].slug;
        $(".container").append("<div class= center-block ><img class= img-responsive src= "+urls +"></div>");
        $(".container").append("<p class= lead style= text-align:center; > "+slugs+"</p>");
    }}
);}
function random(){
    var result ="https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
    var js;
    $.getJSON(result, 
    function(data) {
        js = data
        var urls = js.data.image_url;
        console.log(urls);
        $(".container").append("<div class= center-block ><img class= img-responsive src= "+urls +"></div>");
});}
function trending(){
    var result ="https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    var js;
    $.getJSON(result, 
    function(data) {
        for (var i=0;i<10;i++){
        js = data;
        var urls = js.data[i].images.original.url;
        var slugs = js.data[i].slug;
     $(".container").append("<div class= center-block ><img class= img-responsive src= "+urls +"></div>");
     $(".container").append("<p class= lead style= text-align:center; > "+slugs+"</p>");
     
    }
});}

function erase(){
    $("#result").empty();
}
function reset(){
    window.location.reload();
}