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

                    firstNameCell.innerText = patient.fname;
                    lastNameCell.innerText = patient.lname;
                    nicCell.innerText = patient.nic;
                    addressCell.innerText = patient.address;
                    contactCell.innerText = patient.contact;
                    dobCell.innerText = patient.dob;
                    insuranceCell.innerText = patient.insuranceDetails;
                    patientIdCell.innerText = patient.patientid;
                });
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        }

        // Call the fetchPatientData function when the page is loaded
        window.onload = fetchPatientData;