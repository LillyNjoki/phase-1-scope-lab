var customerName = "bob"
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}
function setBestCustomer(){
     bestCustomer = "not bob"
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}
const leastFavoriteCustomer = "loise"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "loise"
}

changeLeastFavoriteCustomer()
console.log(leastFavoriteCustomer)

