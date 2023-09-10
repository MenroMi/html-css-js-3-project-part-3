import ArticleList from './AsideArticleList';
import MainArticle from './MainArticle';

const FlexAsideArticles = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6">
      <MainArticle />
      <ArticleList />
    </div>
  );
};

export default FlexAsideArticles;
