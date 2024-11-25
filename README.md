# Pet Management Application - DevOps CI/CD Project

This repository contains a Node.js-based Pet Management application with a complete CI/CD pipeline, deployed on AWS Elastic Container Service (ECS).

## 🎯 Project Overview

This project implements a modern web application for pet management with a robust CI/CD pipeline. The application is containerized using Docker and automatically deployed to AWS ECS, demonstrating real-world DevOps practices.

## 🛠️ Technologies Used

- **Backend**: Node.js
- **Containerization**: Docker
- **Cloud Platform**: AWS
  - AWS ECS (Elastic Container Service)
  - AWS ECR (Elastic Container Registry)
  - Other AWS services as needed
- **CI/CD Platform**: GitHub Actions
- **Version Control**: Git
- **Infrastructure as Code**: AWS CloudFormation/Terraform

## 📋 Prerequisites

- Node.js (v14 or higher)
- Docker installed and running
- AWS CLI configured with appropriate credentials
- Git installed on your local machine

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd DevOpsLab_CI-CD
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Run locally:
   ```bash
   npm run dev
   ```

## 📦 Project Structure

```
DevOpsLab_CI-CD/
├── src/                # Application source code
│   ├── routes/        # API routes
│   ├── models/        # Data models
│   ├── controllers/   # Business logic
│   └── middleware/    # Custom middleware
├── tests/             # Test files
├── .github/           # GitHub Actions workflows
├── docker/            # Docker configuration files
├── infrastructure/    # AWS infrastructure code
├── Dockerfile         # Docker configuration
└── README.md         # Project documentation
```

## ⚙️ Configuration

### Local Development
- Set up your `.env` file with required environment variables
- Configure AWS credentials for deployment

### AWS Configuration
- ECS Cluster setup
- ECR repository
- VPC and security groups
- Load balancer configuration

## 🔄 CI/CD Pipeline

Our CI/CD pipeline includes the following stages:

1. **Build**
   - Install dependencies
   - Run linting
   - Build Docker image

2. **Test**
   - Run unit tests
   - Run integration tests
   - Security scanning

3. **Deploy**
   - Push Docker image to AWS ECR
   - Update ECS service



