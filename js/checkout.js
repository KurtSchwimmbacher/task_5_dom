displayCheck = () =>{

    let data =  JSON.parse(localStorage.getItem("order"));
    let items = document.getElementById("checkoutOrder");
    let totalArea = document.getElementById("totalOut");

    let checkTotal = 0;

    for(let i =0; i< data.length; i++){

        let name = data[i].pizzaName;
        let size = data[i].pizzaSize;
        let base = data[i].pizzaBase;
        let toppings = data[i].pizzaToppings;
        let price = data[i].pizzaPrice; 

        checkTotal += price;

        items.innerHTML += `
        <div class="orderLine">
            <p><strong>Pizza: ${name}</strong></p>
            <p><strong>Size: ${size}</strong></p>
            <p><strong>Base: ${base}</strong></p>
            <p><strong>Toppings: ${toppings.join(", ")}</strong></p>
            <p><strong>Price: R${price}</strong></p>
        </div>`


        totalArea.innerHTML = "R" + checkTotal +".00"

    }

}



resetReturn= () =>{
    localStorage.removeItem("order");
    window.location.href = "../index.html";
}