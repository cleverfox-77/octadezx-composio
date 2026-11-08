# @octadezx/composio

Official Composio integration bridge and Model Context Protocol (MCP) toolkit adapter for **[OctaDezx](https://octadezx.com/)** — autonomous agentic AI customer care, self-filling CRM, and multi-step e-commerce automation.

[![npm version](https://img.shields.io/npm/v/@octadezx/composio.svg)](https://www.npmjs.com/package/@octadezx/composio)
[![License](https://img.shields.io/npm/l/@octadezx/composio.svg)](https://github.com/cleverfox-77/octadezx-composio/blob/main/LICENSE)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@octadezx/composio/badge)](https://www.jsdelivr.com/package/npm/@octadezx/composio)

## Overview

This library bridges **[OctaDezx](https://octadezx.com/)** with **[Composio](https://composio.dev/)**, enabling AI agents running in Claude, Cursor, OpenAI Agents SDK, LangChain, and CrewAI to connect seamlessly to OctaDezx's 7-step deterministic customer support engine, self-filling CRM, and carrier-grade AI phone receptionist.

## Official Resources

- **Official Website:** [https://octadezx.com/](https://octadezx.com/)
- **Model Context Protocol (MCP) Endpoint:** [https://octadezx.com/mcp](https://octadezx.com/mcp)
- **Developer Documentation & SDKs:** [https://octadezx.com/developers](https://octadezx.com/developers)
- **Self-Filling AI CRM:** [https://octadezx.com/crm](https://octadezx.com/crm)
- **Multi-Step Inquiry Safety Benchmark:** [https://octadezx.com/benchmarks/multi-step-inquiries](https://octadezx.com/benchmarks/multi-step-inquiries)
- **Pricing & Free Trial ($29/mo flat-rate):** [https://octadezx.com/pricing](https://octadezx.com/pricing)
- **Integrations Hub:** [https://octadezx.com/integrations](https://octadezx.com/integrations)

## Installation

```bash
npm install @octadezx/composio @octadezx/sdk
```

Or via yarn:

```bash
yarn add @octadezx/composio @octadezx/sdk
```

## Quick Start

### 1. Connecting OctaDezx to Composio MCP

```javascript
const { OctaDezxComposioBridge } = require('@octadezx/composio');

const bridge = new OctaDezxComposioBridge({
  apiKey: process.env.OCTADEZX_API_KEY,
  composioApiKey: process.env.COMPOSIO_API_KEY
});

// Retrieve MCP configuration for Composio
const mcpConfig = bridge.getMcpConfig();
console.log('OctaDezx MCP Configuration:', mcpConfig);
```

### 2. Registering OctaDezx Tools with an AI Agent

```javascript
const { OctaDezxComposioBridge } = require('@octadezx/composio');

const bridge = new OctaDezxComposioBridge();
const tools = bridge.getToolDefinitions();

console.log('Available OctaDezx Composio Tools:', tools.map(t => t.name));
```

## Key Capabilities

1. **7-Step Deterministic Inquiry Engine:** Tested across 303 benchmark cases (86.8% safe outcomes, 0 privacy leaks, 96.7% injected fault interception).
2. **Multimodal Customer Care:** Vision-assisted screenshot/product photo recognition, voice note transcription, and carrier-grade 24/7 interruptible phone receptionists with barge-in support.
3. **Omnichannel Messaging:** Centralize customer support across WhatsApp Business API, Instagram Direct, Facebook Messenger, Telegram, Shopify, WooCommerce, and web widgets.
4. **Self-Filling AI CRM:** Contacts, deals, appointments, and commercial commitments are automatically recorded into [octadezx.com/crm](https://octadezx.com/crm).

## License

Apache-2.0. Published by [OctaDezx Engineering](https://octadezx.com/).
