import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Picker, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class NewUserSignup extends Component {
    state = {
        genders: [
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'},
            {label: 'Non-binary', value: 'non-binary'},
        ],
        states: [
            {label: 'Alabama', value: 'Alabama'},
            {label: 'Alaska', value: 'Alaska'},
            {label: 'Arizona', value: 'Arizona'},
            {label: 'Arkansas', value: 'Arkansas'},
            {label: 'California', value: 'California'},
            {label: 'Colorado', value: 'Colorado'},
            {label: 'Connecticut', value: 'Connecticut'},
            {label: 'Delaware', value: 'Delaware'},
            {label: 'Florida', value: 'Florida'},
            {label: 'Georgia', value: 'Georgia'},
            {label: 'Hawaii', value: 'Hawaii'},
            {label: 'Idaho', value: 'Idaho'},
            {label: 'Illinois', value: 'Illinois'},
            {label: 'Indiana', value: 'Indiana'},
            {label: 'Iowa', value: 'Iowa'},
            {label: 'Kansas', value: 'Kansas'},
            {label: 'Kentucky', value: 'Kentucky'},
            {label: 'Louisiana', value: 'Louisiana'},
            {label: 'Maine', value: 'Maine'},
            {label: 'Maryland', value: 'Maryland'},
            {label: 'Massachusetts', value: 'Massachusetts'},
            {label: 'Michigan', value: 'Michigan'},
            {label: 'Minnesota', value: 'Minnesota'},
            {label: 'Mississippi', value: 'Mississippi'},
            {label: 'Missouri', value: 'Missouri'},
            {label: 'Montana', value: 'Montana'},
            {label: 'Nebraska', value: 'Nebraska'},
            {label: 'Nevada', value: 'Nevada'},
            {label: 'New Hampshire', value: 'New Hampshire'},
            {label: 'New Jersey', value: 'New Jersey'},
            {label: 'New Mexico', value: 'New Mexico'},
            {label: 'New York', value: 'New York'},
            {label: 'North Carolina', value: 'North Carolina'},
            {label: 'North Dakota', value: 'North Dakota'},
            {label: 'Ohio', value: 'Ohio'},
            {label: 'Oklahoma', value: 'Oklahoma'},
            {label: 'Oregon', value: 'Oregon'},
            {label: 'Pennsylvania', value: 'Pennsylvania'},
            {label: 'Rhode Island', value: 'Rhode Island'},
            {label: 'South Carolina', value: 'South Carolina'},
            {label: 'South Dakota', value: 'South Dakota'},
            {label: 'Tennessee', value: 'Tennessee'},
            {label: 'Texas', value: 'Texas'},
            {label: 'Utah', value: 'Utah'},
            {label: 'Vermont', value: 'Vermont'},
            {label: 'Virginia', value: 'Virginia'},
            {label: 'Washington', value: 'Washington'},
            {label: 'West Virginia', value: 'West Virginia'},
            {label: 'Wisconsin', value: 'Wisconsin'},
            {label: 'Wyoming', value: 'Wyoming'}
        ],
        fullName: '',
        nickName: '',
        dateOfBirth: '',
        timeOfBirth: '',
        gender: '',
        cityOfBirth: '',
        stateOfBirth: '',
        currentCity: '',
        currentState: '',
        occupation: '',
        specialGift: '',
        email: '',
        password: '',
        date_time: new Date(),
        mode: 'date',
        show: false,
    }

    formatTime = date_time => {
        let hours = date_time.getHours();
        const minutes = date_time.getMinutes();
        let am_pm = "AM";
        if (hours >= 12) {
            am_pm = "PM"
        }
        if (hours >= 13) {
            hours -= 12;
        }
        if (hours === 0) {
            hours = 12;
        }
        return `${hours.toString().padStart(2)}:${minutes.toString().padStart(2)} ${am_pm}`;
    }

    setDate = (event, date) => {
        if (this.state.mode === 'date') {
            this.setState({
                show: Platform.OS === 'ios' ? true : false,
                dateOfBirth: (new Date(date)).toLocaleDateString()
            });    
        } else {
            this.setState({
                show: Platform.OS === 'ios' ? true : false,
                timeOfBirth: this.formatTime(new Date(date))
            });    
        }
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datePicker = () => {
        this.show('date');
    }
    
    timePicker = () => {
        this.show('time');
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView contentContainerStyle={styles.mainCol}>
                    <View style={styles.row1Label}>
                        <Text style={styles.nameLabel}>Full Name</Text>
                        <Text style={styles.nameLabel}>Nickname (Shown to others)</Text>
                    </View>             
                    <View style={styles.row1Input}>
                        <TextInput style={styles.nameInput} value={this.state.fullName} onChange={(e) => this.setState({fullName: e.text})} />
                        <TextInput style={styles.nameInput} value={this.state.nickName} onChange={(e) => this.setState({nickName: e.text})} />
                    </View>             
                    <View style={styles.row2Label}>
                        <Text style={styles.dobLabel}>Date of Birth</Text>
                        <Text style={styles.timeLabel}>Time of Birth</Text>
                        <Text style={styles.genderLabel}>Gender</Text>
                    </View>             
                    <View style={styles.row2Input}>
                        <Text style={styles.dobInput} value={this.state.dateOfBirth} onPress={this.datePicker}>{this.state.dateOfBirth}</Text>
                        <Text style={styles.timeInput} value={this.state.timeOfBirth} onPress={this.timePicker}>{this.state.timeOfBirth}</Text>
                        { this.state.show && <DateTimePicker
                            value={this.state.date_time}
                            mode={this.state.mode}
                            is24Hour={false}
                            display="default"
                            onChange={this.setDate} />
                        }
                        <Picker
                            selectedValue={this.state.gender}
                            style={styles.genderInput}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({gender: itemValue})
                            }>
                            {this.state.genders.map((gender => <Picker.Item label={gender.label} value={gender.value} />))}
                        </Picker>
                    </View>             
                    <View style={styles.row3Label}>
                        <Text style={styles.cityOfBirthLabel}>City of Birth</Text>
                        <Text style={styles.stateOfBirthLabel}>State of Birth</Text>
                    </View>             
                    <View style={styles.row3Input}>
                        <TextInput style={styles.cityOfBirthInput} />
                        <Picker
                            selectedValue={this.state.stateOfBirth}
                            style={styles.stateOfBirthInput}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({stateOfBirth: itemValue})
                            }>
                            {this.state.states.map((state => <Picker.Item key={state.label} label={state.label} value={state.value} />))}
                        </Picker>
                    </View>             
                    <View style={styles.row4Label}>
                        <Text style={styles.currentCityLabel}>Current City</Text>
                        <Text style={styles.currentStateLabel}>Current State</Text>
                    </View>             
                    <View style={styles.row4Input}>
                        <TextInput style={styles.currentCityInput} />
                        <Picker
                            selectedValue={this.state.currentState}
                            style={styles.currentStateInput}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({currentState: itemValue})
                            }>
                            {this.state.states.map((state => <Picker.Item key={state.label} label={state.label} value={state.value} />))}
                        </Picker>
                    </View>             
                    <View style={styles.row5Label}>
                        <Text style={styles.occupationLabel}>Occupation</Text>
                        <Text style={styles.specialGiftLabel}>Special Gift</Text>
                    </View>             
                    <View style={styles.row5Input}>
                        <TextInput style={styles.occupationInput} value={this.state.occupation} onChange={(e) => this.setState({occupation: e.text})}/>
                        <TextInput style={styles.specialGiftInput} value={this.state.specialGift} onChange={(e) => this.setState({specialGift: e.text})} />
                    </View>             
                    <View style={styles.row6Label}>
                        <Text style={styles.emailLabel}>Email Address (username)</Text>
                    </View>             
                    <View style={styles.row6Input}>
                        <TextInput style={styles.emailInput} value={this.state.email} onChange={(e) => this.setState({email: e.text})} />
                    </View>             
                    <View style={styles.row7Label}>
                        <Text style={styles.passwordLabel}>Password</Text>
                    </View>             
                    <View style={styles.row7Input}>
                        <TextInput style={styles.passwordInput} value={this.state.password} onChange={(e) => this.setState({password: e.text})} />
                    </View>             
                    <View style={styles.row8}>
                        <TouchableOpacity style={styles.registerInput}>
                            <Text style={styles.registerText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
    row4Label: {
        flexDirection: 'row',
        marginTop: 20
    },
    row4Input: {
        flexDirection: 'row'
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
    currentCityLabel: {
        width: '45%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    currentCityInput: {
        width: '45%',
        alignItems: 'center',
        borderColor: '#BCE0FD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    },
    currentStateLabel: {
        width: '45%',
        alignItems: 'center',
        color: '#2699FB',
        marginLeft: 15,
        marginRight: 15,
    },
    currentStateInput: {
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
    row6Label: {
        flexDirection: 'row',
        marginTop: 20
    },
    row6Input: {
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
    row7Label: {
        flexDirection: 'row',
        marginTop: 20
    },
    row7Input: {
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
    row8: {
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
