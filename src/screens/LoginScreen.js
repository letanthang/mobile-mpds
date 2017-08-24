//import libs
import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert } from 'react-native';
import { 
  Container, Content, Button, Text, 
  Body, Input, Form, Item, ListItem 
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { userIDChanged, passwordChanged, rememberMeChanged, loadSavedUserPass, loginUser, logoutUser } from '../actions';
import LoadingSpinner from '../components/LoadingSpinner';
import { Colors } from '../Styles';

//create comp
class LoginScreen extends Component {
  // static navigationOptions = {
  //   title: '',
  //   header: null
  // };

  state = { showPassword: false, rememberMe: false }

  componentWillMount() {
    console.log('MPDS_new : componentWillMount');
    this.props.loadSavedUserPass();
  }
  // componentWillReceiveProps(nextProps) {
  //   // this.props still here -> the old set of props
  //   console.log('MPDS_new : componentWillReceiveProps');
  // }
  componentWillUpdate() {
    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Drawer' })
      ]
    });

    if (this.props.user) {
      dispatch(resetAction);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('cdu called!');
    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Drawer' })
      ]
    });

    if (this.props.user) {
      dispatch(resetAction);
    }

    //show login error
    if (!prevProps.error && this.props.error) {
      Alert.alert(
        'Lỗi đăng nhập',
        this.props.error,
        [
          { text: 'Báo lỗi', onPress: () => console.log('Bao loi pressed!') },
          { text: 'Huỷ', onPress: () => console.log('Huy pressed'), style: 'cancel' }
        ],
        { cancelable: false }
      );
    }
  }

  renderSpinner() {
    if (this.props.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
  }

  render() {
    const { userID, password, rememberMe } = this.props;
    return ( 
      <Container style={{ backgroundColor: Colors.background }}>
        <Content
          keyboardShouldPersistTaps='handled' 
          style={{ paddingTop: 50, paddingLeft: 20, paddingRight: 20, backgroundColor: '#ffffff' }}
        > 
            <Body>
              <Text style={{ color: '#4CAF50', fontSize: 24, fontWeight: 'bold' }}>
                m-PDS
              </Text> 
            </Body>
            <Form>
              <Item style={{ marginRight: 20 }}>
                <IconFA name="user-o" size={20} />
                <Input 
                  placeholder="Mã số" 
                  value={userID}
                  onChangeText={(text) => this.props.userIDChanged(text)}
                />
              </Item>
              <Item style={{ marginRight: 20 }}>
                <IconFA name="lock" size={20} />
                <Input 
                  placeholder="Mật khẩu" 
                  secureTextEntry={!this.state.showPassword}
                  value={password}
                  onChangeText={(text) => this.props.passwordChanged(text)}
                />
              </Item>
            </Form>
            <CheckBox
              style={{ flex: 1, padding: 10 }} 
              checked={this.state.showPassword} 
              title='Hiển thị mật khẩu'
              onPress={() => this.setState({ showPassword: !this.state.showPassword })}
            />
            <CheckBox
                style={{ flex: 1, padding: 10 }}
                onPress={() => this.props.rememberMeChanged()}
                checked={rememberMe}
                title="Lưu tài khoản"
            />
            <Button 
              block
              success
              onPress={() => this.props.loginUser({ userID, password, rememberMe })}
            >
              <Text>ĐĂNG NHẬP</Text>
            </Button>
        </Content>
        <LoadingSpinner loading={this.props.loading} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    alignItems: 'center'
  },
  headerStyle: {
    color: '#FF4CAF50'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF88'
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  }
});

const mapStateToProps = ({ auth }) => {
  const { userID, password, rememberMe, user, error, loading } = auth;
  return { userID, password, rememberMe, user, error, loading };
};

//make it available
export default connect(
  mapStateToProps, 
  { userIDChanged, passwordChanged, rememberMeChanged, loadSavedUserPass, loginUser, logoutUser }
)(LoginScreen);