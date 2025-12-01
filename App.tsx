import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Droplets, PenTool, Hammer, Settings, Lightbulb, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { NAV_LINKS, SERVICES, PROJECTS } from './constants';
import { SectionId } from './types';
import ProjectCard from './components/ProjectCard';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case 'PenTool': return <PenTool size={32} />;
      case 'Hammer': return <Hammer size={32} />;
      case 'Settings': return <Settings size={32} />;
      case 'Lightbulb': return <Lightbulb size={32} />;
      default: return <Droplets size={32} />;
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-accent selection:text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-lg text-white overflow-hidden">
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <Droplets size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <div className={`flex flex-col ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <span className="font-serif font-bold text-xl leading-none tracking-wide">BOQU</span>
              <span className="text-[10px] tracking-widest uppercase opacity-80">Japan</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wider hover:text-accent transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-gray-800'
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              相談する
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-primary/95 backdrop-blur-xl md:hidden flex items-center justify-center">
          <nav className="flex flex-col items-center space-y-8 p-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-serif text-white hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              className="mt-8 px-8 py-3 bg-accent text-white rounded-full text-lg hover:bg-accent-dark transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/1920/1080?random=10"
            alt="Fountain Hero"
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] transform transition-transform duration-[20s]"
            style={{ animation: 'none' }} // Static for now, usually would be a Ken Burns effect or video
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              <span className="block mb-2 text-2xl md:text-3xl font-sans font-light tracking-[0.2em] text-accent">WATER & ART</span>
              水と光が織りなす<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                幻想的な空間へ
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
              BOQUは、最先端の技術と芸術的な感性を融合させ、
              人々の心に残る水景空間を創造するエンジニアリング・カンパニーです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={`#${SectionId.PROJECTS}`}
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-accent/25"
              >
                実績を見る
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`#${SectionId.ABOUT}`}
                className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                私たちについて
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto mb-2"></div>
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* About Section */}
      <section id={SectionId.ABOUT} className="py-24 bg-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 -skew-x-12 transform origin-top translate-x-1/4"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://picsum.photos/800/1000?random=20"
                  alt="Craftsmanship"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full lg:mx-0 object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
                  <p className="font-serif text-4xl font-bold text-accent mb-2">15+</p>
                  <p className="text-gray-600 text-sm">年以上にわたる<br />グローバルな実績</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                技術と感性の<br />完全なる調和
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
                <p>
                  水は形を持たず、環境に合わせてその姿を変えます。私たちはその「水」という素材に、光、音、そして最新の制御技術を掛け合わせることで、唯一無二のアートピースを生み出します。
                </p>
                <p>
                  BOQU（上海博趣）は、単なる設備の提供にとどまりません。企画段階からメンテナンスに至るまで、空間の価値を最大化するためのトータルソリューションを提供します。日本の美意識「わび・さび」と現代のダイナミズムを融合させた新しい水景を、ここ日本から発信します。
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-primary text-xl mb-2">高品質</h4>
                  <p className="text-sm text-gray-500">厳格な品質管理基準に基づく部材選定と施工</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl mb-2">革新性</h4>
                  <p className="text-sm text-gray-500">AI制御や最新LED技術の積極的な導入</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id={SectionId.SERVICES} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Services</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">事業内容</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-2 cursor-default border border-gray-100"
              >
                <div className="mb-6 text-accent group-hover:text-white transition-colors">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">{service.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id={SectionId.PROJECTS} className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Works</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">施工事例</h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-sm font-medium hover:text-accent transition-colors">
              全ての実績を見る <ChevronRight size={16} className="ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-sm font-medium border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              全ての実績を見る <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id={SectionId.CONTACT} className="py-24 bg-paper relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Contact Info */}
            <div className="md:w-2/5 bg-primary text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full translate-y-1/2 -translate-x-1/2 opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-6">お問い合わせ</h3>
                <p className="text-gray-300 text-sm mb-10 leading-relaxed">
                  プロジェクトのご相談、お見積もり依頼など、お気軽にお問い合わせください。専門スタッフが丁寧に対応いたします。
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-accent shrink-0" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">お電話</p>
                      <p className="font-medium">03-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-accent shrink-0" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">メール</p>
                      <p className="font-medium">contact@boqu-japan.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-accent shrink-0" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">オフィス</p>
                      <p className="font-medium">〒100-0005<br />東京都千代田区丸の内1-1-1</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 flex gap-4">
                <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Form */}
            <div className="md:w-3/5 p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">お名前 <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors" placeholder="山田 太郎" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">会社名</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors" placeholder="株式会社〇〇" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors" placeholder="プロジェクトの概要やご質問をご記入ください"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-medium py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-primary/20">
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <span className="font-serif font-bold text-2xl tracking-wide block mb-1">BOQU</span>
              <p className="text-xs text-gray-500">SHANGHAI BOQU FOUNTAIN & LANDSCAPE ENGINEERING</p>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition-colors">会社概要</a>
              <a href="#" className="hover:text-white transition-colors">サイトマップ</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} BOQU JAPAN. All rights reserved.
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIConsultant />
    </div>
  );
};

export default App;