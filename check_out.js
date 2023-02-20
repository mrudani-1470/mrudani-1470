

var values = Object.values(localStorage)

var product = []
for (var i = 0; i < values.length; i++) {
    product.push(JSON.parse(values[i]))

}

var main = document.getElementById("main")
var main_image = document.getElementById("main_img")
var des = document.getElementById("description")

var total_amount = 0;


$(document).ready(function () {

    for (var i = 0; i < product.length; i++) {
        if (product[i].image != undefined) {
            var final_div = document.createElement("div")
            final_div.classList.add("div")
            var main1 = document.createElement("div")
            main1.classList.add("add", "img1")
            var des1 = document.createElement("div")
            des1.classList.add("add", "des")
            var img = document.createElement("img")
            img.classList.add("image_1")
            img.src = product[i].image

            var name = document.createElement("h6")
            name.innerHTML = product[i].name

            var p = document.createElement("p")
            p.innerHTML = "X" + product[i].count

            var span = document.createElement("span")
            span.classList.add("price")
            span = product[i].count * product[i].Rs


            var tt = document.createElement("p")
            tt.innerHTML = "Amount: Rs " + span

            main1.append(img)
            des1.append(name, p, tt)
            final_div.append(main1, des1)
            main.appendChild(final_div)

            total_amount += span
        }
        else {
            $("#sup_icon").html(product[i])
            $("#total_count").html(product[i])
        }
    }
    $("#totl").html(total_amount)

    $("#add_button").click(function () {
        $.ajax({
            type: 'GET',
            url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/order ',
            data: {
                // "name": "mayank rudani",
                // "avatar": "sdf",
                // "product": product
            },
            success: function (data) {

            },
            error: function (response) {
                alert("error");
            }
        });
    })
})
