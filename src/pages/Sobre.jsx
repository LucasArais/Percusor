import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  Target,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

const Sobre = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Qualidade',
      description: 'Utilizamos apenas equipamentos de primeira linha e seguimos rigorosamente as normas técnicas.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compromisso',
      description: 'Nosso compromisso é com a satisfação total do cliente e a excelência em cada serviço.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Eficiência',
      description: 'Buscamos sempre as soluções mais eficientes em termos de energia e custo-benefício.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Equipe',
      description: 'Contamos com profissionais altamente qualificados e certificados no mercado.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '2.500+', label: 'Projetos Realizados' },
    { number: '98%', label: 'Satisfação dos Clientes' },
    { number: '24h', label: 'Suporte Técnico' }
  ];

  const certifications = [
    'Certificação ABRAVA',
    'Técnicos certificados pelos fabricantes',
    'Licença CREA ativa',
    'Certificação ISO 9001',
    'Especialização em PMOC',
    'Treinamento em sistemas VRF'
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Fundação',
      description: 'A Percusor foi fundada com o objetivo de oferecer soluções completas em climatização.'
    },
    {
      year: '2012',
      title: 'Expansão',
      description: 'Ampliamos nossa atuação para projetos comerciais e industriais de grande porte.'
    },
    {
      year: '2015',
      title: 'Certificações',
      description: 'Obtivemos as principais certificações do mercado e parcerias com grandes fabricantes.'
    },
    {
      year: '2018',
      title: 'Inovação',
      description: 'Implementamos tecnologias de monitoramento remoto e sistemas inteligentes.'
    },
    {
      year: '2021',
      title: 'Sustentabilidade',
      description: 'Focamos em soluções sustentáveis e eficiência energética em todos os projetos.'
    },
    {
      year: '2024',
      title: 'Presente',
      description: 'Hoje somos referência em climatização com mais de 2.500 projetos realizados.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Somos especialistas em climatização com mais de 15 anos de experiência, 
              oferecendo soluções completas para todos os tipos de ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Percusor nasceu da paixão por proporcionar conforto térmico e qualidade de vida. 
                Desde 2009, nos dedicamos a oferecer soluções completas em climatização, sempre 
                priorizando a excelência técnica e a satisfação dos nossos clientes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe é formada por profissionais altamente qualificados, com certificações 
                dos principais fabricantes do mercado. Trabalhamos com as melhores marcas e 
                tecnologias mais avançadas para garantir eficiência e durabilidade.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Atendemos desde residências até grandes complexos industriais, sempre com o mesmo 
                compromisso: entregar a solução perfeita para cada necessidade.
              </p>
              
              <Link
                to="/contato"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
              >
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nosso trabalho e nos tornam referência no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de uma década de crescimento e evolução constante.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificações e Qualificações
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos profissionais possuem as principais certificações do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para trabalhar conosco?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato e descubra como podemos ajudar você a ter o clima ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+5511999999999"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              (11) 9999-9999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
