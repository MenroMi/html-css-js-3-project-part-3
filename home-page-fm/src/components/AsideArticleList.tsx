import {Fragment} from 'react';
import {ARTICLES_ASIDE_DATA} from '../constants';
import ArticleAside from './ArticleAside';

const AsideArticleList = () => {
  return (
    <div className="bg-neutral-very-dark-blue lg:min-w-[360px] py-16 px-5 flex flex-col justify-between gap-8">
      <h2 className="text-primary-orange text-6xl font-semibold">New</h2>

      <div>
        {ARTICLES_ASIDE_DATA.map((article, i) => {
          return (
            <Fragment key={i}>
              <ArticleAside
                title={article.title}
                lid={article.lid}
                key={article.title}
                id={i}
              />
              {ARTICLES_ASIDE_DATA.length !== i + 1 && (
                <div key={i} className="divider pb-10"></div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AsideArticleList;
