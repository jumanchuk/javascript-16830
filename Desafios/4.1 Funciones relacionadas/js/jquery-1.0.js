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

function precise_round(num, decimals) {
    
    t = Math.pow(10, decimals);   
    return (Math.round((num * t) + (decimals>0?1:0)*(Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
 }

 
function setExpense(value){

    prevExpense = document.getElementById("expense").value;
    document.getElementById("expense").value = precise_round(parseInt(prevExpense) + parseInt(value),2);
    updateBalance();

}

     // function to add new row.
function addRow() {

    table = document.getElementById('tableItems');

        // Insert a row at the end of the table
        newRow = table.insertRow(-1);

        // get the number of rows.
        rowCnt = table.rows.length;    
  
        // Insert a cell in the row at index 0
        newCell = newRow.insertCell();

        description = prompt("Add Expense Description")
        newCell.innerHTML = description;

        // Insert a cell in the row at index 0
        newCell = newRow.insertCell(1);

        description = prompt("Expense Amount.")
        newCell.innerHTML = description;

        setExpense(description);

        // Insert a cell in the row at index 0
        newCell = newRow.insertCell(2);

        newCell.innerHTML = "";
}