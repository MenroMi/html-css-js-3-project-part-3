// basic
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

// components
import {
  Box,
  Button,
  Cards,
  Header,
  Location,
  Media,
  MenuItem,
  Navigation,
  Section,
  Comments,
  Contacts,
} from '../components';

// constants
import {
  BUTTON_TYPES,
  advantages,
  footerMenuItems,
  navItems,
  regexpEmail,
  socialMedia,
} from '../constants';

// styles
import './App.css';
import {comments} from '../constants';

function App() {
  return (
    <>
      <Header>
        <Navigation logo="./logo.svg" navItems={navItems} />
      </Header>

      <main className="relative z-0 px-8 md:px-14 pt-24 md:pt-20 bg-main text-white font-open-sans pb-96">
        <Section
          id="cards"
          className="grid grid-cols-1 justify-center md:grid-cols-2 gap-y-16 gap-x-36"
        >
          <Cards cards={advantages} />
        </Section>

        <Section
          id="how-works"
          className="flex flex-col lg:flex-row items-center justify-center pt-section lg:gap-x-[8rem] xl:gap-x-28 2xl:gap-x-36"
        >
          <img
            src="/illustration-stay-productive.png"
            alt="safe and secure share files"
            className="w-full max-w-[530px] lg:max-w-[450px] xl:max-w-[615px] max-lg:mx-auto"
          />
          <Box className="mt-5 lg:mt-0 lg:max-w-[450px] xl:max-w-[615px]">
            <h2 className="text-how-works-heading font-semibold leading-[1.3]">
              Stay productive, wherever you are
            </h2>
            <p className="text-how-works-p max-lg:max-w-[615px] mt-5">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
              <br />
              <br />
              Securely share tes and tolders with trienos, family and colleagues
              for live collaboration. No email attachments required.
            </p>
            <Box className="max-w-[170px] group">
              <Button
                id="how-it-works"
                content={`See how Fylo works`}
                className="text-cyan group-active:text-white mt-6 flex items-center gap-2"
              >
                {
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full w-2 h-2 text-main bg-cyan group-active:bg-white p-1 group-hover:translate-x-1 transition"
                  />
                }
              </Button>
              <Box className="border-t border-cyan mt-1 transition group-active:border-white"></Box>
            </Box>
          </Box>
        </Section>

        <Section
          id="reviews"
          className="relative flex flex-col lg:flex-row gap-5 pt-section lg:justify-center"
        >
          <img
            src="./bg-quotes.png"
            alt="background quotes"
            className="absolute top-28 -left-2 block -z-1"
          />
          {<Comments comments={comments} />}
        </Section>

        <Section
          id="testimonial"
          className="absolute -bottom-36 w-full min-h-[288px] max-w-[1000px] left-[50%] -translate-x-[50%] px-8 md:px-14"
        >
          <Box className="bg-testimonial pt-14 pb-10 w-full h-full rounded-md shadow-testim">
            <Box className="max-w-[80%] mx-auto ">
              <h3 className="text-how-works-heading tracking-wide font-semibold text-center">
                Get early access today
              </h3>
              <p className="text-center text-sm md:text-lg mt-7">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
              <form className="w-full flex flex-col lg:flex-row justify-center gap-5 lg:gap-10 lg:h-11 mt-10">
                <input
                  type="email"
                  size={30}
                  pattern={`${regexpEmail}`}
                  className="w-full h-11 rounded-3xl text-xs placeholder:opacity-60 text-main pl-10 pr-5"
                  placeholder="email@example.com"
                />
                <Button
                  type={BUTTON_TYPES.SUBMIT}
                  content="Get Started For Free"
                  className="w-full h-11 lg:w-72 rounded-3xl text-sm"
                />
              </form>
            </Box>
          </Box>
        </Section>
      </main>

      <footer className="content-between min-h-[500px] bg-footer text-white px-8 md:px-14 pt-56 pb-20">
        <img src="/logo.svg" alt="logo" />
        <Box className="mt-10 flex flex-col md:flex-row justify-between gap-10 md:gap-20 flex-wrap">
          <Box id="location" className="flex gap-5 max-w-full lg:max-w-[350px]">
            <Location
              contentP="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae dolore voluptatem earum voluptatibus voluptates neque iure, id perspiciatis sit, iusto consequuntur commodi pariatur ut iste."
              classNameP="text-md"
            />
          </Box>

          <Box id="contacts" className="md:min-w-[200px]">
            <Contacts
              email="example@fylo.com"
              phone="+1-543-123-4567"
              iconEmail="./icon-email.svg"
              iconPhone="/icon-phone.svg"
            />
          </Box>

          <Box
            id="footer-menu"
            className="grid grid-flow-row md:grid-flow-col grid-rows-4 gap-y-5"
          >
            {footerMenuItems.map(item => (
              <MenuItem
                className="w-[150px] cursor-pointer hover:underline active:text-cyan hover:font-semibold active:font-semibold"
                content={item}
                key={item}
              />
            ))}
          </Box>

          <ul id="social" className="flex gap-5">
            {socialMedia.map(media => (
              <Media
                media={media}
                key={media}
                className="relative w-10 h-10 border-2 border-white hover:scale-105 rounded-full transition cursor-pointer group active:border-cyan"
                classNameIcon="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-active:text-cyan group-hover:scale-105 transition"
              />
            ))}
          </ul>
        </Box>
      </footer>
    </>
  );
}

export default App;
