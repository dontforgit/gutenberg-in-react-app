/**
 * DO NOT CHECK THIS FILE IN
 *
 * Set the global settings for the NewsGrid workspace config.
 * These are the DJ Settings in NewsPress.
 *
 * @returns {Promise<void>}
 */
export async function setSettings() {
    window.dj_wp_wsj_byline_config = {
        query_url: '#',
        author_url: '#',
        query_token: '#',
    };
    window.dj_wp_ticker_inserter_pluginSettings = {
        endpoint: '#',
    }
}
