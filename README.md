e# Hope Within Cloud Portfolio

A cloud engineering portfolio showcasing real‑world projects including web deployment, game infrastructure, automation, and networking.

## 🌌 Overview

This repository contains my hands‑on cloud projects that demonstrate my transition from IT support into cloud and DevOps engineering. It features a production‑ready React website deployed to AWS, a browser‑based RPG game backend running on EC2, DNS and networking configurations, automation scripts, and a CI/CD pipeline using GitHub Actions. Each project is documented with architecture, setup instructions and lessons learned.

## 🔧 Technologies

- **AWS** (S3, CloudFront, EC2, Route 53, IAM)
- **React + Vite** for frontend development
- **Node.js** and **npm** for backend and automation
- **GitHub Actions** for CI/CD
- **PowerShell / CLI** for development environment
- **VirtualBox** for local virtualization and DNS lab

## 🚀 Projects

1. **Website Deployment** – Deploy a React + Vite application to AWS S3 with optional CloudFront and custom domain.
2. **Game Infrastructure** – Host the Caller of Light Within RPG game backend on an EC2 instance, including Node.js setup and environment configuration.
3. **DNS Lab** – Configure a local DNS server and document networking fundamentals.
4. **Automation Scripts** – Use Node.js to generate formatted Word documents automatically.
5. **CI/CD Pipeline** – Implement a GitHub Actions workflow to automatically deploy updates to the S3‑hosted website.

### 🌐 Website Deployment

The Hope Within Universe website is built with React and Vite. The project covers creating an S3 bucket, enabling static website hosting, configuring bucket policies, and optionally setting up a CloudFront distribution for 
You can visit the live site at https://hopewithinuniverse.com.
HTTPS and global caching. It also documents how to map a custom domain via Route 53.

### 🎮 Game Infrastructure

This section contains the code and setup scripts for the Caller of Light Within RPG. It explains how to launch an EC2 instance, install Node.js and npm, transfer the game code, set environment variables, and run the server in the background. There’s also guidance on configuring security groups, connecting via SSH, and using a reverse proxy like Nginx for production.

### 🌐 DNS Lab

A dedicated folder shows how to build a DNS server in a home lab. It includes forward and reverse lookup configurations, record types, and troubleshooting notes. This project demonstrates core networking and system administration skills.

### ⚙️ Automation Scripts

This directory holds Node.js scripts that generate polished chapter documents from raw text using the `docx` library. The scripts automate formatting (fonts, page numbers, dialogue styling) to produce professional Word documents.

### 💁️ CI/CD Pipeline

A `.github/workflows` folder contains a GitHub Actions workflow that syncs website files to an S3 bucket whenever changes are pushed to the main branch. The workflow sets up AWS credentials via secrets, runs AWS CLI commands, and outputs the deployment URL. Instructions are provided on how to create the required IAM user and secrets.

---

Feel free to explore each folder and follow the READMEs inside for detailed setup and deployment instructions.
