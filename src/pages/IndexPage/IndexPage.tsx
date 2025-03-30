import { Section, Cell, Button, List, Avatar, Text } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // This would be fetched from the API in a real app
  const featuredDiscounts = [
    {
      id: 1,
      title: 'Скидка 30% на смартфоны',
      store: 'МВидео',
      discount: '30%',
      category: 'Электроника',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      title: 'Скидка на кухонную технику',
      store: 'Эльдорадо',
      discount: '25%',
      category: 'Бытовая техника',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      title: 'Распродажа одежды',
      store: 'ZARA',
      discount: '50%',
      category: 'Одежда',
      image: 'https://via.placeholder.com/100'
    }
  ];

  // This would be fetched from the API in a real app
  const categories = [
    { id: 1, name: 'Электроника', icon: '📱' },
    { id: 2, name: 'Бытовая техника', icon: '🔌' },
    { id: 3, name: 'Одежда', icon: '👕' },
    { id: 4, name: 'Продукты', icon: '🍎' },
    { id: 5, name: 'Рестораны', icon: '🍔' },
    { id: 6, name: 'Красота', icon: '💄' }
  ];

  const handleDiscountClick = (id: number) => {
    navigate(`/discount/${id}`);
  };

  const handleCategoryClick = (id: number) => {
    navigate(`/category/${id}`);
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <Page back={false}>
      <List>
        <Section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <Text weight="1" style={{ fontSize: '20px' }}>BenefitsAI</Text>
            <Button mode="outline" onClick={handleProfileClick}>
              <span style={{ fontSize: '20px' }}>👤</span>
            </Button>
          </div>
        </Section>
        
        <Section header="Поиск">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск скидок и магазинов"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid var(--tg-theme-hint-color)',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
        </Section>
        
        <Section header="Лучшие предложения">
          <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', paddingBottom: '8px', paddingTop: '12px' }}>
            {featuredDiscounts.map(discount => (
              <div 
                key={discount.id} 
                style={{ 
                  minWidth: '200px', 
                  maxWidth: '200px',
                  border: '1px solid var(--tg-theme-hint-color)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => handleDiscountClick(discount.id)}
              >
                <div style={{ position: 'relative' }}>
                  <img 
                    src={discount.image} 
                    alt={discount.title} 
                    style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                  />
                  <span style={{ 
                    position: 'absolute', 
                    top: '8px', 
                    right: '8px',
                    background: '#FF3B30',
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}>
                    {discount.discount}
                  </span>
                </div>
                <div style={{ padding: '12px' }}>
                  <Text weight="1" style={{ marginBottom: '4px' }}>{discount.title}</Text>
                  <Text weight="3" style={{ color: 'var(--tg-theme-hint-color)', marginBottom: '4px' }}>{discount.store}</Text>
                  <Text weight="3">{discount.category}</Text>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Categories */}
        <Section header="Категории">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', padding: '12px' }}>
            {categories.map(category => (
              <Button
                key={category.id}
                stretched
                mode="outline"
                style={{ height: '64px' }}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                  <span style={{ fontSize: '24px', marginBottom: '4px' }}>{category.icon}</span>
                  <Text weight="3" style={{ textAlign: 'center' }}>{category.name}</Text>
                </div>
              </Button>
            ))}
          </div>
        </Section>

        {/* Nearby Offers */}
        <Section header="Скидки рядом">
          {featuredDiscounts.map(discount => (
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
                  1.2 км
                </Text>
              }
              onClick={() => handleDiscountClick(discount.id)}
            >
              {discount.title}
            </Cell>
          ))}
          <div style={{ textAlign: 'center', padding: '12px' }}>
            <Button size="m" mode="outline">Показать на карте</Button>
          </div>
        </Section>
      </List>
    </Page>
  );
};
