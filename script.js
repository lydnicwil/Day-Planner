$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
var time = JSON.parse(moment().format("H"));

for(var i = 8; i < 18; i++)
{
    if(i < time)
    {$("#hour-" + i).addClass("past");}

    if(i === time)
    {$("#hour-" + i).addClass("present");}

    if(i > time)
    {$("#hour-" + i).addClass("future");}
}

$(".saveBtn").click(function(e)
{
    var parentID = $(this).parent().attr('id');
    parent = document.querySelector("#" + parentID);
    var textArea = $(parent).find('textArea');
    var textAreaVal = textArea.val();
    localStorage.setItem(parentID, textAreaVal);
})

$(document).ready(function(){
    for(var i = 0; i < localStorage.length; i++)
    {
        var parentID = localStorage.key(i);
        var parent = document.querySelector("#" + parentID);
        var textArea = $(parent).find('textArea');
        textArea.val(localStorage.getItem(parentID));
    }
})
