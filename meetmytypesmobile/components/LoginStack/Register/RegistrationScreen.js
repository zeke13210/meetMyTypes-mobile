import React, { useState } from 'react';
import { Container, Content, Text, Input, Item, Button, Form, Icon, Header, Picker } from 'native-base';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RegistrationScreen({ navigation }) {
    const [email, setEmail] = useState()
    const [gender, setGender] = useState(null)
    const [password, setPassword] = useState()
    const [dateTimeOfBirth, setDateOfBirth] = useState(new Date())
    const [timeOfBirth, setTime] = useState('Please enter time')
    const [dateOfBirth, setDate] = useState('Please enter date')
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDateOfBirth(currentDate);
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
    const convertDateToTime = () => {
        let time = dateTimeOfBirth.getHours() + ":" + dateTimeOfBirth.getMinutes() //convert date to time string
        setTime(time);
        setShow(false)
    }
    const resetScreen = () => {
        setEmail(null)
        setPassword(null)
        setTime("Please enter the time")
    }
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

                    
                    <Item>
                        <Text>Date of Birth</Text>
                        <Icon active name="ios-calendar"/>
                        <Text onPress={showDatepicker}>
                            {dateOfBirth}
                        </Text>
                    </Item>
                    <Item>
                        <Text>Time of Birth</Text>
                        <Icon active name='ios-alarm' />
                        <Text onPress={showTimepicker}>
                            {timeOfBirth}
                        </Text>
                    </Item>
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

                    {show &&
                    //need to confirm how to execute render and show for confirm
                        (<Container>
                            <DateTimePicker
                                testID="dateTimePicker"
                                //timeZoneOffsetInMinutes={0}
                                value={dateTimeOfBirth}
                                mode={mode}
                                display="default"
                                onChange={onChange}
                            />
                            <Button onPress={() => convertDateToTime()}>
                                <Text>Confirm</Text>
                            </Button>
                        </Container>)
                    }
                    <Button block primary onPress={() => resetScreen()}>
                        <Text>Clear Input</Text>
                    </Button>
                    <Button block primary onPress={() => navigation.goBack()}>
                        <Text>Go back</Text>
                    </Button>
                </Form>

            </Content>

        </Container >)
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