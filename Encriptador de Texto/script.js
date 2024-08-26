document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');

    const cipher = {
        a: '1', b: '2', c: '3', d: '4', e: '5',
        f: '6', g: '7', h: '8', i: '9', j: '10',
        k: '11', l: '12', m: '13', n: '14', o: '15',
        p: '16', q: '17', r: '18', s: '19', t: '20',
        u: '21', v: '22', w: '23', x: '24', y: '25', z: '26'
    };

    const decipher = {
        '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e',
        '6': 'f', '7': 'g', '8': 'h', '9': 'i', '10': 'j',
        '11': 'k', '12': 'l', '13': 'm', '14': 'n', '15': 'o',
        '16': 'p', '17': 'q', '18': 'r', '19': 's', '20': 't',
        '21': 'u', '22': 'v', '23': 'w', '24': 'x', '25': 'y', '26': 'z'
    };

    function encrypt(text) {
        return text.split('').map(char => cipher[char] || char).join(' ');
    }

    function decrypt(text) {
        return text.split(' ').map(code => decipher[code] || code).join('');
    }

    encryptButton.addEventListener('click', () => {
        const text = inputText.value.trim().toLowerCase().replace(/[^a-z\s]/g, '');
        if (text) {
            outputText.value = encrypt(text);
        }
    });

    decryptButton.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (text) {
            outputText.value = decrypt(text);
        }
    });
});
