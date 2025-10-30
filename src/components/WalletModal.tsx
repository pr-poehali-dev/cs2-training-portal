import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface WalletModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletModal = ({ open, onOpenChange }: WalletModalProps) => {
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const quickAmounts = [500, 1000, 2000, 5000];
  const balance = 1250;

  const paymentMethods = [
    { name: 'Банковская карта', icon: 'CreditCard', commission: '0%' },
    { name: 'СБП', icon: 'Smartphone', commission: '0%' },
    { name: 'ЮMoney', icon: 'Wallet', commission: '2%' },
    { name: 'QIWI', icon: 'Wallet', commission: '3%' }
  ];

  const handleQuickAmount = (value: number) => {
    setSelectedAmount(value);
    setAmount(value.toString());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading flex items-center gap-2">
            <Icon name="Wallet" className="text-primary" size={24} />
            Пополнение кошелька Steam
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Текущий баланс</p>
                  <p className="text-3xl font-bold text-primary">{balance} ₽</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <label className="text-sm font-medium mb-2 block">Сумма пополнения</label>
            <Input
              type="number"
              placeholder="Введите сумму"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="text-lg h-12"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Быстрый выбор суммы</p>
            <div className="grid grid-cols-4 gap-2">
              {quickAmounts.map((value) => (
                <Button
                  key={value}
                  variant={selectedAmount === value ? 'default' : 'outline'}
                  onClick={() => handleQuickAmount(value)}
                  className="hover-scale"
                >
                  {value} ₽
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Способ оплаты</p>
            <div className="space-y-2">
              {paymentMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 cursor-pointer transition-all hover-scale"
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon name={method.icon as any} className="text-primary" size={24} />
                      <span className="font-medium">{method.name}</span>
                    </div>
                    <Badge variant="outline">{method.commission}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Комиссия</span>
              <span className="font-medium">0 ₽</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-medium text-lg">Итого к оплате</span>
              <span className="font-bold text-2xl text-primary">{amount || 0} ₽</span>
            </div>
            <Button 
              className="w-full hover-scale hover-glow h-12 text-base"
              disabled={!amount || parseFloat(amount) < 100}
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Пополнить кошелек
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-3">
              Минимальная сумма пополнения — 100 ₽
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
