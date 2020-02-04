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
  };

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
        dateOfBirth: new Date(date).toLocaleDateString(),
      });
    } else {
      this.setState({
        show: Platform.OS === 'ios' ? true : false,
        timeOfBirth: this.formatTime(new Date(date)),
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
              style={[styles.input, {width: '45%'}]}
              value={this.state.fullName}
              onChange={e => this.setState({fullName: e.text})}
            />
            <TextInput
              style={[styles.input, {width: '45%'}]}
              value={this.state.nickName}
              onChange={e => this.setState({nickName: e.text})}
            />
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '27%'}]}>Date of Birth</Text>
            <Text style={[styles.label, {width: '27%'}]}>Time of Birth</Text>
            <Text style={[styles.label, {width: '27%'}]}>Gender</Text>
          </View>
          <View style={styles.inputRow}>
            <Text
              style={[styles.input, {width: '27%'}]}
              value={this.state.dateOfBirth}
              onPress={this.datePicker}>
              {this.state.dateOfBirth}
            </Text>
            <Text
              style={[styles.input, {width: '27%'}]}
              value={this.state.timeOfBirth}
              onPress={this.timePicker}>
              {this.state.timeOfBirth}
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
              selectedValue={this.state.gender}
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
            <TextInput style={[styles.input, {width: '45%'}]} />
            <Picker
              selectedValue={this.state.stateOfBirth}
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
          <View style={styles.labelRow}>
            <TextInput style={[styles.input, {width: '45%'}]} />
            <Picker
              selectedValue={this.state.currentState}
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
          <View style={styles.labelRow}>
            <TextInput
              style={[styles.input, {width: '45%'}]}
              value={this.state.occupation}
              onChange={e => this.setState({occupation: e.text})}
            />
            <TextInput
              style={[styles.input, {width: '45%'}]}
              value={this.state.specialGift}
              onChange={e => this.setState({specialGift: e.text})}
            />
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '90%'}]}>
              Email Address (username)
            </Text>
          </View>
          <View style={styles.labelRow}>
            <TextInput
              style={[styles.input, {width: '90%'}]}
              value={this.state.email}
              onChange={e => this.setState({email: e.text})}
            />
          </View>
          <View style={styles.labelRow}>
            <Text style={[styles.label, {width: '90%'}]}>Password</Text>
          </View>
          <View style={styles.labelRow}>
            <TextInput
              style={[styles.input, {width: '90%'}]}
              value={this.state.password}
              onChange={e => this.setState({password: e.text})}
            />
          </View>
          <View style={styles.labelRow}>
            <TouchableOpacity style={styles.registerButton}>
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
    borderColor: '#BCE0FD',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
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
