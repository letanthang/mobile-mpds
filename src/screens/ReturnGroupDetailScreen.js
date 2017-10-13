import _ from 'lodash';
import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { 
  Container, Header, Body, Left, Right,
  Button, Icon, Tabs, Tab, Footer, FooterTab,
  Title, Input, Item, Text
} from 'native-base';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IC from 'react-native-vector-icons/MaterialCommunityIcons';
import { updateOrderStatus } from '../actions';
// import Utils from './libs/Utils';
import { Styles, Colors } from '../Styles';
import ReturnGroupDetail from '../components/pickReturn/ReturnGroupDetail';
import LoadingSpinner from '../components/LoadingSpinner';
import LogoButton from '../components/LogoButton';

class PickGroupDetailScreen extends Component {
  state = { showSearch: false, keyword: '', done: false };

  componentWillMount() {
    this.pickGroup = this.props.navigation.state.params.pickGroup;
    this.ClientHubID = this.pickGroup.ClientHubID;
    this.PickDeliveryType = this.pickGroup.PickDeliveryType;
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  updateOrder() {
    //console.log(this.props.OrderInfos);
    const OrderInfos = _.filter(this.props.OrderInfos, item => item !== undefined);
    //console.log(OrderInfos); 
    this.props.updateOrderStatus(OrderInfos);
  }

  confirmUpdateOrder(orders) {
    const message = `Bạn có chắc chắn muốn cập nhật ${orders.length} đơn hàng trên ?`;
    const title = 'Cập nhật đơn hàng ?';
  
    Alert.alert(
      title,
      message,
      [
        { text: 'Đồng ý', onPress: () => this.updateOrder() },
        { text: 'Huỷ', onPress: () => console.log('Huy pressed'), style: 'cancel' }
      ],
      { cancelable: false }
    );
  }

  renderHeader(pickGroup) {
    const { goBack } = this.props.navigation;
    if (this.state.showSearch) {
      return (
        <Header searchBar>
          <Item
            style={{ borderRadius: 4, backgroundColor: Colors.background }} 
          >
            <Icon name="search" size={10} />
            <Input 
              placeholder="Tìm đơn hàng ..." value={this.state.keyword} 
              onChangeText={(keyword) => { 
                  console.log('keyword changed!');
                  this.setState({ keyword: keyword.trim() });
              }}
            />
            <TouchableOpacity
              onPress={() => this.setState({ keyword: '' })}
              style={{ padding: 8 }}
            >
              <IconFA 
                name="times-circle" size={14} 
              />
            </TouchableOpacity>
            
          </Item>
          <Right style={{ flex: 0 }} >
            <Button
              transparent
              style={{ marginLeft: 0 }}
              onPress={() => this.setState({ showSearch: !this.state.showSearch, keyword: '' })}
            >
              <Text uppercase={false}>Huỷ</Text>
            </Button>
          </Right>
        </Header>
        );
    } 

    return (
      <Header>
        <Left style={Styles.leftStyle}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button
            transparent
            onPress={() => goBack()}
          >
            <Icon name="arrow-back" />
          </Button>
          <LogoButton dispatch={this.props.navigation.dispatch} />
        </View>
        </Left>
        <Body style={Styles.bodyStyle}>
          <Title>{pickGroup.ClientName} - {pickGroup.ContactName}</Title>
        </Body>
        <Right style={Styles.rightStyle}>
          <Button
            transparent
            onPress={() => this.setState({ showSearch: !this.state.showSearch })}
          >
            <Icon name="search" />
          </Button>
          <Button
            transparent
            onPress={() => this.setState({ done: !this.state.done, keyword: '' })}
          >
            <IC name="playlist-check" size={25} color={this.state.done ? Colors.headerActive : Colors.headerNormal} />
          </Button>
        </Right>
      </Header>
    );
  }

  render() {
    const { pds } = this.props;
    const { PickItems, ReturnItems } = pds;
    const { PickDeliveryType } = this.pickGroup;
    const Items = PickDeliveryType === 1 ? PickItems : ReturnItems;
    const pickGroup = Items.find(trip => trip.ClientHubID === this.ClientHubID); 
    return (
      
      <Container style={{ backgroundColor: Colors.background }}>
        {this.renderHeader(pickGroup)}
        <ReturnGroupDetail {...this.props} keyword={this.state.keyword} done={this.state.done} />
        <LoadingSpinner loading={this.props.loading} />
        <Footer>
        <FooterTab>
          <TouchableOpacity 
            style={{ borderWidth: 1, justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#666666' }}
            onPress={this.confirmUpdateOrder.bind(this)}
          >
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Cập Nhật</Text>
          </TouchableOpacity>
        </FooterTab>
        </Footer>
      </Container>
      
    );
  }
}

const mapStateToProps = ({ auth, pd, returnGroup }) => {
  const { sessionToken } = auth;
  const { pdsId, pds, loading } = pd;
  const { OrderInfos } = returnGroup;
  return { sessionToken, pdsId, pds, loading, OrderInfos };
};

export default connect(mapStateToProps, { updateOrderStatus })(PickGroupDetailScreen);
