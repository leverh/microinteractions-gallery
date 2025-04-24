# Anime.js Microinteractions Gallery

A showcase of modern UI animations and microinteractions created with Anime.js. This project demonstrates various animation techniques that can enhance user interfaces and create engaging web experiences.

![Microinteractions Demo](/assests/readme-screenshot.png)

## Live Demo
Check out the live demo [here](https://hilarious-caramel-49e114.netlify.app/).

## Overview

This gallery showcases various animation techniques including:

- Button animations with different hover and click effects
- Loading state animations for async operations
- Card transitions with subtle interactive elements
- Text effects demonstrating creative typography animations
- An interactive floating action button with expanding information

## Features

### Logo Animation
- **SVG Path Drawing**:The logo animates each path individually to create the appearance of the logo being drawn in real-time
- **Stroke Animation**: Uses `stroke-dasharray` and `stroke-dashoffset` properties animated with Anime.js
- **Sequential Timing**: Paths are animated with staggered delays for a more organic feel

The animation demonstrates how SVG paths can be manipulated to create engaging entrance animations for logos and icons. This technique can be particularly effective for brand reveals and loading screens.

```javascript
// Example of the logo animation code
anime({
  targets: '#animated-logo path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2000,
  delay: function(el, i) { return i * 250 }
});
```

This effect shows how static SVG elements can be brought to life through careful animation, adding personality and visual interest to what would otherwise be a static logo.

### Button Animations
- **Ripple Effect Button**: Click-triggered radial animation
- **Gradient Button**: Color-shifting gradient on hover
- **Border Button**: Animated border color transition
- **Icon Reveal Button**: Smoothly reveals an icon on hover

### Loading Animations
- **Spinning Circle**: Continuous rotation loading indicator
- **Bouncing Dots**: Sequentially animated dots
- **Text Loading**: Simple text with animated cursor
- **Eye Animation**: SVG-based loading animation with cursor tracking

### Card Transitions
- Staggered entrance animations
- Interactive hover states with 3D effects
- Icon rotation and card elevation on hover

### Text Effects
- Character-by-character entrance animations
- Interactive text shuffle on hover
- Staggered paragraph reveals

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Anime.js](https://animejs.com/) - A lightweight JavaScript animation library

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/leverh/microinteractions-gallery
```

2. Open the project folder:
```bash
cd microinteractions-gallery
```

3. Open `index.html` in your web browser or use a local development server.

For a simple local server, you can use:
```bash
npx serve
```

## Customization

### Modifying Animations

Most animations are defined in the `script.js` file. You can adjust timing, easing functions, and animation properties:

```javascript
// Example: Modify ripple animation duration
anime({
  targets: circle,
  scale: 15,
  opacity: [0.8, 0],
  duration: 800, // Change this value to adjust speed
  easing: 'easeOutExpo',
  complete: function() {
    circle.remove();
  }
});
```

### Adding New Animations

To add new animations:

1. Add HTML elements with appropriate classes
2. Style them in CSS
3. Create animation logic in the JavaScript file using Anime.js

## Browser Support

This project works in all modern browsers that support CSS3 and ES6:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- SVG icons adapted from various open source icon sets
- Fonts from Google Fonts
- Animation library: [Anime.js](https://animejs.com/)

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by modern UI/UX trends
- Special thanks to the Anime.js community
