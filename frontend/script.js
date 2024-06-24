async function performOperation(operation) {
    const operand1 = parseInt(document.getElementById('operand1').value);
    const operand2 = parseInt(document.getElementById('operand2').value);
    const response = await fetch(`http://localhost:8080/${operation}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ operand1, operand2 })
    });
    const result = await response.json();
    document.getElementById('result').innerText = `Result: ${result.result}`;
}
