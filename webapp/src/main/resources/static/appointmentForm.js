        function sendPostRequest(event) {
            event.preventDefault(); // Prevent the default form submission

            // Sample JSON data to be sent in the request
            const jsonData = {
                dueDate: document.getElementById("dueDate").value,
                date:document.getElementById("date").value,
                reason:document.getElementById("reason").value
            };

            // URL to which the POST request will be sent
            const url = "http://localhost:8082/appointments";

            // Headers for the request (specifying JSON content type)
            const headers = {
                "Content-Type": "application/json"
            };

            // Options for the fetch API
            const options = {
                method: "POST",
                headers: headers,
                body: JSON.stringify(jsonData)
            };

            // Sending the POST request
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    // Redirect to the new URL after successful submission
                    window.location.href = "http://localhost:8082/appointmentDetails";

                    console.log("Response from the server:", data);
                    // Handle the response data here
                })
                .catch(error => {
                    console.error("Error occurred:", error);
                    alert(error);
                    // Handle errors here
                });
        }