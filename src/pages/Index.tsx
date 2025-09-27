import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Product {
  id: string;
  name: string;
  weight: string;
  type: string;
  price: string;
  url: string;
  description: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Brazil Ethiopia',
    weight: '250 г',
    type: 'Эспрессо',
    price: '890 ₽',
    url: 'https://www.ozon.ru/product/kofe-v-zernah-brazil-ethiopia-coffeestate-dlya-espresso-braziliya-efiopiya-zernovoy-arabika-250-gr-1561378425/',
    description: 'Премиальная арабика для эспрессо'
  },
  {
    id: '2',
    name: 'Brazil Mogiana',
    weight: '1 кг',
    type: 'Эспрессо',
    price: '2,490 ₽',
    url: 'https://www.ozon.ru/product/kofe-v-zernah-brazil-mogiana-coffeestate-dlya-espresso-braziliya-modzhiana-zernovoy-arabika-100-1564484311/',
    description: 'Бразильская арабика с насыщенным вкусом'
  },
  {
    id: '3',
    name: 'Espresso Blend 4',
    weight: '1 кг',
    type: 'Эспрессо',
    price: '2,190 ₽',
    url: 'https://www.ozon.ru/product/kofe-v-zernah-espresso-blend-4-coffeestate-braziliya-uganda-50-50-arabika-robusta-zernovoy-upakovka-1564484325/',
    description: 'Сбалансированная смесь арабики и робусты'
  },
  {
    id: '4',
    name: 'Espresso Blend 5',
    weight: '1 кг',
    type: 'Эспрессо',
    price: '2,390 ₽',
    url: 'https://www.ozon.ru/product/kofe-v-zernah-espresso-blend-5-coffeestate-braziliya-nikaragua-uganda-100-arabika-zernovoy-1-kg-1564854973/',
    description: '100% арабика из трёх стран'
  },
  {
    id: '5',
    name: 'Brazil Santos FS',
    weight: '1 кг',
    type: 'Эспрессо',
    price: '2,290 ₽',
    url: 'https://www.ozon.ru/product/kofe-v-zernah-brazil-santos-fs-semi-washed-coffeestate-dlya-espresso-braziliya-zernovoy-1564484315/',
    description: 'Полумытая обработка для яркого вкуса'
  },
  {
    id: '6',
    name: 'Colombia Santander',
    weight: '250 г',
    type: 'Фильтр',
    price: '990 ₽',
    url: 'https://www.ozon.ru/product/kofe-v-zernah-colombia-santander-coffeestate-pod-filtr-kolumbiya-arabika-zernovoy-upakovka-250-gr-1564484320/',
    description: 'Колумбийская арабика для фильтр-кофе'
  },
  {
    id: '7',
    name: 'Brazil Mogiana',
    weight: '250 г',
    type: 'Фильтр',
    price: '790 ₽',
    url: 'https://www.ozon.ru/product/kofe-v-zernah-brazil-mogiana-coffeestate-pod-filtr-braziliya-modzhiana-zernovoy-arabika-250-gr-1564868885/',
    description: 'Идеально для капельного заваривания'
  }
];

const reviews = [
  {
    id: '1',
    name: 'Анна К.',
    rating: 5,
    text: 'Потрясающий кофе! Заказываю уже полгода, качество всегда на высоте.',
    verified: true
  },
  {
    id: '2',
    name: 'Михаил С.',
    rating: 5,
    text: 'Brazil Mogiana — мой фаворит для утреннего эспрессо. Рекомендую!',
    verified: true
  },
  {
    id: '3',
    name: 'Елена П.',
    rating: 4,
    text: 'Быстрая доставка через Ozon, упаковка отличная, кофе свежий.',
    verified: true
  }
];

const faqData = [
  {
    question: 'Какой вес упаковки?',
    answer: 'У нас есть упаковки 250 г и 1 кг. Для домашнего использования рекомендуем начать с 250 г, чтобы попробовать разные сорта.'
  },
  {
    question: 'Подходит ли для кофемашины?',
    answer: 'Да! Все наши сорта для эспрессо идеально подходят для автоматических и рожковых кофемашин. Помол не требуется — зёрна цельные.'
  },
  {
    question: 'Как осуществляется доставка?',
    answer: 'Доставка осуществляется через Ozon. Обычно 1-3 дня по Москве и МО, до 7 дней по России. Возможна доставка в пункты выдачи и курьером.'
  },
  {
    question: 'Есть ли гарантия качества?',
    answer: 'Конечно! Мы гарантируем свежесть и качество всех зёрен. Если кофе не понравился — полный возврат через Ozon без лишних вопросов.'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name="Star"
          size={16}
          className={star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.type === selectedCategory);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-dark via-coffee-medium to-primary min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-coffee-cream mb-6 animate-fade-in">
                Пробуй кофе
                <span className="block text-accent"> COFFEESTATE</span>
              </h1>
              <p className="text-lg md:text-xl text-coffee-cream/90 mb-8 font-body">
                Премиум-зёрна для дома. Свежая обжарка, доставка через Ozon, 
                гарантия качества.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg animate-scale-in"
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Купить на Ozon
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/b38e899c-5965-4cdc-8997-84b6c35c1113.jpg" 
                alt="Премиальный кофе COFFEESTATE" 
                className="w-full h-auto rounded-2xl shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-coffee-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Почему выбирают COFFEESTATE
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Coffee',
                title: 'Свежие зёрна',
                description: 'Обжарка не более 2 недель до отправки'
              },
              {
                icon: 'Truck',
                title: 'Доставка Ozon',
                description: 'Быстро и надёжно по всей России'
              },
              {
                icon: 'Award',
                title: 'Разные сорта',
                description: 'Для эспрессо и фильтр-кофе'
              },
              {
                icon: 'Shield',
                title: 'Гарантия возврата',
                description: '100% возврат, если не понравилось'
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-primary/70 font-body">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-8">
            Каталог кофе
          </h2>
          <p className="text-center text-primary/70 mb-12 font-body text-lg">
            Выберите идеальный кофе для вашего способа заваривания
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'Все сорта' },
              { key: 'Эспрессо', label: 'Эспрессо' },
              { key: 'Фильтр', label: 'Фильтр' }
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={selectedCategory === filter.key ? "default" : "outline"}
                onClick={() => setSelectedCategory(filter.key)}
                className="font-body"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant={product.type === 'Эспрессо' ? 'default' : 'secondary'} className="font-body">
                      {product.type}
                    </Badge>
                    <span className="text-sm text-primary/60 font-body">{product.weight}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">{product.name}</h3>
                  <p className="text-primary/70 text-sm mb-4 font-body">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent font-heading">{product.price}</span>
                    <Button asChild className="bg-accent hover:bg-accent/90 font-body">
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        Купить
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-coffee-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Отзывы покупателей
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-primary font-body">{review.name}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs font-body">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Проверен
                        </Badge>
                      )}
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-primary/80 font-body">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-primary/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading text-lg text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary/80 font-body">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-coffee-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">COFFEESTATE</h3>
              <p className="text-coffee-cream/80 mb-4 font-body">
                Премиальный кофе с доставкой по всей России через Ozon
              </p>
              <Button asChild variant="secondary" className="font-body">
                <a href="https://www.ozon.ru/seller/1363414/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Store" size={16} className="mr-2" />
                  Все товары на Ozon
                </a>
              </Button>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-coffee-cream/80 font-body">
                <p>Email: info@coffeestate.ru</p>
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Время работы: Пн-Пт 9:00-18:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                {[
                  { icon: 'Instagram', url: '#' },
                  { icon: 'Facebook', url: '#' },
                  { icon: 'MessageCircle', url: '#' }
                ].map((social) => (
                  <a 
                    key={social.icon}
                    href={social.url}
                    className="w-10 h-10 bg-coffee-cream/10 rounded-full flex items-center justify-center hover:bg-coffee-cream/20 transition-colors"
                  >
                    <Icon name={social.icon as any} size={20} className="text-coffee-cream" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-coffee-cream/20 pt-8 text-center text-coffee-cream/60 font-body">
            <p>© 2024 COFFEESTATE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}