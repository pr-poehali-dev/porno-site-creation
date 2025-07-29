import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Технологии", color: "bg-coral text-white", count: 24 },
    { name: "Дизайн", color: "bg-coral-light text-white", count: 18 },
    { name: "Разработка", color: "bg-sage text-white", count: 31 },
    { name: "Маркетинг", color: "bg-mint text-white", count: 15 },
    { name: "Аналитика", color: "bg-warm-purple text-white", count: 12 }
  ];

  const articles = [
    {
      id: 1,
      title: "Современные тренды веб-разработки в 2024",
      excerpt: "Исследуем актуальные направления и технологии, которые определят будущее веб-разработки в ближайшие годы.",
      image: "img/47f1eb05-23da-420e-8f1b-786864e3984a.jpg",
      category: "Технологии",
      author: "Анна Петрова",
      date: "28 июля 2024",
      readTime: "5 мин"
    },
    {
      id: 2,
      title: "UX/UI дизайн: принципы создания интуитивных интерфейсов",
      excerpt: "Разбираем основные принципы создания пользовательских интерфейсов, которые повышают конверсию и удовлетворенность пользователей.",
      image: "img/67d8959b-64e9-499e-a667-c2dfb910aca2.jpg",
      category: "Дизайн",
      author: "Михаил Иванов",
      date: "26 июля 2024",
      readTime: "7 мин"
    },
    {
      id: 3,
      title: "React 18: новые возможности и оптимизация производительности",
      excerpt: "Подробно рассматриваем ключевые обновления React 18 и способы повышения производительности современных веб-приложений.",
      image: "img/98728ba0-f5ec-46f6-aa3e-298a102a9a01.jpg",
      category: "Разработка",
      author: "Елена Сидорова",
      date: "24 июля 2024",
      readTime: "8 мин"
    }
  ];

  const authors = [
    { name: "Анна Петрова", role: "Frontend разработчик", articles: 15, initials: "АП" },
    { name: "Михаил Иванов", role: "UX/UI дизайнер", articles: 12, initials: "МИ" },
    { name: "Елена Сидорова", role: "Fullstack разработчик", articles: 20, initials: "ЕС" },
    { name: "Дмитрий Козлов", role: "DevOps инженер", articles: 8, initials: "ДК" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">TechBlog</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-coral transition-colors">Главная</a>
                <a href="#articles" className="text-gray-700 hover:text-coral transition-colors">Статьи</a>
                <a href="#categories" className="text-gray-700 hover:text-coral transition-colors">Категории</a>
                <a href="#about" className="text-gray-700 hover:text-coral transition-colors">О блоге</a>
                <a href="#authors" className="text-gray-700 hover:text-coral transition-colors">Авторы</a>
                <a href="#contact" className="text-gray-700 hover:text-coral transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск статей..."
                  className="w-64 pl-10"
                />
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
              <Button size="sm" className="bg-coral hover:bg-coral/90 text-white">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-coral/10 to-mint/10 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Современный блог о технологиях
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Исследуем последние тренды в разработке, дизайне и технологиях. 
            Делимся опытом и знаниями с сообществом разработчиков.
          </p>
          <Button size="lg" className="bg-coral hover:bg-coral/90 text-white mr-4">
            Читать статьи
          </Button>
          <Button variant="outline" size="lg">
            О проекте
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Badge className={`${category.color} mb-3`}>
                    {category.name}
                  </Badge>
                  <p className="text-sm text-gray-600">{category.count} статей</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articles" className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold">Популярные статьи</h3>
            <Button variant="outline">
              Все статьи
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-coral text-white">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-coral transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Icon name="User" size={14} className="mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section id="authors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Наши авторы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {authors.map((author) => (
              <Card key={author.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="text-lg font-semibold bg-coral text-white">
                      {author.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold mb-2">{author.name}</h4>
                  <p className="text-gray-600 mb-3">{author.role}</p>
                  <p className="text-sm text-gray-500">{author.articles} статей</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">О блоге</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" className="text-coral" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-3">Качественный контент</h4>
                <p className="text-gray-600">
                  Глубокие статьи от экспертов индустрии с практическими примерами и реальным опытом.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-mint/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-mint" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-3">Сообщество</h4>
                <p className="text-gray-600">
                  Активное сообщество разработчиков, дизайнеров и технических специалистов.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="text-sage" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-3">Актуальность</h4>
                <p className="text-gray-600">
                  Следим за последними трендами и обновляем контент в соответствии с изменениями в индустрии.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Свяжитесь с нами</h3>
            <p className="text-gray-600 mb-8">
              Есть вопросы или предложения? Хотите стать автором? Напишите нам!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-coral hover:bg-coral/90 text-white">
                <Icon name="Mail" className="mr-2" size={16} />
                hello@techblog.dev
              </Button>
              <Button variant="outline">
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Telegram канал
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">TechBlog</h4>
              <p className="text-gray-400 text-sm">
                Современный блог о технологиях, разработке и дизайне.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Категории</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Авторы</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Категории</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Разработка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Icon name="Github" size={16} />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Icon name="Linkedin" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 TechBlog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;