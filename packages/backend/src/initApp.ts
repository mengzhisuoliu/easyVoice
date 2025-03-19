import { ensureDir } from "./utils";
import { AUDIO_DIR, FRONT_DIST, PUBLIC_DIR } from "./config";


export async function initApp() {
  // Prepare works like db, runtime configs...
  await ensureDir(AUDIO_DIR)
  await ensureDir(PUBLIC_DIR)
  await ensureDir(FRONT_DIST)
}