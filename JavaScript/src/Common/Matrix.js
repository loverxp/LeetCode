
exports.Matrix = class {
    constructor() {

    }

    static matrixToString(matrix) {
        matrix = matrix.map(line => line.slice());
        for (const line of matrix) {
            for (let i = 0; i < line.length; i++) {
                if (!isFinite(line[i])) {
                    line[i] = line[i] > 0 ? '∞' : '-∞';
                }
            }
        }
        const maxLength = Math.max(...matrix.flat().map(o => o.toString().length));
        // console.log({maxLength});
        return matrix
            .map(a => a.map(o => Array(maxLength - o.toString().length).fill(' ').join('') + o)
                .join(' '))
            .join('\n');

        // return matrix.map(a => a.join(' ')).join('\n');
    }

    static logMatrixInArray(matrix, dontUseEmptyLine) {
        if (!dontUseEmptyLine) {
            console.log();
        }
        console.log(this.matrixToString(matrix));
        // console.log(matrix.map(a => a.join(' ')).join('\n'));
    }

    static logBooleanMatrixInArray(matrix) {
        console.log();
        // console.log(matrix.map(a => a.map(b => b ? 't' : 'f').join(' ')).join('\n'));
        console.log(matrix.map(a => a.map(b => b ? 't' : '_').join(' ')).join('\n'));
    }

    static logMatrixInString(matrix) {
        console.log();
        // console.log(matrix.join('\n'));
        console.log(matrix.map(arr =>arr.join(' ')).join('\n'));
    }

    static logStringMatrix(matrix){
        console.log(matrix.map(a => a.join(' ')).join('\n'));
    }

    static random(size) {
        const matrix = [];
        for (i = 0; i < size; i++) {
            const row = [];
            for (j = 0; j < size; j++) {
                row.push(Math.floor(Math.random() * 10));
            }
            matrix.push(row);
        }
        return matrix;
    }
};