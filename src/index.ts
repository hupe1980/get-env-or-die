import { URL } from 'url';

export const getEnv = (name: string, fallback?: string): string => {
  return getStringEnv(name, fallback) as string;
};

export const getStringEnv = (name: string, fallback?: string): string => {
  return genericGetEnv(name, fallback) as string;
};

export const getIntEnv = (name: string, fallback?: number): number => {
  const env = genericGetEnv(name, fallback);
  const int = parseInt(env, 10);
  if (isNaN(int)) {
    throw new Error(`Env ${name} is not an integer.`);
  }
  return int;
};

export const getBoolEnv = (name: string, fallback?: boolean): boolean => {
  let env = genericGetEnv(name, fallback);
  if (typeof env === 'boolean') return env;
  env = env.toLowerCase();
  if (env === '1' || env === 'true') return true;
  if (env === '0' || env === 'false') return false;
  throw new Error(`Env ${name} is not a boolean.`);
};

export const getArrayEnv = (name: string, fallback?: string[]): string[] => {
  const env = genericGetEnv(name, fallback);
  if (Array.isArray(env)) return env;
  return env.split(',');
};

export const getUrlEnv = (name: string, fallback?: URL): URL => {
  const env = genericGetEnv(name, fallback);
  try {
    return new URL(env);
  } catch {
    throw new Error(`Env ${name} is not an url.`);
  }
};

export const getDateEnv = (name: string, fallback?: Date): Date => {
  const env = genericGetEnv(name, fallback);
  const date = new Date(env);
  if (date.toString() === 'Invalid Date') {
    throw new Error(`Env ${name} is not a date.`);
  }
  return date;
};

const genericGetEnv = (name: string, fallback?: any): any => {
  const env = process.env[name];
  if (env) return env;
  if (fallback) return fallback;
  throw new Error(`Env ${name} does not exist and no fallback value provided.`);
};
