# BFHL REST API - VIT Assignment

**Student**: Omkar Umesh Jawalikar  
**Roll Number**: 22BCE2223  
**Email**: omkarjawaliakar04@gmail.com

## API Overview

REST API that processes input arrays and categorizes data according to VIT Full Stack question paper requirements.

## Endpoints

### GET /bfhl

Health check endpoint.

```json
{ "operation_code": 1 }
```

### POST /bfhl

Main processing endpoint.

**Request:**

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**

```json
{
  "is_success": true,
  "user_id": "omkar_umesh_jawalikar_12042004",
  "email": "omkarjawaliakar04@gmail.com",
  "roll_number": "22BCE2223",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Local Testing

```bash
# Start server
node index.js

# Test locally
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

## Deployment Testing

Replace `{RAILWAY_URL}` with your deployed URL:

```bash
curl -X POST {RAILWAY_URL}/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

## Tech Stack

- Node.js + Express
- Deployed on Railway
- Auto-deployment from GitHub
"# REST-API-BAJAJ-FINSERV-HEALTH" 
