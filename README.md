# CSV → JSON → PostgreSQL

A simple Node.js/Express service that reads `.csv` files, parses them into nested JSON objects, and stores them in a PostgreSQL database.

---

## 🚀 Features

- Custom CSV parser using dot notation to produce nested JSON
- CSV file ingestion via file path or upload
- Stores data in PostgreSQL (`name`, `age`, `address`, `additional_info`)
- Simple Express endpoints for:
  - `/convertCsvToJson` – parse CSV to JSON 
---

## 🛠️ Prerequisites

- Node.js 14+
- PostgreSQL installed locally or in Docker
- A `.env` file (see example below)

---

## 📦 Installation

```bash
git clone <repo-url>
cd <repo>
npm install
