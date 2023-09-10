import {ARTICLES_BOTTOM_DATA} from '../constants';
import ArticleBottom from './ArticleBottom';

const FlexShortcutArticles = () => {
  return (
    <div className="flex w-full h-full gap-5 flex-wrap lg:flex-nowrap justify-between">
      {ARTICLES_BOTTOM_DATA.map((a, i) => {
        return (
          <ArticleBottom
            key={a.title}
            src={a.src}
            title={a.title}
            descr={a.descr}
            id={i}
          />
        );
      })}
    </div>
  );
};

export default FlexShortcutArticles;
