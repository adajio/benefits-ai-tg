import { Section, Cell, Button, List, Avatar, Text } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/components/Page.tsx';

export const ProfilePage: FC = () => {
  const navigate = useNavigate();
  
  // Mock data for saved discounts
  const savedDiscounts = [
    {
      id: 1,
      title: 'Скидка 30% на смартфоны',
      store: 'МВидео',
      discount: '30%',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      title: 'Скидка на кухонную технику',
      store: 'Эльдорадо',
      discount: '25%',
      image: 'https://via.placeholder.com/100'
    }
  ];

  const handleDiscountClick = (id: number) => {
    navigate(`/discount/${id}`);
  };

  return (
    <Page back>
      <List>
        <Section style={{ padding: '16px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', marginBottom: '16px' }}>
            <Avatar
              size={48}
              style={{ marginRight: '16px' }}
            >
              Т
            </Avatar>
            <div>
              <Text weight="1" style={{ fontSize: '18px', marginBottom: '4px' }}>
                Пользователь Telegram
              </Text>
              <Text weight="3" style={{ color: 'var(--tg-theme-hint-color)' }}>
                @telegram_user
              </Text>
            </div>
          </div>
        </Section>

        <Section header="Настройки">
          <Cell before={<div style={{ fontSize: '20px' }}>🔔</div>}>
            Уведомления
          </Cell>
          <Cell before={<div style={{ fontSize: '20px' }}>🗺️</div>}>
            Местоположение
          </Cell>
          <Cell before={<div style={{ fontSize: '20px' }}>💰</div>}>
            Избранные магазины
          </Cell>
          <Cell before={<div style={{ fontSize: '20px' }}>⚙️</div>}>
            Настройки приложения
          </Cell>
        </Section>

        <Section header="Сохраненные скидки">
          {savedDiscounts.length > 0 ? (
            savedDiscounts.map(discount => (
              <Cell
                key={discount.id}
                before={<Avatar size={48} src={discount.image} />}
                subtitle={`${discount.store} • ${discount.discount}`}
                onClick={() => handleDiscountClick(discount.id)}
              >
                {discount.title}
              </Cell>
            ))
          ) : (
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <Text weight="3" style={{ color: 'var(--tg-theme-hint-color)' }}>
                У вас нет сохраненных скидок
              </Text>
            </div>
          )}
        </Section>

        <Section>
          <div style={{ padding: '16px' }}>
            <Button stretched onClick={() => navigate('/')}>
              Перейти к каталогу скидок
            </Button>
          </div>
        </Section>

        <Section>
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <Text weight="3" style={{ color: 'var(--tg-theme-hint-color)' }}>
              Версия приложения: 1.0.0
            </Text>
          </div>
        </Section>
      </List>
    </Page>
  );
}; 