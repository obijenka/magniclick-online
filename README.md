# Magniclick

**Web application with REST API and Telegram bot integration.**

## Overview

Magniclick is a web application that combines a React frontend with REST API communication and Telegram bot notifications.

## Features

- Data fetching from REST API
- Form submissions sent to Telegram bot
- Fully responsive design

## Tech Stack

### Frontend
- **React 19** 
- **Vite** 
- **SCSS** + CSS Modules
- **React Router DOM**
- **Axios** 
- **REST API** 

### Backend
- **Telegram Bot API**

## Telegram Bot

The bot receives data from the web form and sends notifications about new submissions.

**Commands:**
- `/start` — initialize bot
- `/help` — list available commands

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/magniclick-online.git
cd magniclick-online
npm install
npm run dev
```
### Local JSON Database

To run a local REST API server with mock data:

```bash
npx json-server --watch db.json --port 3001
