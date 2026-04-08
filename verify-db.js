const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
console.log('--- DB AUDIT ---');
console.log('Path:', dbPath);
console.log('Exists:', fs.existsSync(dbPath));

if (fs.existsSync(dbPath)) {
    const db = new sqlite3.Database(dbPath);
    db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, rows) => {
        if (err) {
            console.error('Error:', err.message);
        } else {
            console.log('Tables Found:', rows.map(r => r.name).join(', '));
        }
        db.close();
    });
} else {
    console.log('ERROR: The database file does not exist at the expected path.');
}
