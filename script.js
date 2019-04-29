var img = [];
var products = [];
var prices = [];

$(".add").click(function() {
    var photo = $(".image").val();
    var stuff = $(".item").val();
    var money = $(".price").val();
    parseInt(money);
    $("input").val("");
    if(stuff === "" || stuff === " " || money === " " || money === "") {
        alert("Please type in either the product name or price. Thank you.");
    } else {
        img.push(photo);
        products.push(stuff);
        prices.push(money);
        var number = products.length;
        $("#oh").append("<li class='oh'> " + "<img src=" + photo + ">" + "</li>");
        $("#the").append("<li class='the'>" + stuff + "</li>");
        $("#stuff").append("<li class='stuff'>" + "$" + money + "</li>");
        $(".num").text("Total Number of Items:" + " " + number);
        $(".oh").css("padding", "10px");
        $(".the").css("padding", "20px");
        $(".stuff").css("padding", "20px");
        $("img").css("width", "30px");
        $(".buy").show();
        $(".total").show();
    }
});
 
$(".buy").click(function() {
    var total = 0;
    prices.forEach(function(price) {
        var hi = total += parseInt(price);
        $(".total").text("Total Price:" + " " + "$" + hi);
    });
    var one = products[0];
    alert("You have purchased " + one + "... " + "and your total is: $" + total);
});