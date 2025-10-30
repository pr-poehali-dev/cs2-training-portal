import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const courses = [
    {
      id: 1,
      title: 'Основы CS2 для новичков',
      level: 'Начальный',
      duration: '4 часа',
      lessons: 12,
      description: 'Изучите базовые механики игры, управление и основы стрельбы',
      image: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/456211ce-abc3-480b-8c0d-f92e67ca5c6b.jpg'
    },
    {
      id: 2,
      title: 'Продвинутая стрельба',
      level: 'Средний',
      duration: '6 часов',
      lessons: 18,
      description: 'Spray control, контрреколл и точная стрельба на всех дистанциях',
      image: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/028cb05a-6008-4487-be9d-1617dd3388f0.jpg'
    },
    {
      id: 3,
      title: 'Профессиональные тактики',
      level: 'Продвинутый',
      duration: '8 часов',
      lessons: 24,
      description: 'Командная игра, ротации и профессиональные стратегии',
      image: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/bafe94f0-51f7-4f29-8827-4e0dec8ea0d7.jpg'
    }
  ];

  const guides = [
    {
      title: 'Управление отдачей AK-47',
      category: 'Оружие',
      duration: '15 мин',
      views: '12.5K'
    },
    {
      title: 'Эффективное использование гранат',
      category: 'Тактика',
      duration: '20 мин',
      views: '8.3K'
    },
    {
      title: 'Позиционирование на карте',
      category: 'Стратегия',
      duration: '18 мин',
      views: '15.2K'
    },
    {
      title: 'Экономика раундов',
      category: 'Экономика',
      duration: '12 мин',
      views: '9.7K'
    }
  ];

  const maps = [
    { name: 'Dust 2', difficulty: 'Начальный', tactics: 8 },
    { name: 'Mirage', difficulty: 'Начальный', tactics: 10 },
    { name: 'Inferno', difficulty: 'Средний', tactics: 12 },
    { name: 'Nuke', difficulty: 'Продвинутый', tactics: 15 }
  ];

  const blogPosts = [
    {
      title: 'Новые изменения в патче CS2',
      date: '28 окт 2024',
      excerpt: 'Разбор последних обновлений баланса оружия и изменений на картах'
    },
    {
      title: 'Топ-5 ошибок новичков',
      date: '25 окт 2024',
      excerpt: 'Самые частые ошибки начинающих игроков и способы их исправить'
    },
    {
      title: 'Анализ Major турнира',
      date: '22 окт 2024',
      excerpt: 'Разбор тактик профессиональных команд на последнем мажоре'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Target" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold font-heading">CS2 Academy</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Курсы', 'Гайды', 'Тактики', 'Карты', 'Блог'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hover-scale">
              Начать обучение
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              🎮 Образовательная платформа
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Стань мастером<br />Counter-Strike 2
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональные видеоуроки, тактические гайды и разборы механик игры от опытных тренеров
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="hover-scale hover-glow">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть курсы
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Изучить гайды
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl font-bold font-heading mb-4">Популярные курсы</h3>
            <p className="text-muted-foreground">Выберите программу обучения по вашему уровню</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="hover-scale hover-glow overflow-hidden border-border/50 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Video" size={16} />
                      <span>{course.lessons} уроков</span>
                    </div>
                  </div>
                  <Button className="w-full hover-scale">
                    Начать курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading mb-4">Видеогайды и тактики</h3>
            <p className="text-muted-foreground">Практические уроки по механикам и приемам игры</p>
          </div>
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 mb-8">
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <Icon name="BookOpen" size={16} />
                Гайды
              </TabsTrigger>
              <TabsTrigger value="tactics" className="flex items-center gap-2">
                <Icon name="Crosshair" size={16} />
                Тактики
              </TabsTrigger>
            </TabsList>
            <TabsContent value="guides" className="space-y-4">
              {guides.map((guide, index) => (
                <Card 
                  key={index}
                  className="hover-scale hover-glow border-border/50 bg-card/50 backdrop-blur transition-all"
                >
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Play" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold font-heading mb-1">{guide.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="outline">{guide.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {guide.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {guide.views}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="hover-scale">
                      <Icon name="ChevronRight" size={20} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="tactics">
              <div className="grid md:grid-cols-2 gap-6">
                {maps.map((map, index) => (
                  <Card 
                    key={index}
                    className="hover-scale hover-glow border-border/50 bg-card/50 backdrop-blur"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-heading flex items-center gap-2">
                          <Icon name="Map" className="text-primary" size={24} />
                          {map.name}
                        </CardTitle>
                        <Badge variant="secondary">{map.difficulty}</Badge>
                      </div>
                      <CardDescription>
                        {map.tactics} тактических схем с видеоразборами
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full hover-scale">
                        Изучить тактики
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading mb-4">Последние статьи</h3>
            <p className="text-muted-foreground">Новости, обновления и полезные материалы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="hover-scale hover-glow border-border/50 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="font-heading text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="hover-scale p-0 h-auto">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Target" className="text-primary" size={28} />
            <span className="text-xl font-bold font-heading">CS2 Academy</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Профессиональное обучение Counter-Strike 2
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover-scale">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
