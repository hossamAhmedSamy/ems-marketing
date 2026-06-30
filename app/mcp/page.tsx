import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, KeyRound, Plug, ShieldCheck, Terminal } from 'lucide-react';
import { APP_URL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Connect your own AI agent (MCP)',
  description:
    'EMS speaks the Model Context Protocol, so you can connect Claude, ChatGPT or any MCP client and manage your expenses in plain language. Included free.',
  alternates: { canonical: '/mcp' },
};

const STEPS = [
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: 'Mint a token',
    body: (
      <>
        In the EMS app go to <strong>Settings → API tokens → New token</strong> and copy the
        token (<code className="text-brand-700">ems_pat_…</code>). It's shown only once and acts as
        you — it can only ever do what your role allows.
      </>
    ),
  },
  {
    icon: <Plug className="h-5 w-5" />,
    title: 'Add it to your AI client',
    body: (
      <>
        Point your MCP-compatible assistant at the EMS server with that token. Setup takes a
        minute — examples for Claude Desktop and Claude Code are below.
      </>
    ),
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'Ask in plain language',
    body: (
      <>
        “What did the Cairo branch spend last month?” • “Add a 250 EGP fuel expense for Branch
        2.” The EMS tools appear in your assistant and respect every permission and branch scope.
      </>
    ),
  },
];

export default function McpPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1">
        <Bot className="h-3 w-3" /> Included on every plan — even Free
      </div>
      <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        Connect your own AI agent.
      </h1>
      <p className="mt-4 text-slate-600 max-w-2xl">
        EMS speaks the{' '}
        <a
          href="https://modelcontextprotocol.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-700 hover:underline"
        >
          Model Context Protocol
        </a>
        , so you can plug it into Claude, ChatGPT or any MCP client and manage your expense data in
        natural language — from outside the app. No data leaves your control: the connector only
        forwards requests to the EMS API, authenticated as you.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-5">
        {STEPS.map((s, i) => (
          <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center">
                {s.icon}
              </div>
              <span className="text-xs font-semibold text-slate-400">Step {i + 1}</span>
            </div>
            <div className="mt-3 font-semibold text-slate-900">{s.title}</div>
            <p className="mt-1 text-sm text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-brand" /> Connect Claude
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Grab the open-source connector, build it once, then point your client at it with the
          token from step 1.
        </p>

        <div className="mt-4 space-y-4">
          <CodeBlock label="1 — Build the connector (one time)">
            {`git clone https://github.com/hossamAhmedSamy/ems-mcp-server.git
cd ems-mcp-server
npm install
npm run build`}
          </CodeBlock>

          <CodeBlock label="2a — Claude Desktop — claude_desktop_config.json">
            {`{
  "mcpServers": {
    "ems": {
      "command": "node",
      "args": ["/absolute/path/to/ems-mcp-server/dist/server.js"],
      "env": {
        "EMS_API_URL": "https://ems-backend-nyrn.onrender.com/api",
        "EMS_API_TOKEN": "ems_pat_..."
      }
    }
  }
}`}
          </CodeBlock>

          <CodeBlock label="2b — Claude Code — one command">
            {`claude mcp add ems \\
  --env EMS_API_URL=https://ems-backend-nyrn.onrender.com/api \\
  --env EMS_API_TOKEN=ems_pat_... \\
  -- node /absolute/path/to/ems-mcp-server/dist/server.js`}
          </CodeBlock>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Restart your client and the EMS tools (query expenses, dashboard summary, create
          expense, and more) appear automatically — matched to your role's permissions. Prefer
          not to run anything locally? A one-click hosted connector is on the way.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-surface-alt p-5 flex items-start gap-3">
        <ShieldCheck className="h-5 w-5 text-brand-700 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-600">
          <strong className="text-slate-900">Safe by design.</strong> The connector holds no
          business logic and never touches the database — every action runs through the same
          permission, tenant-scoping and audit checks as the app. Revoke a token any time from
          Settings.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Link
          href="/signup"
          className="inline-flex h-11 items-center px-6 rounded-md bg-brand text-white font-medium hover:bg-brand-700 shadow-card transition"
        >
          Start free &amp; get your token
        </Link>
        <a
          href={`${APP_URL}/login`}
          className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1"
        >
          Already have an account? Sign in
        </a>
      </div>
    </main>
  );
}

function CodeBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 py-2 bg-surface-muted/60 border-b border-slate-200 text-xs font-medium text-slate-500">
        {label}
      </div>
      <pre className="p-4 overflow-x-auto text-xs leading-relaxed text-slate-800 bg-white">
        <code>{children}</code>
      </pre>
    </div>
  );
}
