# Feedback Form Web Application

This project demonstrates how to set up and run a feedback form web application using Docker or directly with Node.js.

---

## Table of Contents
1. [Run the Application Using Docker](#run-the-application-using-docker)
2. [Run the Application Without Docker](#run-the-application-without-docker)
3. [Prerequisites](#prerequisites)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Docker** (for Method 1)
- **Node.js** and **npm** (for Method 2)

---

## Method 1: Run the Application Using Docker

### Step 1: Install Docker
Follow the [official Docker installation guide](https://docs.docker.com/get-docker/) to install Docker on your system.

### Step 2: Build the Docker Image
Run the following command to build the Docker image from the Dockerfile:

```bash
docker build -t feedback-form .
```

### Step 3: Create and Run the Docker Container
Run the following command to create and start a Docker container:

```bash
docker run -d -p 3000:3000 feedback-form
```

- The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Method 2: Run the Application Without Docker

### Step 1: Install Node.js and npm
Follow the [official Node.js installation guide](https://nodejs.org/) to install Node.js and npm.

### Step 2: Initialize the Node.js Project
Run the following command to initialize the project:

```bash
npm init
```

### Step 3: Install Dependencies
Install the required dependencies by running:

```bash
npm install
```

### Step 4: Start the Server
Run the following command to start the server:

```bash
npm start server.js
```

- The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

Feel free to contribute to this project by submitting issues or pull requests!