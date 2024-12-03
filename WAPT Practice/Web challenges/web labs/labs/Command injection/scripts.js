// Command Injection Simulation
document.getElementById('command-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user input from the command field
    let command = document.getElementById('command').value;

    // Output the command execution result
    try {
        // Simulate command execution
        let result = eval(command); // This is where the "command injection" happens
        document.getElementById('output').textContent = `Command executed successfully: ${result}`;
    } catch (error) {
        // If there's an error in the command, display it
        document.getElementById('output').textContent = `Error executing command: ${error.message}`;
    }
});
