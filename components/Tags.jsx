const tags = ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'];


export default function Tags() {
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-300 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    );
  }
  