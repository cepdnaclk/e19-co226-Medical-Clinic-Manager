        // Function to create and add a button to a table cell
        function addButtonToTableCell(tableCell, buttonText, onClickHandler) {
            const button = document.createElement("button");
            button.textContent = buttonText;
            button.addEventListener("click", onClickHandler);
            tableCell.appendChild(button);
        }
        function handleDeleteButtonClick(appointmentId) {
            // Ask for confirmation before proceeding with the deletion
            const confirmation = confirm("Are you sure you want to delete this appointment?");

            if(confirmation) {
                // URL to which the DELETE request will be sent
                const url = 'http://localhost:8082/appointments/' + appointmentId; // Replace with your actual URL

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
        async function fetchAppointmentData() {
            try {
                const response = await fetch('http://localhost:8082/appointments'); // Replace with your JSON endpoint URL
                const appointmentData = await response.json();

                // Get the table element to populate patient data
                const table = document.getElementById('appointmentTable');

                // Iterate over the array of patients and create table rows
                appointmentData.forEach(appointment => {
                    const row = table.insertRow();

                    const appointmentId = row.insertCell();
                    const date = row.insertCell();
                    const dueDate = row.insertCell();
                    const reason = row.insertCell();
                    const deleteCell = row.insertCell();

                    appointmentId.innerText = appointment.appointmentId;
                    date.innerText = appointment.date;
                    dueDate.innerText = appointment.dueDate;
                    reason.innerText = appointment.reason;
                    addButtonToTableCell(deleteCell, "Delete", () => handleDeleteButtonClick(appointment.appointmentId));
                });
            } catch (error) {
                console.error('Error fetching appointment data:', error);
            }
        }

        // Call the fetchPatientData function when the page is loaded
        window.onload = fetchAppointmentData;