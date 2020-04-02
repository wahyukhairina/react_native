import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {DatePicker} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getHistory} from '../../redux/actions/checkout';
import {Dimensions} from 'react-native';
class History extends Component {
  state = {
    start: new Date(),
    end: new Date(),
  };

  onStart = event => this.setState({start: event});
  onEnd = event => this.setState({end: event});
  onSubmit = event => {
    const startDate = this.state.start.toLocaleDateString();
    const endDate = this.state.end.toLocaleDateString();

    console.log('yes', startDate, endDate);
    this.props.dispatch(getHistory(startDate, endDate));
  };

  render() {
    console.log('state', this.state);
    console.log('props', this.props);
    const {histories} = this.props;
    let x = [];
    let y = [];
    let i = 0;
    histories.forEach(item => {
      x[i] = item.date;
      y[i] = item.total;
      i++;
    });
    return (
      <>
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{marginHorizontal: 10}}>
              <DatePicker
                defaultDate={this.state.start}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={this.state.start}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Start Date"
                textStyle={{color: 'green'}}
                placeHolderTextStyle={{color: 'grey'}}
                onDateChange={this.onStart}
                disabled={false}
              />
              <Text style={{fontSize:16}}>start: {this.state.start.toString().substr(4, 12)}</Text>
            </View>
            <View style={{marginHorizontal: 10}}>
              <DatePicker
                defaultDate={this.state.end}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={this.state.end}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="End Date"
                textStyle={{color: 'green'}}
                placeHolderTextStyle={{color: 'grey'}}
                onDateChange={this.onEnd}
                disabled={false}
              />
              <Text style={{fontSize:16}}>end: {this.state.end.toString().substr(4, 12)}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={this.onSubmit}
              style={{width: 80, height: 25, backgroundColor: '#FFAEAE', borderRadius:5, justifyContent:'center',alignItems:'center',  marginVertical: 20}}>
              <Text style={{fontSize:16}}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View>
    
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    histories: state.order.histories,
  };
};
export default connect(mapStateToProps)(History);
