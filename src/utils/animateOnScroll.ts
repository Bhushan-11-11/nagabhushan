
export function setupScrollAnimation() {
  // Only run on client side
  if (typeof window === 'undefined') return;
  
  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', reveal);
  
  // Trigger once on load
  setTimeout(reveal, 100);
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
}
