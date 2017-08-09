import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { 
  Container, Content, Text, Title, Icon,
  Header, Button, Left, Right, Body,
  List, ListItem 
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { phonecall } from 'react-native-communications';
import { updateOrderStatus } from './actions';
import Utils from './libs/Utils';
import LoadingSpinner from './components/LoadingSpinner';

let ClientID = null;
class PickOrderScreen extends Component {
  
  componentWillMount() {
    const OrderID = this.props.navigation.state.params.OrderID;
    console.log('====================================');
    console.log(`PickOrderScreen: cwm called with
    OrderID = ${OrderID}`);
    console.log('====================================');
  }

  componentDidUpdate() {
    const OrderID = this.props.navigation.state.params.OrderID;
    const order = Utils.getOrder(this.props.pds, OrderID);
    console.log('====================================');
    console.log(`PickOrderScreen: cdu, OrderId = ${OrderID}, order = `);
    console.log(order);
    console.log('====================================');
  }

  updateOrderToDone(order) {
    const { sessionToken, pdsId } = this.props;
    const { OrderID, PickDeliveryType, PickDeliverySessionDetailID } = order;
    const status = 'Delivered';
    this.props.updateOrderStatus({ 
      sessionToken, pdsId, PickDeliverySessionDetailID, OrderID, PickDeliveryType, status 
    });
  }

  updateOrderToFail(order) {
    console.log('giao loi pressed');
    const { sessionToken, pdsId } = this.props;
    const { OrderID, PickDeliveryType, PickDeliverySessionDetailID } = order;
    const status = 'Storing';
    const StoringCode = 'GHN-SC9649';
    const NewDate = 0;
    const Log = 'GHN-SC9649|KHÁCH ĐỔI ĐỊA CHỈ GIAO HÀNG';
    this.props.updateOrderStatus({ 
      sessionToken, 
      pdsId, 
      PickDeliverySessionDetailID, 
      OrderID, 
      PickDeliveryType, 
      status,
      StoringCode,
      NewDate,
      Log 
    });
  }
  
  render() {
    const OrderID = this.props.navigation.state.params.OrderID;
    const order = Utils.getOrder(this.props.pds, OrderID);
    ClientID = this.props.navigation.state.params.ClientID;
    //const order = this.props.navigation.state.params.order;

    const { navigate, goBack } = this.props.navigation;
    const { 
      RecipientName, RecipientPhone, Address, ExternalCode,
      ServiceName, TotalCollectedAmount, Width, Height,
      CODAmount, Weight, Length, ServiceCost,
      ClientName, ContactPhone, RequiredNote, OrderCode,
      Note, Log, CurrentStatus
    } = order;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>{OrderCode}</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigate('POUpdateWeightSize', { OrderID, ClientID })}
            >
              <Icon name="create" />
            </Button>
          </Right>
          
        </Header>
        <Content>
          <List>
            <ListItem itemHeader first style={{ backgroundColor: '#06B2F5' }}>
              <Text style={{ color: 'white' }}>Tổng quan</Text>
            </ListItem>
            <ListItem>
              <Left><Text>Mã nhận hàng</Text></Left>
              <Right style={{ flex: 1 }}>
                <Text>{ExternalCode || 'Không có'}</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left><Text>Mã đơn hàng shop</Text></Left>
              <Right style={{ flex: 1 }}>
                <Text>{ExternalCode || 'Không có'}</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left><Text>Gói dịch vụ</Text></Left>
              <Right>
                <Text>{ServiceName}</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left><Text>Tổng thu người gởi</Text></Left>
              <Right>
                <Text>{ServiceCost} đ</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left><Text>Phí vận chuyển</Text></Left>
              <Right>
                <Text>{ServiceCost} đ</Text>
              </Right>
            </ListItem>

            <ListItem itemHeader first style={{ backgroundColor: '#06B2F5' }}>
              <Text style={{ color: 'white' }}>Khối lượng và kích thước</Text>
            </ListItem>
            <ListItem>
              <Left><Text>Khối lượng</Text></Left>
              <Right>
                <Text>{Weight} g</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left><Text>Kích thước</Text></Left>
              <Right style={{ flex: 1 }}>
                <Text>{Length}cm x {Width}cm x {Height}cm</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left><Text>Khối lượng qui đổi</Text></Left>
              <Right>
                <Text>{Length * Width * Height * 0.2} g</Text>
              </Right>
            </ListItem>

            <ListItem itemHeader first style={{ backgroundColor: '#06B2F5' }}>
              <Text style={{ color: 'white' }}>Thông tin khách hàng</Text>
            </ListItem>
            <ListItem>
              <Left><Text>Tên khách hàng</Text></Left>
              <Right>
                <Text>{RecipientName}</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left><Text>Số điện thoại</Text></Left>
              <Right style={{ flex: 1 }}>
                <Button
                  transparent
                  iconRight
                  onPress={() => phonecall(RecipientPhone, true)}
                >
                  <Text>{RecipientPhone}</Text>
                  <Icon name='call' />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left><Text>Địa chỉ</Text></Left>
              <Right>
                <Text>{Address}</Text>
              </Right>
            </ListItem>


            <ListItem itemHeader first style={{ backgroundColor: '#06B2F5' }}>
              <Text style={{ color: 'white' }}>Ghi chú</Text>
            </ListItem>
            <ListItem>
              <Left><Text>Ghi chú đơn hàng</Text></Left>
              <Right>
                <Text>{Note}</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
              <Text>Lịch sử đơn hàng</Text>
              <Text>{Log}</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <LoadingSpinner loading={this.props.loading} />
      </Container>
    );
  }
}

const mapStateToProps = ({ pd, auth }) => {
  //const OrderID = ownProps.navigation.state.params.OrderID;
  const { sessionToken } = auth;
  const { pds, pdsId, loading } = pd;
  return { pds, pdsId, sessionToken, loading };
};


export default connect(
  mapStateToProps, 
  { updateOrderStatus }
)(PickOrderScreen);
