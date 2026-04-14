
Facebook Ads MCP server
TypeScript · MCP SDK · Zod · Node.js · Mar 2026
backend
what is MCP — say this if interviewer isn't familiar

"MCP — Model Context Protocol — is an open standard for giving AI agents access to external tools. Think of it like an API layer, but designed specifically so AI models can discover and call tools reliably. It's been getting a lot of traction — Anthropic, OpenAI, and others are adopting it."
what i built

"I built a production-ready MCP server that exposes five analytical tools over Facebook ad campaign data — 1,143 ad records across 3 campaigns. The tools are: get campaigns, get campaign insights, account summary, top performers by any metric, and a recommendations engine. It's deployed on Vercel and supports both stdio and httpStreamable transport."
the engineering decision i'm proud of

"I used Zod for end-to-end runtime type validation on both the input and output of every tool. MCP tools are called by AI agents, and agents can pass malformed data. Zod eliminates an entire class of data contract bugs before they can cause silent failures downstream."


the recommendations engine
"It analyzes spend by age group and gender segment, calculates average spend per segment, and surfaces the best-performing combination per campaign. So if you're a client asking 'where should I put my ad budget?', you get a data-driven answer directly from your campaign data."

TypeScript MCP SDK Zod Node.js Vercel 