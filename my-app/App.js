import React, {Component} from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions,
    TouchableOpacity } from 'react-native';
import Images from "../my-app/Themes/Images";

import {
  Button, Container, Header, Content, Icon as NBIcon, Left, Body,
  Right, Button as NBButton, Footer, FooterTab} from "native-base";
import FontAwesome from 'react-native-fontawesome';
import {FlatList} from "react-native"

class App extends Component {
    constructor(props) {
    super(props);
        this.state = {
            horizontalList: [
                { name: 'أطباق جانبية'},
                { name: 'الشوربة' },
                { name: 'بيتزا' },
                { name: 'أطباق ساخنة'},
                { name: ' باردة'},
                { name: ' باردة'},
            ],
            restaurants: [
                {
                    price: '41.20',
                    title: 'همبرغر',
                    description: 'هام ، جبن ، خس ، صلصة',
                    image: { uri: "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
                },
                {
                    price: '35.00',
                    title: 'همبرغر',
                    description: 'هام ، جبن ، خس ، صلصة',
                    image: { uri: "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
                },
                {
                    price: '27.00',
                    title: 'همبرغر',
                    description: 'هام ، جبن ، خس ، صلصة',
                    image: { url: "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
                },
                {
                    price:' 50.00',
                    title: 'همبرغر',
                    description: 'هام ، جبن ، خس ، صلصة',
                    image: { uri: "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
                },
                {
                    price: '17.00',
                    title: 'همبرغر',
                    description: 'هام ، جبن ، خس ، صلصة',
                    image: { url: "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
                },
                {
                    price: '20.00',
                    title: 'همبرغر',
                    description: 'هام ، جبن ، خس ، صلصة',
                    image: { uri: "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
                }
            ],
        };
    }
    componentWillReceiveProps() {
    }

    componentDidMount() {
    }

    renderHorizontalList(item, rowID) {
        return (
            <View>
                <View style={{
                    marginTop: 10,
                    marginBottom: 5,
                }}>
                </View>
                <TouchableOpacity
                    style={{
                    marginLeft: 20, marginRight: 20,
                    marginBottom: 20, marginTop: 25,
                }}
                    key={ rowID}>
                    <View>
                        <TouchableOpacity onPress={this._onPress}>
                            <Text style={{ fontSize: 18, color: '#a7a7a7' }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderItem(item, sectionID, rowID){
        return (
            <View>
                <View style={{
                    paddingLeft: 10,
                    marginTop: 10,
                    marginBottom: 5,
                }}>
                </View>
                <TouchableOpacity onPress={() => {
                    alert('Hi')
                }} style={{
                    paddingTop: 5, paddingHorizontal: 10,
                    borderBottomWidth: 1, borderColor: '#d0d0d0',
                    flexDirection: 'column',
                    marginLeft: 20, marginRight: 20,
                }}
                    key={ rowID}>
                    <View style={{flexDirection: 'row'}}>

                        <View style={{flex: 25, alignSelf: 'flex-start', alignItems: 'flex-start',
                            justifyContent: 'flex-start'}}>
                            <TouchableOpacity onPress={() => {
                            }}>
                                <Text allowFontScaling={false} style={{
                                    fontSize: 18,
                                    fontWeight:'bold'
                                }}>{item.price}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 60, flexDirection: 'column'}}>
                            <TouchableOpacity onPress={() => {alert('Hi')}}>
                                <Text allowFontScaling={false} style={{
                                    alignSelf: 'flex-end',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    lineHeight: 25,
                                    fontSize: 25,
                                }}>{item.title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {alert('Hi')}}>
                                <Text allowFontScaling={false} style={{
                                    alignSelf: 'flex-end',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    lineHeight: 25, color: '#a7a7a7',
                                    fontSize: 15,
                                }}>{item.description}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 25, alignSelf: 'flex-start'}}>
                            <TouchableOpacity onPress={() => {
                            }}>
                                <Image
                                    style={{ marginBottom: 15, marginLeft: 20,
                                        width: 60,
                                        height: 60,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                        borderWidth: 1,
                                        borderColor: '#fff'}}
                                    source={item.image ? item.image : null}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        )
    };

    render() {
        return (
            <Container style={{
                backgroundColor: 'white',
                marginBottom: 50,
                flex:1,
                flexGrow:1}}>
            <StatusBar  />

            <Header style={{
                marginTop: 10, paddingBottom: 20,
                borderBottomWidth: 1, borderBottomColor: '#d0d0d0',
                marginRight: 20, marginLeft: 20,
                backgroundColor: 'white',
            }}>

            <Left>
                <NBButton
                    style={{width: 35, marginLeft: 10}}
                    transparent
                    onPress={() => {
                        alert('Hi')
                    } }>
                    <NBIcon style={{fontSize: 50, fontWeight: 'bold', 'color': 'black'}} name='reorder'/>
                </NBButton>

            </Left>
            <Body style={{alignItems: 'center'}}>
                <Text
                    style={{ fontSize: 20, fontWeight: 'bold'}}>قائمة المطعم</Text>
            </Body>
                <Right style={{flex: 0.5}}></Right>
                    <NBButton transparent
                          onPress={() => {
                              alert('Hi')
                          } }>
                    <NBIcon style={{'color': 'black'}} name='ios-arrow-forward'/>
                </NBButton>

            </Header>

                <View style={{
                    flexDirection: 'row',
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingTop: 4,
                    marginBottom: 5,
                    marginTop: 0,
                }}>
                    <View style={{
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                    }}>
                        <Image
                            source={Images.tacosLogo}
                            resizeMode={'contain'}
                            style={{width: 120, height: 120, marginTop: 15, borderRadius: 1, marginLeft: 20}}
                        />
                    </View>
                    <View   style={{  flex:1,
                        alignSelf: 'flex-start',
                        justifyContent:'flex-end',
                        alignItems: 'flex-end',
                        marginLeft: 12,
                        marginRight: 20,
                    } }>
                        <Text
                            style={{
                                fontWeight: 'bold', marginTop: 15,
                                fontSize: 20,
                            }}>
                            قائمة المطعم
                        </Text>
                        <Text
                            style={{
                                marginTop: 10, fontSize: 15,
                            }}>
مرحبا بكم في مطعمنا.                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                            }}>

هنا سوف تجد أي طبق على الإطلاق                        </Text>
                    </View>
                </View>
                <FlatList
                    horizontal
                    data={this.state.horizontalList}
                    showsHorizontalScrollIndicator={false}
                    renderItem={ (row, sectionID, rowID) => this.renderHorizontalList(row.item, sectionID, rowID) }/>

                <FlatList
                    data={this.state.restaurants}
                    renderItem={ (row, sectionID, rowID) => this.renderItem(row.item, sectionID, rowID) }/>

                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Button style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-start',
                        justifyContent: 'center',
                        marginLeft: 30,
                        paddingHorizontal: 12,
                        height: 50, width: 180,
                        backgroundColor: '#62aace'
                    }}
                        onPress={() => {alert('Hi')}}>
                        <Text allowFontScaling={false}
                              style={{
                                  lineHeight: 23,
                                  fontSize: 23,
                                  color: 'white'
                              }}>أن تأمر
                        </Text>
                    </Button>
                    <View style={{
                        flexDirection: 'column',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        marginLeft: 70,
                    }}>
                    <Text allowFontScaling={false}>المبلغ الإجمالي</Text>
                    <Text style={{fontSize: 27, fontWeight: 'bold'}} allowFontScaling={false}>1200.00</Text>
                    </View>
                </View>

            </Container>

    );
  }
}
export default App;

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
  },
});
