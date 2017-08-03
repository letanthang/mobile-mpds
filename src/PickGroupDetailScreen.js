import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { 
  Container, Content, List,
  Header, Body, Left, Right,
  Button, Icon, Item,
  Title, Text
} from 'native-base';
import ChkBox from 'react-native-check-box';
import { CheckBox } from 'react-native-elements';
import { updateOrderStatus } from './actions';
import LoadingSpinner from './components/LoadingSpinner';
import Utils from './libs/Utils';

class PickGroupDetailScreen extends Component {
  componentWillMount() {
    //state = { pickGroup: this.props.navigation.state.params.pickGroup };
    this.pickGroup = this.props.navigation.state.params.pickGroup;
    console.log('====================================');
    console.log('PickGroupDetailScreen: cwm is called. pickgroup = ');
    console.log(this.props.navigation.state.params.pickGroup);
    console.log('====================================');
    
    
    this.ClientHubID = this.pickGroup.ClientHubID;
    this.PickDeliveryType = this.pickGroup.PickDeliveryType;
  }

  pickGroup = null;
  ClientHubID = null;
  PickDeliveryType = null;
  
  updateOrderToDone(order) {
    if (order.CurrentStatus !== 'Picking' && order.CurrentStatus !== 'Return') return;

    let status = null;
    if (this.pickGroup.PickDeliveryType === 3) status = 'WaitingToFinish';
    if (this.pickGroup.PickDeliveryType === 1) status = 'Storing';
    this.updateOrder(order, status);
  }

  updateOrderToFail(order) {
    if (order.CurrentStatus !== 'Picking' && order.CurrentStatus !== 'Return') return;

    let status = null;
    let infos = {};
    if (this.pickGroup.PickDeliveryType === 3) {
      status = 'Return';
      const StoringCode = 'GHN-RCD0D6';
      const NewDate = 0;
      const Log = 'GHN-RCD0D6|NGƯỜI GỬI KHÔNG NHẬN HÀNG TRẢ';
      infos = { StoringCode, NewDate, Log };
    } 
    if (this.pickGroup.PickDeliveryType === 1) {
      status = 'ReadyToPick';
      const StoringCode = 'GHN-PC952A';
      const NewDate = 0;
      const Log = 'GHN-PC952A|NGƯỜI GỬI HẸN LẠI NGÀY LẤY(5/8/2017)';
      infos = { StoringCode, NewDate, Log };
    } 
    this.updateOrder(order, status, infos);
  }

  updateOrder(order, status, infos = {}) {
    const { pickGroup, ClientHubID } = this;
    const { sessionToken, pdsId } = this.props;
    const { PickDeliverySessionDetailID, OrderID } = order;
    const { PickDeliveryType } = pickGroup;
    console.log(`updateOrder to status : ${status} | pdsId ${pdsId} | ClientHubID ${ClientHubID}`);
    console.log(order);
    this.props.updateOrderStatus({ 
      sessionToken, 
      pdsId, 
      PickDeliverySessionDetailID, 
      OrderID, 
      PickDeliveryType, 
      status,
      ClientHubID,
      ...infos 
    });
  }
  onOrderPress(order) {
    console.log('onOrderPress called with type = ');
    console.log(this.pickGroup.PickDeliveryType);
    const { navigate } = this.props.navigation;
    const { OrderID } = order;

    if (this.pickGroup.PickDeliveryType === 1) {
      navigate('PickOrder', { OrderID, order });
    } else if (this.pickGroup.PickDeliveryType === 3) {
      navigate('ReturnOrder', { OrderID, order });
    }
  }
  renderInfosForPick({ Weight, Length, Width, Height, ServiceCost }) {
    if (this.pickGroup.PickDeliveryType === 3) return null;
    return (
      <View>
        <Text>{Weight} g | {Length}-{Width}-{Height} (cm3)</Text>
        <Text>Tiền thu: {ServiceCost} đ</Text>
      </View>
    );
  }
  renderOrder(order) {
    const { 
      OrderCode, RecipientName, RecipientPhone, ServiceCost, 
      Height, Width, Weight, Length, CurrentStatus, NextStatus
    } = order;

    let rightText;
    let doneStatus;
    let failStatus;
    let done;
    let fail;
    let disabled;
    let backgroundColor = '#fff';
    if (this.pickGroup.PickDeliveryType === 1) {
      rightText = 'ĐÃ LẤY';
      doneStatus = 'Storing';
      failStatus = 'ReadyToPick';
      fail = CurrentStatus === failStatus;
      done = Utils.checkPickDone(CurrentStatus);
      disabled = CurrentStatus !== 'Picking';
    } else if (this.pickGroup.PickDeliveryType === 3) {
      rightText = 'ĐÃ TRẢ';
      doneStatus = 'Returned';
      failStatus = 'Storing';
      fail = Utils.checkReturnFail(CurrentStatus, NextStatus);
      done = Utils.checkReturnDone(CurrentStatus);
      disabled = CurrentStatus !== 'Return';
    }

    if (disabled) backgroundColor = '#ddd';
    console.log(`OrderCode: ${OrderCode} | CurrentStatus: ${CurrentStatus} | doneStatus ${doneStatus}`);
    
    return (
      <TouchableOpacity
        onPress={this.onOrderPress.bind(this, order)}
      >
        <View style={{ padding: 5, backgroundColor }}>
          <Text>{OrderCode}</Text>
          <Text>{RecipientName} - {RecipientPhone}</Text>
          {this.renderInfosForPick({ Weight, Length, Width, Height, ServiceCost })}
          
          <Item>
            <CheckBox
              title='LỖI'
              onPress={this.updateOrderToFail.bind(this, order)}
              checked={fail}
              style={{ backgroundColor }}
            />
            <CheckBox
              title={rightText}
              onPress={this.updateOrderToDone.bind(this, order)}
              checked={done}
              style={{ backgroundColor }}
            />
          </Item>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { DisplayOrder } = this.pickGroup;

    this.pickGroup = this.props.pds.PickReturnItems.find(pg => pg.ClientHubID === this.ClientHubID 
      && pg.PickDeliveryType === this.PickDeliveryType && pg.DisplayOrder === DisplayOrder);
      
    const { navigation } = this.props;
    const { pickGroup } = this;
    

    console.log('====================================');
    console.log('PickGroupDetail render!');
    console.log(pickGroup);
    console.log('====================================');

    return (
      
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Button
            transparent
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" />
          </Button>
          <Body style={{ flex: 3 }}>
            <Title>[{pickGroup.DisplayOrder}] {pickGroup.ClientName}</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon name="information-circle" />
            </Button>
          </Right>
        </Header>
      
        <Content>
          <List
            dataArray={pickGroup.PickReturnSOs}
            renderRow={this.renderOrder.bind(this)}
          />
        </Content>
        <LoadingSpinner loading={this.props.loading} />
      </Container>
      
    );
  }
}
const styles = StyleSheet.create({
  CheckBoxStyle: {
    backgroundColor: '#fff'
  },
  CheckBoxStyleDisable: {
    backgroundColor: '#ddd'
  }
});

const mapStateToProps = ({ auth, pd }) => {
  const { sessionToken } = auth;
  const { pdsId, pds, loading } = pd;
  return { sessionToken, pdsId, pds, loading };
};


export default connect(mapStateToProps, { updateOrderStatus })(PickGroupDetailScreen);