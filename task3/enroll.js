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
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["clgname"] = document.getElementById("clgname").value;

    let gender;
    let genderE1 = document.querySelectorAll('input[name="gender"]');
        for (const btn of genderE1) {
            if (btn.checked) {
                gender = btn.value;
            }
        }
    formData["gender"] = gender; 
    
    function checkbox() {
        var lang1 = document.getElementById("s1");
        var lang2 = document.getElementById("s2");
        var lang3 = document.getElementById("s3");

        var lg1 = document.getElementById("s1").value;
        var lg2 = document.getElementById("s2").value;
        var lg3 = document.getElementById("s3").value;

        var result = [];
        if (lang1.checked == true) {
            if (lang2.checked == true) {
                if (lang3.checked == true) {
                    result.push(lg3)
                }
                result.push(lg2);
            }
            result.push(lg1);
        }
        else if (lang2.checked == true) {
            if (lang3.checked == true) {
                result.push(lg3);
            }
            result.push(lg2);
        }
        return result;
        
    }
    formData["skills"] = checkbox();

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.clgname;
    cell5 = newRow.insertCell(3);
		cell5.innerHTML = data.gender;
    cell6 = newRow.insertCell(4);
        cell6.innerHTML = data.skills     
    cell7 = newRow.insertCell(5);
        cell7.innerHTML = `<button class="edit" onClick="onEdit(this)">Edit</button> <button class="delete" onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("clgname").value = selectedRow.cells[2].innerHTML;
    document.querySelectorAll('input[name="gender"]').value = selectedRow.cells[4].innerHTML;
    document.querySelectorAll('input[name="skills"]').value = selectedRow.cells[5].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.clgname;
    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.skills;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeTable').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("clgname").value = '';
    document.querySelectorAll('input[name="gender"]');
    document.querySelectorAll('input[name="skills"]');
    selectedRow = null;
}