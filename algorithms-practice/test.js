function getMinimumSize(requests, k) {
    // Initialize an empty cache
    const cache = [];
    const cacheMap = new Map();

    // Function to update cache with the most recently used item
    const updateCache = (item) => {
        const index = cache.indexOf(item);
        if (index !== -1) {
            // Remove the item from its current position
            cache.splice(index, 1);
        }
        // Add the item to the beginning of the cache (most recently used)
        cache.unshift(item);
    };

    // Process each request
    for (const item of requests) {
        // If the item is already in the cache, update its position
        if (cacheMap.has(item)) {
            updateCache(item);
        } else {
            // If the cache is not full, add the item to the cache
            if (cache.length < k) {
                cache.unshift(item);
                cacheMap.set(item, true);
            } else {
                // If the cache is full, remove the least recently used item
                const lruItem = cache.pop();
                cacheMap.delete(lruItem);

                // Add the new item to the cache
                cache.unshift(item);
                cacheMap.set(item, true);
            }
        }
    }

    // Return the minimum cache size required to achieve at least k hits
    return cache.length >= k ? cache.length : -1;
}

const requests = ["item3", "item2", "item1", "item2", "item3"];
const k = 1;

const result = getMinimumSize(requests, k);
console.log(result);