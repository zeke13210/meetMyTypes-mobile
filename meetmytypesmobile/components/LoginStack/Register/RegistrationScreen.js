import React, { useState } from 'react';
import { Container, Content, Text, Input, Item, Button, Form, Icon, Header, Picker } from 'native-base';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RegistrationScreen({ navigation }) {
    const [email, setEmail] = useState()
    const [gender, setGender] = useState(null)
    const [password, setPassword] = useState()
    const [dateOfBirth, setDateOfBirth] = useState(new Date(1598051730000))
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <Container>
            <Header>
                <Text>To register fill out the form below</Text>
            </Header>
            <Content padder>
                <Form>

                    <Item regular style={styles.inputBox}>
                        <Input placeholder="email"
                            onChangeText={(text) => setEmail(text)}
                            placeholderTextColor="black"
                            value={email} />
                    </Item>
                    <Item regular style={styles.inputBox}>
                        <Input placeholder="password"
                            onChangeText={(text) => setPassword(text)}
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            value={password} />
                    </Item>

                    <Text>Date of Birth</Text>
                    <Button block primary onPress={showDatepicker}>
                        <Text >Show date picker!</Text>
                    </Button>
                    <Button block primary onPress={showTimepicker}>
                        <Text>Show Time picker</Text>
                    </Button>
                    <Item picker>
                        <Text>Gender</Text>

                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Gender"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={gender}
                            onValueChange={(text) => setGender(text)}
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                    </Item>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={dateOfBirth}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                    <Button block primary onPress={() => navigation.goBack()}>
                        <Text>Go back</Text>
                    </Button>
                </Form>

            </Content>

        </Container>)
}

const styles = StyleSheet.create({
    inputBox: {
        width: '100%',
        backgroundColor: '#E5E5E5',
        borderColor: 'gray',
        borderRadius: 2,
        paddingHorizontal: 10,
        fontSize: 16,
        marginVertical: 10,
    }
})