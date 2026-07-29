# Autonomous Code API Specification

## Base URL
`https://api.yourdomain.com/v1`

## Endpoints

### 1. POST /api/autonomous/process
Ingests and processes raw Autonomous data.

**Request Body:**
```json
{
  "input": "Autonomous AI Code Reviewer & Security G",
  "category": "AI & Developer Tools"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "status": "PROCESSED",
  "noveltyScore": 72,
  "timestamp": "2026-07-29T16:56:03.174Z"
}
```

### 2. POST /api/telegram/webhook
Receives live telemetry alerts and dispatches updates.
