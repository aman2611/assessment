const tags = ['Interview', 'Strategy', 'Economics', 'Sociology', 'Indian History', 'Strategy', 'Sociology', 'Polity','Indian History', 'Strategy', 'Sociology', 'Polity','Indian History', 'Strategy', 'Sociology', 'Polity'];


export default function Tags() {
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 rounded-full border-[0.7px] border-[#585858]">
            {tag}
          </span>
        ))}
      </div>
    );
  }
  