# Absence Manager API – NestJS

This is a mock backend API built with [NestJS](https://nestjs.com) for the Absence Manager app. It serves employee absence and member data, supporting filtering, pagination, and total count tracking.

## 🚀 Features

- GET /absences
  - Filter by `type`, `from`, `to`
  - Supports pagination with `page` & `limit`
  - Returns total matching count
- GET /members
  - Returns all members
- GET /members/:userId
  - Returns member info by `userId`

## 📦 Tech Stack

- **NestJS** – Modular TypeScript backend framework
- **In-memory JSON** – Data is loaded from `data/absences.json` and `data/members.json`
- **Deployed on Railway** – [absence-api-nestjs-production.up.railway.app](https://absence-api-nestjs-production.up.railway.app)

---

## 📂 Project Structure

```bash
src/
├── absence/
│   ├── absence.controller.ts
│   ├── absence.service.ts
│   └── dto/absence.dto.ts
├── member/
│   ├── member.controller.ts
│   ├── member.service.ts
│   └── dto/member.dto.ts
├── data/
│   ├── absences.json
│   └── members.json
└── main.ts
