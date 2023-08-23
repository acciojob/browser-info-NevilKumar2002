//your JS code here. If required.
        function displayBrowserInfo() {
            // Get browser name and version from navigator object
            const browserName = navigator.appName;
            const version = navigator.appVersion;

            // Create the message
            const message = "You are using " + browserName + " version " + version;

            // Display the message in the browser-info div
            const browserInfoDiv = document.getElementById("browser-info");
            browserInfoDiv.textContent = message;
		}
window.onload = displayBrowserInfo;