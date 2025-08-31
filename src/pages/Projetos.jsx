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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos Personalizados
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Desenvolvemos soluções sob medida para cada tipo de ambiente, 
              garantindo máxima eficiência e conforto.
            </p>
          </div>
        </div>
      </section>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
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
                  <div className="flex flex-wrap gap-2">
                    {project.examples.map((example, exampleIndex) => (
                      <span 
                        key={exampleIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
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

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Desenvolvemos Seu Projeto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo estruturado garante que você tenha a solução perfeita para suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-purple-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projetos Realizados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos projetos mais importantes e as soluções implementadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.type}
                  </span>
                </div>
                <div className="px-8 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Award className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para seu projeto personalizado?
          </h2>
          <p className="text-xl mb-8">
            Agende uma consulta gratuita e receba um projeto sob medida para suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+5511999999999"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              (11) 9999-9999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
