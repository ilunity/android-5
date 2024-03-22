import {observer} from "mobx-react-lite";
import {useState} from "react";
import {NUMBER_CONVERTER_STATES, NumberConverterViewModel} from "../view-models/NumberConverterViewModel";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";


export const NumberConverterView = observer(() => {
    const [numberConverterViewModel] = useState(() => new NumberConverterViewModel())
    const [inputValue, setInputValue] = useState('');

    const onPress = () => {
        numberConverterViewModel.transform(inputValue);
    }

    const handleInputChange = (text) => {
        setInputValue(text);
        numberConverterViewModel.reset();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Введите номер телефона в виде числа.
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder={"88005553535"}
                underlineColorAndroid="transparent"
                onChangeText={handleInputChange}
                value={inputValue}
                placeholderTextColor={'rgba(0,0,0,0.35)'}
            />
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Преобразовать</Text>
            </Pressable>
            <Text style={styles.resultText}>
                {numberConverterViewModel.status === NUMBER_CONVERTER_STATES.ERROR
                    ? 'Некорректный ввод. Попробуйте снова!'
                    : `Преобразованный номер: ${numberConverterViewModel.content}`
                }
            </Text>
        </View>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#130F26',
        padding: 20,
        gap: 20,
    },
    text: {
        width: '100%',
        color: 'rgba(255,255,255,0.8)',
    },
    textInput: {
        height: 50,
        width: '100%',

        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',

        backgroundColor: '#fff',
        opacity: 0.7,
        borderRadius: 10,
        paddingHorizontal: 8
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        color: '#fff',
    },
    resultText: {
        height: 50,
        lineHeight: 50,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#fff',
        opacity: 0.8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
