import { processSteps } from '../../data/process';
import ProcessStep from './ProcessStep';
import './Process.css';

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="section-header">
        <h2>My Creative Process</h2>
        <p>How I transform your raw footage into compelling stories</p>
      </div>
      
      <div className="process-timeline">
        {processSteps.map((step, index) => (
          <ProcessStep 
            key={step.id}
            step={step}
            index={index}
            totalSteps={processSteps.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Process;