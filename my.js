$(document).ready(function(){
$("button").click(function(){
$.post("https://data.sparkfun.com/input/RMbp8YVRQ2flJ7bo4z8w?private_key=lz7nVgKx0MCnNjY7gMwB",
{
temp: $("#test").val()
},
function(data){
alert("Data: " + $("#test").val() + " sent to sparkfun");
});
});
});
