import React, { useState, useRef, useMemo } from 'react';
import { WOODSTOCK_ARTISTS, WOODSTOCK_PRODUCERS, WOODSTOCK_LOGISTICS, WOODSTOCK_MODERN_LEGACY, WOODSTOCK_PHOTOGRAPHERS, WOODSTOCK_REUNION } from './constants';
import { Artist } from './types';

// Removed: import { editImageWithGemini } ...
// Removed: ImageState, Producer imports (if not used elsewhere, otherwise keep Producer)

const App: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist>(WOODSTOCK_ARTISTS[0]);
  
  // REPLACED: Simple state for just showing the uploaded image
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const archiveRef = useRef<HTMLDivElement>(null);

  // REMOVED: All useEffects for API keys and handleOpenKey
  // REMOVED: handleEditImage function

  const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const artist = WOODSTOCK_ARTISTS.find(a => a.id === e.target.value);
    if (artist) setSelectedArtist(artist);
  };

  const selectArtistFromTimeline = (artist: Artist) => {
    setSelectedArtist(artist);
    archiveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const dayGroupedArtists = useMemo(() => {
    return [1, 2, 3].map(day => ({
      day,
      date: day === 1 ? 'Friday, Aug 15' : day === 2 ? 'Saturday, Aug 16' : 'Sunday/Monday, Aug 17-18',
      artists: WOODSTOCK_ARTISTS.filter(a => a.day === day)
    }));
  }, []);

  // REMOVED: The "if (!hasKey)" return block (Login Screen)

  return (
    <div className="min-h-screen pb-40 bg-slate-950 text-slate-100 overflow-x-hidden">
      <header className="relative py-16 px-4 bg-gradient-to-b from-orange-600/20 to-transparent border-b border-orange-500/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="woodstock-font text-6xl md:text-8xl text-orange-500 drop-shadow-lg mb-4">
            Woodstock '69
          </h1>
          <p className="groovy-title text-xl md:text-2xl text-yellow-400 tracking-widest uppercase">
            3 Days of Peace & Music
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8" ref={archiveRef}>
          <section className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🎸</span> Artist Profile
            </h2>
            
            <div className="mb-8">
              <label htmlFor="artist-select" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">
                Browse Full Roster
              </label>
              <select
                id="artist-select"
                value={selectedArtist.id}
                onChange={handleArtistChange}
                className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all cursor-pointer text-lg"
              >
                {WOODSTOCK_ARTISTS.map(a => (
                  <option key={a.id} value={a.id}>{a.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/80 p-8 rounded-xl border border-orange-500/20 mb-6">
                <h3 className="woodstock-font text-5xl text-orange-400 drop-shadow-md mb-2">{selectedArtist.name}</h3>
                <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">{selectedArtist.genre}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Age then" value={selectedArtist.ageAtTime} icon="👤" />
                <StatCard label="Time" value={selectedArtist.performanceTime} icon="⏰" />
                <StatCard label="Genre" value={selectedArtist.genre} icon="🎵" />
                <StatCard label="Origin" value={selectedArtist.origin.split(',')[0]} icon="📍" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-400 border-b border-orange-400/20 pb-2">Setlist Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedArtist.setlist.map((song, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <span className="text-orange-500/50 font-mono text-sm">{String(idx + 1).padStart(2, '0')}</span>
                      {song}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400 border-b border-yellow-400/20 pb-2">Impact & Success</h3>
                <p className="text-slate-300 leading-relaxed text-lg italic">
                  "{selectedArtist.postWoodstockSuccess}"
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* REPLACED SECTION: Simplified Photo Upload Frame */}
        <div className="lg:col-span-5 space-y-8">
          <section className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl sticky top-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Woodstock Memory
            </h2>
            <p className="text-slate-400 mb-6 text-sm">
              Upload your own photo to place it in the digital archive frame.
            </p>

            <div className="space-y-4">
              <div className="relative group aspect-[2/3] max-w-sm mx-auto bg-slate-800 rounded-xl overflow-hidden border-2 border-dashed border-slate-700 flex flex-col items-center justify-center transition-colors hover:border-orange-500/50">
                {uploadedImage ? (
                  <img src={uploadedImage} alt="User upload" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-8">
                    <div className="text-4xl mb-4">📸</div>
                    <p className="text-slate-400">Click to upload photo</p>
                    <p className="text-[10px] text-slate-500 mt-2 uppercase">Vertical Aspect 2:3</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => setUploadedImage(reader.result as string);
                      reader.readAsDataURL(file);
                    }
                  }}
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              
              {uploadedImage && (
                <button
                  onClick={() => setUploadedImage(null)}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs rounded-lg transition-colors uppercase tracking-widest"
                >
                  Remove Photo
                </button>
              )}
            </div>
          </section>
        </div>

        <div className="lg:col-span-12 mt-12 grid grid-cols-1 gap-12">
          <section className="bg-slate-900/60 p-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
            <h2 className="woodstock-font text-5xl text-orange-400 mb-8 text-center">The Visionaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WOODSTOCK_PRODUCERS.map((producer) => (
                <div key={producer.name} className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 transition-all flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl bg-slate-950 w-16 h-16 flex items-center justify-center rounded-full border border-orange-500/20">{producer.icon}</div>
                    <div>
                      <h3 className="groovy-title text-xl text-yellow-500 mb-1">{producer.name}</h3>
                      <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">{producer.role}</div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{producer.background}</p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 border-t border-slate-700 pt-4">{producer.contribution}</p>
                  
                  {producer.links && producer.links.length > 0 && (
                    <div className="mt-auto space-y-2">
                      {producer.links.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center gap-2 text-[10px] font-bold text-orange-500 hover:text-orange-400 transition-colors uppercase tracking-widest border border-orange-500/30 px-3 py-2 rounded-lg bg-orange-500/5 text-center leading-tight"
                        >
                          <span>🔗</span> {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900/60 p-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
            <h2 className="woodstock-font text-5xl text-yellow-500 mb-8 text-center">Woodstock Photographers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {WOODSTOCK_PHOTOGRAPHERS.map((photog) => (
                <div key={photog.name} className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 transition-all flex flex-col border-b-4 border-b-yellow-500/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl bg-slate-950 w-16 h-16 flex items-center justify-center rounded-full border border-yellow-500/20">{photog.icon}</div>
                    <div>
                      <h3 className="groovy-title text-xl text-yellow-400 mb-1">{photog.name}</h3>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{photog.role}</div>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <p className="text-slate-300 text-sm leading-relaxed">{photog.bio}</p>
                    <p className="text-slate-400 text-xs italic border-l-2 border-yellow-500/30 pl-4">{photog.legacy}</p>
                  </div>
                  <a 
                    href={photog.officialSite} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-yellow-500 hover:bg-yellow-500/10 transition-all uppercase tracking-widest border-2 border-yellow-500/30 px-6 py-3 rounded-xl"
                  >
                    <span>🖼️</span> Official Gallery
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-green-950/20 p-10 rounded-3xl border border-green-500/20 shadow-2xl relative">
            <h2 className="woodstock-font text-5xl text-green-400 mb-8 text-center">{WOODSTOCK_LOGISTICS.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <p className="text-xl text-slate-200 leading-relaxed font-medium">{WOODSTOCK_LOGISTICS.summary}</p>
                <div className="bg-slate-900/60 p-6 rounded-2xl border-l-4 border-green-500">
                  <h4 className="groovy-title text-sm text-green-500 mb-2 uppercase tracking-widest">Max Yasgur</h4>
                  <p className="text-slate-300 text-sm italic">{WOODSTOCK_LOGISTICS.yasgurFact}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5">
                  <h4 className="font-bold text-orange-400 mb-2">🚁 Logistical Chaos</h4>
                  <p className="text-sm text-slate-300">{WOODSTOCK_LOGISTICS.chaosFact}</p>
                </div>
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5">
                  <h4 className="font-bold text-yellow-400 mb-2">🥪 Survival & Spirit</h4>
                  <p className="text-sm text-slate-300">{WOODSTOCK_LOGISTICS.spiritFact}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-900/40 p-8 rounded-3xl border border-white/5">
            <h2 className="woodstock-font text-5xl text-yellow-500 mb-12 text-center">Festival Chronology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dayGroupedArtists.map(group => (
                <div key={group.day} className="space-y-6">
                  <div className="text-center border-b border-white/10 pb-4">
                    <h3 className="groovy-title text-xl text-orange-400">Day {group.day}</h3>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{group.date}</p>
                  </div>
                  <div className="relative pl-6 space-y-4 border-l-2 border-slate-800">
                    {group.artists.map(artist => (
                      <div 
                        key={artist.id}
                        onClick={() => selectArtistFromTimeline(artist)}
                        className={`group relative p-4 rounded-xl cursor-pointer transition-all border ${
                          selectedArtist.id === artist.id ? 'bg-orange-500/20 border-orange-500' : 'bg-slate-800/30 border-transparent hover:bg-slate-800/60'
                        }`}
                      >
                        <div className={`absolute -left-[31px] top-6 w-4 h-4 rounded-full border-2 border-slate-950 ${selectedArtist.id === artist.id ? 'bg-orange-500' : 'bg-slate-700'}`} />
                        <div>
                          <h4 className="font-bold text-slate-100 group-hover:text-orange-400 transition-colors">{artist.name}</h4>
                          <p className="text-[10px] font-mono text-slate-500 uppercase">{artist.performanceTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-950/20 p-10 rounded-3xl border border-blue-500/20 shadow-2xl backdrop-blur-sm">
            <h2 className="woodstock-font text-5xl text-blue-400 mb-8 text-center">{WOODSTOCK_MODERN_LEGACY.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h4 className="groovy-title text-xl text-blue-300 mb-4">Alan Gerry's Vision</h4>
                  <p className="text-xl text-slate-200 leading-relaxed">{WOODSTOCK_MODERN_LEGACY.gerryVision}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/30">
                    <h5 className="font-bold text-blue-400 mb-2">🏛️ The Museum</h5>
                    <p className="text-sm text-slate-300 mb-4">{WOODSTOCK_MODERN_LEGACY.museumDetail}</p>
                    <div className="border-t border-blue-500/20 pt-3">
                      <h6 className="text-[10px] uppercase font-bold text-blue-300 mb-2">Notable Recognition</h6>
                      <ul className="space-y-1">
                        {WOODSTOCK_MODERN_LEGACY.awards.map((award, i) => (
                          <li key={i} className="text-[11px] text-slate-400 flex items-start gap-2">
                            <span className="text-blue-500">•</span> {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/30">
                    <h5 className="font-bold text-blue-400 mb-2">🗿 The Monument</h5>
                    <p className="text-sm text-slate-300 italic mb-2">Sculpted by {WOODSTOCK_MODERN_LEGACY.monumentCreator}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{WOODSTOCK_MODERN_LEGACY.monumentDetail}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/30 text-center">
                  <div className="text-blue-400 text-3xl mb-2">🏛️</div>
                  <h4 className="groovy-title text-sm text-blue-300 mb-1 uppercase tracking-widest">Site Status</h4>
                  <div className="text-xs font-bold text-white mb-2">National Historic Landmark</div>
                </div>
                <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/5 text-center">
                  <div className="text-6xl text-blue-400 mb-2">🕊️</div>
                  <h4 className="groovy-title text-lg text-slate-100">The Dove Trail</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{WOODSTOCK_MODERN_LEGACY.doveTrailDetail}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-orange-950/20 p-10 rounded-3xl border border-orange-500/20 shadow-2xl relative">
            <h2 className="woodstock-font text-5xl text-orange-400 mb-8 text-center">{WOODSTOCK_REUNION.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <p className="text-xl text-slate-200 leading-relaxed font-medium">{WOODSTOCK_REUNION.summary}</p>
                <div className="bg-slate-900/60 p-6 rounded-2xl border-l-4 border-orange-500">
                  <h4 className="groovy-title text-sm text-orange-500 mb-2 uppercase tracking-widest">Community Connection</h4>
                  <p className="text-slate-300 text-sm">{WOODSTOCK_REUNION.connection}</p>
                </div>
              </div>
              <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5 flex flex-col justify-center">
                <h4 className="font-bold text-yellow-400 mb-4 text-center text-xl uppercase tracking-widest">Reunion Highlights</h4>
                <p className="text-slate-300 leading-relaxed text-center italic">
                  "{WOODSTOCK_REUNION.highlights}"
                </p>
                <div className="mt-8 flex justify-center gap-6">
                  <span className="text-4xl opacity-50">🎸</span>
                  <span className="text-4xl opacity-50">⛺</span>
                  <span className="text-4xl opacity-50">☮️</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-white/5 py-4 px-6 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-slate-400 text-sm">Explore the legend &bull; Woodstock 1969 Archive</p>
          <div className="flex gap-4">
             <span className="text-xs bg-orange-950/50 text-orange-400 px-3 py-1 rounded-full border border-orange-500/20">Peace ☮️</span>
             <span className="text-xs bg-yellow-950/50 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/20">Love ❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; icon: string }> = ({ label, value, icon }) => (
  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
    <div className="text-2xl mb-1">{icon}</div>
    <div className="text-xs text-slate-400 uppercase tracking-tighter mb-1">{label}</div>
    <div className="font-bold text-lg leading-tight">{value}</div>
  </div>
);

export default App;
