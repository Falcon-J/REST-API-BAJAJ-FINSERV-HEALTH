# BFHL REST API 

## API Overview

REST API that processes input arrays and categorizes data according to Full Stack question paper requirements. The API separates numbers, alphabets, and special characters while performing additional operations like sum calculation and string manipulation.


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
  "user_id": "student_name_ddmmyyyy",
  "email": "student.email",
  "roll_number": "XXXXXXXXX",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Environment Variables

Create a `.env` file for local development:

```env
FULL_NAME=your_full_name
DOB=ddmmyyyy
EMAIL=your.email@vitstudent.ac.in
ROLL_NUMBER=your_roll_number
PORT=3000
```

**For Railway Deployment:**

- Add these same variables in your Railway project's Variables tab
- Do not include PORT (Railway sets this automatically)

## Security Features

- Input validation and sanitization
- Request size limits (10MB max)
- Array size validation (1000 items max)
- String length limits (100 chars per item)
- Security headers (XSS, clickjacking protection)
- CORS configuration

## Local Testing

```bash
# Install dependencies
npm install

# Start server
npm start

# Test with PowerShell
$body = @{data = @("a","1","334","4","R","$")} | ConvertTo-Json
Invoke-RestMethod -Uri 'http://localhost:3000/bfhl' -Method Post -Body $body -ContentType 'application/json'
```

## API Testing

```powershell
# Test your deployed API
$url = "https://your-app-name.up.railway.app/bfhl"
$body = @{data = @("a","1","334","4","R","$")} | ConvertTo-Json
Invoke-RestMethod -Uri $url -Method Post -Body $body -ContentType 'application/json'
```


## Tech Stack

- **Backend**: Node.js + Express.js
- **Environment Management**: dotenv
- **Deployment**: Railway Platform
- **Version Control**: Git + GitHub
- **Auto-deployment**: GitHub integration



