function calculateTax()
{
    // variable declaration
         
    const shippingCost = 3.00;
    let tax = 0;
    let subTotal = 0;
    let total = 0;
    
    // Get info from form using VALUE attribute
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("choice").value;
    
      
    // Initial Calculations
    
    subTotal = quantity * price;
    tax = subTotal * shippingCost;
    total = subTotal + shippingCost;
    
       
    // Round to two decimal places
    
    total = total.toFixed(2);
    
    // Move data back to Form
    
    document.getElementById("subtotal").innerHTML = "Subtotal = " + subTotal;
    document.getElementById("tax").innerHTML = "Shipping Cost = " + shippingCost + " (@€3.00)";
    document.getElementById("total").innerHTML = "Total = " + total;
    
        
    
}