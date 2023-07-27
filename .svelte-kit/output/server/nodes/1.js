

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e7b628f5.js","_app/immutable/chunks/scheduler.89bf212d.js","_app/immutable/chunks/index.44fa51b5.js","_app/immutable/chunks/singletons.fd1f85e3.js"];
export const stylesheets = [];
export const fonts = [];
