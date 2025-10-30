import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ProConfigsSection = () => {
  const proPlayers = [
    {
      name: 's1mple',
      realName: 'Oleksandr Kostyliev',
      team: 'Falcons',
      role: 'AWPer',
      country: '🇺🇦',
      sensitivity: 3.09,
      dpi: 400,
      edpi: 1236,
      zoom_sensitivity: 1.0,
      resolution: '1280x960',
      crosshair: 'CSGO-PjMTO-5b8YS-2PKQE-ztVDG-TBO8D',
      viewmodel: 'Desktop',
      avatar: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/456211ce-abc3-480b-8c0d-f92e67ca5c6b.jpg'
    },
    {
      name: 'ZywOo',
      realName: 'Mathieu Herbaut',
      team: 'Team Vitality',
      role: 'AWPer/Rifler',
      country: '🇫🇷',
      sensitivity: 2.0,
      dpi: 400,
      edpi: 800,
      zoom_sensitivity: 1.0,
      resolution: '1280x960',
      crosshair: 'CSGO-wKVTO-ePuOF-F8rJK-T6LmJ-4xmNA',
      viewmodel: 'Couch',
      avatar: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/028cb05a-6008-4487-be9d-1617dd3388f0.jpg'
    },
    {
      name: 'NiKo',
      realName: 'Nikola Kovač',
      team: 'G2 Esports',
      role: 'Rifler',
      country: '🇧🇦',
      sensitivity: 1.35,
      dpi: 400,
      edpi: 540,
      zoom_sensitivity: 1.0,
      resolution: '1280x960',
      crosshair: 'CSGO-TKz7J-EriOY-P8OBE-uzQVT-SJ7sB',
      viewmodel: 'Desktop',
      avatar: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/bafe94f0-51f7-4f29-8827-4e0dec8ea0d7.jpg'
    },
    {
      name: 'donk',
      realName: 'Danil Kryshkovets',
      team: 'Team Spirit',
      role: 'Rifler',
      country: '🇷🇺',
      sensitivity: 1.4,
      dpi: 800,
      edpi: 1120,
      zoom_sensitivity: 1.0,
      resolution: '1920x1080',
      crosshair: 'CSGO-6O7Xb-PsSGk-iqNn5-ijTjZ-7JWkP',
      viewmodel: 'Desktop',
      avatar: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/456211ce-abc3-480b-8c0d-f92e67ca5c6b.jpg'
    },
    {
      name: 'm0NESY',
      realName: 'Ilya Osipov',
      team: 'G2 Esports',
      role: 'AWPer',
      country: '🇷🇺',
      sensitivity: 1.5,
      dpi: 800,
      edpi: 1200,
      zoom_sensitivity: 1.0,
      resolution: '1280x960',
      crosshair: 'CSGO-YPw7h-RQjUc-jKmOG-Qp6wN-8YsXF',
      viewmodel: 'Classic',
      avatar: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/028cb05a-6008-4487-be9d-1617dd3388f0.jpg'
    },
    {
      name: 'dev1ce',
      realName: 'Nicolai Reedtz',
      team: 'Astralis',
      role: 'AWPer',
      country: '🇩🇰',
      sensitivity: 1.9,
      dpi: 400,
      edpi: 760,
      zoom_sensitivity: 1.0,
      resolution: '1280x960',
      crosshair: 'CSGO-bUM8J-Y7SiP-3j2QZ-xVnDP-mYNbE',
      viewmodel: 'Desktop',
      avatar: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/bafe94f0-51f7-4f29-8827-4e0dec8ea0d7.jpg'
    }
  ];

  const configCategories = [
    {
      title: 'Настройки мыши',
      icon: 'Mouse',
      items: [
        { label: 'DPI', key: 'dpi' },
        { label: 'Sensitivity', key: 'sensitivity' },
        { label: 'eDPI', key: 'edpi' },
        { label: 'Zoom Sens', key: 'zoom_sensitivity' }
      ]
    },
    {
      title: 'Видео',
      icon: 'Monitor',
      items: [
        { label: 'Разрешение', key: 'resolution' },
        { label: 'Viewmodel', key: 'viewmodel' }
      ]
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="py-16 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold font-heading mb-4">⚙️ Конфиги профессионалов</h3>
          <p className="text-muted-foreground">Настройки лучших игроков мира — скопируйте и используйте</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {proPlayers.map((player, index) => (
            <Card 
              key={index}
              className="hover-scale hover-glow border-border/50 bg-card/50 backdrop-blur overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <img 
                    src={player.avatar} 
                    alt={player.name}
                    className="w-20 h-20 rounded-lg object-cover border-2 border-primary"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="font-heading text-2xl">{player.name}</CardTitle>
                      <span className="text-xl">{player.country}</span>
                    </div>
                    <p className="text-muted-foreground mb-1">{player.realName}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {player.team}
                      </Badge>
                      <Badge className="bg-primary/20 text-primary border-primary/50 text-xs">
                        {player.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="mouse" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="mouse" className="text-xs">
                      <Icon name="Mouse" size={14} className="mr-1" />
                      Мышь
                    </TabsTrigger>
                    <TabsTrigger value="video" className="text-xs">
                      <Icon name="Monitor" size={14} className="mr-1" />
                      Видео
                    </TabsTrigger>
                    <TabsTrigger value="crosshair" className="text-xs">
                      <Icon name="Crosshair" size={14} className="mr-1" />
                      Прицел
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="mouse" className="space-y-3 mt-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-muted/30">
                        <p className="text-xs text-muted-foreground mb-1">DPI</p>
                        <p className="text-lg font-bold text-primary">{player.dpi}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30">
                        <p className="text-xs text-muted-foreground mb-1">Sensitivity</p>
                        <p className="text-lg font-bold text-primary">{player.sensitivity}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30">
                        <p className="text-xs text-muted-foreground mb-1">eDPI</p>
                        <p className="text-lg font-bold text-primary">{player.edpi}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30">
                        <p className="text-xs text-muted-foreground mb-1">Zoom Sens</p>
                        <p className="text-lg font-bold text-primary">{player.zoom_sensitivity}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="video" className="space-y-3 mt-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-muted/30">
                        <p className="text-xs text-muted-foreground mb-1">Разрешение</p>
                        <p className="text-lg font-bold text-primary">{player.resolution}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30">
                        <p className="text-xs text-muted-foreground mb-1">Viewmodel</p>
                        <p className="text-lg font-bold text-primary">{player.viewmodel}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="crosshair" className="mt-4">
                    <div className="p-4 rounded-lg bg-muted/30 mb-3">
                      <p className="text-xs text-muted-foreground mb-2">Код прицела</p>
                      <code className="text-xs font-mono break-all text-primary">
                        {player.crosshair}
                      </code>
                    </div>
                    <Button 
                      className="w-full hover-scale"
                      onClick={() => copyToClipboard(player.crosshair)}
                    >
                      <Icon name="Copy" className="mr-2" size={16} />
                      Скопировать прицел
                    </Button>
                  </TabsContent>
                </Tabs>

                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="outline" className="w-full hover-scale">
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать полный конфиг
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 inline-block">
            <CardContent className="p-6">
              <Icon name="Lightbulb" className="text-primary mx-auto mb-3" size={32} />
              <h4 className="font-bold font-heading mb-2">💡 Совет от про</h4>
              <p className="text-sm text-muted-foreground max-w-md">
                Не копируйте настройки слепо — экспериментируйте! Найдите комфортную чувствительность для себя. 
                Профи используют низкий eDPI (400-1200) для точности.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProConfigsSection;
