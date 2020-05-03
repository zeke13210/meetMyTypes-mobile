import React, { useState } from 'react';
import { Container, Content, Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RegistrationScreen({ navigation }) {
    const [email, onChangeEmail] = useState()
    const [password, onChangePassword] = useState()
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
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          
        </Header>
            <Content padder>

                <TextInput
                    style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={(text) => onChangeEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => onChangePassword(text)}
                />
                <Text>Date of Birth</Text>
                <Button block primary onPress={showDatepicker}>
                    <Text >Show date picker!</Text>
                </Button>
                <Button block primary onPress={showTimepicker}>
                    <Text>Show Time picker</Text>
                </Button>


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
            </Content>

        </Container>)
}

const styles = StyleSheet.create({
    inputBox: {
        width: '100%',
        height: 50,
        backgroundColor: '#E5E5E5',
        borderColor: 'gray',
        borderRadius: 2,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
    }
})