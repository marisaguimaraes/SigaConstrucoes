import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Hammer, 
  Home, 
  Palette, 
  Truck, 
  Shield, 
  Clock, 
  Users,
  Menu,
  X,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Hammer className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">Siga Construções</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Início</a>
              <a href="#produtos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Produtos</a>
              <a href="#projetos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Projetos</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contato</a>
            </nav>

            <button className="hidden md:flex space-x-8 inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-6 py-2 rounded-full shadow-lg hover:shadow-xl bg-orange-500 hover:bg-orange-700 transition-all duration-300"><a href="https://wa.me/557436119193" className="flex items-center space-x-2 text-black transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-medium">Solicite Seu Orçamento</span></a></button>

            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Início</a>
                <a href="#produtos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Produtos</a>
                <a href="#projetos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Projetos</a>
                <a href="#depoimentos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Depoimentos</a>
                <a href="#contato" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contato</a>
                <button className="flex items-center space-x-2 transition-colors bg-orange-500 font-medium inline-flex items-center justify-center text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"><a href="https://wa.me/557436119193" className="flex items-center space-x-2 text-black transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-medium">Solicite Seu Orçamento</span></a></button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0">
          <img 
            src="assets/predio.png"
            alt="Construção"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforme Seus <span className="text-yellow-300">Sonhos</span> em Realidade
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Encontre tudo para sua construção e decoração em um só lugar. 
              Materiais de qualidade, preços competitivos e atendimento especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <ShoppingCart className="h-6 w-6" />
                <span><a href="https://www.instagram.com/sigaconstrucoes?utm_source=ig_web_button_share_sheet&igsh=YWNqZjhhaHMyZnkw">Ver Produtos</a></span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all flex items-center justify-center space-x-2">
                <Phone className="h-6 w-6" />
                <span><a href="https://wa.me/557436119193">Fale Conosco</a></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por Que Escolher a Siga Construções?</h2>
            <p className="text-xl text-gray-600">Mais de 7 anos no mercado oferecendo qualidade e confiança</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrega Rápida</h3>
              <p className="text-gray-600">Entregamos em toda a região metropolitana com o Siga Delivery.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantia Total</h3>
              <p className="text-gray-600">Todos os produtos com garantia de fábrica. Sua satisfação é nossa prioridade número um.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Atendimento Especializado</h3>
              <p className="text-gray-600">Equipe técnica qualificada para orientar na escolha dos melhores materiais para seu projeto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
            <p className="text-xl text-gray-600">Tudo que você precisa para construir e decorar</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all">
                <img 
                  src="https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg"
                  alt="Material de Construção"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Hammer className="h-6 w-6 text-orange-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Material de Construção</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Cimento, areia, brita, tijolos, telhas e tudo para sua obra com qualidade garantida.</p>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    <span><a href="https://www.instagram.com/sigaconstrucoes?utm_source=ig_web_button_share_sheet&igsh=YWNqZjhhaHMyZnkw">Ver produtos</a></span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all">
                <img 
                  src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg"
                  alt="Ferramentas"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Home className="h-6 w-6 text-orange-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Ferramentas</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Ferramentas manuais e elétricas das melhores marcas para profissionais e amadores.</p>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    <span><a href="https://www.instagram.com/sigaconstrucoes?utm_source=ig_web_button_share_sheet&igsh=YWNqZjhhaHMyZnkw">Ver produtos</a></span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all">
                <img 
                  src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
                  alt="Decoração"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Palette className="h-6 w-6 text-orange-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Decoração</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Tintas, pisos, azulejos, luminárias e itens decorativos para deixar seu espaço único.</p>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    <span><a href="https://www.instagram.com/sigaconstrucoes?utm_source=ig_web_button_share_sheet&igsh=YWNqZjhhaHMyZnkw">Ver produtos</a></span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projetos Realizados</h2>
            <p className="text-xl text-gray-600">Veja alguns dos projetos que ajudamos a construir</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
                alt="Casa Moderna"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Casa Moderna</h3>
                <p className="text-sm opacity-90">Residencial Premium</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg"
                alt="Apartamento Decorado"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Apartamento Decorado</h3>
                <p className="text-sm opacity-90">Design Contemporâneo</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                alt="Reforma Comercial"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Reforma Comercial</h3>
                <p className="text-sm opacity-90">Escritório Moderno</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600">Mais de 1000 clientes satisfeitos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Sou cliente desde a fundação do Siga a sete anos atrás. Eu cresci junto do siga. Quando comecei, construia apenas uma casa, hoje construo mais de oito casas de uma vez, é um lugar de muita credibilidade e confiabilidade."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">R</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Robson</h4>
                  <p className="text-gray-500 text-sm">Construtor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Tem produtos bons, preços e qualidade, sou cliente desde o inicio da loja, é uma loja assim diversificada, produtos novos, promoções, o que tem de novo no mercado a Siga tem."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">C</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Carlos Babalu</h4>
                  <p className="text-gray-500 text-sm">Cliente desde 2018</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "A melhor loja de materiais da região! Já indiquei para vários amigos e todos ficaram satisfeitos."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">A</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Ana Costa</h4>
                  <p className="text-gray-500 text-sm">Arquiteta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
              <p className="text-xl text-gray-300 mb-8">
                Estamos prontos para ajudar você a realizar seu projeto. 
                Fale conosco e receba um orçamento personalizado.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Telefone</h3>
                    <p className="text-gray-300">(74) 3611-9193</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">E-mail</h3>
                    <p className="text-gray-300">sigaatacadista@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Endereço</h3>
                    <p className="text-gray-300">Av. Gaspar de Lemos - Nossa Sra. da Penha<br />Juazeiro - BA, 48902-290</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Horário de Funcionamento</h3>
                    <p className="text-gray-300">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Solicite seu Orçamento</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-colors"
                    placeholder="Digite seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-colors resize-none"
                    placeholder="Descreva seu projeto ou dúvida"
                  ></textarea>
                </div>
                
                <button className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Enviar Mensagem</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hammer className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold">ConstructMax</span>
              </div>
              <p className="text-gray-300 mb-4">
                Sua loja completa de material de construção e decoração. 
                Qualidade e confiança há mais de 7 anos.
              </p>
              <div className="flex space-x-4">
                <div className="bg-orange-600 p-2 rounded-lg cursor-pointer hover:bg-orange-700 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="bg-orange-600 p-2 rounded-lg cursor-pointer hover:bg-orange-700 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="bg-orange-600 p-2 rounded-lg cursor-pointer hover:bg-orange-700 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Cimento e Argamassa</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Tijolos e Blocos</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Telhas e Coberturas</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Ferramentas</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Tintas e Vernizes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Entrega Expressa</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Orçamento Grátis</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Consultoria Técnica</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Projeto Personalizado</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Informações</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-300">
            <p>&copy; 2025 Siga Construções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;