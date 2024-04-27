[![Build and deploy IndiaKart app to Azure Web App](https://github.com/chaithuchowdhary/SEProject_Group_16/actions/workflows/main_indiakart.yml/badge.svg)](https://github.com/chaithuchowdhary/SEProject_Group_16/actions/workflows/main_indiakart.yml)

## Setting up Angular App and ASP.NET Backend in a Single Repository

1. **Clone the Repository:** using git clone cmd ```git clone <repo url> ```

2. **Navigate to the Repository:** ``` cd IndiaKart_Backend ```

3. **Set Up the ASP.NET Backend:**
- You can either install .NET SDK or Visual Studio with necessary dependencies. (Visul Studio is recommended)
- Navigate to the backend directory.
- Restore dependencies and build the backend.
  ```bash
  cd backend
  dotnet restore
  dotnet build
  ```

4. **Configure the Backend:**
- Modify configuration files (e.g., `appsettings.json`) as needed.

5. **Run the Backend:**

6. **Set Up the Angular App:**
- Ensure Node.js and npm are installed.
- Navigate to the frontend directory. ``` cd indiakart_homepage ```
- run the below cmd in terminal to setup and run in your local system
  ```
  npm install
  npm run
  ```
