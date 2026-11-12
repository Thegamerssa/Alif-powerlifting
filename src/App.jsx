import React, { useState } from 'react';
import { Play, Calendar, Video, Activity, Dumbbell, ChevronRight, CheckCircle2 } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'lifts', label: 'My Lifts', icon: Activity },
    { id: 'program', label: 'My Program', icon: Calendar },
    { id: 'technique', label: 'Technique', icon: Video },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* Logo / Title */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="bg-red-600 p-2 rounded-lg">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white tracking-wider uppercase">Strength<span className="text-red-600">Vault</span></h1>
              <p className="text-xs text-zinc-400 font-medium tracking-widest">Powerlifting Portfolio</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

const VideoPlaceholder = ({ title, date, pr, igUrl }) => (
  <div className="flex flex-col gap-3">
    {/* Instagram Embed or Dark Placeholder */}
    {igUrl ? (
      <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white flex justify-center">
        <InstagramEmbed url={igUrl} width="100%" />
      </div>
    ) : (
      <div className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-video flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 group-hover:scale-105 transition-transform duration-500">
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzZjNmNDYiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600/90 text-white p-4 rounded-full shadow-lg shadow-red-900/50 transform group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 fill-current ml-1" />
          </div>
        </div>
      </div>
    )}

    {/* Custom Title and Tags (Moved below the embed for better spacing) */}
    <div className="flex justify-between items-start px-1">
      <div>
        <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
        <p className="text-sm text-zinc-400 mt-1">{date}</p>
      </div>
      {pr && (
        <span className="bg-red-600 text-white text-xs font-black px-2 py-1 rounded uppercase tracking-wide mt-1">
          PR
        </span>
      )}
    </div>
  </div>
);

const MyLiftsTab = () => {
  const lifts = [
    { id: 1, title: 'Squat - 210kg (463 lbs)', date: 'Feb 12, 2026', pr: true, igUrl: 'https://www.instagram.com/p/DUpOwMZjC8V/' },
    { id: 2, title: 'Deadlift - 215kg (474 lbs)', date: 'Sep 28, 2026', pr: true, igUrl: 'https://www.instagram.com/p/DdxwTY0T3PJ/' },
    { id: 3, title: 'Bench Press - 80kg (176 lbs)', date: 'Sep 21, 2025', pr: false, igUrl: 'https://www.instagram.com/p/DO2WJ4iDFLG/' },
    { id: 4, title: 'Squat - 200kg (440 lbs)', date: 'Sep 15, 2026', pr: false, igUrl: 'https://www.instagram.com/p/DdTwqpdTM2b/' },
    { id: 5, title: 'Deadlift - 200kg x 2 reps', date: 'Sep 17, 2026', pr: false, igUrl: 'https://www.instagram.com/p/DdYMu1PzJNj/' },
    { id: 6, title: 'Bench Press - 72.5kg x 3 reps', date: 'Aug 27, 2026', pr: false, igUrl: 'https://www.instagram.com/stories/highlights/18129804676726639/' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">Meet <span className="text-red-500">Highlights</span></h2>
        <p className="text-zinc-400 mt-2 max-w-2xl">A collection of my top competition lifts and recent personal records. Tracking progress one plate at a time.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lifts.map((lift) => (
          <VideoPlaceholder key={lift.id} title={lift.title} date={lift.date} pr={lift.pr} igUrl={lift.igUrl} />
        ))}
      </div>
    </div>
  );
};

const MyProgramTab = () => {
  const program = [
    {
      day: 'Day 1',
      title: 'Heavy Squat & Volume Bench',
      focus: 'Lower Body Primary',
      exercises: [
        { name: 'Comp Squat', sets: '1 x 1 @ 8, 4 x 5 @ 75%' },
        { name: 'Paused Bench Press', sets: '4 x 8 @ 65%' },
        { name: 'Bulgarian Split Squats', sets: '3 x 10 / leg' },
        { name: 'Core Variations', sets: '3 x 15' }
      ]
    },
    {
      day: 'Day 2',
      title: 'Heavy Bench & Accessories',
      focus: 'Upper Body Primary',
      exercises: [
        { name: 'Comp Bench Press', sets: '1 x 1 @ 8, 5 x 4 @ 80%' },
        { name: 'Close Grip Bench', sets: '3 x 8 @ 70%' },
        { name: 'Chest Supported Rows', sets: '4 x 10' },
        { name: 'Tricep Extensions', sets: '3 x 12' }
      ]
    },
    {
      day: 'Day 3',
      title: 'Rest & Active Recovery',
      focus: 'Recovery',
      isRest: true,
      exercises: [
        { name: 'Light Cardio', sets: '20-30 mins' },
        { name: 'Mobility Routine', sets: '15 mins' }
      ]
    },
    {
      day: 'Day 4',
      title: 'Heavy Deadlift & Volume Squat',
      focus: 'Full Body Power',
      exercises: [
        { name: 'Comp Deadlift', sets: '1 x 1 @ 8, 3 x 4 @ 80%' },
        { name: 'Tempo Squat (3-0-0)', sets: '3 x 6 @ 65%' },
        { name: 'Hamstring Curls', sets: '3 x 12' },
        { name: 'Lat Pulldowns', sets: '4 x 10' }
      ]
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Current <span className="text-red-500">Block</span></h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">Hypertrophy & Strength block leading up to the Winter Open. Focus on building base volume.</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 flex items-center gap-2 w-max">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-zinc-300">Week 4 of 8</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {program.map((day, idx) => (
          <div key={idx} className={`relative rounded-xl border p-6 flex flex-col ${day.isRest ? 'bg-zinc-900/50 border-zinc-800/50' : 'bg-zinc-900 border-zinc-800'}`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-red-500 font-bold text-sm tracking-wider uppercase">{day.day}</span>
                <h3 className="text-xl font-bold text-white mt-1">{day.title}</h3>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${day.isRest ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-800 text-zinc-300'}`}>
                {day.focus}
              </span>
            </div>

            <div className="space-y-3 flex-grow">
              {day.exercises.map((ex, exIdx) => (
                <div key={exIdx} className="flex justify-between items-center p-3 rounded-lg bg-zinc-950/50 hover:bg-zinc-950 transition-colors">
                  <span className="text-zinc-200 font-medium flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-red-600" />
                    {ex.name}
                  </span>
                  <span className="text-zinc-400 text-sm">{ex.sets}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechniqueTab = () => {
  const techniques = [
    {
      lift: 'The Squat',
      description: 'Low bar back squat focusing on hip drive and maintaining a rigid core.',
      cues: ['Create a shelf with rear delts', 'Brace 360 degrees against the belt', 'Root feet into the floor (tripod foot)', 'Drive back into the bar out of the hole'],
      videoTitle: 'Squat Form Checklist'
    },
    {
      lift: 'The Bench Press',
      description: 'Comp bench setup with moderate arch and leg drive optimization.',
      cues: ['Squeeze shoulder blades together and down', 'Set feet flat and create tension', 'Bend the bar apart to engage lats', 'Push yourself away from the bar'],
      videoTitle: 'Bench Press Arch & Drive'
    },
    {
      lift: 'The Deadlift',
      description: 'Sumo stance deadlift prioritizing wedge and slack pulling.',
      cues: ['Hips close to the bar', 'Pull the slack out before initiating', 'Push the floor away (leg press)', 'Squeeze glutes at lockout, no overextension'],
      videoTitle: 'Sumo Wedge Technique'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">Form & <span className="text-red-500">Technique</span></h2>
        <p className="text-zinc-400 mt-2 max-w-2xl">Instructional breakdowns of the "Big Three". Perfect practice makes perfect execution on the platform.</p>
      </div>

      {techniques.map((tech, idx) => (
        <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-xl">
          {/* Video Side */}
          <div className="lg:w-1/2 p-2">
            <div className="h-full min-h-[300px] w-full bg-zinc-950 rounded-xl relative flex items-center justify-center border border-zinc-800/50 group overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-950 to-zinc-950"></div>
               <div className="relative z-10 flex flex-col items-center">
                 <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-red-600/30">
                   <Play className="w-8 h-8 text-white fill-current ml-1" />
                 </div>
                 <p className="text-zinc-400 font-medium mt-4 text-sm uppercase tracking-widest">{tech.videoTitle}</p>
               </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">{tech.lift}</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              {tech.description}
            </p>
            
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-red-500 w-5 h-5" /> 
                Key Execution Cues
              </h4>
              <ul className="space-y-3">
                {tech.cues.map((cue, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-3">
                    <span className="text-red-500 font-black text-sm mt-1">{cIdx + 1}.</span>
                    <span className="text-zinc-300">{cue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('lifts');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-500/30">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'lifts' && <MyLiftsTab />}
        {activeTab === 'program' && <MyProgramTab />}
        {activeTab === 'technique' && <TechniqueTab />}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 mt-12 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <Dumbbell className="w-5 h-5 text-red-600" />
             <span className="font-black text-white uppercase tracking-wider">Strength<span className="text-red-600">Vault</span></span>
          </div>
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Powerlifting Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
