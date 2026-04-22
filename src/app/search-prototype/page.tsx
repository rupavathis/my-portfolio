'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';

interface Entry {
  name: string;
  place: string;
  gender: string;
  social_status: string;
  description: string;
}

export default function SearchPrototypePage() {
  const [allData, setAllData] = useState<Entry[]>([]);
  const [filteredData, setFilteredData] = useState<Entry[]>([]);
  const [searchParams, setSearchParams] = useState({
    name: '',
    place: '',
    gender: '',
    social_status: ''
  });
  const [personQuery, setPersonQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);
  
  const suggestionRef = useRef<HTMLDivElement>(null);

  // Load data from CSV on mount
  useEffect(() => {
    fetch('/historical_ireland.csv')
      .then(res => res.text())
      .then(text => {
        const lines = text.split('\n');
        const entries: Entry[] = [];
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line) {
            const parts = line.split(',');
            if (parts.length >= 5) {
              entries.push({
                name: parts[0].trim(),
                place: parts[1].trim(),
                gender: parts[2].trim(),
                social_status: parts[3].trim(),
                description: parts[4].trim()
              });
            }
          }
        }
        setAllData(entries);
        setFilteredData(entries);
        setIsLoading(false);
      });
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get unique values for dropdowns
  const uniqueNames = useMemo(() => Array.from(new Set(allData.map(d => d.name))).sort(), [allData]);
  const uniquePlaces = useMemo(() => Array.from(new Set(allData.map(d => d.place))).sort(), [allData]);
  const uniqueGenders = useMemo(() => Array.from(new Set(allData.map(d => d.gender))).sort(), [allData]);
  const uniqueStatus = useMemo(() => Array.from(new Set(allData.map(d => d.social_status))).sort(), [allData]);

  const filteredNames = useMemo(() => {
    if (personQuery.length < 3) return [];
    return uniqueNames.filter(name => 
      name.toLowerCase().includes(personQuery.toLowerCase())
    );
  }, [personQuery, uniqueNames]);

  const handleSearch = () => {
    const results = allData.filter(entry => {
      const matchName = !searchParams.name || entry.name === searchParams.name;
      const matchPlace = !searchParams.place || entry.place === searchParams.place;
      const matchGender = !searchParams.gender || entry.gender === searchParams.gender;
      const matchStatus = !searchParams.social_status || entry.social_status === searchParams.social_status;
      return matchName && matchPlace && matchGender && matchStatus;
    });
    setFilteredData(results);
    setHasSearched(true);
  };

  const resetSearch = () => {
    setSearchParams({ name: '', place: '', gender: '', social_status: '' });
    setPersonQuery('');
    setFilteredData(allData);
    setHasSearched(false);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-blue-600 font-bold animate-pulse uppercase tracking-widest text-sm">Loading Historical Records...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Search Prototype</h1>
          </div>
          <p className="text-xs text-emerald-600 font-bold tracking-[0.3em] ml-1 uppercase">Historical Archive Explorer</p>
        </header>

        {/* Search Controls Card */}
        <div className="bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Person Autocomplete */}
            <div className="flex flex-col gap-2 relative" ref={suggestionRef}>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Person</label>
              <input 
                type="text"
                placeholder="Type 3+ letters..."
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                value={personQuery}
                onChange={e => {
                  setPersonQuery(e.target.value);
                  setSearchParams({...searchParams, name: ''}); // Reset name until selected
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
              />
              {showSuggestions && filteredNames.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar animate-in fade-in zoom-in-95 duration-200">
                  {filteredNames.map(name => (
                    <button
                      key={name}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      onClick={() => {
                        setPersonQuery(name);
                        setSearchParams({...searchParams, name: name});
                        setShowSuggestions(false);
                      }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
              {showSuggestions && personQuery.length >= 3 && filteredNames.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-xl z-50 p-4 text-xs text-slate-400 italic">
                  No matches found
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Place</label>
              <select 
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                value={searchParams.place}
                onChange={e => setSearchParams({...searchParams, place: e.target.value})}
              >
                <option value="">Any Place</option>
                {uniquePlaces.map(place => <option key={place} value={place}>{place}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Gender</label>
              <select 
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                value={searchParams.gender}
                onChange={e => setSearchParams({...searchParams, gender: e.target.value})}
              >
                <option value="">Any Gender</option>
                {uniqueGenders.map(gender => <option key={gender} value={gender}>{gender}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Social Status</label>
              <select 
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                value={searchParams.social_status}
                onChange={e => setSearchParams({...searchParams, social_status: e.target.value})}
              >
                <option value="">Any Status</option>
                {uniqueStatus.map(status => <option key={status} value={status}>{status}</option>)}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8 pt-8 border-t border-slate-50">
            <button 
              onClick={resetSearch}
              className="px-6 py-3 text-sm font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest transition-colors"
            >
              Reset Filters
            </button>
            <button 
              onClick={handleSearch}
              className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-600 shadow-lg shadow-slate-200 transition-all active:scale-95"
            >
              Search Archive
            </button>
          </div>
        </div>

        {/* Results Section */}
        {hasSearched && (
          <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">Search Results <span className="text-slate-300 font-normal ml-2">({filteredData.length})</span></h2>
            </div>

            <div className="bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Person</th>
                      <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Place</th>
                      <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                      <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Historical Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredData.length > 0 ? (
                      filteredData.map((entry, idx) => (
                        <tr key={idx} className="hover:bg-emerald-50/30 transition-colors group">
                          <td className="px-8 py-6">
                            <div className="text-sm font-bold text-slate-800 group-hover:text-emerald-700">{entry.name}</div>
                            <div className="text-[10px] text-slate-400 mt-1">{entry.gender}</div>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-sm text-slate-600 font-medium">{entry.place}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="inline-flex px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                              {entry.social_status}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <p className="text-xs text-slate-500 leading-relaxed max-w-md">{entry.description}</p>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-8 py-20 text-center">
                          <div className="text-slate-300 font-medium italic">No matching records found in the archive.</div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }
      `}</style>
    </div>
  );
}
