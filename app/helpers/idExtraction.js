export function idExtraction(url) {
    const firstIndex = url.indexOf('v2') + 3;
    const secondIndex = url.indexOf('?');
    const id = url.slice(firstIndex, secondIndex);

    // console.log(url)
    // console.log(id)

    return id;
}