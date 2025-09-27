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
          className={star <= rating ? "text-coffee-gold fill-current" : "text-gray-300"}
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-heading font-bold text-2xl text-primary">COFFEESTATE</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="font-body text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="font-body text-gray-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#reviews" className="font-body text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="font-body text-gray-600 hover:text-primary transition-colors">FAQ</a>
              <Button className="bg-accent hover:bg-accent/90 font-body">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Ozon
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-coffee-cream via-white to-coffee-light/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="font-body text-sm px-4 py-2">Премиум качество</Badge>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-tight">
                  Кофе
                  <span className="block text-transparent bg-gradient-to-r from-coffee-medium via-coffee-gold to-accent bg-clip-text">
                    COFFEESTATE
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-body leading-relaxed max-w-lg">
                  Откройте для себя мир премиального кофе. Свежеобжаренные зёрна высшего качества с доставкой через Ozon.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg font-body shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Coffee" className="mr-2" size={20} />
                  Выбрать кофе
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg font-body transition-all duration-300"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Как выбрать
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">50+</div>
                  <div className="font-body text-sm text-gray-500">Сортов кофе</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">24ч</div>
                  <div className="font-body text-sm text-gray-500">Доставка</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">5★</div>
                  <div className="font-body text-sm text-gray-500">Рейтинг</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-coffee-gold/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="/img/6b3993b7-4e6f-4cd4-899b-452277a10164.jpg" 
                alt="Премиальный кофе COFFEESTATE" 
                className="relative w-full h-auto rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Мы создаём исключительный опыт для каждого любителя кофе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Свежая обжарка',
                description: 'Обжариваем зёрна не более 2 недель до отправки'
              },
              {
                icon: 'Truck',
                title: 'Быстрая доставка',
                description: 'Доставка через Ozon по всей России за 1-3 дня'
              },
              {
                icon: 'Award',
                title: 'Премиум качество',
                description: 'Только лучшие сорта арабики и робусты'
              },
              {
                icon: 'Shield',
                title: 'Гарантия возврата',
                description: '100% возврат денег, если кофе не понравится'
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-coffee-gold to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={benefit.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 font-body leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Каталог кофе
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Выберите идеальный кофе для вашего способа заваривания
            </p>
          </div>
          
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
                className={`font-body px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === filter.key 
                    ? 'bg-accent text-white shadow-lg' 
                    : 'border-2 border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg group bg-white">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-coffee-light to-coffee-cream relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant={product.type === 'Эспрессо' ? 'default' : 'secondary'} 
                        className={`font-body ${product.type === 'Эспрессо' ? 'bg-accent text-white' : 'bg-secondary text-primary'}`}
                      >
                        {product.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-sm font-body text-white bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
                        {product.weight}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Coffee" size={48} className="text-white/30" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 font-body leading-relaxed">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-accent font-heading">{product.price}</span>
                      <Button asChild className="bg-accent hover:bg-accent/90 font-body shadow-lg hover:shadow-xl transition-all duration-300">
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Купить
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Отзывы покупателей
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Узнайте, что говорят наши клиенты о качестве нашего кофе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.id} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-coffee-gold to-accent rounded-full flex items-center justify-center">
                        <span className="font-heading font-bold text-white text-lg">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <span className="font-body font-semibold text-primary">{review.name}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs font-body ml-2">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Проверен
                          </Badge>
                        )}
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-700 font-body leading-relaxed italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о нашем кофе
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-xl px-6 bg-secondary/50 hover:bg-secondary transition-colors duration-300">
                <AccordionTrigger className="text-left font-heading text-lg text-primary hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 font-body leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-coffee-dark via-primary to-coffee-medium">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Готовы попробовать лучший кофе?
            </h2>
            <p className="text-white/90 font-body text-lg mb-8 leading-relaxed">
              Закажите свой первый пакет кофе COFFEESTATE и откройте для себя новый уровень вкуса
            </p>
            <Button 
              size="lg" 
              className="bg-coffee-gold hover:bg-coffee-gold/90 text-primary font-bold px-10 py-4 text-lg font-body shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Coffee" className="mr-2" size={20} />
              Заказать сейчас
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">COFFEESTATE</h3>
              <p className="text-white/80 mb-6 font-body leading-relaxed">
                Премиальный кофе с доставкой по всей России через Ozon. Качество, которому доверяют.
              </p>
              <Button asChild variant="secondary" className="font-body">
                <a href="https://www.ozon.ru/seller/1363414/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Store" size={16} className="mr-2" />
                  Магазин на Ozon
                </a>
              </Button>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-bold mb-6">Каталог</h4>
              <div className="space-y-3 text-white/80 font-body">
                <div><a href="#" className="hover:text-white transition-colors">Кофе для эспрессо</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Кофе для фильтра</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Молотый кофе</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Подарочные наборы</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-bold mb-6">Контакты</h4>
              <div className="space-y-3 text-white/80 font-body">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@coffeestate.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Пн-Пт 9:00-18:00
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-bold mb-6">Социальные сети</h4>
              <div className="flex gap-4">
                {[
                  { icon: 'Instagram', url: '#' },
                  { icon: 'Facebook', url: '#' },
                  { icon: 'Twitter', url: '#' },
                  { icon: 'Youtube', url: '#' }
                ].map((social) => (
                  <a 
                    key={social.icon}
                    href={social.url}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Icon name={social.icon as any} size={20} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 font-body">
              © 2024 COFFEESTATE. Все права защищены. | 
              <a href="#" className="hover:text-white transition-colors ml-2">Политика конфиденциальности</a> | 
              <a href="#" className="hover:text-white transition-colors ml-2">Условия использования</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}