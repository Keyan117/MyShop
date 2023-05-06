var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}


function readFormData() {
    var formData = {};
    formData["itemCode"] = document.getElementById("itemCode").value;
    formData["item"] = document.getElementById("item").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["itemPrice"] = document.getElementById("itemPrice").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.itemCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.item;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.itemPrice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("itemCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("item").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("itemPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.itemCode;
    selectedRow.cells[1].innerHTML = formData.item;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.itemPrice;
}


function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("ItemCode").value = '';
    document.getElementById("Item").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("ItemPrice").value = '';
    selectedRow = null;
}