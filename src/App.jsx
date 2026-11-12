import React, { useState } from 'react';
import { Play, Calendar, Video, Activity, Dumbbell, ChevronRight, CheckCircle2 } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'lifts', label: 'My Best Lifts', icon: Activity },
    { id: 'program', label: 'My Program', icon: Calendar },
    { id: 'split', label: 'Training Split for Casuals', icon: Dumbbell },
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
              <h1 className="text-xl font-black text-white tracking-wider uppercase">Alif<span className="text-red-600"> Powerlifting</span></h1>
              <p className="text-xs text-zinc-400 font-medium tracking-widest">Powerlifting Athlete</p>
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
    { id: 6, title: 'Bench Press - 72.5kg x 3 reps', date: 'Aug 27, 2026', pr: false, igUrl: 'https://www.instagram.com/p/DOVqrJQjKKk/' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">My Best PRs <span className="text-red-500">Lifts</span></h2>
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
  const [selectedBlock, setSelectedBlock] = useState(1);

  const blocks = [
    {
      id: 1,
      name: 'Block 1: Hypertrophy',
      duration: '5 Weeks',
      volume: 'High Volume',
      intensity: 'Low Intensity',
      sbdScheme: '5 sets x 5 reps (High Volume / Low Intensity)',
      description: 'Building work capacity, muscle mass, and technical consistency on SBD.',
    },
    {
      id: 2,
      name: 'Block 2: Strength',
      duration: '4 Weeks',
      volume: 'Low Volume',
      intensity: 'Med–High Intensity',
      sbdScheme: '3 sets x 3 reps (Low Volume / Med-High Intensity)',
      description: 'Transitioning hypertrophy gains into maximal force production under heavier loads.',
    },
    {
      id: 3,
      name: 'Block 3: Peaking',
      duration: '4 Weeks',
      volume: 'Lowest Volume',
      intensity: 'Max Intensity',
      sbdScheme: '1 Heavy Rep or 2 x 2 (Lowest Volume / Max Intensity)',
      description: 'Dissipating fatigue and mastering maximal attempts. Ends with PR / Mock Meet!',
    }
  ];

  const currentBlock = blocks.find((b) => b.id === selectedBlock);

  const program = [
    {
      day: 'Day 1',
      title: 'Push Day',
      focus: 'Upper Body Primary (Chest, Shoulders, Triceps)',
      exercises: [
        { name: 'Comp Bench Press (SBD)', sets: currentBlock.sbdScheme, isSBD: true },
        { name: 'Incline Dumbbell Bench Press', sets: '4 x 8 @ 65%' },
        { name: 'Shoulder Press', sets: '3 x 10' },
        { name: 'Rear Delt Flyes', sets: '3 x 12' },
        { name: 'Lateral Raises', sets: '3 x 12' },
        { name: 'Tricep Extensions', sets: '3 x 12' },
        { name: 'Skull Crushers', sets: '3 x 12' }
      ]
    },
    {
      day: 'Day 2',
      title: 'Squat, Deadlift & Accessories',
      focus: 'Squat Priority & Leg Accessories',
      note: 'PS: Light deadlift including alternatives',
      exercises: [
        { name: 'Comp Squat (SBD)', sets: currentBlock.sbdScheme, isSBD: true },
        { name: 'Light / Pause Deadlift (SBD Alt)', sets: '3 x 5 @ RPE 6-7', isSBD: true },
        { name: 'Bulgarian Split Squats', sets: '3 x 10 / leg' },
        { name: 'Leg Extensions', sets: '3 x 12' },
        { name: 'Core Variations', sets: '3 x 15' }
      ]
    },
    {
      day: 'Day 3',
      title: 'Pull Day with Bench Press & Accessories',
      focus: 'Upper Body Pull & Bench',
      exercises: [
        { name: 'Comp Bench Press (SBD)', sets: currentBlock.sbdScheme, isSBD: true },
        { name: 'Lat Pulldowns', sets: '4 x 10' },
        { name: 'Chest Supported Rows', sets: '4 x 10' },
        { name: 'Face Pulls', sets: '3 x 15' },
        { name: 'Bicep Curls', sets: '3 x 12' }
      ]
    },
    {
      day: 'Day 4',
      title: 'Rest & Active Recovery',
      focus: 'Recovery',
      isRest: true,
      exercises: [
        { name: 'Light Cardio', sets: '20-30 mins' },
        { name: 'Mobility Routine', sets: '15 mins' }
      ]
    },
    {
      day: 'Day 5',
      title: 'Lower Body Power & Accessories',
      focus: 'Deadlift Priority & Squat Accessories',
      exercises: [
        { name: 'Comp Deadlift (SBD)', sets: currentBlock.sbdScheme, isSBD: true },
        { name: 'Tempo Squat (3-0-0) (SBD)', sets: '3 x 5 @ 65-70%', isSBD: true },
        { name: 'Hamstring Curls', sets: '3 x 12' },
        { name: 'RDLs / Back Extensions', sets: '3 x 10' }
      ]
    },
    {
      day: 'Day 6',
      title: 'Upper Body Power with Bench Press & Arm Accessories',
      focus: 'Bench & Arms Focus',
      exercises: [
        { name: 'Comp Bench Press (SBD)', sets: currentBlock.sbdScheme, isSBD: true },
        { name: 'Close Grip Bench Press', sets: '3 x 8 @ 70%' },
        { name: 'Hammer Curls', sets: '3 x 12' },
        { name: 'Overhead Tricep Extensions', sets: '3 x 12' },
        { name: 'Lateral Raises', sets: '3 x 15' }
      ]
    },
    {
      day: 'Day 7',
      title: 'Rest & Active Recovery',
      focus: 'Recovery',
      isRest: true,
      exercises: [
        { name: 'Light Cardio', sets: '20-30 mins' },
        { name: 'Mobility Routine', sets: '15 mins' }
      ]
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header & 3-Month Overview */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">
            13-Week <span className="text-red-500">Program Cycle</span>
          </h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">
            Full 3-month macrocycle divided into 3 distinct training blocks leading up to a final PR / Mock Meet test. Select a block below to see how SBD volume and intensity adjust.
          </p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 flex items-center gap-2 w-max">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-sm font-bold text-zinc-200">3-Month Full Cycle (13 Weeks)</span>
        </div>
      </div>

      {/* 3 Training Block Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {blocks.map((block) => {
          const isSelected = block.id === selectedBlock;
          return (
            <button
              key={block.id}
              onClick={() => setSelectedBlock(block.id)}
              className={`text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-red-600/10 border-red-500 shadow-lg shadow-red-600/10'
                  : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-black uppercase px-2.5 py-1 rounded ${
                  isSelected ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {block.duration}
                </span>
                <span className="text-xs font-semibold text-zinc-400">
                  {block.volume} • {block.intensity}
                </span>
              </div>
              <h3 className="text-lg font-black text-white mt-2">{block.name}</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{block.description}</p>
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-semibold uppercase">SBD Prescription:</span>
                <span className="text-xs font-bold text-red-400">{block.sbdScheme.split(' (')[0]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* End of Block 3 Goal Banner */}
      <div className={`mb-10 rounded-xl p-4 border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors ${
        selectedBlock === 3 
          ? 'bg-gradient-to-r from-red-950/60 to-zinc-900 border-red-500/60' 
          : 'bg-zinc-900/60 border-zinc-800'
      }`}>
        <div className="flex items-center gap-3">
          <div className="bg-red-600 text-white font-black text-xs px-3 py-1.5 rounded uppercase tracking-wider">
            End of Block 3 Goal
          </div>
          <p className="text-sm text-zinc-200 font-semibold">
            Max Out & Hit New Personal Records (PR) on Squat, Bench, and Deadlift!
          </p>
        </div>
        <span className="text-xs text-zinc-400 font-medium">
          Currently viewing: <strong className="text-white">{currentBlock.name}</strong>
        </span>
      </div>

      {/* Weekly 7-Day Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {program.map((day, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl border p-6 flex flex-col ${
              day.isRest ? 'bg-zinc-900/40 border-zinc-800/50' : 'bg-zinc-900 border-zinc-800'
            }`}
          >
            <div className="flex justify-between items-start mb-4 gap-2">
              <div>
                <span className="text-red-500 font-bold text-sm tracking-wider uppercase">{day.day}</span>
                <h3 className="text-xl font-bold text-white mt-1">{day.title}</h3>
                {day.note && (
                  <p className="text-xs text-amber-400/90 font-medium mt-1">{day.note}</p>
                )}
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                  day.isRest ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-800 text-zinc-300'
                }`}
              >
                {day.focus}
              </span>
            </div>

            <div className="space-y-3 flex-grow mt-2">
              {day.exercises.map((ex, exIdx) => (
                <div
                  key={exIdx}
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg transition-colors gap-1 ${
                    ex.isSBD
                      ? 'bg-red-950/30 border border-red-500/30'
                      : 'bg-zinc-950/50 hover:bg-zinc-950'
                  }`}
                >
                  <span className="text-zinc-200 font-medium flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-red-600 shrink-0" />
                    {ex.name}
                  </span>
                  <span className={`text-sm font-semibold ${ex.isSBD ? 'text-red-400' : 'text-zinc-400'}`}>
                    {ex.sets}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrainingSplitTab = () => {
  const program = [
    {
      day: 'Day 1',
      title: 'Push day ',
      focus: 'Upper Body Primary(Chest, Shoulders, Triceps)',
      exercises: [
        { name: 'Bench Press', sets: '1 x 1 @ 8, 4 x 5 @ 75%' },
        { name: 'incline dumbbell Bench Press', sets: '4 x 8 @ 65%' },
        { name: 'Shoulder press', sets: '3 x 10 ' },
        { name: 'Rear Delt Flyes', sets: '3 x 12' },
        { name: 'lat raise', sets: '3 x 12' },
        { name: 'Tricep Extensions', sets: '3 x 12' },
        { name: 'Skull crushers', sets: '3 x 12' }
      ]
    },
    {
      day: 'Day 2',
      title: 'Squat, Deadlift & Accessories',
      focus: 'Squat priority and legs accessories',
      Ps: 'Light deadlift including alternatives',
      exercises: [
        { name: 'Comp Bench Press', sets: '1 x 1 @ 8, 5 x 4 @ 80%' },
        { name: 'Close Grip Bench', sets: '3 x 8 @ 70%' },
        { name: 'Chest Supported Rows', sets: '4 x 10' },
        { name: 'Tricep Extensions', sets: '3 x 12' }
      ]
    },
    {
      day: 'Day 3',
      title: 'Pull day with Bench Press & Accessories',
      focus: 'Full Body Power',
      exercises: [
        { name: 'Bench press', sets: '1 x 1 @ 8, 3 x 4 @ 80%' },
        { name: 'Tempo Squat (3-0-0)', sets: '3 x 6 @ 65%' },
        { name: 'Hamstring Curls', sets: '3 x 12' },
        { name: 'Lat Pulldowns', sets: '4 x 10' }
      ]
    },
    {
      day: 'Day 4',
      title: 'Rest & Active Recovery',
      focus: 'Recovery',
      isRest: true,
      exercises: [
        { name: 'Light Cardio', sets: '20-30 mins' },
        { name: 'Mobility Routine', sets: '15 mins' }
      ]
    },
    {
      day: 'Day 5',
      title: 'Lower Body Power & Accessories',
      focus: 'Deadlift priority and squat accessories ',
      exercises: [
        { name: 'Comp Deadlift', sets: '1 x 1 @ 8, 3 x 4 @ 80%' },
        { name: 'Tempo Squat (3-0-0)', sets: '3 x 6 @ 65%' },
        { name: 'Hamstring Curls', sets: '3 x 12' },
        { name: 'Lat Pulldowns', sets: '4 x 10' }
      ]
    },
    {
      day: 'Day 6',
      title: 'upper body power with Bench Press & Arm accessories',
      focus: 'Full Body Power',
      exercises: [
        { name: 'Comp Deadlift', sets: '1 x 1 @ 8, 3 x 4 @ 80%' },
        { name: 'Tempo Squat (3-0-0)', sets: '3 x 6 @ 65%' },
        { name: 'Hamstring Curls', sets: '3 x 12' },
        { name: 'Lat Pulldowns', sets: '4 x 10' }
      ]
    },
    {
      day: 'Day 7',
      title: 'Rest & Active Recovery',
      focus: 'Recovery',
      isRest: true,
      exercises: [
        { name: 'Light Cardio', sets: '20-30 mins' },
        { name: 'Mobility Routine', sets: '15 mins' }
      ]
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Training <span className="text-red-500">Split</span></h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">Hypertrophy & Strength block leading up to the Winter Open. Focus on building base volume.</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 flex items-center gap-2 w-max">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-zinc-300">For Casual/Intermediate Athletes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {program.map((day, idx) => (
          <div key={idx} className={`relative rounded-xl border p-6 flex flex-col ${day.isRest ? 'bg-zinc-900/50 border-zinc-800/50' : 'bg-zinc-900 border-zinc-800'}`}>
            <div className="flex justify-between items-start mb-6 gap-2">
              <div>
                <span className="text-red-500 font-bold text-sm tracking-wider uppercase">{day.day}</span>
                <h3 className="text-xl font-bold text-white mt-1">{day.title}</h3>
                {day.Ps && (
                  <p className="text-xs text-amber-400/90 font-medium mt-1">PS: {day.Ps}</p>
                )}
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
        {activeTab === 'split' && <TrainingSplitTab />}
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
