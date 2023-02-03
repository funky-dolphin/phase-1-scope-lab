var customerName = "bob"
function returnCustomersName(){
    return customerName
}
function upperCaseCustomerName(){
    customerName=customerName.toUpperCase()
    return customerName
}

function setBestCustomer(){
    bestCustomer = "not bob"
} 

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = "Nick"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="Sally"
}