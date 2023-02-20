


$(document).ready(function () {


    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function (data) {


        var productList = data
        var mainclothingSection = document.getElementById("clothingSection");
        var mainAccessoriesgDiv = document.getElementById("accessoriesDiv");

        for (var i = 0; i < productList.length; i++) {
            if (productList[i].isAccessory === false) {


                var cardDivClothing = document.createElement("a");
                cardDivClothing.className = "card";
                cardDivClothing.href = "product_detail.html?pid=" + productList[i].id



                var divImage = document.createElement("div");
                divImage.className = "img";
                var prodImg = document.createElement("img");
                prodImg.src = productList[i].preview;
                divImage.append(prodImg);

                var divDetails = document.createElement("div");
                divDetails.className = "details";
                var prodNameH3 = document.createElement("h3");
                var prodBrandH4 = document.createElement("h4");
                var prodPriceH5 = document.createElement("h5");
                prodNameH3.innerHTML = productList[i].name;
                prodBrandH4.innerHTML = productList[i].brand;
                prodPriceH5.innerHTML = "Rs " + productList[i].price;
                divDetails.append(prodNameH3, prodBrandH4, prodPriceH5);

                cardDivClothing.append(divImage, divDetails);


                mainclothingSection.appendChild(cardDivClothing)

            } else {
                var cardDivAccessories = document.createElement("a");
                cardDivAccessories.className = "card";
                cardDivAccessories.href = "product_detail.html?pid=" + productList[i].id




                var divImage = document.createElement("div");
                divImage.className = "img";
                var prodImg = document.createElement("img");
                prodImg.src = productList[i].preview;
                divImage.append(prodImg);
                var divDetails = document.createElement("div");
                divDetails.className = "details";
                var prodNameH3 = document.createElement("h3");
                var prodBrandH4 = document.createElement("h4");
                var prodPriceH5 = document.createElement("h5");
                prodNameH3.innerHTML = productList[i].name;
                prodBrandH4.innerHTML = productList[i].brand;
                prodPriceH5.innerHTML = "Rs " + productList[i].price;
                divDetails.append(prodNameH3, prodBrandH4, prodPriceH5);


                cardDivAccessories.append(divImage, divDetails)
                mainAccessoriesgDiv.appendChild(cardDivAccessories);
            }
        }
    })
    var count = 0

    count = JSON.parse(localStorage.getItem("count"))
    if (count >= 1) {
        $("#sup_icon").html(count)
        
    
    }
})

$('.carousal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
})










