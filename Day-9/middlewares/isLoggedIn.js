const isLoggedIn = (req, res, next) => {
    let loggedIn = true; // Simulating a logged-in user
    if (loggedIn) {
        next(); // User is logged in, proceed to the next middleware or route handler
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};