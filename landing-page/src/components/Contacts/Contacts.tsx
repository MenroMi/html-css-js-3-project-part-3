import {Box} from '..';

interface IContactsProps {
  phone: string;
  email: string;
  iconPhone: string;
  iconEmail: string;
}

const Contacts = ({phone, iconPhone, iconEmail, email}: IContactsProps) => {
  return (
    <>
      <Box id="phone" className="flex items-center gap-8 self-start">
        <img src={iconPhone} alt="phone image" />
        <p>{phone}</p>
      </Box>
      <Box id="email" className="flex items-center gap-8 mt-5">
        <img src={iconEmail} alt="email image" />
        <p>{email}</p>
      </Box>
    </>
  );
};

export default Contacts;
