// A lightweight, hand-drawn mock of the tenant dashboard. Pure CSS — no
// screenshot assets to keep in sync while the product UI evolves quickly.

const BARS = [35, 52, 44, 60, 48, 72, 58, 80, 66, 90, 74, 96];

const CATEGORIES = [
  { name: 'Rent', pct: 38, color: 'bg-brand' },
  { name: 'Salaries', pct: 27, color: 'bg-emerald-500' },
  { name: 'Logistics', pct: 19, color: 'bg-amber-500' },
  { name: 'Utilities', pct: 16, color: 'bg-violet-500' },
];

export function AppPreview() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-slate-100 bg-surface-alt">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 text-[10px] text-slate-400 truncate">app.ems — dashboard</span>
      </div>

      <div className="flex">
        {/* mini sidebar */}
        <div className="hidden sm:flex flex-col gap-2 w-28 bg-sidebar p-3">
          <div className="h-5 w-14 rounded bg-brand/80" />
          {['w-20', 'w-16', 'w-[4.5rem]', 'w-14', 'w-16'].map((w, i) => (
            <div key={i} className={`h-2.5 ${w} rounded-full ${i === 0 ? 'bg-slate-400' : 'bg-slate-600'}`} />
          ))}
        </div>

        {/* content */}
        <div className="flex-1 p-4 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'This month', value: '$12,480', delta: '▼ 8%', tone: 'text-emerald-600' },
              { label: 'Avg monthly', value: '$13,900', delta: '', tone: '' },
              { label: 'Branches', value: '6', delta: '', tone: '' },
            ].map((k) => (
              <div key={k.label} className="rounded-lg border border-slate-100 p-2.5">
                <div className="text-[9px] text-slate-400">{k.label}</div>
                <div className="text-xs font-semibold text-slate-900 mt-0.5">
                  {k.value}{' '}
                  {k.delta && <span className={`text-[9px] font-medium ${k.tone}`}>{k.delta}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* trend bars */}
          <div className="rounded-lg border border-slate-100 p-3">
            <div className="text-[9px] text-slate-400 mb-2">Spending trend · 12 months</div>
            <div className="flex items-end gap-1 h-16">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-sm ${i === BARS.length - 1 ? 'bg-brand' : 'bg-brand/25'}`}
                />
              ))}
            </div>
          </div>

          {/* category split */}
          <div className="rounded-lg border border-slate-100 p-3 space-y-1.5">
            <div className="text-[9px] text-slate-400">By category — this month</div>
            {CATEGORIES.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <span className="text-[9px] text-slate-500 w-12">{c.name}</span>
                <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
                </div>
                <span className="text-[9px] text-slate-400 w-7 text-right">{c.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
