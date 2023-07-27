

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8b1252b2.js","_app/immutable/chunks/scheduler.89bf212d.js","_app/immutable/chunks/index.44fa51b5.js"];
export const stylesheets = [];
export const fonts = [];
