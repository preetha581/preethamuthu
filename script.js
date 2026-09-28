function generatePlan() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let goal = document.getElementById("goal").value.toLowerCase();

    if (name === "" || age === "" || goal === "") {
        alert("Please fill all the details!");
        return;
    }

    let plan = "";

    if (goal.includes("weight loss")) {
        plan = `
            <h3>Weight Loss Fitness Plan</h3>
            <p>🏃 Exercise: 30 minutes walking or jogging</p>
            <p>💪 Workout: Squats, lunges and light exercises</p>
            <p>🥗 Food: Eat more vegetables, fruits and protein-rich foods</p>
            <p>💧 Water: Drink enough water throughout the day</p>
            <p>😴 Sleep: Get 7-9 hours of sleep</p>
        `;
    } 
    else if (goal.includes("muscle")) {
        plan = `
            <h3>Muscle Gain Fitness Plan</h3>
            <p>💪 Exercise: Strength training 3-4 days a week</p>
            <p>🏋️ Workout: Squats, push-ups and basic weight exercises</p>
            <p>🥚 Food: Include protein-rich foods in your meals</p>
            <p>💧 Water: Stay well hydrated</p>
            <p>😴 Sleep: Get 7-9 hours of sleep</p>
        `;
    } 
    else {
        plan = `
            <h3>General Fitness Plan</h3>
            <p>🚶 Walk or exercise for 30 minutes daily</p>
            <p>💪 Do basic full-body exercises</p>
            <p>🥗 Eat a balanced diet</p>
            <p>💧 Drink enough water</p>
            <p>😴 Sleep 7-9 hours daily</p>
        `;
    }

    document.getElementById("result").innerHTML = `
        <h2>Hello ${name}!</h2>
        <p>Age: ${age}</p>
        <p>Goal: ${goal}</p>
        ${plan}
    `;
}