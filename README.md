# Assignment 1 - The Pog Vault

This is a single-page React website for Assignment 1 for Web Scripting 2 course at BCIT

## Author
Samuel Park
Student ID: A009

## Project Description
The Pog Vault is a single-page e-commerce website dedicated to selling collectible Pogs. The website allows users to browse different Pog products, view details, and make purchases. The website is built using React.js with Vite.js and styled using Tailwind CSS.

## Features
- Display of 6 Pog products with images, names, descriptions, and prices.
- Each product has a "Buy Now" button.
- Each product has a "favorite" feature.
- Responsive layout for different screen sizes.
- Tailwind CSS for styling.

## Technologies Used
- **React.js** (with Vite.js)
- **Tailwind CSS** for styling
- **JavaScript (ES6+)** for logic and state management

## Installation Instructions
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pog-vault.git
    ```
2. Navigate into the project directory:
    ```bash
    cd pog-vault
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and go to `http://localhost:3000` to view the website.

## Challenges Faced
1. **Implementing Flexbox for Layouts:**  
   Initially, aligning elements such as the price and "Buy Now" button was challenging. I overcame this by using Flexbox properties like `justify-between` and `items-center`.
   
2. **State Management for Favoriting:**  
   Implementing the favoriting functionality was tricky, as it required maintaining a separate state for favorite items. This was addressed by adding a `favorites` state and updating it upon user interaction.

3. **Styling with Tailwind CSS:**  
   Getting familiar with Tailwind's utility classes was a learning curve, but it significantly streamlined the styling process once I got used to it.

## Future Improvements
- Add functionality to "favorite" products.
- Implement additional pages (e.g., Cart, Checkout).
- Improve UI/UX for better user interaction.

## License
This project is for educational purposes and part of a course assignment at BCIT.

## Acknowledgments
- **Instructor:** Airrick Dunfield
- **Course:** Web Scripting 2 (BCIT)