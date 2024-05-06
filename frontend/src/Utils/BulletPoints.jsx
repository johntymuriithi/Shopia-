// eslint-disable-next-line react/prop-types
const BulletPoints = ({ imgUrl, title, subtext }) => {
  return (
    <div className="flex gap-2">
      <img
        src={imgUrl}
        alt={title}
        className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"
      />
      <section>
        <p className="font-extrabold lg:text-base text-xs">{title}</p>
        <p className="lg:text-xs text-[10px]">{subtext}</p>
      </section>
    </div>
  );
};

export default BulletPoints;
