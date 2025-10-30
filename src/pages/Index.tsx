import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ProfileModal from '@/components/ProfileModal';
import WalletModal from '@/components/WalletModal';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const handleSteamLogin = () => {
    setIsLoggedIn(true);
  };

  const subscriptions = [
    {
      id: 1,
      title: 'Базовая подписка',
      level: 'Начальный',
      monthlyPrice: 490,
      description: 'Доступ ко всем курсам для новичков и основным гайдам',
      image: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/456211ce-abc3-480b-8c0d-f92e67ca5c6b.jpg',
      rank: 'Silver - Gold Nova',
      features: [
        'Все курсы начального уровня',
        'Базовые видеогайды',
        'Доступ к сообществу',
        'Новые материалы каждую неделю'
      ],
      popular: false
    },
    {
      id: 2,
      title: 'Премиум подписка',
      level: 'Средний',
      monthlyPrice: 890,
      description: 'Полный доступ к продвинутым курсам и персональным разборам',
      image: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/028cb05a-6008-4487-be9d-1617dd3388f0.jpg',
      rank: 'Master Guardian - Legendary Eagle',
      features: [
        'Все курсы базового и среднего уровня',
        'Продвинутые тактики',
        'Разбор ваших игр (1 в месяц)',
        'Приоритетная поддержка',
        'Эксклюзивные вебинары'
      ],
      popular: true
    },
    {
      id: 3,
      title: 'Про подписка',
      level: 'Продвинутый',
      monthlyPrice: 1490,
      description: 'Всё включено + индивидуальное менторство от про-игроков',
      image: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/bafe94f0-51f7-4f29-8827-4e0dec8ea0d7.jpg',
      rank: 'Supreme - Global Elite',
      features: [
        'Доступ ко всем курсам и материалам',
        'Личный тренер-наставник',
        'Разбор игр без ограничений',
        'Участие в закрытых турнирах',
        'Индивидуальный план развития',
        'Прямой чат с про-игроками'
      ],
      popular: false
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

  const upcomingTournaments = [
    {
      name: 'IEM Katowice 2025',
      date: '5-16 февраля 2025',
      prize: '$1,000,000',
      teams: 24,
      status: 'Скоро',
      location: 'Катовице, Польша'
    },
    {
      name: 'ESL Pro League S20',
      date: '18-30 ноября 2024',
      prize: '$850,000',
      teams: 32,
      status: 'Идёт',
      location: 'Мальта'
    },
    {
      name: 'BLAST Premier Spring 2025',
      date: '22-26 января 2025',
      prize: '$425,000',
      teams: 8,
      status: 'Скоро',
      location: 'Копенгаген, Дания'
    }
  ];

  const pastTournaments = [
    {
      name: 'BLAST Premier Fall Final 2024',
      date: '27-30 октября 2024',
      winner: 'Team Vitality',
      prize: '$200,000',
      flag: '🇫🇷'
    },
    {
      name: 'IEM Rio Major 2024',
      date: '11-23 октября 2024',
      winner: 'FaZe Clan',
      prize: '$500,000',
      flag: '🇺🇸'
    },
    {
      name: 'PGL Major Copenhagen 2024',
      date: '17-31 марта 2024',
      winner: 'Natus Vincere',
      prize: '$1,000,000',
      flag: '🇺🇦'
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
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setShowWallet(true)}
                  className="hover-scale"
                  variant="outline"
                >
                  <Icon name="Wallet" className="mr-2" size={18} />
                  1250 ₽
                </Button>
                <Button 
                  onClick={() => setShowProfile(true)}
                  className="hover-scale hover-glow"
                  variant="outline"
                >
                  <Icon name="User" className="mr-2" size={18} />
                  ProGamer2024
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleSteamLogin}
                className="hover-scale hover-glow bg-gradient-to-r from-[#1b2838] to-[#2a475e] text-white border-0"
              >
                <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                </svg>
                Войти через Steam
              </Button>
            )}
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
            <h3 className="text-3xl font-bold font-heading mb-4">Подписки</h3>
            <p className="text-muted-foreground">Выберите тариф в зависимости от вашего уровня игры. Отмена в любое время.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {subscriptions.map((sub, index) => (
              <Card 
                key={sub.id} 
                className={`hover-scale hover-glow overflow-hidden bg-card/50 backdrop-blur relative ${
                  sub.popular ? 'border-2 border-primary shadow-lg shadow-primary/20' : 'border-border/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {sub.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                      ⭐ Популярный выбор
                    </Badge>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={sub.image} 
                    alt={sub.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {sub.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{sub.title}</CardTitle>
                  <div className="flex items-baseline gap-2 my-3">
                    <span className="text-4xl font-bold text-primary">{sub.monthlyPrice} ₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                  <CardDescription>{sub.description}</CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Icon name="Trophy" className="text-secondary" size={16} />
                    <span className="text-sm font-medium text-secondary">{sub.rank}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {sub.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full hover-scale hover-glow ${
                    sub.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''
                  }`}>
                    <Icon name="Sparkles" className="mr-2" size={16} />
                    Подписаться
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Отмена в любой момент
                  </p>
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

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading mb-4">🏆 Турниры CS2</h3>
            <p className="text-muted-foreground">Следите за профессиональными турнирами и учитесь у лучших</p>
          </div>
          
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 mb-8">
              <TabsTrigger value="upcoming" className="flex items-center gap-2">
                <Icon name="CalendarClock" size={16} />
                Будущие
              </TabsTrigger>
              <TabsTrigger value="past" className="flex items-center gap-2">
                <Icon name="Trophy" size={16} />
                Прошедшие
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingTournaments.map((tournament, index) => (
                <Card 
                  key={index}
                  className="hover-scale hover-glow border-border/50 bg-card/50 backdrop-blur"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold font-heading">{tournament.name}</h4>
                          <Badge className={
                            tournament.status === 'Идёт' 
                              ? 'bg-green-500/20 text-green-500 border-green-500/50' 
                              : 'bg-primary/20 text-primary border-primary/50'
                          }>
                            {tournament.status}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Calendar" size={16} />
                            <span>{tournament.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="MapPin" size={16} />
                            <span>{tournament.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="DollarSign" size={16} />
                            <span className="font-semibold text-primary">{tournament.prize}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Users" size={16} />
                            <span>{tournament.teams} команд</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="hover-scale">
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              {pastTournaments.map((tournament, index) => (
                <Card 
                  key={index}
                  className="hover-scale hover-glow border-border/50 bg-card/50 backdrop-blur"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold font-heading mb-2">{tournament.name}</h4>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Calendar" size={16} />
                            <span>{tournament.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Trophy" className="text-primary" size={16} />
                            <span className="font-semibold">{tournament.flag} {tournament.winner}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="DollarSign" size={16} />
                            <span className="font-semibold text-primary">{tournament.prize}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="hover-scale">
                        <Icon name="PlayCircle" className="mr-2" size={16} />
                        Реплей
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

      <ProfileModal open={showProfile} onOpenChange={setShowProfile} />
      <WalletModal open={showWallet} onOpenChange={setShowWallet} />

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