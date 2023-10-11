interface ILocationProps {
  contentP: string;
  classNameP?: string;
}

const Location = ({contentP, classNameP}: ILocationProps) => {
  return (
    <>
      <img src="./icon-location.svg" alt="location image" className="h-5 w-5" />
      <p className={classNameP}>{contentP}</p>
    </>
  );
};

export default Location;
