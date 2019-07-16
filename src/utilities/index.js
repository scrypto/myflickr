export function formatUsername(username) {
    return username === null ? "" : username.match(/\(\"(.*)\"\)/)[1];
}

export function formatTags(tags) {
    const maxLength = 100;
    return tags.substring(0, maxLength) + (tags.length > maxLength ? "..." : "");
}

export function formatTimestamp(timestamp) {
    return timestamp === null ? "" : new Date(timestamp).toLocaleString();
}