'use client';

import { useState, useEffect } from 'react';
import LifeScoreChart from '../components/LifeScoreChart';
import { getSupabaseClient } from '../lib/supabaseClient';

export default function Home() {
  const [entry, setEntry] = useState('');
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('lifescore');
    if (stored) setScores(JSON.parse(stored));
  }, []);

  const addEntry = async () => {
    const nextScore = Math.floor(Math.random() * 100);
    const updated = [...scores, nextScore];
    setScores(updated);
    localStorage.setItem('lifescore', JSON.stringify(updated));
    setEntry('');
    const supabase = getSupabaseClient();
    if (supabase) {
      await supabase.from('logs').insert({ text: entry, score: nextScore });
    }
  };

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">VITALABS Dashboard</h1>
      <LifeScoreChart />
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Log your daily behavior..."
      />
      <button
        onClick={addEntry}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Entry
      </button>
    </main>
  );
}
