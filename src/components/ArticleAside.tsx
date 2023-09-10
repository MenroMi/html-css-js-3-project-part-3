const ArticleAside = ({
  title,
  lid,
  id,
}: {
  title: string;
  lid: string;
  id: number;
}) => {
  return (
    <div className={`${id + 1 !== 1 && 'mt-10'} group cursor-pointer`}>
      <h3 className="text-neutral-off-white font-semibold text-2xl group-hover:text-primary-orange transition">
        {title}
      </h3>
      <p className="text-neutral-grayish-blue font-light text-sm xl:text-md mt-3 leading-6">
        {lid}
      </p>
    </div>
  );
};

export default ArticleAside;
