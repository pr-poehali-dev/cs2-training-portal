import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileModal = ({ open, onOpenChange }: ProfileModalProps) => {
  const playerStats = {
    name: 'ProGamer2024',
    avatar: 'https://cdn.poehali.dev/projects/ed481f78-94e9-4ff3-a8f8-984d085b6174/files/456211ce-abc3-480b-8c0d-f92e67ca5c6b.jpg',
    rank: 'Master Guardian II',
    subscription: 'Премиум',
    hoursLearned: 24,
    overallProgress: 68,
    startDate: '15 окт 2024'
  };

  const courseProgress = [
    {
      name: 'Основы стрельбы',
      progress: 100,
      lessonsCompleted: 12,
      totalLessons: 12,
      category: 'Начальный'
    },
    {
      name: 'Spray control AK-47',
      progress: 75,
      lessonsCompleted: 9,
      totalLessons: 12,
      category: 'Средний'
    },
    {
      name: 'Тактики на Mirage',
      progress: 45,
      lessonsCompleted: 5,
      totalLessons: 11,
      category: 'Средний'
    },
    {
      name: 'Командная игра',
      progress: 20,
      lessonsCompleted: 2,
      totalLessons: 10,
      category: 'Продвинутый'
    }
  ];

  const skills = [
    { name: 'Aim', level: 85, maxLevel: 100 },
    { name: 'Spray Control', level: 72, maxLevel: 100 },
    { name: 'Позиционирование', level: 68, maxLevel: 100 },
    { name: 'Экономика', level: 90, maxLevel: 100 },
    { name: 'Тактика', level: 55, maxLevel: 100 },
    { name: 'Работа в команде', level: 45, maxLevel: 100 }
  ];

  const achievements = [
    { name: 'Первый курс', icon: 'Award', unlocked: true },
    { name: '50 уроков', icon: 'Target', unlocked: true },
    { name: 'Мастер AK-47', icon: 'Zap', unlocked: true },
    { name: '7 дней подряд', icon: 'Flame', unlocked: false },
    { name: 'Все курсы', icon: 'Trophy', unlocked: false },
    { name: 'Про игрок', icon: 'Crown', unlocked: false }
  ];

  const recentActivity = [
    { action: 'Завершил урок "Контроль отдачи M4A4"', time: '2 часа назад' },
    { action: 'Получил достижение "Мастер AK-47"', time: '1 день назад' },
    { action: 'Начал курс "Тактики на Mirage"', time: '3 дня назад' },
    { action: 'Продлил подписку Премиум', time: '1 неделя назад' }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'text-green-500';
    if (level >= 60) return 'text-yellow-500';
    return 'text-orange-500';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Профиль игрока</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-6">
                <img 
                  src={playerStats.avatar} 
                  alt="Avatar"
                  className="w-24 h-24 rounded-lg object-cover border-2 border-primary"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold font-heading">{playerStats.name}</h3>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {playerStats.subscription}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Trophy" className="text-primary" size={18} />
                    <span className="text-lg font-medium">{playerStats.rank}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Часов обучения</p>
                      <p className="text-xl font-bold text-primary">{playerStats.hoursLearned}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Общий прогресс</p>
                      <p className="text-xl font-bold text-primary">{playerStats.overallProgress}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Начало обучения</p>
                      <p className="text-xl font-bold text-primary">{playerStats.startDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="progress" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="progress" className="flex items-center gap-2">
                <Icon name="TrendingUp" size={16} />
                Прогресс
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Icon name="Target" size={16} />
                Навыки
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Icon name="Award" size={16} />
                Достижения
              </TabsTrigger>
              <TabsTrigger value="activity" className="flex items-center gap-2">
                <Icon name="Activity" size={16} />
                Активность
              </TabsTrigger>
            </TabsList>

            <TabsContent value="progress" className="space-y-4 mt-4">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="BookOpen" className="text-primary" size={20} />
                    Прогресс по курсам
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseProgress.map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{course.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {course.lessonsCompleted} из {course.totalLessons} уроков
                          </p>
                        </div>
                        <Badge variant="outline">{course.category}</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={course.progress} className="flex-1" />
                        <span className="text-sm font-medium text-primary w-12 text-right">
                          {course.progress}%
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="space-y-4 mt-4">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="Zap" className="text-primary" size={20} />
                    Оценка навыков
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{skill.name}</p>
                        <span className={`text-sm font-bold ${getSkillColor(skill.level)}`}>
                          {skill.level}/{skill.maxLevel}
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="mt-4">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="Trophy" className="text-primary" size={20} />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border text-center transition-all ${
                          achievement.unlocked
                            ? 'border-primary bg-primary/10 hover-scale'
                            : 'border-border/50 bg-muted/20 opacity-50 grayscale'
                        }`}
                      >
                        <Icon 
                          name={achievement.icon as any} 
                          className={achievement.unlocked ? 'text-primary mx-auto mb-2' : 'text-muted-foreground mx-auto mb-2'} 
                          size={32} 
                        />
                        <p className="text-sm font-medium">{achievement.name}</p>
                        {!achievement.unlocked && (
                          <Icon name="Lock" className="text-muted-foreground mx-auto mt-2" size={16} />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="mt-4">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" size={20} />
                    Последняя активность
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b border-border/50 last:border-0">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
