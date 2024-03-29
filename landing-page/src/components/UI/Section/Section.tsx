interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Section = ({children, className}: ISectionProps) => {
  return <section className={className}>{children}</section>;
};

export default Section;
