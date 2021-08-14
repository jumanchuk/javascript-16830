function setIncoming(){

    amount = prompt("Please, write the incoming amount.")
    document.getElementById("incoming").value = amount;

    updateBalance();

}

function updateBalance(){

    incoming = document.getElementById("incoming").value;
    expense = document.getElementById("expense").value;

    balance = parseInt(incoming)-parseInt(expense);
    document.getElementById("balance").value = balance;

    alert("Your new balance is $"+balance);

}
