export default function sortedHealth(characters) {
    return characters.sort((a, b) => a.health < b.health ? 1 : -1);
}
