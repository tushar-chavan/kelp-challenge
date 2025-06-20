

export default function csvToJson(csvString) {
    console.log(csvString);

    const [headerLine, ...lines] = csvString.trim().split('\n');
    const headers = headerLine.split(',').map(h => h.trim());
    return lines.map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj = {};
        headers.forEach((header, i) => {
            setNested(obj, header, values[i]);
        });
        return obj;
    });
}

function setNested(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    keys.forEach((k, i) => {
        if (i === keys.length - 1) current[k] = value;
        else current = current[k] = current[k] || {};
    });
}

