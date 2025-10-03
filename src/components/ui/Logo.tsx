export const Logo = () => {
  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      const element = document.getElementById('hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = '/';
    }
  };

  return (
    <button onClick={handleLogoClick} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
      <img src="/images/arodoslogo.png" alt="Arodos" className="h-12" />
    </button>
  );
};