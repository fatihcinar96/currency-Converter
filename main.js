var selectBase = document.getElementById("selectBase");
var selectTo = document.getElementById("selectTo");

$("#selectTo").change(function () {
    var base = $.get("https://api.exchangeratesapi.io/latest?base=" + selectBase.options[selectBase.selectedIndex].value, function (data) {
        
        var total = parseFloat(data.rates[selectTo.options[selectTo.selectedIndex].value]) * parseFloat($("#price").val());
        $("#currency").text(total.toString() + " " + selectTo.options[selectTo.selectedIndex].text);
    })
})