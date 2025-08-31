import { Link } from 'react-router-dom';
import { 
  Snowflake, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Thermometer,
  Settings,
  Award
} from 'lucide-react';

const Home = () => {
  const equipmentTypes = [
    {
      name: 'Split',
      description: 'Ideal para residências e pequenos comércios. Silencioso e econômico.',
      features: ['Baixo consumo', 'Instalação simples', 'Controle remoto', 'Filtros avançados'],
      image: '🏠'
    },
    {
      name: 'Piso Teto',
      description: 'Perfeito para ambientes comerciais amplos com distribuição uniforme do ar.',
      features: ['Grande capacidade', 'Distribuição uniforme', 'Design discreto', 'Fácil manutenção'],
      image: '🏢'
    },
    {
      name: 'Cassete',
      description: 'Solução elegante para ambientes com forro, distribuição em 4 direções.',
      features: ['4 direções de ar', 'Design moderno', 'Controle individual', 'Baixo ruído'],
      image: '⬜'
    },
    {
      name: 'VRF',
      description: 'Sistema de volume de refrigerante variável para grandes projetos.',
      features: ['Alta eficiência', 'Controle individual', 'Economia de energia', 'Flexibilidade'],
      image: '🏭'
    },
    {
      name: 'Chiller',
      description: 'Solução industrial para grandes volumes e aplicações especiais.',
      features: ['Grande capacidade', 'Controle preciso', 'Durabilidade', 'Baixo custo operacional'],
      image: '❄️'
    }
  ];

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Instalação Profissional',
      description: 'Instalação completa com garantia e certificação técnica.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Garantia Estendida',
      description: 'Garantia de até 2 anos em todos os nossos serviços.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Atendimento 24h',
      description: 'Suporte técnico disponível 24 horas para emergências.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Técnicos Certificados',
      description: 'Equipe especializada com certificações do mercado.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Snowflake className="w-16 h-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PROFISSIONAIS
              <br />
              <span className="text-blue-200">QUALIFICADOS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              No inverno ou no verão, trabalhamos para você se sentir bem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/sobre"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Equipamentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para todos os tipos de ambientes, 
              desde residenciais até grandes projetos industriais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentTypes.map((equipment, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{equipment.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {equipment.name}
                  </h3>
                  <p className="text-gray-600">
                    {equipment.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {equipment.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/contato"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Percusor?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em climatização com anos de experiência no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Thermometer className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para ter o clima ideal?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e receba um orçamento personalizado para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+5511999999999"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              (11) 9999-9999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
