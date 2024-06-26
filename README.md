# Weather App

## Overview

This project is a weather application built using React.js. It allows users to view the current weather, date, and time for their location or any other location they specify. The weather data is fetched from the Open Weather API.

## Features

- Display current location, temperature, date, and time.
- Input field for entering a location (city name or zip code).
- Search functionality to fetch and display weather information for the entered location.
- Graceful handling of API responses and errors, with user feedback for invalid input or connection issues.

## Setup Instructions

### Prerequisites

- React.js
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Veeresh3001/kraftshala-veeresh.git
   cd kraftshala-veeresh
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Get an API key from Open Weather:**

   - Visit the [Open Weather website](https://openweathermap.org/api) and sign up to get a free API key.

4. **Create a `.env` file in the root directory and add your API key:**
   ```env
   REACT_APP_OPEN_WEATHER_API_KEY=your_api_key_here
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Components

- **App.js:** Displays weather information, including current location, temperature, date, and time.
- **style.js:** Provides an Css for website.

### API Integration

- **Open Weather API:** Used to fetch weather data. The API key must be stored in a `.env` file for security reasons.

### Error Handling

- Displays user-friendly messages for invalid location or zip code issues.

## Acknowledgements

- Open Weather API for providing the weather data.
