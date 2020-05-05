import React, { useState } from 'react';
import { Container, Content, Text, Input, Item, Button, Form, Icon, Header, Picker } from 'native-base';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function RegistrationScreen({ navigation }) {
    const [email, setEmail] = useState()
    const [gender, setGender] = useState(null)
    const [password, setPassword] = useState()
    const [dateTimeOfBirth, setDateOfBirth] = useState(new Date())
    const [timeOfBirth, setTime] = useState('Time?')
    const [dateOfBirth, setDate] = useState('Date?')
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
    const convertDateToTime = (mode) => {
        let time;
        if ( dateTimeOfBirth.getHours() === 0){
            time = (dateTimeOfBirth.getHours() + 12) + ":" + dateTimeOfBirth.getMinutes() + " AM" //convert date to time string

        } else if ( dateTimeOfBirth.getHours() === 12){
            console.log("HOurs: ", dateTimeOfBirth.getHours())
            time = dateTimeOfBirth.getHours() + ":" + dateTimeOfBirth.getMinutes() + " PM" //convert date to time string
        } else if (dateTimeOfBirth.getHours() > 12){
            time = (dateTimeOfBirth.getHours() - 12) + ":" + dateTimeOfBirth.getMinutes() + " PM" //convert date to time string
        } else {
            time = dateTimeOfBirth.getHours() + ":" + dateTimeOfBirth.getMinutes() + " AM" //convert date to time string
        }
        let date = (dateTimeOfBirth.getMonth() + 1) + "/" + dateTimeOfBirth.getDate() + "/" + dateTimeOfBirth.getFullYear()
        if (mode === 'time') {
            setTime(time);
        } else if (mode === 'date') {
            setDate(date)
        }
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
                <Grid>
                    <Col>
                        <Form>
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
                                <Item >

                                    <Text style={{paddingRight: 10}}>Date of Birth</Text>

                                    <Icon active name="ios-calendar" />
                                    <Text style={styles.dateStyle} onPress={showDatepicker}>
                                        {dateOfBirth}
                                    </Text>

                                </Item>
                            
                                <Item>
                                    <Text style={{paddingRight: 10}}>Time of Birth</Text>
                                    <Icon active name='ios-alarm' />
                                    <Text style={styles.dateStyle} onPress={showTimepicker}>
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
                                    <Button onPress={() => convertDateToTime(mode)}>
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
        paddingHorizontal: 10,
        fontSize: 16,
        marginVertical: 10,
    },

    dateStyle: {
        fontSize: 16,
        borderRadius: 2,
        padding: 8
    }
})