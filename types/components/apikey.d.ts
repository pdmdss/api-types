export interface Apikey {
  id: number;
  name: string | null;
  key: string;
  createTime: string;
  scopes: string[];
  allowed: {
    ipAddresses: string[];
    originDomains: string[];
  };
}
