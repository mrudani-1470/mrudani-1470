

$(document).ready(function () {

    var querypara = location.search
    var product_id = querypara.substring(querypara.lastIndexOf("=") + 1);

    //product detail page
    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + product_id, function (data) {

        var productData = data

        var main_div = document.getElementById("clothing");

        var bgimg = document.getElementById("big_image")
        var big_image = document.createElement("img")
        big_image.src = productData.preview
        bgimg.append(big_image)

        var div_sec = document.createElement("div");
        div_sec.classList.add("div_sec")
        var head_sec = document.createElement("h1");
        head_sec.innerHTML = productData.name


        var para1 = document.createElement("p");
        para1.classList.add("para1")
        para1.innerHTML = productData.brand


        var para2 = document.createElement("span");
        para2.classList.add("para2")
        para2.innerHTML = "Price: " + "Rs "

        var price = document.createElement("span")
        price.classList.add("price_color")
        price.innerHTML = productData.price

        var des = document.createElement("h3")
        des.innerHTML = "Description"


        var para3 = document.createElement("p");
        para3.classList.add("para3")
        para3.innerHTML = productData.description

        var pop = document.createElement("h3")
        pop.innerHTML = "Product Preview"


        var div_image = document.createElement("div")
        for (var i = 0; i < productData.photos.length; i++) {
            var image = "image" + i
            var image = document.createElement("img");
            image.classList.add("image")
            image.src = productData.photos[i]
            div_image.append(image)
        }
        $(document).on('click', '.image', function () {
            big_image.src = $(this).attr('src')

        })
        var button = document.createElement("button")
        button.classList.add("add_button")
        button.innerHTML = "Add to Cart"

        div_sec.append(head_sec, para1, para2, price, des, para3, pop, div_image, button)
        main_div.append(div_sec)

        var check_item = JSON.parse(localStorage.getItem("count"))
        if(check_item == null){
            $("#sup_icon").html(0)
        }
        else{
            $("#sup_icon").html(check_item)
        }
       
        var itms_name = "itms" + productData.id;
        var count = 0;
        var keys = Object.keys(localStorage)

            for(var i=0;i<keys.length;i++){
                if( keys[i] == itms_name){
                    count = JSON.parse(localStorage.getItem(itms_name)).count
                    break
                }
                else{
                    count = 0
                }
            }
       
        $(document).on("click", ".add_button", function () {
            check_item = check_item + 1
            $("#sup_icon").html(check_item)
            count = count+1
          

            itms = {
                "image": productData.preview,
                "name": productData.name,
                "count": count,
                "Rs": productData.price

            }
            localStorage.setItem("count",JSON.stringify( check_item))
            localStorage.setItem(itms_name, JSON.stringify(itms))

        })


    })




})