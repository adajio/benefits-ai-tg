import { Section, Cell, Button, List, Avatar, Text } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Page } from '@/components/Page.tsx';

export const CategoryPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // This would come from a real API in a production app
  const categories = [
    { id: 1, name: 'Электроника', icon: '📱' },
    { id: 2, name: 'Бытовая техника', icon: '🔌' },
    { id: 3, name: 'Одежда', icon: '👕' },
    { id: 4, name: 'Продукты', icon: '🍎' },
    { id: 5, name: 'Рестораны', icon: '🍔' },
    { id: 6, name: 'Красота', icon: '💄' }
  ];
  
  const category = categories.find(cat => cat.id === Number(id)) || categories[0];
  
  // Mock data for discounts in this category
  const discountsInCategory = [
    {
      id: 1,
      title: 'Скидка 30% на смартфоны',
      store: 'МВидео',
      discount: '30%',
      category: category.name,
      image: 'https://via.placeholder.com/100',
      distance: '1.2 км'
    },
    {
      id: 2,
      title: 'Скидка на наушники',
      store: 'DNS',
      discount: '25%',
      category: category.name,
      image: 'https://via.placeholder.com/100',
      distance: '2.5 км'
    },
    {
      id: 3,
      title: 'Распродажа планшетов',
      store: 'Эльдорадо',
      discount: '40%',
      category: category.name,
      image: 'https://via.placeholder.com/100',
      distance: '0.8 км'
    },
    {
      id: 4,
      title: 'Акция на умные часы',
      store: 'М.Видео',
      discount: '20%',
      category: category.name,
      image: 'https://via.placeholder.com/100',
      distance: '3.1 км'
    },
    {
      id: 5,
      title: 'Скидка на аксессуары',
      store: 'Связной',
      discount: '50%',
      category: category.name,
      image: 'https://via.placeholder.com/100',
      distance: '1.7 км'
    }
  ];

  const handleDiscountClick = (id: number) => {
    navigate(`/discount/${id}`);
  };

  const renderFilters = () => (
    <div style={{ 
      display: 'flex', 
      overflowX: 'auto', 
      gap: '8px', 
      padding: '12px', 
      marginBottom: '12px' 
    }}>
      <Button size="s" mode="outline" style={{ whiteSpace: 'nowrap' }}>Все скидки</Button>
      <Button size="s" mode="outline" style={{ whiteSpace: 'nowrap' }}>Рядом</Button>
      <Button size="s" mode="outline" style={{ whiteSpace: 'nowrap' }}>Популярные</Button>
      <Button size="s" mode="outline" style={{ whiteSpace: 'nowrap' }}>Новые</Button>
      <Button size="s" mode="outline" style={{ whiteSpace: 'nowrap' }}>Заканчиваются</Button>
    </div>
  );

  return (
    <Page back={true}>
      <List>
        <Section 
          header={`${category.icon} ${category.name} (${discountsInCategory.length})`}
          children={renderFilters()}
        />
        
        <Section>
          {discountsInCategory.map(discount => (
            <Cell
              key={discount.id}
              before={
                <Avatar size={48} src={discount.image} />
              }
              subtitle={`${discount.store} • ${discount.discount}`}
              after={
                <Text style={{ 
                  color: 'var(--tg-theme-button-color)', 
                  fontWeight: 'bold' 
                }}>
                  {discount.distance}
                </Text>
              }
              onClick={() => handleDiscountClick(discount.id)}
            >
              {discount.title}
            </Cell>
          ))}
        </Section>
        
        <Section>
          <div style={{ textAlign: 'center', padding: '12px' }}>
            <Button size="m" mode="outline">Показать на карте</Button>
          </div>
        </Section>
      </List>
    </Page>
  );
}; 