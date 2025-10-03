export const generateWebsiteTemplate = (projectDetails: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 675;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        const desc = projectDetails.toLowerCase();
        const words = projectDetails.split(' ');
        
        // Dynamic color schemes
        const colorSchemes = [
          { primary: '#3b82f6', secondary: '#1e40af', bg: '#eff6ff' },
          { primary: '#dc2626', secondary: '#991b1b', bg: '#fef2f2' },
          { primary: '#059669', secondary: '#047857', bg: '#f0fdf4' },
          { primary: '#7c3aed', secondary: '#5b21b6', bg: '#f5f3ff' },
          { primary: '#ea580c', secondary: '#c2410c', bg: '#fff7ed' },
          { primary: '#be185d', secondary: '#9d174d', bg: '#fdf2f8' }
        ];
        
        const scheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
        const brandName = words[0] || 'Brand';
        
        // Random layout structures
        const layouts = ['standard', 'sidebar', 'centered', 'split'];
        const layout = layouts[Math.floor(Math.random() * layouts.length)];
        
        // Determine website type and content
        let websiteType = 'business';
        let products = [];
        let heroTitle = '';
        let heroSubtitle = '';
        let ctaButton = 'Get Started';
        
        if (desc.includes('restaurant') || desc.includes('food') || desc.includes('cafe')) {
          websiteType = 'restaurant';
          products = [{ name: 'Appetizers', price: '$12' }, { name: 'Main Course', price: '$25' }, { name: 'Desserts', price: '$8' }];
          heroTitle = 'Delicious Dining';
          heroSubtitle = 'Fresh ingredients, amazing flavors';
          ctaButton = 'Order Now';
        } else if (desc.includes('shop') || desc.includes('store') || desc.includes('ecommerce') || desc.includes('clothing')) {
          websiteType = 'ecommerce';
          products = [{ name: words[1] || 'Product 1', price: '$49' }, { name: words[2] || 'Product 2', price: '$79' }, { name: words[3] || 'Product 3', price: '$99' }];
          heroTitle = words.slice(0, 2).join(' ') || 'Premium Products';
          heroSubtitle = 'Quality items for modern lifestyle';
          ctaButton = 'Shop Now';
        } else if (desc.includes('portfolio') || desc.includes('designer') || desc.includes('artist')) {
          websiteType = 'portfolio';
          products = [{ name: 'Web Design', price: 'View' }, { name: 'Branding', price: 'View' }, { name: 'Photography', price: 'View' }];
          heroTitle = 'Creative Excellence';
          heroSubtitle = 'Bringing your vision to life';
          ctaButton = 'View Work';
        } else {
          products = [{ name: 'Service 1', price: 'Learn' }, { name: 'Service 2', price: 'Learn' }, { name: 'Service 3', price: 'Learn' }];
          heroTitle = words.slice(0, 2).join(' ') || 'Professional Solutions';
          heroSubtitle = 'Driving your business forward';
          ctaButton = 'Get Quote';
        }
        
        // Desk background
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(0, 0, 1200, 675);
        
        // Laptop base
        ctx.fillStyle = '#e0e0e0';
        ctx.beginPath();
        ctx.moveTo(150, 550);
        ctx.lineTo(1050, 550);
        ctx.lineTo(1100, 600);
        ctx.lineTo(100, 600);
        ctx.closePath();
        ctx.fill();
        
        // Screen bezel
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(200, 100, 800, 500);
        
        // Screen
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(220, 120, 760, 460);
        
        // Header
        ctx.fillStyle = scheme.primary;
        ctx.fillRect(220, 120, 760, 60);
        
        // Logo
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px Arial';
        ctx.fillText(brandName, 240, 155);
        
        // Navigation
        ctx.font = '14px Arial';
        const navItems = websiteType === 'restaurant' ? ['Home', 'Menu', 'About', 'Contact'] :
                        websiteType === 'ecommerce' ? ['Home', 'Shop', 'Cart', 'Account'] :
                        websiteType === 'portfolio' ? ['Home', 'Work', 'About', 'Contact'] :
                        ['Home', 'Services', 'About', 'Contact'];
        
        navItems.forEach((item, i) => {
          ctx.fillText(item, 400 + (i * 80), 155);
        });
        
        // Header CTA
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(900, 135, 60, 30);
        ctx.fillStyle = scheme.primary;
        ctx.font = '12px Arial';
        ctx.fillText(ctaButton, 910, 155);
        
        // Hero section with different layouts
        if (layout === 'sidebar') {
          const heroGradient = ctx.createLinearGradient(220, 180, 600, 320);
          heroGradient.addColorStop(0, scheme.primary);
          heroGradient.addColorStop(1, scheme.secondary);
          ctx.fillStyle = heroGradient;
          ctx.fillRect(220, 180, 380, 200);
          
          ctx.fillStyle = 'rgba(255,255,255,0.1)';
          for (let i = 0; i < 15; i++) {
            const x = 220 + Math.random() * 380;
            const y = 180 + Math.random() * 200;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 24px Arial';
          ctx.fillText(heroTitle, 240, 250);
          ctx.font = '14px Arial';
          ctx.fillText(heroSubtitle, 240, 280);
          
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(240, 300, 100, 25);
          ctx.fillStyle = scheme.primary;
          ctx.font = 'bold 12px Arial';
          ctx.fillText(ctaButton, 270, 318);
          
          ctx.fillStyle = scheme.bg;
          ctx.fillRect(600, 180, 380, 200);
        } else if (layout === 'centered') {
          const heroGradient = ctx.createLinearGradient(320, 180, 680, 260);
          heroGradient.addColorStop(0, scheme.primary);
          heroGradient.addColorStop(1, scheme.secondary);
          ctx.fillStyle = heroGradient;
          ctx.fillRect(320, 180, 360, 80);
          
          ctx.fillStyle = 'rgba(255,255,255,0.1)';
          for (let i = 0; i < 10; i++) {
            const x = 320 + Math.random() * 360;
            const y = 180 + Math.random() * 80;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 2 + 1, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 28px Arial';
          ctx.fillText(heroTitle, 350, 210);
          ctx.font = '16px Arial';
          ctx.fillText(heroSubtitle, 350, 235);
          
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(450, 245, 100, 25);
          ctx.fillStyle = scheme.primary;
          ctx.font = 'bold 12px Arial';
          ctx.fillText(ctaButton, 480, 263);
        } else if (layout === 'split') {
          ctx.fillStyle = scheme.bg;
          ctx.fillRect(220, 180, 760, 140);
          
          const heroGradient = ctx.createLinearGradient(220, 180, 600, 320);
          heroGradient.addColorStop(0, scheme.primary);
          heroGradient.addColorStop(1, scheme.secondary);
          ctx.fillStyle = heroGradient;
          ctx.fillRect(220, 180, 380, 140);
          
          ctx.fillStyle = 'rgba(255,255,255,0.1)';
          for (let i = 0; i < 15; i++) {
            const x = 220 + Math.random() * 380;
            const y = 180 + Math.random() * 140;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 28px Arial';
          ctx.fillText(heroTitle, 240, 230);
          ctx.font = '16px Arial';
          ctx.fillText(heroSubtitle, 240, 260);
          
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(240, 280, 100, 25);
          ctx.fillStyle = scheme.primary;
          ctx.font = 'bold 12px Arial';
          ctx.fillText(ctaButton, 270, 298);
          
          ctx.fillStyle = scheme.secondary + '40';
          ctx.fillRect(620, 200, 340, 100);
          ctx.fillStyle = scheme.primary;
          ctx.font = '14px Arial';
          ctx.fillText('Hero Image', 720, 255);
        } else {
          const heroGradient = ctx.createLinearGradient(220, 180, 220, 320);
          heroGradient.addColorStop(0, scheme.primary);
          heroGradient.addColorStop(1, scheme.secondary);
          ctx.fillStyle = heroGradient;
          ctx.fillRect(220, 180, 760, 140);
          
          ctx.fillStyle = 'rgba(255,255,255,0.1)';
          for (let i = 0; i < 20; i++) {
            const x = 220 + Math.random() * 760;
            const y = 180 + Math.random() * 140;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 32px Arial';
          ctx.fillText(heroTitle, 250, 230);
          ctx.font = '18px Arial';
          ctx.fillText(heroSubtitle, 250, 260);
          
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(250, 280, 120, 30);
          ctx.fillStyle = scheme.primary;
          ctx.font = 'bold 14px Arial';
          ctx.fillText(ctaButton, 285, 300);
        }
        
        // Content section with different layouts
        const contentY = layout === 'centered' ? 280 : 320;
        const contentHeight = layout === 'centered' ? 240 : 200;
        
        if (layout === 'sidebar' && websiteType !== 'portfolio') {
          ctx.fillStyle = scheme.bg;
          ctx.fillRect(220, 380, 760, 140);
          
          ctx.fillStyle = scheme.primary + '10';
          for (let i = 0; i < 30; i++) {
            const x = 220 + Math.random() * 760;
            const y = 380 + Math.random() * 140;
            ctx.fillRect(x, y, 2, 2);
          }
          
          ctx.fillStyle = scheme.secondary;
          ctx.font = 'bold 20px Arial';
          const sectionTitle = websiteType === 'restaurant' ? 'Our Menu' :
                             websiteType === 'ecommerce' ? 'Featured Products' : 'Our Services';
          ctx.fillText(sectionTitle, 250, 410);
          
          products.forEach((item, i) => {
            const x = 250 + (i * 240);
            const y = 430;
            
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x, y, 220, 80);
            ctx.strokeStyle = '#e5e7eb';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, 220, 80);
            
            ctx.fillStyle = scheme.bg;
            ctx.fillRect(x + 10, y + 10, 50, 50);
            
            ctx.fillStyle = scheme.secondary;
            ctx.font = 'bold 11px Arial';
            ctx.fillText(item.name, x + 70, y + 25);
            ctx.fillStyle = scheme.primary;
            ctx.font = 'bold 12px Arial';
            ctx.fillText(item.price, x + 70, y + 40);
            
            const buttonText = websiteType === 'restaurant' ? 'Order' :
                             websiteType === 'ecommerce' ? 'Buy' : 'Learn';
            
            ctx.fillStyle = scheme.primary;
            ctx.fillRect(x + 70, y + 50, 60, 18);
            ctx.fillStyle = '#ffffff';
            ctx.font = '9px Arial';
            ctx.fillText(buttonText, x + 90, y + 62);
          });
        } else {
          ctx.fillStyle = scheme.bg;
          ctx.fillRect(220, contentY, 760, contentHeight);
          
          ctx.fillStyle = scheme.primary + '10';
          for (let i = 0; i < 50; i++) {
            const x = 220 + Math.random() * 760;
            const y = contentY + Math.random() * contentHeight;
            ctx.fillRect(x, y, 2, 2);
          }
          
          ctx.fillStyle = scheme.secondary;
          ctx.font = layout === 'centered' ? 'bold 28px Arial' : 'bold 24px Arial';
          const sectionTitle = websiteType === 'restaurant' ? 'Our Menu' :
                             websiteType === 'ecommerce' ? 'Featured Products' :
                             websiteType === 'portfolio' ? 'My Work' : 'Our Services';
          ctx.fillText(sectionTitle, 250, contentY + 35);
          
          const cardLayout = Math.random() > 0.5 ? 'grid' : 'list';
          
          products.forEach((item, i) => {
            let x, y, cardWidth, cardHeight;
            
            if (cardLayout === 'list') {
              x = 250;
              y = contentY + 60 + (i * 50);
              cardWidth = 700;
              cardHeight = 40;
            } else {
              x = 250 + (i * 220);
              y = contentY + 60;
              cardWidth = 200;
              cardHeight = 100;
            }
            
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x, y, cardWidth, cardHeight);
            ctx.strokeStyle = '#e5e7eb';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, cardWidth, cardHeight);
            
            if (cardLayout === 'grid') {
              ctx.fillStyle = scheme.bg;
              ctx.fillRect(x + 10, y + 10, 60, 60);
              
              ctx.fillStyle = scheme.primary + '40';
              if (websiteType === 'restaurant') {
                ctx.beginPath();
                ctx.arc(x + 25, y + 25, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(x + 45, y + 35, 6, 0, Math.PI * 2);
                ctx.fill();
              } else if (websiteType === 'ecommerce') {
                ctx.fillRect(x + 20, y + 20, 20, 20);
                ctx.fillRect(x + 45, y + 30, 15, 15);
              }
              
              ctx.fillStyle = scheme.secondary;
              ctx.font = 'bold 12px Arial';
              ctx.fillText(item.name, x + 80, y + 30);
              ctx.fillStyle = scheme.primary;
              ctx.font = 'bold 14px Arial';
              ctx.fillText(item.price, x + 80, y + 50);
              
              const buttonText = websiteType === 'restaurant' ? 'Order' :
                               websiteType === 'ecommerce' ? 'Buy Now' :
                               websiteType === 'portfolio' ? 'View' : 'Learn More';
              
              ctx.fillStyle = scheme.primary;
              ctx.fillRect(x + 80, y + 60, 80, 20);
              ctx.fillStyle = '#ffffff';
              ctx.font = '10px Arial';
              ctx.fillText(buttonText, x + 105, y + 72);
            } else {
              ctx.fillStyle = scheme.bg;
              ctx.fillRect(x + 10, y + 5, 30, 30);
              
              ctx.fillStyle = scheme.secondary;
              ctx.font = 'bold 14px Arial';
              ctx.fillText(item.name, x + 50, y + 20);
              ctx.fillStyle = scheme.primary;
              ctx.font = 'bold 16px Arial';
              ctx.fillText(item.price, x + 200, y + 20);
              
              const buttonText = websiteType === 'restaurant' ? 'Order' :
                               websiteType === 'ecommerce' ? 'Buy' : 'Learn';
              
              ctx.fillStyle = scheme.primary;
              ctx.fillRect(x + 600, y + 10, 80, 20);
              ctx.fillStyle = '#ffffff';
              ctx.font = '10px Arial';
              ctx.fillText(buttonText, x + 625, y + 22);
            }
          });
        }
        
        // Footer
        ctx.fillStyle = scheme.secondary;
        ctx.fillRect(220, 520, 760, 60);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.fillText(`© 2024 ${brandName} - Built with Arodos`, 250, 545);
        
        // Screen reflection
        const reflectionGradient = ctx.createLinearGradient(220, 120, 980, 580);
        reflectionGradient.addColorStop(0, 'rgba(255,255,255,0.1)');
        reflectionGradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = reflectionGradient;
        ctx.fillRect(220, 120, 760, 460);
        
        const imageUrl = canvas.toDataURL('image/png');
        resolve(imageUrl);
      }
    }, 2000);
  });
};