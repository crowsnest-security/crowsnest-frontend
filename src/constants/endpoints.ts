export const BASE_API_ENDPOINT = `/api`;

// Capabilities
export const CAPABILITIES_ENDPOINT = `${BASE_API_ENDPOINT}/capabilities`;
export const CAPABILITIES_WITH_DOMAIN_ENDPOINT = `${BASE_API_ENDPOINT}/capabilities/domain`;
export const CAPABILITIES_BY_DOMAIN_ENDPOINT = `${BASE_API_ENDPOINT}/capabilities/domain/{domainId}`;
export const CAPABILITIES_SIZE_BY_DOMAIN_ENDPOINT = `${BASE_API_ENDPOINT}/capabilities/domain/{domainId}/count`;
export const CAPABILITIES_SIZE_BY_DOMAIN_AND_FLAG_ENDPOINT = `${BASE_API_ENDPOINT}/capabilities/domain/{domainId}/flag/{flagId}/count`;
export const CAPABILITIES_BY_DOMAIN_DESCRIPTION_ENDPOINT = `${BASE_API_ENDPOINT}/capabilities/domains/{description}`;
export const CAPABILITIES_BY_ID_ENDPOINT = `${BASE_API_ENDPOINT}/capabilities/{id}`;

// Domains
export const DOMAINS_ENDPOINT = `${BASE_API_ENDPOINT}/domains`;
export const DOMAIN_BY_ID_ENDPOINT = `${BASE_API_ENDPOINT}/domains/{id}`;

// Flags
export const FLAGS_ENDPOINT = `${BASE_API_ENDPOINT}/flags`;
export const FLAGS_BY_ID_ENDPOINT = `${BASE_API_ENDPOINT}/flags/{id}`;

// Integrations
export const INTEGRATIONS_ENDPOINT = `${BASE_API_ENDPOINT}/integrations`;
export const INTEGRATIONS_BY_ID_ENDPOINT = `${BASE_API_ENDPOINT}/integrations/{id}`;
export const INTEGRATIONS_WITH_CAPABILITY_ENDPOINT = `${BASE_API_ENDPOINT}/integrations/capability`;
export const INTEGRATIONS_BY_CAPABILITY_ENDPOINT = `${BASE_API_ENDPOINT}/integrations/capability/{capabilityId}`;
export const INTEGRATIONS_SIZE_BY_CAPABILITY_ENDPOINT = `${BASE_API_ENDPOINT}/integrations/capability/{capabilityId}/count`;

// PROFILES
export const PROFILES_ENDPOINT = `${BASE_API_ENDPOINT}/profiles`;
export const PROFILES_BY_ID_ENDPOINT = `${BASE_API_ENDPOINT}/profiles/{id}`;
