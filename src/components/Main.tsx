import FlexShortcutArticles from './FlexShortcutArticles';
import FlexAsideArticles from './FlexAsideArticles';

const Main = () => {
  return (
    <main className="flex flex-col max-w-[1440px] w-full mx-auto gap-14 pb-5">
      <FlexAsideArticles />
      <FlexShortcutArticles />
    </main>
  );
};

export default Main;
