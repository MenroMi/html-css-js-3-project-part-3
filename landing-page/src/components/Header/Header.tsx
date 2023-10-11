import {Box, Button, Section} from '..';

interface IHeaderProps {
  children: React.ReactNode;
}

const Header = ({children}: IHeaderProps) => {
  return (
    <header className="bg-intro-email-sign min-h-[300px] px-6 md:px-14 text-white font-raleway">
      {children}
      <Section id="header" className="pt-5 pb-14">
        <img
          src="/illustration-intro.png"
          alt="people save infos in fylo store"
          className="mx-auto sm:max-w-[550px]"
        />
        <Box className="mx-auto max-w-[550px] 3xl:max-w-full mt-5 text-center">
          <h1 className="text-xl md:text-header-heading font-semibold leading-[1.5]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="mt-3 md:mt-6 text-header-p">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </Box>
        <Box className="flex justify-center mt-7">
          <Button
            content="Get Started"
            className="w-[95%] sm:w-72 py-3 rounded-3xl "
          />
        </Box>
      </Section>
    </header>
  );
};

export default Header;
