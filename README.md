# Assignment 1 - The Pog Vault

This is a single-page React website for Assignment 1 for Web Scripting 2 course at BCIT

## Author
Samuel Park
Student ID: A009

## Project Description
The Pog Vault is a single-page e-commerce website dedicated to selling collectible Pogs. The website allows users to browse different Pog products, view details, and make purchases. The website is built using React.js with Vite.js and styled using Tailwind CSS.

## Features
- Display of 6 Pog products with images, names, descriptions, and prices.
- Each product has a "Add to Cart" button.
- Each product has a "favorite" feature.
- Responsive layout for different screen sizes.
- Tailwind CSS for styling.

## Technologies Used
- **React.js** (with Vite.js).
- **Tailwind CSS** for styling.
- **IonIcons** for the favorite heart icons.
- **JavaScript (ES6+)** for logic and state management.

## Installation Instructions
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-project-directory.git
    ```
2. **Navigate into the project directory:**
    ```bash
    cd your-project-directory
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    ```bash
    npm run dev
    ```
5. **Open your browser and go to** `http://localhost:3000` to view the website.

## Challenges Faced
1. **Implementing Flexbox for Layouts:**  
   Initially, aligning elements such as the price and "Add to Cart" button was challenging as well as the "favorite" button. I overcame this by using Flexbox properties like `justify-between` and `items-center`. Creating a responsive layout also took a lot of logic and reasoning to determine the different columns and spacing for the cards.
   
2. **State Management for Favoriting:**  
   Incorporating the state for favoriting pogs was the most challenging. It required toggling the favorite button, updating the state, and had to be stored on local storage. I had to refer to previous in-class exercises and the aid of AI to help me understand the functionality of this process.

3. **Styling with Tailwind CSS:**  
   Styling with Tailwind's utility was effective and easy(ish) to implement. Learning all the different properties were overwhelming but rewarding. 

## License
This project is for educational purposes and part of a course assignment at BCIT.

## Acknowledgments
- **Instructor:** Airrick Dunfield
- **Course:** Web Scripting 2 (BCIT)
- **Ionicons** for providing the favorite icons used in this project.