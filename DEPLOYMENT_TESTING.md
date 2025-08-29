# Railway Deployment Testing Guide

## After Railway Deployment:

### 1. Get Your Railway URL

After deployment, Railway will provide you with a URL like:
`https://your-app-name.railway.app`

### 2. Test the GET endpoint

```bash
curl https://your-railway-url.railway.app/bfhl
```

Expected response: `{"operation_code": 1}`

### 3. Test the POST endpoint with all examples

#### Example A:

```bash
curl -X POST https://your-railway-url.railway.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

#### Example B:

```bash
curl -X POST https://your-railway-url.railway.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'
```

#### Example C:

```bash
curl -X POST https://your-railway-url.railway.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

### 4. Using PowerShell (Windows):

```powershell
# Test Example A
$body = @{data = @('a','1','334','4','R','$')} | ConvertTo-Json
Invoke-RestMethod -Uri 'https://your-railway-url.railway.app/bfhl' -Method Post -Body $body -ContentType 'application/json'
```

### 5. Using Postman/Thunder Client:

- Method: POST
- URL: `https://your-railway-url.railway.app/bfhl`
- Headers: `Content-Type: application/json`
- Body: `{"data": ["a","1","334","4","R", "$"]}`

### 6. Form Submission:

Submit your Railway URL + `/bfhl` to: https://forms.office.com/r/ZeVpUYp3zV

Example submission URL: `https://your-app-name.railway.app/bfhl`
