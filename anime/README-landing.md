# App Landing Page

A beautiful, animated landing page for your app inspired by the Lovable site design. This landing page features a sleek dark theme with a colorful gradient heart logo, smooth animations, and an interactive UI with the stylized tagline "Idea  to  design  in  seconds!" with extra spacing between words.

## Features

- Modern, clean design with a dark theme
- Animated gradient heart logo
- Interactive exploding lightbulb animation (click to trigger)
- Typing animation for the main heading
- Smooth entrance animations for all elements
- Interactive UI elements with hover and click effects
- Fully responsive design for all screen sizes
- Built with HTML, CSS, and JavaScript
- Uses anime.js for animations

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript if you want to customize

### Installation

1. Clone this repository or download the files
2. Open the `index.html` file in your web browser

### Customization

#### Changing the App Name

1. Open `index.html` in a text editor
2. Replace "Your App" with your app name in the title and tagline

#### Changing Colors

1. Open `styles.css` in a text editor
2. Modify the color variables in the `:root` section at the top of the file

```css
:root {
    --bg-color: #000000; /* Background color */
    --text-color: #ffffff; /* Text color */
    --accent-color: #ffffff; /* Accent color */
    --input-bg: #111111; /* Input background color */
    --chip-bg: rgba(255, 255, 255, 0.1); /* Chip background color */
    --button-hover: rgba(255, 255, 255, 0.2); /* Button hover color */
}
```

#### Changing the Logo

The heart logo is created using CSS. To replace it with your own logo:

1. Open `index.html`
2. Replace the `<div class="heart-logo"></div>` with your own logo image:

```html
<div class="logo">
    <img src="path/to/your/logo.png" alt="Your App Logo" width="80">
</div>
```

3. Remove or modify the heart logo styles in `styles.css`

#### Changing the Suggestion Chips

1. Open `index.html`
2. Modify the text in the chip buttons to match your app's features or use cases

## Structure

- `index.html` - The main HTML file
- `styles.css` - All styles for the landing page
- `app.js` - JavaScript for animations and interactivity
- `lib/anime.min.js` - The anime.js library for animations

## Credits

- [anime.js](https://animejs.com/) - JavaScript animation library
- [Inter](https://fonts.google.com/specimen/Inter) - Font family
- Icons from [Feather Icons](https://feathericons.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 