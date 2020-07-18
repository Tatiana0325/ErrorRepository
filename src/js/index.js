export default class ErrorRepository {
    constructor() {
        this.error = new Map([[101, 'Ошибка1'], [102, 'Ошибка2'], [103, 'Ошибка3']]);
    }

    translate(code) {
        if(this.error.get(code) != undefined) {
            return this.error.get(code);
        } else {
            return 'Unknown error';
        };
    }
}