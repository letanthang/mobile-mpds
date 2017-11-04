import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { accounting } from 'accounting';
import { 
  Text, Icon, Button, List
} from 'native-base';
import DataEmptyCheck from '../components/DataEmptyCheck';
import Utils from '../libs/Utils';
import { Styles, OrderStyles, Colors } from '../Styles';

class OrderDetail extends Component {
  componentWillMount() {
    
  }
  render() {
    const { order } = this.props;
    if (order == null) return null;

    const { 
      RecipientName, RecipientPhone, ExternalCode,
      ServiceName, Width, Height,
      CODAmount, Weight, Length, ServiceCost,
      Note, Log, CurrentStatus, DeliveryAddress
    } = order;

    return (
      <DataEmptyCheck
        data={this.props.order}
        message='Không có dữ liệu'
      >
        <List>
          <View style={Styles.rowHeaderStyle}>
            <Text style={[Styles.normalColorStyle, Styles.midTextStyle]}>Tổng quan</Text>
          </View>
          <View style={Styles.rowStyle}> 
            <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Mã nhận hàng</Text>
            <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{ExternalCode || 'Không có'}</Text>
          </View>
          <View style={Styles.rowStyle}>
            <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Mã đơn hàng shop</Text>
            <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{ExternalCode || 'Không có'}</Text>
          </View>
          <View style={Styles.rowStyle}>
            <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Gói dịch vụ</Text>
            <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{ServiceName}</Text>
          </View>
          <View style={Styles.rowStyle}>
            <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Tổng thu người gởi</Text>
            <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{accounting.formatNumber(CODAmount)} đ</Text>
          </View>
          <View style={Styles.rowLastStyle}>
              <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Phí vận chuyển</Text>
              <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{ServiceCost} đ</Text>
          </View>

          <View style={Styles.rowHeaderStyle}>
            <Text style={[Styles.normalColorStyle, Styles.midTextStyle]}>Khối lượng và kích thước</Text>
          </View>
          <View style={Styles.rowStyle}>
              <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Khối lượng</Text>
              <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{Weight} g</Text>
          </View>
          <View style={Styles.rowStyle}>
              <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Kích thước</Text>
              <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{Length}cm x {Width}cm x {Height}cm</Text>
          </View>
          <View style={Styles.rowLastStyle}>
              <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Khối lượng qui đổi</Text>
              <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{Length * Width * Height * 0.2} g</Text>
          </View>

          <View style={Styles.rowHeaderStyle}>
            <Text style={[Styles.normalColorStyle, Styles.midTextStyle]}>Thông tin khách hàng</Text>
          </View>
          <View style={Styles.rowStyle}>
            <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Tên khách hàng</Text>
            <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{RecipientName}</Text>
          </View>
          <View style={Styles.rowStyle}>
              <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Số điện thoại</Text>
              <Button
                transparent
                iconRight
                small
                onPress={() => Utils.phoneCall(RecipientPhone, true)}
                style={{ paddingLeft: 0 }}
              >
                <Text>{RecipientPhone}</Text>
                <Icon name='call' />
              </Button>
          </View>
          <View style={Styles.rowLastStyle}>
              <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Địa chỉ</Text>
              <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{DeliveryAddress}</Text>
          </View>
          <View style={Styles.rowHeaderStyle}>
            <Text style={[Styles.normalColorStyle, Styles.midTextStyle]}>Ghi chú</Text>
          </View>
          <View style={[Styles.rowStyle]}>
            <Text style={[Styles.col1Style, Styles.weakColorStyle]}>Ghi chú đơn hàng</Text>
            <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{Note}</Text>
          </View>
          <View style={Styles.rowLastStyle}>
            <View>
              <Text style={[Styles.weakColorStyle]}>Lịch sử đơn hàng</Text>
              <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>{Log}</Text>
            </View>
          </View>
        </List>
      </DataEmptyCheck>
    );
  }
}

const mapStateToProps = ({ orderAdd }) => {
  const { order } = orderAdd;
  return { order };
};

export default connect(mapStateToProps, {})(OrderDetail);