

# Task-Management

This project is a task management application built with React (frontend) and Laravel (backend).

## Installation

To get started with Task-Management, follow these steps:

### Prerequisites

1. **Node.js**: Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **XAMPP**: Install XAMPP to set up your local development environment. XAMPP provides Apache, MySQL, PHP, and other utilities that are essential for Laravel development. You can download XAMPP from [apachefriends.org](https://www.apachefriends.org/).

### Backend (Laravel)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Task-Management.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd Task-Management/backend
   ```

3. Install PHP dependencies:

   ```bash
   composer install
   ```

4. Copy `.env.example` to `.env` and configure your database settings.

5. Generate an application key:

   ```bash
   php artisan key:generate
   ```

6. Migrate the database:

   ```bash
   php artisan migrate
   ```

7. Start the Laravel development server:

   ```bash
   php artisan serve
   ```

   Your Laravel API will be available at `http://localhost:8000`.

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   Your React application will be available at `http://localhost:3000`.

## Usage

- Open your web browser and go to `http://localhost:3000` to use the Task-Management application.
  
  ### Note on API Address

The React frontend assumes the Laravel API is served at `http://localhost:8000/api/`. If your Laravel server runs on a different address or port, update the API URL in the React code accordingly.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

