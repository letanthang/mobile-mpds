import React, { Component } from 'react';
import codePush from 'react-native-code-push';
import { View, TouchableOpacity, TextInput, Button as Btn } from 'react-native';
import { 
  Container, Header, Left, Body, Card, 
  Content, Text, Button, Icon, CardItem 
} from 'native-base';
import { connect } from 'react-redux';
import md5 from 'md5';
import { HomeStyles, Styles, Colors, Theme } from '../Styles';

class AboutScreen extends Component {
  componentDidMount() {
    codePush.sync({ updateDialog: false, installMode: codePush.InstallMode.IMMEDIATE });
  }
  state = { clickNum: 0, password: '', verified: false }
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button
              transparent
              onPress={() => goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
            </View>
          </Left>
          <Body />
        </Header>
        <Content
          keyboardShouldPersistTaps='handled'
          style={{ padding: 10 }}
        >
          <TouchableOpacity>
            <Card>
              <CardItem style={{ backgroundColor: Colors.row }}>
                <View style={HomeStyles.cardItemLeft}>
                  <View>
                    <Text style={{ fontWeight: 'bold', color: '#00b0ff' }}>Build Number</Text>
                  </View>
                </View>
                <View style={HomeStyles.cardItemRight}>
                  <Text style={{ fontWeight: 'bold', color: '#00b0ff' }}>01/06</Text>
                </View>
              </CardItem>
            </Card>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => this.setState({ clickNum: this.state.clickNum + 1 })}
          >
            <View style={{ flex: 1, height: 44 }}></View>
          </TouchableOpacity>
        </Content>

      </Container>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { userId } = auth;
  return { userId };
};

export default connect(mapStateToProps, {})(AboutScreen);
