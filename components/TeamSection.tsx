import React from 'react';
import { getContent, getAssetUrl } from '../lib/content';

export default function TeamSection() {
  const team = getContent('team');
  return (
    <section className="team grid grid-cols-1 md:grid-cols-2 gap-6">
      {team?.map((member: any) => (
        <div key={member.name} className="team-card p-4 border rounded">
          <img src={getAssetUrl('team', member.photo?.split('/').pop(), 'profile')} alt={member.name} className="h-20 w-20 rounded-full" />
          <h4>{member.name}</h4>
          <p>{member.bio}</p>
        </div>
      ))}
    </section>
  );
}
