interface QualificationTagsProps {
  qualifications: string[];
}

export default function QualificationTags({ qualifications }: QualificationTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {qualifications.map((qual, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 transition-colors"
        >
          {qual}
        </button>
      ))}
    </div>
  );
}

