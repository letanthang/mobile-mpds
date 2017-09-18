import _ from 'lodash';
import React, { Component } from 'react';
import { SectionList, FlatList, View, TouchableOpacity } from 'react-native';
import { 
  Container, Right, Left, Body, Content,
  Icon, Button, Title, Text,
  Header, Input, Item, Badge 
} from 'native-base';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IC from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import AppFooter from '../components/AppFooter';
import Utils from '../libs/Utils';
import StatusText from '../components/StatusText';
import DataEmptyCheck from '../components/DataEmptyCheck';
import { Styles, DeliverGroupStyles, Colors } from '../Styles';

class OrderListScreen extends Component {
  state = { showSearch: false, keyword: '' };
  componentWillMount() {
    
  }
  componentWillUpdate() {
    
  }
  componentDidUpdate() {
    
  }

  onDeliveryOrderPress(order) {
    const { OrderID, ClientHubID, ClientID, PickDeliveryType } = order;
    const navigate = this.props.navigation.navigate;
    console.log('onDeliveryOrderPress called with OrderID =');
    console.log(OrderID);
    switch (PickDeliveryType) {
      case 1:
        navigate('PickOrder', { OrderID, order, ClientID, ClientHubID });
        break;
      case 2:
        navigate('DeliveryOrder', { OrderID });
        break;
      case 3:
        navigate('ReturnOrder', { OrderID, order, ClientID, ClientHubID });
        break;
      default:
        break;
    }
  }

  goBack() {
    const dispatch = this.props.navigation.dispatch;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ 
          routeName: 'Drawer', 
          action: NavigationActions.navigate({ routeName: 'Home' }) 
        })
      ]
    });
    dispatch(resetAction);
  }

  renderHeader() {
    const { navigate } = this.props.navigation;
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
                if (keyword !== undefined) {
                  console.log('keyword changed!');
                  this.setState({ keyword: keyword.trim() });
                }
              }}
            />
            <Button
              transparent
              small
              onPress={() => this.setState({ keyword: '' })}
            >
              <IconFA 
                name="times-circle" size={14} 
              />
            </Button>
            
          </Item>
          <Right style={{ flex: 0 }} >
            <Button
              transparent
              style={{ marginLeft: 8 }}
              onPress={() => this.setState({ showSearch: !this.state.showSearch })}
            >
              <Text>Huỷ</Text>
            </Button>
          </Right>
        </Header>
        );
    } 
    
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.goBack()}
          >
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title>Tất cả: lấy|giao|trả</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.setState({ showSearch: !this.state.showSearch })}
          >
            <Icon name="search" />
          </Button>
          <Button
            transparent
            onPress={() => navigate('DeliveryGroupCreate')}
          >
            <IC name="group" size={22} color={Colors.headerActive} />
          </Button>
        </Right>
      </Header>
    );
  }
  renderStatusText(order) {
    const { CurrentStatus, PickDeliveryType } = order;
    const DisplayStatus = Utils.getDisplayStatus(CurrentStatus, PickDeliveryType);
    const StatusColor = Utils.getDisplayStatusColor(CurrentStatus, PickDeliveryType);
    return (
      <StatusText text={DisplayStatus} colorTheme={StatusColor} />
    );
  }
  
  checkKeywork({ OrderCode }) {
    return this.state.keyword === '' || OrderCode.toUpperCase().includes(this.state.keyword.toUpperCase());
  }
  renderNullData() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Right />
        </Header>
        <Content style={{ padding: 16 }}>
          <Body><Text>Không có dữ liệu</Text></Body>
        </Content>
      </Container>
    );
  }

  render() {
    const { pds } = this.props;
    if (!pds || !pds.PDSItems) return this.renderNullData();

    const items = pds.PDSItems.filter(o => this.checkKeywork(o));
    const datas = _.groupBy(items, 'Address');
    const sections = _.map(datas, (item) => {
      return { data: item, title: item[0].Address };
    });
    console.log('OrderListScreen: render, sections =');
    console.log(sections);
    
    return (
      <Container style={{ backgroundColor: Colors.background }}>
        {this.renderHeader()}
        {/* <FlatList
          data={pds.PDSItems}
          renderItem={({ item }) => <View><Text>{item.OrderCode}</Text></View>}
        /> */}
        <DataEmptyCheck
          data={items}
          message="Không có dữ liệu"
        >
          <SectionList
            renderItem={({ item, index }) => { 
              const { Address, OrderCode, OrderID, ServiceName, CurrentStatus, TotalCollectedAmount, DisplayOrder } = item;
              const wrapperStyle = index == 0 ? DeliverGroupStyles.orderWrapperFirstStyle : DeliverGroupStyles.orderWrapperStyle;
              return (
                <View style={DeliverGroupStyles.content}>
                  <TouchableOpacity
                    onPress={this.onDeliveryOrderPress.bind(this, item)}
                  >
                    <View style={wrapperStyle}>
                      <View style={Styles.item2Style}>
                        <Text style={[Styles.bigTextStyle, Styles.normalColorStyle]}>
                          [{DisplayOrder}] {OrderCode}
                        </Text>
                        <Badge>
                          <Text>{ServiceName}</Text>
                        </Badge>
                      </View>
                      
                      <View style={Styles.itemStyle}>
                        {this.renderStatusText(item)}
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            renderSectionHeader={({ section }) => (
              <View style={DeliverGroupStyles.sectionHeader}>
                <Text style={DeliverGroupStyles.headerText}>{section.title}</Text>
              </View>
            )}
            sections={sections}
          /> 
        </DataEmptyCheck>
        <AppFooter navigation={this.props.navigation} />
      </Container>
    );
  }

}

const mapStateToProps = ({ pd }) => {
  const { pds, deliveryTotal, deliveryComplete } = pd;
  return { pds, deliveryTotal, deliveryComplete };
};

export default connect(mapStateToProps, {})(OrderListScreen);