type SkillBarProps = {
  skill: string;
  percent: number;
};

export default function SkillBar({
  skill,
  percent,
}: SkillBarProps) {
  return (
    <div className="mb-6">

      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full bg-gray-800 rounded-full h-4">

        <div
          className="bg-cyan-400 h-4 rounded-full"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

    </div>
  );
}