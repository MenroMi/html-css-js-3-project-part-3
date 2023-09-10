import {FC} from 'react';

interface IArticleBottomProps {
  src: string;
  title: string;
  descr: string;
  id: number;
}

const ArticleBottom: FC<IArticleBottomProps> = ({src, title, descr, id}) => {
  return (
    <div className="relative flex gap-5 lg:gap-2 xl:gap-[1.85rem] z-3 w-full group cursor-pointer before:hover:animate-visible before:h-full before:absolute before:bg-primary-orange  before:z-[-1] before:opacity-10 before:rounded-md">
      <img src={src} alt={title} className="object-cover w-36" />

      <div id="description" className="flex flex-col justify-between my-3">
        <p className="text-neutral-grayish-blue text-6xl font-semibold">
          {id < 9 ? `0${id + 1}` : id}
        </p>
        <h2 className="text-neutral-veryź-dark-blue font-semibold sm:text-3xl lg:text-xl group-hover:text-primary-red transition">
          {title}
        </h2>
        <p className="text-neutral-dark-grayish-blue sm:text-xl">{descr}</p>
      </div>
    </div>
  );
};

export default ArticleBottom;
