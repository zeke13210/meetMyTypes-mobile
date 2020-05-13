import React, { useState, useEffect } from 'react';
import { Container, Content, Text, Input, Item, Button, Form, Icon, Header, Picker, Toast } from 'native-base';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Col, Row, Grid } from 'react-native-easy-grid';
import states from './sates.json'
import registerUser from './registerUser';

export default function RegistrationScreen({ navigation }) {
    const [fullName, setFullName] = useState(null)
    const [nickName, setNickName] = useState(null)
    const [cityOfBirth, setCityOfBirth] = useState(null)
    const [cityOfResidence, setCityOfResidence] = useState(null)
    const [email, setEmail] = useState(null)
    const [gender, setGender] = useState(null)
    const [age, setAge] = useState('')
    const [occupation, setOccupation] = useState(null)
    const [specialGift, setSpecialGift] = useState(null)
    const [state, setState] = useState('')
    const [password, setPassword] = useState(null)
    const [dateTimeOfBirth, setDateOfBirth] = useState(new Date())
    const [timeOfBirth, setTime] = useState('Time?')
    const [dateOfBirth, setDate] = useState('Date?')
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [verified, setVerified] = useState(false)

    const registrationInfo = {
        fullName: fullName,
        nickName: nickName,
        cityOfBirth: cityOfBirth,
        cityOfResidence: cityOfResidence,
        stateOfBirth: state,
        occupation: occupation,
        specialGift: specialGift,
        age: age.toString(),
        email: email,
        state: state,
        gender: gender,
        password: password,
        dateOfBirth: dateOfBirth,
        timeOfBirth: timeOfBirth
    }
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
    const convertDateToTime = (mode) => {
        let time;
        let date;
        if (dateTimeOfBirth.getHours() === 0) {
            //when hour is 0 show 12
            time = (dateTimeOfBirth.getHours() + 12) + ":" + dateTimeOfBirth.getMinutes() + " AM" //convert date to time string
        } else if (dateTimeOfBirth.getHours() === 12) {
            //show 12 pm when hour is 12
            time = dateTimeOfBirth.getHours() + ":" + dateTimeOfBirth.getMinutes() + " PM" //convert date to time string
        } else if (dateTimeOfBirth.getHours() > 12) {
            time = (dateTimeOfBirth.getHours() - 12) + ":" + dateTimeOfBirth.getMinutes() + " PM" //convert date to time string
        } else {
            time = dateTimeOfBirth.getHours() + ":" + dateTimeOfBirth.getMinutes() + " AM" //convert date to time string
        }

        if (dateTimeOfBirth.getMonth() < 9) {
            date = "0" + (dateTimeOfBirth.getMonth() + 1) + "/" + dateTimeOfBirth.getDate() + "/" + dateTimeOfBirth.getFullYear()
        } else {
            date = (dateTimeOfBirth.getMonth() + 1) + "/" + dateTimeOfBirth.getDate() + "/" + dateTimeOfBirth.getFullYear()
        }
        if (mode === 'time') {
            setTime(time);
        } else if (mode === 'date') {
            setDate(date)
        }
        setShow(false)
    }
    const ageList = (ageMin, ageMax) => {
        content = []
        for (i = ageMin; i < ageMax; i++) {
            content.push(<Picker.Item
                key={i}
                label={i}
                value={i}
            />)
        }
        return content
    }
    useEffect(() => {
        //if all fields filled out enable btn
        if (email !== null &&
            password !== null &&
            age !== '' &&
            nickName !== null &&
            state !== null &&
            occupation !== null &&
            cityOfResidence !== null &&
            cityOfBirth !== null &&
            specialGift !== null &&
            gender !== null &&
            dateOfBirth !== 'Date?' &&
            timeOfBirth !== 'Time?') {
            setVerified(true)
        }
    })
    const submitForm = (registrationInfo) => {

        registerUser(registrationInfo).then(res => {
            console.log("Returned data: ", res.data)
            if (res.data.hasOwnProperty('errorMessage')) {
                //setVerified(false)
                setError(res.data.errorMessage)

            } else {
                setSuccess("Successful signup. Please verify your account with the provided email address")
            }
        }).catch(err => console.log("this is returned error: ", err))
    }

    const setError = (errText) => {
        Toast.show({
            text: errText,
            buttonText: 'OK',
            position: 'top',
            type: 'danger',
            duration: 5000,
        });
    }
    const setSuccess = (successText) => {
        Toast.show({
            text: successText,
            buttonText: 'OK',
            position: 'top',
            type: 'success',
            duration: 5000,
        });
        navigation.navigate('Login')
    }

    const resetScreen = () => {
        setEmail(null)
        setPassword(null)
        setTime("Time?")
        setDate("Date?")
        setState(null)
        setGender(null)
        setFullName(null)
        setCityOfBirth(null)
        setCityOfResidence(null)
        setNickName(null)
        setAge(null)
        setOccupation(null)
        setSpecialGift(null)
    }
    return (
        <Container>
            <Header>
                <Text>To register fill out the form below</Text>
            </Header>
            <Content padder>
                <Grid>
                    <Col>
                        <Form>
                            <Row>
                                <Item regular style={styles.inputBox}>
                                    <Input placeholder="fullName"
                                        onChangeText={(text) => setFullName(text)}
                                        placeholderTextColor="black"
                                        value={fullName} />
                                </Item>
                            </Row>
                            <Row>
                                <Item regular style={styles.inputBox}>
                                    <Input placeholder="nick name"
                                        onChangeText={(text) => setNickName(text)}
                                        placeholderTextColor="black"
                                        value={nickName} />
                                </Item>
                            </Row>
                            <Row>
                                <Item regular style={styles.inputBox}>
                                    <Input placeholder="city of residence"
                                        onChangeText={(text) => setCityOfResidence(text)}
                                        placeholderTextColor="black"
                                        value={cityOfResidence} />
                                </Item>
                            </Row>

                            <Item >
                                <Text style={{ paddingRight: 10 }}>Date of Birth</Text>
                                <Icon active name="ios-calendar" />
                                <Text style={styles.dateStyle} onPress={showDatepicker}>
                                    {dateOfBirth}
                                </Text>
                            </Item>
                            <Item>
                                <Text style={{ paddingRight: 10 }}>Time of Birth</Text>
                                <Icon active name='ios-alarm' />
                                <Text style={styles.dateStyle} onPress={showTimepicker}>
                                    {timeOfBirth}
                                </Text>
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
                                    <Button onPress={() => convertDateToTime(mode)}>
                                        <Text>Confirm</Text>
                                    </Button>
                                </Container>)
                            }
                            <Row>
                                <Col>
                                    <Row>
                                        <Text style={styles.titleStyle}>Gender</Text>
                                    </Row>
                                    <Row>
                                        <Item picker>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                style={{ paddingLeft: 1 }}
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
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Text style={styles.titleStyle}> State</Text>
                                    </Row>
                                    <Row>
                                        <Item picker>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                style={{ paddingLeft: 1 }}
                                                placeholder="State"
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                selectedValue={state}
                                                onValueChange={(text) => setState(text)}
                                            >
                                                {states.states.map((state) => (
                                                    <Picker.Item
                                                        key={state.label}
                                                        label={state.label}
                                                        value={state.value}
                                                    />
                                                ))}
                                            </Picker>
                                        </Item>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Text style={styles.titleStyle}>Age</Text>
                                    </Row>
                                    <Row>
                                        <Item picker>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                style={{ paddingLeft: 1 }}
                                                placeholder="Age"
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                selectedValue={age}
                                                onValueChange={(text) => setAge(text)}
                                            >
                                                {ageList(21, 60)}

                                            </Picker>
                                        </Item>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Item regular style={styles.inputBox}>
                                    <Input placeholder="city of Birth"
                                        onChangeText={(text) => setCityOfBirth(text)}
                                        placeholderTextColor="black"
                                        value={cityOfBirth} />
                                </Item>
                            </Row>
                            <Row>
                                <Item regular style={styles.inputBox}>
                                    <Input placeholder="Occupation"
                                        onChangeText={(text) => setOccupation(text)}
                                        placeholderTextColor="black"
                                        value={occupation} />
                                </Item>
                            </Row>
                            <Row>
                                <Item regular style={styles.inputBox}>
                                    <Input placeholder="Special Gift"
                                        onChangeText={(text) => setSpecialGift(text)}
                                        placeholderTextColor="black"
                                        value={specialGift} />
                                </Item>
                            </Row>

                            <Row>
                                <Item regular style={styles.inputBox}>
                                    <Input placeholder="email"
                                        onChangeText={(text) => setEmail(text)}
                                        placeholderTextColor="black"
                                        value={email} />
                                </Item>
                            </Row>
                            <Row>
                                <Item regular style={styles.inputBox}>
                                    <Input placeholder="password"
                                        onChangeText={(text) => setPassword(text)}
                                        placeholderTextColor="black"
                                        secureTextEntry={true}
                                        value={password} />
                                </Item>
                            </Row>
                            <Button style={styles.buttonStyle} block primary onPress={() => resetScreen()}>
                                <Text>Clear Input</Text>
                            </Button>
                            {verified ? (<Button style={styles.buttonStyle} block success onPress={() => submitForm(registrationInfo)}>
                                <Text>Submit</Text>
                            </Button>) : (<Button block disabled>
                                <Text>Submit</Text>
                            </Button>)}

                        </Form>
                    </Col>

                </Grid>

            </Content>

        </Container >)
}

const styles = StyleSheet.create({
    inputBox: {
        width: '100%',
        backgroundColor: '#E5E5E5',
        borderColor: 'gray',
        borderRadius: 2,
        paddingHorizontal: 8,
        fontSize: 16,
        marginVertical: 10,
    },
    dateStyle: {
        fontSize: 16,
        borderRadius: 2,
        padding: 8
    },
    buttonStyle: {
        backgroundColor: '#E53765',
        margin: 5
    },
    titleStyle: {
        fontSize: 20,
        textAlign: "center",
        marginLeft: 17
        // paddingLeft: 50
    }
})