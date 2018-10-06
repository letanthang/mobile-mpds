import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Alert, Platform, Keyboard, Button as RNButton, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import accounting from 'accounting';
import Utils from '../libs/Utils';
import { getOrders } from '../selectors';
import { updateWeightSize } from '../actions';
import { Colors, Styles } from '../Styles';
import { CalculateServiceFee } from '../apis/MPDS';

let waitToSave = false;
class OrderDimension extends Component {
  state = { weight: null, height: null, length: null, width: null, CalculateWeight: null, newCollectAmount: 0, newServiceFee: 0 }

  componentWillMount() {
  }

  componentDidMount() {
    // this.props.ref(this);
    this.props.myFunc(this);
  }

  componentDidUpdate() {
    if (waitToSave) {
      this.showSaveDialog();
      waitToSave = false;
    }
  }

  showSaveDialog() {
    const Fee = accounting.formatNumber(this.props.ServiceFee);
    Alert.alert(
      'Cập nhật kích thước?',
      `Bạn có chắc chắn muốn cập nhật kích thước, với mức phí mới: ${Fee}`,
      [
        { text: 'Huỷ', onPress: () => console.log('Huy pressed'), style: 'cancel' },
        { text: 'Đồng ý', onPress: () => this.onSaveWeightSize() }
      ],
      { cancelable: false }
    );
  }
// 
  onInputChange(prop, value) {
    this.state[prop] = value;

    const CW = this.state.length * this.state.width * this.state.height * 0.2;
    calculated = false;
    this.setState({ [prop]: value, CalculateWeight: CW });
  }
  onSaveWeightSizePress(order) {
    if (!this.isInfoChanged(order)) return;
    this.onSaveWeightSize();

  }
  onSaveWeightSize() {
    const { length, weight, width, height } = this.state;
    const { tripCode } = this.props;
    const params = {
      length: parseInt(length), 
      width: parseInt(width),
      height: parseInt(height),
      weight: parseInt(weight),
      tripCode,
      orderCode: this.props.orderCode,
      reason: 'Hang to bat thuong'
    };
    console.log('onSaveWeightSize');
    this.props.updateWeightSize(params);
    // this.props.popupDialogIn.dismiss();
  } 
  async onCalculateFeePress(order) {
    Keyboard.dismiss();
    if (!this.isInfoChanged(order)) return;
    this.setState({ error: null });
    const { length, weight, width, height } = this.state;
    const { orderCode, type } = order;
    const { tripCode } = this.props;
    const params = {  length, width, height, weight, orderCode, type, tripCode, reason: 'Hang to bat thuong' };
    
    // this.props.parent.setState({ length, weight, width, height, dimensionError: null });
    // this.props.popupDialogOut.dismiss();
    // this.props.popupDialogIn.show();

    try {
      const response = await CalculateServiceFee(params)

      const json = response.data;
      if (json.status === 'OK') {
        const { oldServiceFee, newServiceFee, isFeeVisible } = json.data[0];
        this.props.parent.setState({ oldServiceFee, newServiceFee, length, weight, width, height, isFeeVisible, dimensionError: null });
        this.props.popupDialogOut.dismiss();
        this.props.popupDialogIn.show();
      } else {
        this.setState({ error: 'Đã có lỗi: ' + json.message });
      }
    } catch (error) {
      this.setState({ error: 'Đã có lỗi: ' + error.message });
    }
    
  }
  
  isInfoChanged(order) {
    const { length, weight, width, height } = this.state;
    if (order.length == length 
      && order.weight == weight 
      && order.height == height 
      && order.width == width) {
      this.setState({ error: 'Các giá trị khối lượng hoặc kích thước không thay đổi. Vui lòng kiểm tra lại.' });
      return false;
    }
    return this.isInfoValidated();
  }
  isInfoValidated() {
    // DxRxC (cm): 10x10x10 - 50x30x50
    const { length, weight, width, height } = this.state;
    if (length >= 10 && length <= 200
      && width >= 10 && width <= 200
      && height >= 10 && width <= 200
      && weight >= 1 && weight <= 100000) {
        return true;
    }

    this.setState({ error: 'Thông tin kích thước khối lượng vượt quá mức cho phép. Vui lòng kiểm tra lại.' });
    return false;
  }

  renderFee(ServiceFee) {
    
    return (
      <Text style={{ color: 'red' }}>{accounting.formatNumber(ServiceFee)} đ</Text>
    );
  }

  render() {
    const { orderCode } = this.props;
    const order = Utils.getOrder(this.props.db, orderCode, 'PICK');
    const { collectAmount, weight, length, width, height } = order;
    // console.log(collectAmount, weight, length, width, height);
    // return null;

    const textStyle = Platform.OS === 'ios' ? styles.textStyleiOS : styles.textStyle;
    
    if (this.state.weight === null) {
      this.state.weight = weight || 0;
      this.state.height = height || 0;
      this.state.length = length || 0;
      this.state.width = width || 0; 
      this.state.CalculateWeight = length * width * height * 0.2;
    }

    return (
      <TouchableWithoutFeedback
        onPress={()=> Keyboard.dismiss()}
      >
        <View
          style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}
        >
          <View>
            <View style={styles.rowStyle}>
              <Text style={[Styles.midTextStyle, { color: 'red' }]}>Chỉ có thể cập nhật 1 lần, kiểm tra kĩ thông tin trước khi bấm cập nhật</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>Khối lượng (g)</Text> 
            </View>
            <View style={styles.rowStyle}>
              <TextInput 
                style={[textStyle, Styles.weakColorStyle]}
                value={this.state.weight.toString()}
                onChangeText={value => this.onInputChange('weight', value)}
                keyboardType='numeric'
              />
            </View>
            <View style={styles.rowStyle}>
              <Text style={[Styles.midTextStyle, Styles.normalColorStyle]}>Kích thước DxRxC (cm)</Text>  
            </View>
            <View style={styles.rowStyle}>
              <TextInput 
                style={[textStyle, Styles.weakColorStyle]}
                value={this.state.length.toString()}
                onChangeText={value => this.onInputChange('length', value)}
                keyboardType='numeric'
              />
              <Text> x </Text>
              <TextInput 
                style={[textStyle, Styles.weakColorStyle]}
                value={this.state.width.toString()}
                onChangeText={value => this.onInputChange('width', value)}
                keyboardType='numeric'
              />
              <Text> x </Text>
              <TextInput 
                style={[textStyle, Styles.weakColorStyle]}
                value={this.state.height.toString()}
                onChangeText={value => this.onInputChange('height', value)}
                keyboardType='numeric'
              />
            </View>
            <View style={styles.rowStyle}>
              <Text numberOfLines={2} style={[Styles.midTextStyle, { color: 'red' }]}>{this.state.error}</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: 'row', borderTopColor: '#E7E8E9', borderTopWidth: 1 }}
          >
            <View style={{ flex: 0.5, paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, borderRightWidth: 1, borderRightColor: '#E7E8E9' }}>
              <RNButton
                title="Huỷ"
                onPress={() => {
                  Keyboard.dismiss();
                  this.props.popupDialogOut.dismiss()
                }}
                color='#057AFF'
                style={{ flex: 0.5, margin: 2 }}
              />
            </View>
            <View style={{ flex: 0.5, paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30 }}>
              <RNButton
                title="Cập nhật"
                onPress={this.onCalculateFeePress.bind(this, order)}
                color='#057AFF'
                style={{ flex: 0.5, margin: 2 }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      
    );
  }
}

const styles = StyleSheet.create({
  rowStyle: {
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center'
  },
  textStyle: {
    flex: 1,
    borderBottomColor: 'gray',
  },
  textStyleiOS: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  }
});

const mapStateToProps = (state) => {
  const { pd, auth, other } = state;
  const { sessionToken } = auth;
  const { tripCode, loading } = pd;
  const { ServiceFee } = other;
  const db = getOrders(state);
  return { db, sessionToken, ServiceFee, tripCode, loading };
};


export default connect(
  mapStateToProps, 
  { updateWeightSize }
)(OrderDimension);
