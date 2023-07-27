        function sendPostRequest(event) {
            event.preventDefault(); // Prevent the default form submission

            // Sample JSON data to be sent in the request
            const jsonData = {
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                nic: document.getElementById("nic").value,
                address: document.getElementById("address").value,
                contact: document.getElementById("contact").value,
                dob:document.getElementById("dob").value,
                insuranceDetails:document.getElementById("have_valid_insurance1").value,
                insuranceDetails:document.getElementById("have_valid_insurance2").value
            };

            // URL to which the POST request will be sent
            const url = "http://localhost:8082/patients";

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
                    window.location.href = "http://localhost:8082/appointmentForm";

                    console.log("Response from the server:", data);
                    // Handle the response data here
                })
                .catch(error => {
                    console.error("Error occurred:", error);
                    // Handle errors here
                });
        }