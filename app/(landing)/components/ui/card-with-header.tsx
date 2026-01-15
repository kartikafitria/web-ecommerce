type TCardWithHeaderProps = {
  title: string;
  children: React.ReactNode;
};

const CardWithHeader = ({ title, children }: TCardWithHeaderProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm w-full h-fit">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      {children}
    </div>
  );
};

export default CardWithHeader;
