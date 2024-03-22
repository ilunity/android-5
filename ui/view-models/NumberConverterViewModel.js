import {makeAutoObservable} from "mobx";
import {numberConverterModel} from "../../domain-models/NumberConverterModel";

export const NUMBER_CONVERTER_STATES = {
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error',
}

export class NumberConverterViewModel {
    status = NUMBER_CONVERTER_STATES.PENDING;
    content = '';

    constructor() {
        makeAutoObservable(this)
    }

    transform(phoneNumber) {
        const transformResult = numberConverterModel.transform(phoneNumber);

        if (!transformResult) {
            this.status = NUMBER_CONVERTER_STATES.ERROR;
            return;
        }

        this.status = NUMBER_CONVERTER_STATES.SUCCESS;
        this.content = transformResult;
    }

    reset() {
        this.status = NUMBER_CONVERTER_STATES.PENDING;
        this.content = '';
    }
}
