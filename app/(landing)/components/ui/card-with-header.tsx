type TCardWithHeaderProps = {
  title: string;
  children: React.ReactNode;
};

const CardWithHeader = ({ title, children }: TCardWithHeaderProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm w-full h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default CardWithHeader;
