/**
 * Created by 思思 on 17/5/7.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';

import Color from './../../../Config/Color';
import Space from './../../../Config/Space';
import MyApplyCell from './../../../Common/MyApplyCell';
import Picker from 'react-native-picker';

export default class extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({  
        headerTitle: '我的申请', 
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: Color.kMainColor  // 设置导航栏的背景颜色,headerTintColor设置无效
        },
    }); 

    constructor(props) {
        super(props);
        this.state = {
            applyReason: ''
        };
    }

    render() {
        return (
            // scrollView滑动的时候Picker隐藏
            <ScrollView style={styles.container} onScroll={()=>{Picker.hide()}}>
                <MyApplyCell iconName ={require('./../../../Images/Setting/pubilc_cbb@2x.png')} 
                             placeholder='请选择教室'
                             onPress={()=>{alert('选择教室')}}
                             title='申请教室'
                             >
                             
                </MyApplyCell>
                <MyApplyCell iconName ={require('./../../../Images/Setting/ss_ic_timepre@2x.png')} 
                             placeholder='请选择日期' 
                             onPress={()=>{
                                //  alert('选择日期')
                                this.showDatePicker()
                                }
                                }
                             title='申请日期'>
                </MyApplyCell>
                <MyApplyCell placeholder='请输入事由' 
                             title='申请事由'
                             onChangeText={(text)=>{this.setState({applyReason: text})}}
                             >
                </MyApplyCell>
                <MyApplyCell iconName ={require('./../../../Images/Setting/ss_ic_timepre@2x.png')} 
                             placeholder='请选择使用时间' 
                             onPress={()=>{alert('选择使用时间')}}
                             title='使用时间'>
                </MyApplyCell>
                <MyApplyCell iconName ={require('./../../../Images/Setting/pubilc_cbb@2x.png')} 
                             placeholder='请选择部门' 
                             onPress={()=>{alert('选择部门')}}
                             title='使用部门'>
                </MyApplyCell>
            </ScrollView>
        );
    }

    _createDateData() {
        let date = [];
        for(let i=1950;i<2050;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }

    showDatePicker() {
        Picker.init({
            pickerData: this._createDateData(),
            pickerToolBarFontSize: 16,
            pickerFontSize: 16,
            pickerFontColor: [0, 0 ,0, 1],
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '选择日期',
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    // 点击返回按钮,Picker消失
    componentWillUnmount() {
        Picker.hide();
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});