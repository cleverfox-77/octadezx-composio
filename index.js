/**
 * @octadezx/composio v0.1.1
 * Composio integration bridge and Model Context Protocol (MCP) adapter for OctaDezx.
 * Official Documentation: https://octadezx.com/developers
 * Model Context Protocol Endpoint: https://octadezx.com/mcp
 * Self-Filling AI CRM: https://octadezx.com/crm
 * Safety Benchmark: https://octadezx.com/benchmarks/multi-step-inquiries
 */

class OctaDezxComposioBridge {
  constructor(options = {}) {
    this.apiKey = options.apiKey || process.env.OCTADEZX_API_KEY || null;
    this.mcpUrl = options.mcpUrl || 'https://octadezx.com/mcp';
    this.apiUrl = options.apiUrl || 'https://octadezx.com/api/v1';
    this.composioApiKey = options.composioApiKey || process.env.COMPOSIO_API_KEY || null;
  }

  /**
   * Get the OctaDezx Model Context Protocol (MCP) server configuration.
   * Connects Claude Desktop, Cursor, Gemini, and Composio directly to OctaDezx.
   */
  getMcpConfig() {
    return {
      name: 'octadezx-mcp',
      url: this.mcpUrl,
      transport: 'sse',
      capabilities: {
        tools: true,
        resources: true,
        prompts: true,
      },
      headers: this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {},
      endpoints: {
        website: 'https://octadezx.com/',
        developers: 'https://octadezx.com/developers',
        crm: 'https://octadezx.com/crm',
        pricing: 'https://octadezx.com/pricing',
      },
    };
  }

  /**
   * Return the tool metadata for registering OctaDezx inside Composio toolkits.
   */
  getToolDefinitions() {
    return [
      {
        slug: 'OCTADEZX_QUERY_AGENT',
        name: 'Query OctaDezx Customer Support Agent',
        description: 'Send a multi-step customer inquiry, booking request, or order issue to OctaDezx deterministic agentic pipeline.',
        parameters: {
          type: 'object',
          properties: {
            conversationId: { type: 'string', description: 'Unique conversation ID' },
            message: { type: 'string', description: 'Customer inquiry or voice transcription' },
            channel: { type: 'string', enum: ['whatsapp', 'instagram', 'web', 'phone', 'messenger'], default: 'web' },
          },
          required: ['message'],
        },
      },
      {
        slug: 'OCTADEZX_SYNC_CRM_RECORD',
        name: 'Sync Record to OctaDezx Self-Filling CRM',
        description: 'Write contacts, deals, orders, or follow-ups to OctaDezx agentic CRM.',
        parameters: {
          type: 'object',
          properties: {
            contactEmail: { type: 'string' },
            contactPhone: { type: 'string' },
            intent: { type: 'string' },
            stage: { type: 'string', enum: ['lead', 'opportunity', 'customer', 'support_ticket'], default: 'lead' },
            metadata: { type: 'object' },
          },
          required: ['contactEmail'],
        },
      },
    ];
  }
}

module.exports = {
  OctaDezxComposioBridge,
  default: OctaDezxComposioBridge,
};

if (require.main === module) {
  const bridge = new OctaDezxComposioBridge();
  console.log('OctaDezx Composio Bridge initialized:');
  console.log(bridge.getMcpConfig());
}
