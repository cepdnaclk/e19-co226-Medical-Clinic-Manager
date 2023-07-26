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

                    appointmentId.innerText = appointment.appointmentId;
                    date.innerText = appointment.date;
                    dueDate.innerText = appointment.dueDate;
                    reason.innerText = appointment.reason;
                });
            } catch (error) {
                console.error('Error fetching appointment data:', error);
            }
        }

        // Call the fetchPatientData function when the page is loaded
        window.onload = fetchAppointmentData;