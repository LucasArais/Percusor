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
  Award,
  ShoppingCart,
  Home as HomeIcon,
  Building,
  Factory
} from 'lucide-react';
import ImageBanner from '../components/ImageBanner';
import SimpleLogoLoop from '../components/SimpleLogoLoop';

const Home = () => {
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

  const clientLogos = [
    { src: "/logo-rocontec.webp", alt: "Rocontec", title: "Rocontec" },
    { src: "/logo-andari.png", alt: "Andari", title: "Andari" },
    { src: "/logo-bmg.png", alt: "BMG", title: "BMG" },
    { src: "/logo-chevrolet.png", alt: "Chevrolet", title: "Chevrolet" },
    { src: "/logo-ford.png", alt: "Ford", title: "Ford" },
    { src: "/logo-ioa.webp", alt: "IOA", title: "IOA" },
    { src: "/logo-panobianco.webp", alt: "Panobianco", title: "Panobianco" },
  ];

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
      {/* Image Banner */}
      <ImageBanner 
        images={bannerImages}
        autoPlay={true}
        interval={5000}
      />

      {/* Client Logos Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-7xl md:text-8xl font-bold text-gray-900 mb-6">
              Nossos Clientes
            </h2>
            <p className="text-5xl md:text-6xl text-gray-700 mb-8 leading-relaxed">
              Empresas que confiam na <span className="font-bold text-blue-600">Percusor</span> para suas soluções de climatização
            </p>
          </div>
          <SimpleLogoLoop
            logos={clientLogos}
            speed={60}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Atendemos Todos os Segmentos
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Soluções personalizadas para cada tipo de ambiente
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            

            {/* Residencial */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <HomeIcon className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Residencial
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Climatização para casas e apartamentos
              </p>
            </div>

            {/* Comercial */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Building className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comercial
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Soluções para escritórios, lojas e estabelecimentos
              </p>
            </div>

            {/* Industrial */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Factory className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Industrial
              </h3>
              <p className="text-base text-gray-600 mb-6">
                Sistemas robustos para indústrias e grandes complexos
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-5xl mx-auto">
            <img
              src="/image.png"
              alt="Equipe Percusor"
              className="rounded-xl object-cover shadow-md flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-[265px] lg:h-[265px]"
              style={{ background: "#f3f4f6" }}
            />
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-2">
               <br></br> 
              </div>
              <p className="text-lg text-gray-700 text-justify max-w-2xl leading-relaxed bg-gray-50 p-6 rounded-xl shadow">
                A percusor Climatização é uma empresa líder em climatização de ambiente, atuando neste segmento de ar condicionado por longo período, está capacitada para oferecer aos nossos clientes soluções completas em climatização de ambientes, desde grandes projetos para indústrias, hospitais, hotéis, empresas de pequeno médio e grande porte, entre outros projetos ligados ao setor empresarial e público, mas não menos importante para atender nossos clientes que queiram conforto em seus lares com a Instalação de condicionadores de ar que abranjam menores capacidades e a climatização em pequenos ambientes, como também assistência técnica e manutenção de ar condicionado.
                <br /><br />
                Nossa missão final é a satisfação de nossos clientes, por isso a Arcool oferece melhores condições para compra, serviços personalizados, projetos para soluções e otimização, disponibilizando aos nossos clientes produtos dos melhores fabricantes, além de profissionais altamente qualificados prontos para atendê-lo e auxiliá-lo em seu projeto e atendimento pós-venda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Endereço
            </h2>
            <p className="mb-8"></p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Rua%20Cristovao%20Pereira%201021%20Campo%20Belo%20Sao%20Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
