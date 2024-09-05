$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        //alert("Hello");
        var value = '';
        value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        });
    });
    $("#myTable tr").click(function(){
        var myText = $(this).text().trim();
        navigator.clipboard.writeText(myText);
        alert("Copied: " + myText);
    });
});