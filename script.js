function search(){
    var x = document.getElementById("query").value;
    console.log(x);
    var result = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC";
    var js;
    $.getJSON(result, 
    function(data) {
        for (var i=0;i<10;i++){
        js = data;
        var urls= js.data[i].images.original.url;
        $(".container").append("<img class= center-block images src= "+urls +">");
        // or use your data here by calling yourFunction(data);
    }}
);

}
function reset(){
    window.location.reload();
}