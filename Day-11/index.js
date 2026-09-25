// Day-11 - Simple CRUD API with Middleware
// ========================================
// Ye simple Express app hai jo in-memory user list par
// CRUD (Create, Read, Update, Delete) operations karta hai.
// Saath hi humne simple custom middleware bhi banaye hain.
// Har line par Hindi me comment hai taaki samajh aaye.

const express = require("express");

const app = express();
const PORT = 3000;

// ---------------- DATA (In-Memory) ----------------
// Ye ek simple array hai jisme users store honge.
// Real project me is jagah database hota hai (jaise MongoDB).
let users = [
    { id: 1, name: "Shahjad", age: 22 },
    { id: 2, name: "Rahul", age: 25 },
];

// ---------------- MIDDLEWARE ----------------
// Middleware ek function hai jo route handler ke PAHELE run hota hai.
// Isse hum request ko route tak pahunchne se pehle check/process kar sakte hain.

// 1) Built-in middleware - JSON data ko parse karta hai.
//    POST/PUT me bheja gaya body req.body me aa jata hai.
app.use(express.json());

// 2) Custom middleware - Har request ka log (record) rakhta hai.
//    Har request par time + method + url console me print hota hai.
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next(); // next() call karna jaruri hai, warna request yahi atak jayegi
});

// 3) Custom middleware - Simple auth check
//    Ye check karta hai ki user "token" header bhej raha hai ya nahi.
//    Agar nahi to 401 error de deta hai.
function checkAuth(req, res, next) {
    const token = req.headers["token"];
    if (!token) {
        return res.status(401).json({ error: "Token required. Please send a token header." });
    }
    next(); // token mil gaya, aage badho
}

// ---------------- ROUTES (CRUD Operations) ----------------

// READ - Saare users ko list karo    (GET /users)
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// READ - Ek single user ko id se dhundho    (GET /users/:id)
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
});

// CREATE - Naya user add karo    (POST /users)
// Is route par checkAuth middleware lagaya hai -> pehle auth check hoga.
app.post("/users", checkAuth, (req, res) => {
    const { name, age } = req.body;
    // validation - naam aur age dono zaroori hai
    if (!name || !age) {
        return res.status(400).json({ error: "Name and age are required" });
    }
    const newUser = {
        id: users.length + 1, // simple auto-increment id
        name,
        age,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE - User ki detail badlo    (PUT /users/:id)
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const { name, age } = req.body;
    // jo bhi value aayi usko update kar do
    if (name) user.name = name;
    if (age) user.age = age;
    res.status(200).json(user);
});

// DELETE - User ko remove karo    (DELETE /users/:id)
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    const deleted = users.splice(index, 1);
    res.status(200).json({ message: "User deleted", user: deleted[0] });
});

// ---------------- SERVER START ----------------
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
