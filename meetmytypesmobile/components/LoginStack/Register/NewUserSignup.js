import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Picker,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
//import Amplify, { Auth } from 'aws-amplify';
//import awsconfig from './amplify/aws-exports';
//Amplify.configure(awsconfig);

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
      {label: 'Wyoming', value: 'Wyoming'},
    ],
    fullName: {
      touched: false,
      valid: false,
      value: '',
      regex: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    },
    nickName: {
      touched: false,
      valid: false,
      value: '',
      regex: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    },
    dateOfBirth: {
      touched: false,
      valid: false,
      value: '',
      regex: /((0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-[12]\d{3})/,
    },
    timeOfBirth: {
      touched: false,
      valid: false,
      value: '',
      regex: /\b((1[0-2]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm]))/,
    },
    gender: {
      touched: false,
      valid: false,
      value: '',
      regex: /\*/,
    },
    cityOfBirth: {
      touched: false,
      valid: false,
      value: '',
      regex: /[a-z]*[-]?[a-z]*/,
    },
    stateOfBirth: {
      touched: false,
      valid: false,
      value: '',
      regex: /\*/,
    },
    currentCity: {
      touched: false,
      valid: false,
      value: '',
      regex: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    },
    currentState: {
      touched: false,
      valid: false,
      value: '',
      regex: /\*/,
    },
    occupation: {
      touched: false,
      valid: false,
      value: '',
      regex: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    },
    specialGift: {
      touched: false,
      valid: false,
      value: '',
      regex: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    },
    email: {
      touched: false,
      valid: false,
      value: '',
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      touched: false,
      valid: false,
      value: '',
      regex: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
    },
    date_time: new Date(),
    mode: 'date',
    show: false,
  };

  /*register = () => Auth.signUp({
    username: this.state.username,
    password: this.state.password,
    attributes: {
        email: this.state.email,
        name: this.state.fullName,
        nickname: this.state.nickname,
        gender: this.state.gender,
        birthdate: this.state.dateOfBirth,
        'custom:city_of_birth': this.state.cityOfBirth,
        'custom:state_of_birth': this.state.stateOfBirth,
        'custom:current_city': this.state.currentCity,
        'custom:current_state': this.state.currentState,
        'custom:occupation': this.state.occupation,
        'custom:special_gift': this.state.specialGift,
    }
   })
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

  formatTime = date_time => {
    let hours = date_time.getHours();
    const minutes = date_time.getMinutes();
    let am_pm = 'AM';
    if (hours >= 12) {
      am_pm = 'PM';
    }
    if (hours >= 13) {
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    return `${hours.toString().padStart(2)}:${minutes
      .toString()
      .padStart(2)} ${am_pm}`;
  };

  setDate = (event, date) => {
    if (this.state.mode === 'date') {
      this.setState({
        show: Platform.OS === 'ios' ? true : false,
        dateOfBirth: {
          ...this.state.dateOfBirth,
          value: new Date(date).toLocaleDateString(),
        },
      });
    } else {
      this.setState({
        show: Platform.OS === 'ios' ? true : false,
        timeOfBirth: {
          ...this.state.timeOfBirth,
          value: this.formatTime(new Date(date)),
        },
      });
    }
  };

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  };

  datePicker = () => {
    this.show('date');
  };

  timePicker = () => {
    this.show('time');
  };

  validateAndSetField = field => {
    if (this.state[field].regex.test(this.state[field].value)) {
      this.setState(
        {
          [field]: {...this.state[field], touched: true, valid: true},
        },
        () => console.log(this.state),
      );
    } else {
      this.setState({
        [field]: {...this.state[field], touched: true, valid: false},
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={[styles.labelRow, {marginTop: 50}]}>
            <Text style={[styles.label, {width: '45%'}]}>Full Name</Text>
            <Text style={[styles.label, {width: '45%'}]}>
              Nickname (Shown to others)
            </Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              style={[
                styles.input,
                this.state.fullName.touched
                  ? this.state.fullName.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '45%'},
              ]}
              value={this.state.fullName.value}
              onBlur={() => this.validateAndSetField('fullName')}
              onChange={e =>
                this.setState({
                  fullName: {
                    ...this.state.fullName,
                    value: e.nativeEvent.text,
                  },
                })
              }
            />
            <TextInput
              style={[
                styles.input,
                this.state.nickName.touched
                  ? this.state.nickName.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '45%'},
              ]}
              value={this.state.nickName.value}
              onBlur={() => this.validateAndSetField('nickName')}
              onChange={e =>
                this.setState({
                  nickName: {
                    ...this.state.nickName,
                    value: e.nativeEvent.text,
                  },
                })
              }
            />
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '27%'}]}>Date of Birth</Text>
            <Text style={[styles.label, {width: '27%'}]}>Time of Birth</Text>
            <Text style={[styles.label, {width: '27%'}]}>Gender</Text>
          </View>
          <View style={styles.inputRow}>
            <Text
              style={[
                styles.input,
                this.state.dateOfBirth.touched
                  ? this.state.dateOfBirth.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '27%'},
              ]}
              value={this.state.dateOfBirth.value}
              onPress={this.datePicker}>
              {this.state.dateOfBirth.value}
            </Text>
            <Text
              style={[
                styles.input,
                this.state.timeOfBirth.touched
                  ? this.state.timeOfBirth.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '27%'},
              ]}
              value={this.state.timeOfBirth.value}
              onPress={this.timePicker}>
              {this.state.timeOfBirth.value}
            </Text>
            {this.state.show && (
              <DateTimePicker
                value={this.state.date_time}
                mode={this.state.mode}
                is24Hour={false}
                display="default"
                onChange={this.setDate}
              />
            )}
            <Picker
              selectedValue={this.state.gender.value}
              style={[styles.input, {width: '27%'}]}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({gender: itemValue})
              }>
              {this.state.genders.map(gender => (
                <Picker.Item
                  key={gender.label}
                  label={gender.label}
                  value={gender.value}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '45%'}]}>City of Birth</Text>
            <Text style={[styles.label, {width: '45%'}]}>State of Birth</Text>
          </View>
          <View style={styles.labelRow}>
            <TextInput
              style={[
                styles.input,
                this.state.cityOfBirth.touched
                  ? this.state.cityOfBirth.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '45%'},
              ]}
              value={this.state.cityOfBirth.value}
              onBlur={() => this.validateAndSetField('cityOfBirth')}
              onChange={e =>
                this.setState({
                  cityOfBirth: {
                    ...this.state.cityOfBirth,
                    value: e.nativeEvent.text,
                  },
                })
              }
            />
            <Picker
              selectedValue={this.state.stateOfBirth.value}
              style={[styles.input, {width: '45%'}]}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({stateOfBirth: itemValue})
              }>
              {this.state.states.map(state => (
                <Picker.Item
                  key={state.label}
                  label={state.label}
                  value={state.value}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '45%'}]}>Current City</Text>
            <Text style={[styles.label, {width: '45%'}]}>Current State</Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              style={[
                styles.input,
                this.state.currentCity.touched
                  ? this.state.currentCity.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '45%'},
              ]}
              value={this.state.currentCity.value}
              onBlur={() => this.validateAndSetField('currentCity')}
              onChange={e =>
                this.setState({
                  currentCity: {
                    ...this.state.currentCity,
                    value: e.nativeEvent.text,
                  },
                })
              }
            />
            <Picker
              selectedValue={this.state.currentState.value}
              style={[styles.input, {width: '45%'}]}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({currentState: itemValue})
              }>
              {this.state.states.map(state => (
                <Picker.Item
                  key={state.label}
                  label={state.label}
                  value={state.value}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '45%'}]}>Occupation</Text>
            <Text style={[styles.label, {width: '45%'}]}>Special Gift</Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              style={[
                styles.input,
                this.state.occupation.touched
                  ? this.state.occupation.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '45%'},
              ]}
              value={this.state.occupation.value}
              onBlur={() => this.validateAndSetField('occupation')}
              onChange={e =>
                this.setState({
                  occupation: {
                    ...this.state.occupation,
                    value: e.nativeEvent.text,
                  },
                })
              }
            />
            <TextInput
              style={[
                styles.input,
                this.state.specialGift.touched
                  ? this.state.specialGift.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '45%'},
              ]}
              value={this.state.specialGift.value}
              onBlur={() => this.validateAndSetField('specialGift')}
              onChange={e =>
                this.setState({
                  specialGift: {
                    ...this.state.specialGift,
                    value: e.nativeEvent.text,
                  },
                })
              }
            />
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '90%'}]}>
              Email Address (username)
            </Text>
          </View>
          <View style={styles.labelRow}>
            <TextInput
              style={[
                styles.input,
                this.state.email.touched
                  ? this.state.email.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '90%'},
              ]}
              value={this.state.email.value}
              onBlur={() => this.validateAndSetField('email')}
              onChange={e =>
                this.setState({
                  email: {
                    ...this.state.email,
                    value: e.nativeEvent.text,
                  },
                })
              }
            />
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '90%'}]}>Password</Text>
          </View>
          <View style={styles.labelRow}>
            <TextInput
              style={[
                styles.input,
                this.state.password.touched
                  ? this.state.password.valid
                    ? styles.validInput
                    : styles.invalidInput
                  : null,
                {width: '90%'},
              ]}
              value={this.state.password.value}
              onBlur={() => this.validateAndSetField('password')}
              onChange={e =>
                this.setState({
                  password: {
                    ...this.state.password,
                    value: e.nativeEvent.text,
                  },
                })
              }
            />
          </View>
          <View style={styles.labelRow}>
            <TouchableOpacity style={styles.registerButton} onPress={this.register}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  labelRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
  },
  label: {
    alignItems: 'center',
    color: '#2699FB',
    marginLeft: 15,
    marginRight: 15,
  },
  input: {
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  validInput: {
    borderColor: '#BCE0FD',
  },
  invalidInput: {
    borderColor: 'red',
  },
  registerButton: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#EC4A3F',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
  },
  registerText: {
    color: 'white',
  },
});
