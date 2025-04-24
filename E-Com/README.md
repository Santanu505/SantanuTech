# ShopEase - E-commerce Website

ShopEase is a modern, responsive e-commerce website built with HTML, Bootstrap, and JavaScript. It provides a user-friendly shopping experience with all essential features for an online store.

## Features

- Responsive design that works on all devices
- Product catalog with filtering and sorting options
- Shopping cart functionality
- User authentication
- Contact form
- About page with company information
- Modern and clean UI/UX

## Pages

1. **Home Page** (`index.html`)
   - Featured products
   - Category showcase
   - Hero section

2. **Products Page** (`products.html`)
   - Product grid
   - Filtering by category
   - Price range filter
   - Sorting options

3. **Cart Page** (`cart.html`)
   - Cart items management
   - Quantity adjustment
   - Order summary
   - Checkout process

4. **Login Page** (`login.html`)
   - User authentication
   - Form validation
   - Remember me option

5. **Contact Page** (`contact.html`)
   - Contact form
   - Company information
   - Google Maps integration

6. **About Page** (`about.html`)
   - Company story
   - Mission statement
   - Team information

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5.3.0
- JavaScript
- Font Awesome 6.0.0

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shopease.git
   ```

2. Navigate to the project directory:
   ```bash
   cd shopease
   ```

3. Open the project in your preferred code editor.

4. Start a local server to view the website. You can use:
   - Live Server extension in VS Code
   - Python's built-in server:
     ```bash
     python -m http.server
     ```
   - Node.js http-server:
     ```bash
     npx http-server
     ```

5. Open your browser and navigate to `http://localhost:8000` (or the port specified by your server).

## Project Structure

```
shopease/
├── index.html
├── products.html
├── cart.html
├── login.html
├── contact.html
├── about.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── hero-image.jpg
    ├── about-hero.jpg
    ├── our-story.jpg
    ├── team-1.jpg
    ├── team-2.jpg
    ├── team-3.jpg
    └── team-4.jpg
```

## Customization

- To change the color scheme, modify the CSS variables in `css/style.css`
- To add new products, update the products array in `js/main.js`
- To modify the layout, edit the corresponding HTML files
- To add new features, extend the JavaScript functionality in `js/main.js`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, please contact us at info@shopease.com 