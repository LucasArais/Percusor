import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight,
  Thermometer,
  Lightbulb,
  Wrench,
  Leaf
} from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Como Escolher o Ar Condicionado Ideal para Sua Casa',
      excerpt: 'Descubra os fatores mais importantes na hora de escolher o sistema de climatização perfeito para seu lar.',
      category: 'Dicas',
      author: 'Equipe Percusor',
      date: '15 de Janeiro, 2024',
      readTime: '5 min',
      image: '🏠',
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      id: 2,
      title: '5 Sinais de que Seu Ar Condicionado Precisa de Manutenção',
      excerpt: 'Identifique os principais sinais que indicam a necessidade de manutenção preventiva em seu equipamento.',
      category: 'Manutenção',
      author: 'João Silva',
      date: '10 de Janeiro, 2024',
      readTime: '4 min',
      image: '🔧',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'Eficiência Energética: Como Economizar na Conta de Luz',
      excerpt: 'Aprenda técnicas simples para reduzir o consumo de energia do seu ar condicionado sem perder conforto.',
      category: 'Economia',
      author: 'Maria Santos',
      date: '8 de Janeiro, 2024',
      readTime: '6 min',
      image: '💡',
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      id: 4,
      title: 'Ar Condicionado e Sustentabilidade: O Futuro da Climatização',
      excerpt: 'Conheça as tecnologias sustentáveis que estão revolucionando o mercado de climatização.',
      category: 'Sustentabilidade',
      author: 'Pedro Costa',
      date: '5 de Janeiro, 2024',
      readTime: '7 min',
      image: '🌱',
      icon: <Leaf className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'PMOC: Tudo que Você Precisa Saber Sobre a Norma',
      excerpt: 'Entenda a importância do PMOC e como manter seu estabelecimento em conformidade com a legislação.',
      category: 'Regulamentação',
      author: 'Ana Oliveira',
      date: '2 de Janeiro, 2024',
      readTime: '8 min',
      image: '📋',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 6,
      title: 'Sistemas VRF: A Revolução da Climatização Comercial',
      excerpt: 'Descubra as vantagens dos sistemas VRF para projetos comerciais e industriais de grande porte.',
      category: 'Tecnologia',
      author: 'Carlos Mendes',
      date: '28 de Dezembro, 2023',
      readTime: '6 min',
      image: '🏢',
      icon: <Thermometer className="w-5 h-5" />
    }
  ];

  const categories = [
    { name: 'Todos', count: 6, active: true },
    { name: 'Dicas', count: 1, active: false },
    { name: 'Manutenção', count: 1, active: false },
    { name: 'Economia', count: 1, active: false },
    { name: 'Sustentabilidade', count: 1, active: false },
    { name: 'Regulamentação', count: 1, active: false },
    { name: 'Tecnologia', count: 1, active: false }
  ];

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog Percusor
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dicas, novidades e conhecimento técnico sobre climatização, 
              manutenção e eficiência energética.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                    Destaque
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    {featuredPost.icon}
                    <span className="ml-1">{featuredPost.category}</span>
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime} de leitura</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-flex items-center"
                >
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center p-12">
                <div className="text-8xl">{featuredPost.image}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Últimos Artigos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantenha-se atualizado com as últimas tendências e dicas do mundo da climatização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                  <div className="text-6xl">{post.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      {post.icon}
                      <span className="ml-1">{post.category}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-amber-600 font-semibold hover:text-amber-700 transition-colors inline-flex items-center"
                  >
                    Ler mais
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-amber-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Receba Nossas Novidades
          </h2>
          <p className="text-xl mb-8">
            Inscreva-se em nossa newsletter e receba dicas exclusivas sobre climatização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
