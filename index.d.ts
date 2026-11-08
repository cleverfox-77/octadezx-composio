export interface OctaDezxComposioOptions {
  apiKey?: string;
  mcpUrl?: string;
  apiUrl?: string;
  composioApiKey?: string;
}

export interface OctaDezxMcpConfig {
  name: string;
  url: string;
  transport: string;
  capabilities: {
    tools: boolean;
    resources: boolean;
    prompts: boolean;
  };
  headers: Record<string, string>;
  endpoints: {
    website: string;
    developers: string;
    crm: string;
    pricing: string;
  };
}

export interface OctaDezxToolDefinition {
  slug: string;
  name: string;
  description: string;
  parameters: Record<string, any>;
}

export declare class OctaDezxComposioBridge {
  constructor(options?: OctaDezxComposioOptions);
  getMcpConfig(): OctaDezxMcpConfig;
  getToolDefinitions(): OctaDezxToolDefinition[];
}

export default OctaDezxComposioBridge;
