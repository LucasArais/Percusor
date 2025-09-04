import { Link } from 'react-router-dom';
import { 
  Building2, 
  Home, 
  Factory, 
  ShoppingBag, 
  CheckCircle, 
  ArrowRight,
  Users,
  Calendar,
  Award,
  Lightbulb
} from 'lucide-react';
import ImageBanner from '../components/ImageBanner';

const bannerImages = [
  {
    src: '/slide1.jpeg',
    alt: 'Instalação de Ar Condicionado',
    title: 'Instalação Profissional de Climatização',
    caption: 'Serviços especializados de instalação com garantia total e máxima qualidade técnica'
  },
  {
    src: '/slide2.jpg',
    alt: 'Manutenção Especializada',
    title: 'Manutenção Técnica Especializada',
    caption: 'Manutenção preventiva e corretiva completa para todos os tipos de equipamentos'
  },
  {
    src: '/slide3.jpg',
    alt: 'Projetos Personalizados',
    title: 'Projetos Personalizados Sob Medida',
    caption: 'Soluções completas e personalizadas desenvolvidas para cada necessidade específica'
  }
];

const Projetos = () => {
  const projectTypes = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Residencial',
      description: 'Projetos personalizados para casas e apartamentos',
      features: ['Análise térmica', 'Eficiência energética', 'Design discreto', 'Controle inteligente'],
      examples: ['Casas de alto padrão', 'Apartamentos', 'Coberturas', 'Lofts']
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Comercial',
      description: 'Soluções para escritórios, lojas e estabelecimentos',
      features: ['Zoneamento', 'Controle centralizado', 'Baixo ruído', 'Manutenção facilitada'],
      examples: ['Escritórios', 'Lojas', 'Restaurantes', 'Clínicas']
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Industrial',
      description: 'Sistemas robustos para ambientes industriais',
      features: ['Alta capacidade', 'Controle preciso', 'Durabilidade', 'Monitoramento'],
      examples: ['Fábricas', 'Galpões', 'Data centers', 'Laboratórios']
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Varejo',
      description: 'Climatização para shopping centers e grandes lojas',
      features: ['Distribuição uniforme', 'Economia operacional', 'Conforto térmico', 'Flexibilidade'],
      examples: ['Shopping centers', 'Supermercados', 'Concessionárias', 'Academias']
    }
  ];

  const projectSteps = [
    {
      step: '01',
      title: 'Análise e Diagnóstico',
      description: 'Visitamos o local para entender suas necessidades específicas e realizar medições técnicas.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Projeto Personalizado',
      description: 'Desenvolvemos um projeto sob medida considerando eficiência, estética e orçamento.',
      icon: <Building2 className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Aprovação e Ajustes',
      description: 'Apresentamos o projeto completo e fazemos os ajustes necessários conforme seu feedback.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Execução Profissional',
      description: 'Nossa equipe especializada executa a instalação seguindo rigorosamente o projeto.',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const portfolioProjects = [
    {
      title: 'Edifício Corporativo - 2.500m²',
      type: 'Comercial',
      description: 'Sistema VRF com 45 unidades internas distribuídas em 8 andares.',
      features: ['120 TR de capacidade', 'Controle individual por sala', 'Eficiência A+++'],
      image: '🏢'
    },
    {
      title: 'Residência de Alto Padrão',
      type: 'Residencial',
      description: 'Climatização completa com integração domótica.',
      features: ['15 ambientes climatizados', 'Controle por app', 'Design invisível'],
      image: '🏠'
    },
    {
      title: 'Centro de Distribuição - 5.000m²',
      type: 'Industrial',
      description: 'Sistema de climatização para controle de temperatura e umidade.',
      features: ['Chiller de 200 TR', 'Controle automático', 'Monitoramento 24h'],
      image: '🏭'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Slide Show */}
      <div>
        <ImageBanner images={bannerImages} autoPlay={true} interval={5000} />
      </div>
      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos todos os segmentos com soluções técnicas adequadas para cada necessidade.
            </p>
            <br />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center">{project.title}</h3>
                  <p className="text-gray-600 text-center">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Exemplos de aplicação:</h4>
                  <div>
                    <span className="text-gray-700 text-sm">
                      {project.examples.join(' - ')}
                    </span>
                  </div>
                </div>

                <Link
                  to="/contato"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Solicitar Projeto
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projetos;
