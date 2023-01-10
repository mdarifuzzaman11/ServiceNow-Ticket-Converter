document.addEventListener("DOMContentLoaded", async () => {
    // Get the clipboard text
    const clipboardText = await navigator.clipboard.readText();

    // Check if the clipboard text contains one of the keywords
    if (clipboardText.match(/SCTASK|RITM|INC|REQ/)) {
        // Check if the clipboard text is a ServiceNow ticket link
        if (clipboardText.match(/https:\/\/[a-zA-Z0-9.-]+\.service-now\.com\/[a-z]+\.do\?sys_id=[a-zA-Z0-9]+/)) {
            // Get the ticket number and link
            const ticketNumber = clipboardText.match(/sys_id=([a-zA-Z0-9]+)/)[1];
            const link = clipboardText;

            // Get the ticket information from the ServiceNow API
            const response = await fetch(`https://your-instance.service-now.com/api/now/table/incident?sys_id=${ticketNumber}`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + btoa("username:password")
                }
            });

            const json = await response.json();

            if(json.result && json.result.length){
                const incident = json.result[0];
                // Output the ticket information and link
                output.innerHTML = `Ticket ${ticketNumber}: ${incident.short_description}<br/><a href="${link}">${link}</a>`;
                // Copy the output to clipboard
                navigator.clipboard.writeText(output.innerHTML);
                // Open Microsoft Teams in a new tab
                chrome.tabs.create({ url: "https://teams.microsoft.com" });
            }
        } else {
            output.innerHTML = "Invalid ServiceNow ticket link.";
        }
    }
});
