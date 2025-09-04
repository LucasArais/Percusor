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
      description: 'Inspeção de conexões elétricas e sistemas de segurança.\n'
    }
  ];

  const correctiveServices = [
    'Reparo de vazamentos de gás refrigerante\n',
    'Substituição de compressores\n',
    'Troca de placas eletrônicas\n',
    'Reparo de motores ventiladores\n',
    'Correção de problemas elétricos\n',
    'Substituição de sensores\n',
    'Reparo de válvulas expansoras\n',
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
    <div className="min-h-screen pt-20 bg-site">
      {/* Slide Show */}
      <div className="mb-10">
        <ImageBanner images={bannerImages} autoPlay={true} interval={5000} />
      </div>

      {/* Preventive vs Corrective */}
      <section className="py-10 bg-site">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Preventive Maintenance */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-center p-8">
              <div className="flex flex-col items-center mb-6">
                <Calendar className="w-12 h-12 text-green-600 mb-2" />
                <h2 className="text-3xl font-extrabold text-green-700 mb-2 tracking-tight">
                  Manutenção Preventiva
                </h2>
                <p className="text-base text-gray-700 mb-4 text-center">
                  Evite problemas antes que aconteçam com manutenções regulares programadas.
                </p>
              </div>
              <ul className="mb-2 space-y-4">
                {preventiveServices.map((service, index) => (
                  <li key={index} className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-green-100 p-2 rounded-lg text-green-600">{service.icon}</span>
                      <span className="font-semibold text-gray-900">{service.title}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{service.description}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=5511978514196&text=Tenho%20interesse%20em%20manutencao%20preventiva"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 px-4 py-2 font-semibold rounded-full shadow transition w-fit mx-auto"
                style={{ minWidth: 0, maxWidth: '220px', backgroundColor: 'rgb(185, 217, 235)', color: '#222' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Tenho interesse
              </a>
            </div>

            {/* Corrective Maintenance */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-center p-8">
              <div className="flex flex-col items-center mb-6">
                <AlertTriangle className="w-12 h-12 text-orange-600 mb-2" />
                <h2 className="text-3xl font-extrabold text-orange-700 mb-2 tracking-tight">
                  Manutenção Corretiva
                </h2>
                <p className="text-base text-gray-700 mb-4 text-center">
                  Reparos especializados para resolver problemas e restaurar o funcionamento.
                </p>
              </div>
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Serviços inclusos:</h3>
                <ul className="space-y-6 text-gray-700">
                  {correctiveServices.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 justify-center">
                      <span className="text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{service.replace(/\n$/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5511978514196&text=Tenho%20interesse%20em%20manutencao%20corretiva"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 px-4 py-2 font-semibold rounded-full shadow transition w-fit mx-auto"
                style={{ minWidth: 0, maxWidth: '220px', backgroundColor: 'rgb(185, 217, 235)', color: '#222' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Tenho interesse
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manutencao;
