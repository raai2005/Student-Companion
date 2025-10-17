import '../styles.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // Add theme support
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Apply theme class to document
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  // Provide theme context to the entire app
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Component {...pageProps} />
    </div>
  );
}
