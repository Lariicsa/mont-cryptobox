exports.stringToJson = (str) => {
    const decoder = new TextDecoder('utf8');
    try {
        const obj = JSON.parse(decoder.decode(str))
        return obj
    } catch(e) {
        return null;
    }
}