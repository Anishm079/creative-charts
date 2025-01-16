import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

type DataPoint = {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
};

const data: DataPoint[] = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

export default class ASchoolIsAnalyzingThePerformanceOfTwoStudents extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} style={{color:'#000'}} >
          <PolarGrid color='#000' />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#000' }} />
          <PolarRadiusAxis tick={{ fill: '#000' }} />
          <Radar name="Student A" dataKey="A"  stroke="#0d00ff" fill="#423ae1" fillOpacity={0.6} />
          <Radar name="Student B" dataKey="B" stroke="#00ff62" fill="#64f49b" fillOpacity={0.6} />
          <Legend 
            payload={[
              { value: 'Student A', type: 'square', color: '#0d00ff' },
              { value: 'Student B', type: 'square', color: '#00ff62' }
            ]}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
