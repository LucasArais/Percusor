import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Calendar, 
  Shield, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Thermometer,
  Filter,
  Settings,
  ArrowRight
} from 'lucide-react';

const Manutencao = () => {
  const preventiveServices = [
    {
      icon: <Filter className="w-6 h-6" />,
      title: 'Limpeza de Filtros',
      description: 'Limpeza e substituição de filtros para garantir qualidade do ar.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Verificação de Componentes',
      description: 'Inspeção completa de todos os componentes do sistema.'
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Teste de Performance',
      description: 'Análise de eficiência energética e capacidade de refrigeração.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Verificação Elétrica',
      description: 'Inspeção de conexões elétricas e sistemas de segurança.'
    }
  ];

  const correctiveServices = [
    'Reparo de vazamentos de gás refrigerante',
    'Substituição de compressores',
    'Troca de placas eletrônicas',
    'Reparo de motores ventiladores',
    'Correção de problemas elétricos',
    'Substituição de sensores',
    'Reparo de válvulas expansoras',
    'Correção de ruídos anômalos'
  ];

  const maintenancePlans = [
    {
      name: 'Plano Básico',
      price: 'R$ 89',
      period: '/mês',
      visits: '2 visitas/ano',
      features: [
        'Limpeza de filtros',
        'Verificação básica',
        'Relatório técnico',
        'Desconto em reparos'
      ],
      popular: false
    },
    {
      name: 'Plano Completo',
      price: 'R$ 149',
      period: '/mês',
      visits: '4 visitas/ano',
      features: [
        'Limpeza completa',
        'Verificação detalhada',
        'Teste de performance',
        'Relatório completo',
        'Prioridade no atendimento',
        '20% desconto em reparos'
      ],
      popular: true
    },
    {
      name: 'Plano Premium',
      price: 'R$ 229',
      period: '/mês',
      visits: '6 visitas/ano',
      features: [
        'Manutenção completa',
        'Monitoramento remoto',
        'Atendimento 24h',
        'Peças inclusas',
        'Garantia estendida',
        '30% desconto em reparos'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Wrench className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Manutenção Preventiva e Corretiva
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Mantenha seu ar condicionado funcionando perfeitamente com nossos 
              planos de manutenção especializados.
            </p>
          </div>
        </div>
      </section>

      {/* Preventive vs Corrective */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Preventive Maintenance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Manutenção Preventiva
                </h2>
                <p className="text-gray-600">
                  Evite problemas antes que aconteçam com manutenções regulares programadas.
                </p>
              </div>

              <div className="space-y-6">
                {preventiveServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-4 text-green-600">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Benefícios:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Maior vida útil do equipamento</li>
                  <li>• Economia de energia</li>
                  <li>• Menos quebras inesperadas</li>
                  <li>• Melhor qualidade do ar</li>
                </ul>
              </div>
            </div>

            {/* Corrective Maintenance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Manutenção Corretiva
                </h2>
                <p className="text-gray-600">
                  Reparos especializados para resolver problemas e restaurar o funcionamento.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-4">Serviços inclusos:</h3>
                {correctiveServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Garantias:</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Diagnóstico gratuito</li>
                  <li>• Orçamento sem compromisso</li>
                  <li>• Garantia de 90 dias nos reparos</li>
                  <li>• Atendimento de emergência</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos de Manutenção
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para manter seu ar condicionado sempre funcionando perfeitamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-xl shadow-lg p-8 relative ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-green-600 font-semibold">{plan.visits}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contato"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Contratar Plano
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Atendimento de Emergência
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Problemas urgentes? Nossa equipe está disponível 24 horas para atendimento de emergência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5511999999999"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              <Clock className="mr-2 w-5 h-5" />
              Emergência 24h
            </a>
            <Link
              to="/contato"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Agendar Manutenção
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manutencao;
