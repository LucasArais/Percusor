import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Calendar, 
  CheckCircle, 
  AlertTriangle,
  Users,
  ClipboardCheck,
  Award,
  ArrowRight,
  Book,
  Scale,
  Clock
} from 'lucide-react';

const PMOC = () => {
  const pmocBenefits = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Conformidade Legal',
      description: 'Atendimento às normas da ANVISA e legislação vigente.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Qualidade do Ar',
      description: 'Garantia de ar limpo e saudável para todos os ocupantes.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certificação',
      description: 'Documentação completa e certificados de conformidade.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Prevenção',
      description: 'Identificação precoce de problemas e riscos à saúde.'
    }
  ];

  const pmocServices = [
    'Inspeção técnica dos sistemas de climatização',
    'Análise da qualidade do ar interior',
    'Verificação de filtros e componentes',
    'Medição de temperatura e umidade',
    'Avaliação de ruídos e vibrações',
    'Limpeza e desinfecção de dutos',
    'Verificação de vazamentos',
    'Calibração de equipamentos de medição',
    'Relatório técnico detalhado',
    'Certificado de conformidade PMOC'
  ];

  const requiredEnvironments = [
    {
      type: 'Estabelecimentos de Saúde',
      examples: ['Hospitais', 'Clínicas', 'Laboratórios', 'Consultórios'],
      frequency: 'Semestral'
    },
    {
      type: 'Edifícios Comerciais',
      examples: ['Escritórios', 'Shopping centers', 'Bancos', 'Hotéis'],
      frequency: 'Semestral'
    },
    {
      type: 'Indústrias',
      examples: ['Fábricas', 'Indústrias alimentícias', 'Farmacêuticas'],
      frequency: 'Trimestral'
    },
    {
      type: 'Instituições de Ensino',
      examples: ['Escolas', 'Universidades', 'Creches'],
      frequency: 'Semestral'
    }
  ];

  const pmocSteps = [
    {
      step: '1',
      title: 'Agendamento',
      description: 'Agendamos a visita técnica conforme sua disponibilidade.'
    },
    {
      step: '2',
      title: 'Inspeção',
      description: 'Realizamos inspeção completa seguindo normas da ANVISA.'
    },
    {
      step: '3',
      title: 'Análise',
      description: 'Analisamos todos os dados coletados e identificamos não conformidades.'
    },
    {
      step: '4',
      title: 'Relatório',
      description: 'Entregamos relatório técnico completo e certificado PMOC.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-teal-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PMOC - Plano de Manutenção, Operação e Controle
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Mantenha seu estabelecimento em conformidade com as normas da ANVISA 
              e garanta a qualidade do ar para todos.
            </p>
          </div>
        </div>
      </section>

      {/* What is PMOC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que é PMOC?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                O PMOC é um documento técnico obrigatório estabelecido pela ANVISA que define 
                procedimentos de manutenção, operação e controle de sistemas de climatização 
                para garantir a qualidade do ar interior.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Este plano é essencial para prevenir a contaminação do ar e garantir um 
                ambiente saudável para ocupantes de edifícios climatizados.
              </p>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-semibold text-teal-800 mb-3 flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Base Legal
                </h3>
                <ul className="text-teal-700 space-y-1">
                  <li>• Resolução ANVISA RE nº 176/2000</li>
                  <li>• Portaria MS nº 3.523/1998</li>
                  <li>• NBR 13.971 - Sistemas de refrigeração</li>
                  <li>• NBR 16.401 - Instalações de ar condicionado</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {pmocBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Environments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quem Precisa do PMOC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todos os estabelecimentos com sistemas de climatização que possuem 
              capacidade superior a 5 TR (60.000 BTU/h).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requiredEnvironments.map((env, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {env.type}
                </h3>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-teal-600 mb-2">Exemplos:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {env.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>• {example}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-teal-800">
                    Frequência: {env.frequency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Inclusos no PMOC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe técnica especializada realiza todos os procedimentos 
              necessários para manter seu estabelecimento em conformidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pmocServices.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-teal-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo é estruturado para garantir total conformidade 
              com as normas vigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {pmocSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
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

      {/* Warning Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Atenção: Não Conformidade Pode Resultar em Multas
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Estabelecimentos que não possuem PMOC ou estão em desconformidade 
              podem ser multados pelos órgãos fiscalizadores.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="font-semibold text-gray-900 mb-3">Consequências da não conformidade:</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Multas de órgãos fiscalizadores</li>
                <li>• Interdição do estabelecimento</li>
                <li>• Problemas de saúde dos ocupantes</li>
                <li>• Responsabilidade civil e criminal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ClipboardCheck className="w-16 h-16 mx-auto mb-6 text-teal-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Regularize seu PMOC Hoje Mesmo
          </h2>
          <p className="text-xl mb-8">
            Não deixe para depois. Garanta a conformidade do seu estabelecimento 
            e a saúde de todos os ocupantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Solicitar PMOC
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+5511999999999"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center justify-center"
            >
              (11) 9999-9999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PMOC;
