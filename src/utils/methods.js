export const getTracks = (item) => {
    const date = new Date();
    const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    // Map Monday..Sunday -> 0..6
    const mappedIndex = (day + 6) % 7;
    if (Array.isArray(item) && item.length > mappedIndex) {
        return item[mappedIndex];
    }
    return Array.isArray(item) && item.length > 0 ? item[0] : undefined;
}

