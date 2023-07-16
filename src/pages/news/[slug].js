// Основной layout всех страниц, кроме главной с меню, футером и тд.
import MainLayout from '@/layouts/MainLayout';
import ErrorPage from '../404';

import NewsSingle from '@/components/pages/news/NewsSingle';

// Вот тут загружаем store отдельно ИНТЕРФЕЙС от ДАННЫХ СТРАНИЦЫ.
import InterfaceStore from '@/stores/InterfaceStore';
const interfaceData = InterfaceStore;

import NewsStore from '@/stores/NewsStore';
const currentData = NewsStore;

// Single news page
const NewsItem = ({ interfaceData, currentData, lastNews }) => {
  // 404
  // Если возвращается null - значит страницы такая не нашлась.
  // Мы не перенаправляем, а отдаём статус и просто показываем страничку 404
  if (currentData === null) {
    return <ErrorPage interfaceData={interfaceData} />;
  }
  // Всё хорошо и выводим контент.
  return (
    <MainLayout data={interfaceData}>
      <NewsSingle
        currentData={currentData}
        interfaceData={interfaceData}
        lastNews={lastNews}
      />
    </MainLayout>
  );
};

export const getServerSideProps = async (context) => {
  //  Из context получаем язык текущей локализации сайта.
  const { locale, query, res } = context;
  const currentLocale = locale;
  const currentQuery = query;

  // При рендере страницы запрашиваем данные из файла с данными.
  await interfaceData.fetchData(currentLocale);
  await currentData.fetchCurrentNews(currentLocale, currentQuery);
  await currentData.fetchPreviewData(currentLocale);

  // Если данных не находит в store надо вернуть ошибку.
  // Так же на страницу отдаём ошибку 404
  if (currentData.dataCurrentItem === null) {
    res.statusCode = 404;
    return {
      props: {
        interfaceData: interfaceData.data,
        currentData: null,
      },
    };
  }

  // Вот тут возвращаем данные в props и уже в них отдаём данные для текущей страницы
  return {
    props: {
      interfaceData: interfaceData.data,
      currentData: currentData.dataCurrentItem,
      lastNews: currentData.dataPreviewItems,
    },
  };
};

export default NewsItem;
