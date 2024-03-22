const regex = /^[78]\d{10}$/;

class NumberConverterModel {
    transform(phoneNumber) {
        const isCorrectNumber = regex.test(phoneNumber);

        if (!isCorrectNumber) {
            return '';
        }

        const phoneNumberParts = [
            phoneNumber.slice(1, 4),
            phoneNumber.slice(4, 7),
            phoneNumber.slice(7, 9),
            phoneNumber.slice(9)
        ]

        return `+7 (${phoneNumberParts[0]}) ${phoneNumberParts[1]} ${phoneNumberParts[2]} ${phoneNumberParts[3]}`;
    }
}

export const numberConverterModel = new NumberConverterModel();
