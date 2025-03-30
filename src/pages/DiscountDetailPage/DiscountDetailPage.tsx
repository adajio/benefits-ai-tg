import { Section, Cell, Button, List, Avatar, Text } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/components/Page.tsx';

export const DiscountDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, this would be fetched from an API based on the ID
  const discount = {
    id: Number(id),
    title: 'Скидка 30% на смартфоны',
    store: 'МВидео',
    discount: '30%',
    category: 'Электроника',
    originalPrice: 29999,
    discountedPrice: 20999,
    image: 'https://via.placeholder.com/400',
    description: 'Специальное предложение на все смартфоны в сети магазинов МВидео. Скидка действует при оплате картой. Количество товаров ограничено.',
    validUntil: '30 августа 2023',
    address: 'Москва, ул. Тверская, 25',
    coordinates: {
      lat: 55.7558,
      lng: 37.6173
    }
  };

  return (
    <Page back>
      <List>
        <Section>
          <div style={{ position: 'relative' }}>
            <img 
              src={discount.image} 
              alt={discount.title} 
              style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
            />
            <span style={{ 
              position: 'absolute', 
              top: '16px', 
              right: '16px',
              background: '#FF3B30',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              {discount.discount}
            </span>
          </div>
          
          <Text weight="1" style={{ fontSize: '22px', marginBottom: '8px' }}>{discount.title}</Text>
          <Text weight="3" style={{ color: 'var(--tg-theme-hint-color)', marginBottom: '16px' }}>{discount.store} • {discount.category}</Text>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '20px',
            background: 'var(--tg-theme-secondary-bg-color)',
            padding: '12px',
            borderRadius: '8px'
          }}>
            <div style={{ marginRight: '16px' }}>
              <Text weight="3" style={{ marginBottom: '4px' }}>Цена без скидки</Text>
              <Text weight="1" style={{ 
                textDecoration: 'line-through', 
                color: 'var(--tg-theme-hint-color)'
              }}>
                {discount.originalPrice} ₽
              </Text>
            </div>
            <div>
              <Text weight="3" style={{ marginBottom: '4px' }}>Цена со скидкой</Text>
              <Text weight="1" style={{ 
                color: '#FF3B30', 
                fontSize: '18px' 
              }}>
                {discount.discountedPrice} ₽
              </Text>
            </div>
          </div>
          
          <Text weight="1" style={{ marginBottom: '8px' }}>Описание</Text>
          <Text weight="3" style={{ marginBottom: '16px' }}>{discount.description}</Text>
          
          <Text weight="1" style={{ marginBottom: '8px' }}>Срок действия</Text>
          <Text weight="3" style={{ marginBottom: '16px' }}>{discount.validUntil}</Text>
          
          <Text weight="1" style={{ marginBottom: '8px' }}>Адрес магазина</Text>
          <Text weight="3" style={{ marginBottom: '16px' }}>{discount.address}</Text>
          
          <div style={{ 
            height: '200px', 
            background: '#E9E9E9', 
            borderRadius: '12px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <Text weight="3">Здесь будет карта</Text>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <Button style={{ flex: 1 }} stretched mode="outline">
              Добавить в избранное
            </Button>
            <Button style={{ flex: 1 }} stretched>
              Поделиться
            </Button>
          </div>
        </Section>
        
        <Section header="Похожие скидки">
          <Cell
            before={<Avatar size={48} src="https://via.placeholder.com/100" />}
            subtitle="Эльдорадо • 25%"
          >
            Скидка на кухонную технику
          </Cell>
          <Cell
            before={<Avatar size={48} src="https://via.placeholder.com/100" />}
            subtitle="DNS • 20%"
          >
            Скидка на ноутбуки
          </Cell>
        </Section>
      </List>
    </Page>
  );
}; 