# Faith's Portfolio

A responsive portfolio website built with React, Bootstrap, and SASS.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/faithpjohnson/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Build for production
   ```
   npm run build
   ```

## Project Structure

```
src/
├── components/         # All React components
│   ├── About/          # About section
│   ├── Contact/        # Contact section
│   ├── Projects/       # Projects section
│   ├── Skills/         # Skills section
│   ├── UI/             # Reusable UI components
│   ├── ZRow/           # Project row component
│   └── ...
├── data/               # Data files
│   └── projects.js     # Projects data
├── styles/             # Global styles
│   └── theme.scss      # Theme variables and mixins
├── App.jsx             # Main App component
└── index.jsx           # Entry point
```

## Reusable Components

### UI Components

#### SectionHeader

```jsx
import SectionHeader from './components/UI/SectionHeader';

// Usage
<SectionHeader title="PROJECTS" />
```

#### Button

```jsx
import Button from './components/UI/Button';

// Usage as button
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

// Usage as link
<Button 
  variant="secondary" 
  size="lg" 
  href="https://example.com" 
  external={true}
  ariaLabel="Visit example site"
>
  Visit Site
</Button>
```

### Theming System

The project uses CSS Custom Properties for easy theming. All variables are defined in `src/styles/theme.scss`.

Example usage:

```scss
.my-component {
  background-color: var(--color-dark-bg-primary);
  color: var(--color-text-primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-md);
}
```

## Adding New Projects

To add a new project:

1. Edit the `src/data/projects.js` file and add your new project:

```javascript
export const projects = [
  // ... existing projects
  {
    title: 'New Project',
    description: 'Description of the new project',
    techstack: 'Technologies used: HTML, CSS, JS, etc.',
    deployLink: 'https://your-project-url.com',
    githubLink: 'https://github.com/yourusername/your-project',
    imageSource: 'https://path-to-your-image.jpg'
  }
];
```

## Contributing

1. Create a new branch for your feature
   ```
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them
   ```
   git add .
   git commit -m "Add new feature"
   ```

3. Push to the branch
   ```
   git push origin feature/your-feature-name
   ```

4. Open a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
