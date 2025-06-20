import pool from "./db.js";

async function insertUsers(users) {
    const query = `INSERT INTO users (name, age, address, additional_info) VALUES ($1, $2, $3, $4)`;

    for (const user of users) {
        const fullName = `${user.name?.firstName ?? ""} ${user.name?.lastName ?? ""}`.trim();
        const age = parseInt(user.age);
        const address = user.address || null;

        // Remove mandatory & address fields
        delete user.name;
        delete user.age;
        delete user.address;

        await pool.query(query, [fullName, age, address, user]);
    }
}

async function printAgeDistribution() {
    const res = await pool.query('SELECT age FROM users');
    const counts = { "< 20": 0, "20 to 40": 0, "40 to 60": 0, "> 60": 0 };
    const total = res.rows.length;

    res.rows.forEach(({ age }) => {
        if (age < 20) counts["< 20"]++;
        else if (age <= 40) counts["20 to 40"]++;
        else if (age <= 60) counts["40 to 60"]++;
        else counts["> 60"]++;
    });

    console.log("\nAge-Group % Distribution");
    for (let key in counts) {
        const percent = ((counts[key] / total) * 100).toFixed(2);
        console.log(`${key} → ${percent}%`);
    }
}

export { printAgeDistribution, insertUsers }