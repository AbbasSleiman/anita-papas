const BookBox = ({ src, title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-72 bg-secondary p-5 border border-primary border-opacity-15">
      
        <img src={src} alt="book image" className="w-full object-cover" />
      
      <h4 className="text-start uppercase">{title}</h4>
      <div className="flex flex-row gap-2 items-center justify-center w-full">
        <hr className="border border-primary w-1/5" />
        <p className="uppercase text-xs font-prata">Read more</p>
      </div>
    </div>
  );
};

export default BookBox;
