import dotenv from "dotenv";
import path from 'path';

dotenv.config({ path: [path.resolve(__dirname, '..', '..', '.env'), path.resolve(__dirname, '..', '..', '..', '..', '.env')] });

export const config = {
  port: parseInt(process.env.PORT || "3000", 10),
};

export const AUDIO_DIR = path.join(__dirname, '..', '..', 'audio');
export const AUDIO_CACHE_DIR = path.join(AUDIO_DIR, '.cache');
export const PUBLIC_DIR = path.join(__dirname, '..', '..', 'public');
export const ALLOWED_EXTENSIONS = new Set(['.mp3', '.wav', '.ogg']);

export const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL
export const OPENAI_KEY = process.env.OPENAI_KEY
export const MODEL_NAME = process.env.MODEL_NAME

export const STATIC_DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

export const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW || '0') || 10;
export const RATE_LIMIT = parseInt(process.env.RATE_LIMIT || '0') || 1e6;