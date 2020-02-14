import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function BtnNav({ ScreenName }) {
    const navigation = useNavigation();
    return (
        <Button title={`go to ${ScreenName}`}
            onPress={() => navigation.navigate(ScreenName)} />
    );
}

export default BtnNav;