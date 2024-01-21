<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Function to get all Indian states
        function getAllStates() {
            return [
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
                "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
                "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
                "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
                "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                "Uttar Pradesh", "Uttarakhand", "West Bengal"
            ];
        }

        // Function to get popular cities for a selected state
        function getCitiesForState(state) {
            // You can customize this based on your requirements
            const cityData = {
                "Andhra Pradesh": ["City A", "City B", "City C"],
                "Telangana": ["City X", "City Y", "City Z"],
                // Add more cities for other states as needed
            };

            return cityData[state] || [];
        }

        // Populate the state dropdown
        const stateDropdown = document.getElementById("state");
        const cityDropdown = document.getElementById("city");

        const states = getAllStates();
        for (let i = 0; i < states.length; i++) {
            const state = states[i];
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);
        }

        // Update cities dropdown based on the selected state
        stateDropdown.addEventListener("change", function () {
            const selectedState = stateDropdown.value;
            const cities = getCitiesForState(selectedState);

            // Clear previous options
            cityDropdown.innerHTML = "<option value='hide'>-- Choose --</option>";

            // Populate cities dropdown
            for (let i = 0; i < cities.length; i++) {
                const city = cities[i];
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                cityDropdown.appendChild(option);
            }
        });
    });
</script>
