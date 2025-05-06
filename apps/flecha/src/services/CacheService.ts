import { redis } from '../lib/redis';

export const cacheService = {
  async get<T>(key: string): Promise<T | null> {
    const data = await redis.get(key);
    if (typeof data !== 'string') return null; // Ensure it's a string

    return JSON.parse(data) as T;
  },

  async set<T>(key: string, value: T, ttlSeconds: number): Promise<void> {
    await redis.set(key, JSON.stringify(value), { ex: ttlSeconds });
  },

  async del(key: string): Promise<void> {
    await redis.del(key);
  }
};
