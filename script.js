emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("clientForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        name: name.value,
        age: age.value,
        height: height.value,
        weight: weight.value,
        goal: goal.value,
        conditions: conditions.value
    };

    emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data
    );

    const message =
`New Client:
Name: ${data.name}
Age: ${data.age}
Height: ${data.height}
Weight: ${data.weight}
Goal: ${data.goal}
Conditions: ${data.conditions}`;

    window.open(
        `https://wa.me/1234567890?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});
