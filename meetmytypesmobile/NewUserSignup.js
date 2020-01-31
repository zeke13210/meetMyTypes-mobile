import React, { Component } from 'react'
import {View, Text, TextInput, StyleSheet, Button, Picker} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class NewUserSignup extends Component {
    state = {
        date: new Date('2020-06-12T14:42:42'),
        mode: 'date',
        show: false,
    }
    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date
        });
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datepicker = () => {
        this.show('date');
    }
    
    timepicker = () => {
        this.show('time');
    }

    render() {
        const { show, date, mode } = this.state;
        return (
            <View style={styles.mainCol}>
                <View style={styles.row1Label}>
                    <Text style={styles.nameLabel}>Full Name</Text>
                    <Text style={styles.nameLabel}>Nickname (Shown to others)</Text>
                </View>             
                <View style={styles.row1Input}>
                    <TextInput style={styles.nameInput} />
                    <TextInput style={styles.nameInput} />
                </View>             
                <View style={styles.row2Label}>
                    <Text style={styles.dobLabel}>Date of Birth</Text>
                    <Text style={styles.timeLabel}>Time of Birth</Text>
                    <Text style={styles.genderLabel}>Gender</Text>
                </View>             
                <View style={styles.row2Input}>
                    <Text style={styles.dobInput} onPress={this.datepicker} title="Show date picker!"></Text>
                    <Text style={styles.timeInput} onPress={this.timepicker} title="Show date picker!"></Text>
                    { show && <DateTimePicker value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={this.setDate} />
                    }
                    <TextInput style={styles.genderInput} />
                </View>             
                <View style={styles.row3Label}>
                    <Text style={styles.cityOfBirthLabel}>City of Birth</Text>
                    <Text style={styles.stateOfBirthLabel}>State of Birth</Text>
                </View>             
                <View style={styles.row3Input}>
                    <TextInput style={styles.cityOfBirthInput} />
                    <TextInput style={styles.stateOfBirthInput} />
                </View>             
                <View style={styles.row4Label}>
                    <Text style={styles.occupationLabel}>Occupation</Text>
                    <Text style={styles.specialGiftLabel}>Special Gift</Text>
                </View>             
                <View style={styles.row4Input}>
                    <TextInput style={styles.occupationInput} />
                    <TextInput style={styles.specialGiftInput} />
                </View>             
                <View style={styles.row5Label}>
                    <Text style={styles.emailLabel}>Email Address (username)</Text>
                </View>             
                <View style={styles.row5Input}>
                    <TextInput style={styles.emailInput} />
                </View>             
                <View style={styles.row6Label}>
                    <Text style={styles.passwordLabel}>Password</Text>
                </View>             
                <View style={styles.row6Input}>
                    <TextInput style={styles.passwordInput} />
                </View>             
                <View style={styles.row7}>
                    <View style={styles.registerInput}><Text style={styles.registerText}>Register</Text></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainCol: {
        width: '100%',
        alignItems: 'center'
    },
    row1Label: {
        flexDirection: 'row',
        marginTop: 50
    },
    row1Input: {
        flexDirection: 'row'
    },
    row2Label: {
        flexDirection: 'row',
        marginTop: 20
    },
    row2Input: {
        flexDirection: 'row'
    },
    nameLabel: {
        width: '45%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    nameInput: {
        width: '45%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    dobLabel: {
        width: '27%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    dobInput: {
        width: '27%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    timeLabel: {
        width: '27%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    timeInput: {
        width: '27%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    genderLabel: {
        width: '27%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    genderInput: {
        width: '27%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    row3Label: {
        flexDirection: 'row',
        marginTop: 20
    },
    row3Input: {
        flexDirection: 'row'
    },
    cityOfBirthLabel: {
        width: '45%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    cityOfBirthInput: {
        width: '45%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    stateOfBirthLabel: {
        width: '45%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    stateOfBirthInput: {
        width: '45%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    row4Label: {
        flexDirection: 'row',
        marginTop: 20
    },
    row4Input: {
        flexDirection: 'row'
    },
    occupationLabel: {
        width: '45%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    occupationInput: {
        width: '45%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    specialGiftLabel: {
        width: '45%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    specialGiftInput: {
        width: '45%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    row5Label: {
        flexDirection: 'row',
        marginTop: 20
    },
    row5Input: {
        flexDirection: 'row'
    },
    emailLabel: {
        width: '90%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    emailInput: {
        width: '90%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    row6Label: {
        flexDirection: 'row',
        marginTop: 20
    },
    row6Input: {
        flexDirection: 'row'
    },
    passwordLabel: {
        width: '90%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    passwordInput: {
        width: '90%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    row7: {
        flexDirection: 'row',
        marginTop: 20
    },
    registerInput: {
        width: '90%',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#EC4A3F',
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center'
    },
    registerText: {
        color: 'white'
    }
});
