import persist from 'svelte-persist';

export const accessTokenStore = persist('access_token', '');
