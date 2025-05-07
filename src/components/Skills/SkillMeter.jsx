import './Skills.css';

const SkillMeter = ({ level }) => {
  return (
    <div className="skill-meter">
      <div
        className="skill-level"
        style={{ width: `${level}%` }}
        aria-valuenow={level}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default SkillMeter;
