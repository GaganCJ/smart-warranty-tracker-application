# Smart Warranty Tracker Application
A Cross Platform Application Development Assignment from Group 15 of MTech BITS WILP.

Smart warranty tracker software is a mobile and web-based best-in-class solution to gain a strategic view of product and warranty service knowledge. Users do not need to remember about warranty renewal or expiry. This can protect them from unexpected / unpredictable repair costs, thus providing financial help. Smart warranty not only helps to keep track of warranty but also provides an additional benefit as a one stop solution to track all the appliances and their respective bills.

## Repository Structure

This repository is structured as a monorepo containing both the frontend client and the backend middleware:
*   **`client/`**: The React frontend application.
*   **`middleware/`**: The Spring Boot REST API backend.

---

## Features

1.  **Warranty Tracking**: Keep track of appliance name, description, purchase date, warranty purchase date, and warranty expiry date.
2.  **Product Package & Label Photos**:
    *   Upload images of the product package and label when adding a new appliance.
    *   Photos are converted to base64 and stored in the database.
    *   View full-size photos in the appliance list by clicking on the thumbnails.
3.  **Warranty Status Checker**:
    *   Dynamically checks and highlights whether each appliance is currently **Under Warranty** (Active) or **Expired** based on the current system date and the warranty expiry date.
    *   Claim status is color-coded for quick visual checks during repairs or replacements.

---

## Getting Started

### Prerequisites

*   **Java 11 or higher** (to run the backend)
*   **Node.js (v14 or higher) and npm** (to run the frontend)

---

### Backend Setup (`middleware/`)

The backend is pre-configured to use an in-memory **H2 Database** for quick evaluation without requiring a separate MySQL installation.

1.  Navigate to the middleware directory:
    ```bash
    cd middleware
    ```
2.  Run the application using the Maven wrapper:
    *   **Windows**:
        ```bash
        .\mvnw.cmd spring-boot:run
        ```
    *   **macOS / Linux**:
        ```bash
        ./mvnw spring-boot:run
        ```
3.  The backend server will start on `http://localhost:8080`.
4.  You can access the H2 Web Console to inspect the schema and data at `http://localhost:8080/h2-console` with:
    *   **JDBC URL**: `jdbc:h2:mem:warrantytracker`
    *   **Username**: `sa`
    *   **Password**: *(leave empty)*

---

### Frontend Setup (`client/`)

1.  Navigate to the client directory:
    ```bash
    cd client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm start
    ```
4.  Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.
