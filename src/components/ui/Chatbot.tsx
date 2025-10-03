import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasVideo?: boolean;
  videoSrc?: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello there!

I'm Aro, your digital guide here at Arodos Technologies.

Got a question or need help exploring our services?

Just ask and I'm here to make your experience smooth and easy.

Let's turn your ideas into innovative solutions together`,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node) && 
          videoRef.current && !videoRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);



  const getResponse = async (question: string): Promise<string | { text: string; hasVideo: boolean; videoSrc: string }> => {
    const q = question.toLowerCase();
    
    // Home Section
    if (q.includes('home') || q.includes('welcome') || q.includes('main') || q.includes('intro') || q.includes('hero')) {
      return '🏠 Welcome to Arodos Technologies! Build Innovative Solutions at Affordable Cost. We are trusted globally for reliable, high-performance Web, Mobile, ERP, CRM, and AI Development - delivered on time, within budget, & built to last. ⭐ 4.7/5 rating from 100+ happy customers. 📊 Our Stats: 98% On-Time Delivery, 75 Apps Launched, 120+ Projects Completed. Born in Assam, built with global ambition - we partner with businesses across India, US, Canada, and worldwide!';
    }
    
    // Services Section
    if (q.includes('service') || q.includes('what do you do') || q.includes('offer') || q.includes('solutions')) {
      return '🛠️ Our Services - Turning ideas into scalable, innovative digital products: 1️⃣ Custom Websites & Mobile Apps - User-centric, performance-driven digital experiences designed to engage, convert, and scale. Tailored, intuitive, and built for impact. 2️⃣ ERP, CRM & AI Solutions - Unique approach combining intelligence, efficiency, and security. Systems that think, adapt, and grow with your business. 3️⃣ Technology Assessment - Deep-dive audits uncovering hidden inefficiencies and untapped opportunities. 4️⃣ Strategic IT Planning - Tailored IT strategies aligned with your vision, accelerating growth and maximizing ROI.';
    }
    
    // Why Us / Core Principles
    if (q.includes('why us') || q.includes('why choose') || q.includes('advantage') || q.includes('benefits') || q.includes('unique') || q.includes('principle') || q.includes('core')) {
      return '🌟 5 Core Principles that Keep Arodos Ahead: 1️⃣ Client-Centric Approach - Your goals at the heart of every solution, exceeding expectations 2️⃣ Professional Excellence - Skilled professionals combining creativity, precision, and technical expertise 3️⃣ Innovation & Impact - Transforming challenges into opportunities with smarter, faster solutions 4️⃣ Quality & Assurance - Secure, scalable, future-ready projects with highest quality standards 5️⃣ Affordable & Transparent - High-performance solutions without compromising cost or clarity. 📈 Track Record: 35+ brands partnered, 98% client satisfaction, 12+ industries served.';
    }
    
    // About Us / CEO / Team
    if (q.includes('about') || q.includes('company') || q.includes('history') || q.includes('founded') || q.includes('team') || q.includes('ceo') || q.includes('dhruba') || q.includes('sarma')) {
      return '🏢 About Arodos Technologies: Founded post-COVID in Assam, India with global vision. 👨‍💼 CEO Dhruba Sarma - 15+ years tech leadership, managed 100+ developers. Philosophy: "Quality should never be compromised for quantity." 🎯 Vision: Lead with innovation, deliver solutions that evolve to power tomorrow\'s opportunities. 🎯 Mission: Client-first approach, delivering tailored solutions built on quality, innovation, and long-term value. Every project crafted with precision by experienced professionals. 🌍 Offices: Guwahati & Bangalore, serving globally. Creating opportunities for brilliant minds across India to explore cutting-edge technology horizons.';
    }
    
    // Agile Approach / Methodology
    if (q.includes('agile') || q.includes('approach') || q.includes('methodology') || q.includes('process') || q.includes('work')) {
      return '⚡ Agile Approach: We thrive on collaboration, combining professional expertise with problem-solving mindset. Our team works seamlessly to deliver tailored, scalable solutions—ensuring quality, agility, and measurable impact at every step. 🎯 Three Pillars: 1️⃣ Customer First - Putting customers at heart of everything, delivering value, trust, and long-term relationships 2️⃣ Professional - Excellence backed by deep knowledge and customer-focused approach 3️⃣ Problem Solver - Turning challenges into opportunities with smart, effective, actionable solutions.';
    }
    
    // Clients / Testimonials
    if (q.includes('client') || q.includes('customer') || q.includes('testimonial') || q.includes('review') || q.includes('feedback')) {
      return '👥 Our Clients: We build trust through strong partnerships, blending expertise with innovation. 📊 Stats: 35+ brands partnered, 98% client satisfaction, 12+ industries served. 🏢 Notable Clients: YHA India, Aurobindo, Aulas, Zemidi, Minbury, Electrower, Brigosha. 💬 What Clients Say: "Transforming visionary ideas into powerful, user-centric digital solutions that drive innovation, enhance operational efficiency, and accelerate sustainable business growth." We ensure flexibility, quality, and impactful results every time.';
    }
    
    // Contact Us Section
    if (q.includes('contact') || q.includes('reach') || q.includes('phone') || q.includes('email') || q.includes('address') || q.includes('location') || q.includes('touch')) {
      return '📞 Get in Touch - Ready to transform your digital ideas into reality? 📱 Phone: +919620861198 📧 Email: contact@arodos.com 🌐 Website: www.arodos.com 📍 Locations: Guwahati & Bangalore, India 🌍 Global Presence: Serving India, US, Canada, and worldwide. Available for phone, email, website contact form, or video calls. Our team is ready for consultations and project planning. Let\'s start building something exceptional!';
    }
    
    // Privacy Policy
    if (q.includes('privacy') || q.includes('privacy policy') || q.includes('data protection') || q.includes('personal information')) {
      return '🔒 Privacy Policy: We collect minimal personal information (name, email, phone) only when you contact us or use our services. We use this data solely to provide services, communicate with you, and improve our offerings. We never sell or share your data with third parties without consent. Your data is stored securely and you can request deletion anytime. We use cookies for website functionality and analytics. For complete details, visit our Privacy Policy page.';
    }
    
    // Terms of Use
    if (q.includes('terms') || q.includes('terms of use') || q.includes('terms and conditions') || q.includes('legal') || q.includes('agreement')) {
      return '📋 Terms of Use: By using Arodos Technologies services, you agree to: 1️⃣ Use our services lawfully and respectfully 2️⃣ Provide accurate information when requested 3️⃣ Respect our intellectual property rights 4️⃣ Not misuse or attempt to harm our systems 5️⃣ Accept that services are provided "as is" 6️⃣ Resolve disputes through proper legal channels. We reserve the right to modify terms and terminate services if misused. For complete terms, visit our Terms of Use page.';
    }
    
    // Vision Mission specific
    if (q.includes('vision') || q.includes('mission') || q.includes('goal') || q.includes('purpose')) {
      return '🎯 Our Vision: To lead with innovation and deliver digital solutions that don\'t just meet today\'s challenges but evolve to power tomorrow\'s opportunities. 🎯 Our Mission: We put clients first, delivering tailored digital solutions built on quality, innovation, and long-term value. Every project is crafted with precision and handled by experienced professionals to ensure measurable impact. As our clients grow, we grow—building lasting partnerships rooted in trust and customer satisfaction.';
    }
    

    
    if (q.includes('time')) {
      const now = new Date();
      return `🕐 Current time: ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}. Time zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
    }
    

    
    return `Hello there!

I'm Aro, your digital guide here at Arodos Technologies.

Got a question or need help exploring our services?

Just ask and I'm here to make your experience smooth and easy.

Let's turn your ideas into innovative solutions together`;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);

    try {
      const response = await getResponse(currentInput);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: typeof response === 'string' ? response : response.text,
        isUser: false,
        timestamp: new Date(),
        hasVideo: typeof response === 'object' ? response.hasVideo : false,
        videoSrc: typeof response === 'object' ? response.videoSrc : undefined
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try asking about Arodos Technologies!',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <style>{`
        .cyber-glow {
          box-shadow: 0 0 20px rgba(244, 2, 2, 0.5), 0 0 40px rgba(244, 2, 2, 0.3);
        }
        .neon-border {
          border: 1px solid rgba(244, 2, 2, 0.6);
          box-shadow: 0 0 10px rgba(244, 2, 2, 0.3), inset 0 0 10px rgba(244, 2, 2, 0.1);
        }
        .hologram {
          background: linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(25, 25, 35, 0.98));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(244, 2, 2, 0.3);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .float { animation: float 3s ease-in-out infinite; }
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(244, 2, 2, 0.5); }
          50% { box-shadow: 0 0 30px rgba(244, 2, 2, 0.7); }
        }
        .pulse-glow { animation: pulse-glow 2s infinite; }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-in { animation: slide-in 0.5s ease-out; }
        video::-webkit-media-controls-picture-in-picture-button {
          display: none !important;
        }
        video::-webkit-media-controls {
          display: none !important;
        }
        @media (max-width: 768px) {
          .chat-input {
            color: white !important;
            -webkit-text-fill-color: white !important;
          }
        }
      `}</style>

      {/* Toggle Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-16 h-16 sm:w-16 sm:h-16 z-50">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-spin" style={{ animationDuration: '4s' }}></div>
          <video
            ref={videoRef}
            onClick={() => {
              setIsOpen(!isOpen);
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
              }
            }}
            className="absolute inset-1 sm:inset-2 w-14 h-14 sm:w-12 sm:h-12 rounded-full cursor-pointer object-cover pulse-glow transition-all duration-300 hover:scale-110"
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/videos/gifrobot.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatRef} 
          className="fixed w-auto sm:w-[480px] hologram neon-border rounded-2xl flex flex-col z-50 transition-all duration-500"
          style={{ 
            bottom: '100px',
            right: '24px',
            left: 'auto',
            top: '60px',
            maxHeight: 'calc(100vh - 140px)',
            height: 'auto',
            minHeight: '350px'
          }}
        >
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-red-500/40 rounded-t-2xl bg-gradient-to-r from-red-500/20 to-red-600/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-pulse"></div>
            <h3 className="font-bold text-lg sm:text-xl text-red-400 relative z-10 float" style={{ textShadow: '0 0 15px rgba(244, 2, 2, 0.9)' }}>
              🤖 Aro
            </h3>
            <p className="text-xs text-gray-300 relative z-10">Arodos AI Assistant</p>
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px rgba(244, 2, 2, 0.8)' }}></div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 hide-scrollbar">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg font-jost whitespace-pre-line break-words ${
                    message.isUser
                      ? 'bg-gradient-to-br from-red-500/30 to-red-600/40 text-white glass-effect backdrop-blur-md border border-red-400/50'
                      : 'bg-gradient-to-br from-gray-800/80 to-gray-900/90 text-gray-100 glass-effect backdrop-blur-md border border-gray-600/30'
                  }`}
                  style={{
                    boxShadow: message.isUser 
                      ? '0 8px 32px rgba(244, 2, 2, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 text-gray-100 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm glass-effect backdrop-blur-md border border-gray-600/30" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)' }}>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ boxShadow: '0 0 8px rgba(244, 2, 2, 0.6)' }}></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s', boxShadow: '0 0 8px rgba(244, 2, 2, 0.6)' }}></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s', boxShadow: '0 0 8px rgba(244, 2, 2, 0.6)' }}></div>
                    </div>
                    <span className="text-xs text-red-400 font-mono">Processing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-red-500/40 bg-gradient-to-r from-red-500/10 to-red-600/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-red-500/5 to-transparent"></div>
            <div className="flex space-x-2 sm:space-x-3 relative z-10">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-100 placeholder-gray-400 font-mono neon-border rounded-xl transition-all duration-300 focus:cyber-glow glass-effect backdrop-blur-md chat-input"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(30, 30, 40, 0.6))',
                  backdropFilter: 'blur(15px)',
                  boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(244, 2, 2, 0.1)'
                }}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="px-3 sm:px-5 py-2 sm:py-3 text-white rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12 neon-border disabled:opacity-50 relative overflow-hidden group"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(244, 2, 2, 0.9), rgba(220, 38, 38, 0.9))',
                  boxShadow: '0 8px 25px rgba(244, 2, 2, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};