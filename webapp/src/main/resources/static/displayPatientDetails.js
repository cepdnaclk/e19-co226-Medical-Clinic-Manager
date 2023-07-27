         // Function to create and add a button to a table cell
         function addButtonToTableCell(tableCell, buttonText, onClickHandler) {
                const button = document.createElement("button");
                button.textContent = buttonText;
                button.addEventListener("click", onClickHandler);
                tableCell.appendChild(button);
         }
         function handleDeleteButtonClick(patientid) {
                // Ask for confirmation before proceeding with the deletion
                const confirmation = confirm("Are you sure you want to delete this patient?");

                if(confirmation) {
                    // URL to which the DELETE request will be sent
                    const url = 'http://localhost:8082/patients/' + patientid; // Replace with your actual URL

                    // Options for the fetch API
                    const options = {
                        method: "DELETE",
                    };

                    // Sending the DELETE request
                    fetch(url, options)
                    .then(response => {
                         if (!response.ok) {
                            throw new Error("Network response was not ok " + url);
                         }
                         // Handle the success response here
                         alert("Data deleted successfully!");
                         location.reload();
                    })
                    .catch(error => {
                        console.error("Error occurred:", error);
                        alert("Data is not deleted! " + error);
                        // Handle errors here
                    });
                }
                else {
                    // User clicked "Cancel" - do nothing or provide feedback if needed
                    console.log("Deletion canceled by the user.");
                }
         }
        // Function to fetch JSON data and populate the patient table
        async function fetchPatientData() {
            try {
                const response = await fetch('http://localhost:8082/patients'); // Replace with your JSON endpoint URL
                const patientData = await response.json();

                // Get the table element to populate patient data
                const table = document.getElementById('patientTable');

                // Iterate over the array of patients and create table rows
                patientData.forEach(patient => {
                    const row = table.insertRow();

                    const firstNameCell = row.insertCell();
                    const lastNameCell = row.insertCell();
                    const nicCell = row.insertCell();
                    const addressCell = row.insertCell();
                    const contactCell = row.insertCell();
                    const dobCell = row.insertCell();
                    const insuranceCell = row.insertCell();
                    const patientIdCell = row.insertCell();
                    const deleteCell = row.insertCell();

                    firstNameCell.innerText = patient.fname;
                    lastNameCell.innerText = patient.lname;
                    nicCell.innerText = patient.nic;
                    addressCell.innerText = patient.address;
                    contactCell.innerText = patient.contact;
                    dobCell.innerText = patient.dob;
                    insuranceCell.innerText = patient.insuranceDetails;
                    patientIdCell.innerText = patient.patientid;

                    addButtonToTableCell(deleteCell, "Delete", () => handleDeleteButtonClick(patient.patientid));
                });
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        }

        // Call the fetchPatientData function when the page is loaded
        window.onload = fetchPatientData;