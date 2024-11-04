// declared those variable colors in the root css previously
tailwind.config = {
  theme: {
    extend: {
      colors: {
        dark: 'var(--color-dark)',
        darker: 'var(--color-darker)',
        'dark-muted': 'var(--color-dark-muted)',
        light: 'var(--color-light)',
        'light-muted': 'var(--color-light-muted)',
        vibrant: 'var(--color-vibrant)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
};