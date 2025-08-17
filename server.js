const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 5000;
const BOOKINGS_FILE = "./bookings.json";

if (!fs.existsSync(BOOKINGS_FILE)) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify({}));
}

function readBookings() {
  return JSON.parse(fs.readFileSync(BOOKINGS_FILE));
}

function saveBookings(data) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (parsedUrl.pathname === "/bookings" && req.method === "GET") {
    const bookings = readBookings();
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(bookings));
  }

  if (parsedUrl.pathname === "/book" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const { date, time } = JSON.parse(body);
        if (!date || !time) throw new Error("Date або Time не вказано");

        const bookings = readBookings();
        if (!bookings[date]) bookings[date] = {};
        if (!bookings[date][time]) bookings[date][time] = 0;

        if (bookings[date][time] >= 4) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({ error: "Цей слот вже повністю заброньований" })
          );
        }

        bookings[date][time] += 1;
        saveBookings(bookings);

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ success: true }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
