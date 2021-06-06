import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/colors';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details({ route, navigation }) {
    const { item } = route.params
    const renderIngredientItem = ({ item }) => {
        return (
            <View style={[styles.ingredientItemWrapper, {
                marginLeft: item.id === '1' ? 20 : 0
            }]}>
                <Image source={item.image} style={styles.ingredientItemImage} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                <SafeAreaView>
                    {/* Header */}
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.headerLeft}>
                                <Feather name="chevron-left" size={12} color={colors.textDark} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.headerRight}>
                            <MaterialCommunityIcons name="star" size={12} color={colors.white} />
                        </View>
                    </View>
                    {/* Title */}
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    {/* Price */}
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>{item.price}$</Text>
                    </View>
                    {/* Item Info */}
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoLeftWrapper}>
                            <View style={styles.infoItemWrapper}>
                                <Text style={styles.infoSubTitle}>Size</Text>
                                <Text style={styles.infoTitle}>{item.sizeName} {item.sizeNumber}"</Text>
                            </View>
                            <View style={styles.infoItemWrapper}>
                                <Text style={styles.infoSubTitle}>Crust</Text>
                                <Text style={styles.infoTitle}>{item.crust}</Text>
                            </View>
                            <View style={styles.infoItemWrapper}>
                                <Text style={styles.infoSubTitle}>Delivery In</Text>
                                <Text style={styles.infoTitle}>{item.deliveryTime} Min</Text>
                            </View>
                        </View>
                        <View style={styles.infoRightWrapper}>
                            <Image source={item.image} style={styles.infoMainImage} />
                        </View>
                    </View>
                    {/* Ingredient */}
                    <View style={styles.ingredientWrapper}>
                        <Text style={styles.ingredientTitle}>Ingredients</Text>
                        <View style={styles.ingredientListWrapper}>
                            <FlatList
                                data={item.ingredients}
                                renderItem={renderIngredientItem}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    {/* Place an order */}
                    <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
                        <View style={styles.orderWrapper}>
                            <Text style={styles.orderText}>Place an order</Text>
                            <Feather name="chevron-right" size={18} color={colors.black} />
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}
const styles = new StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10
    },
    headerRight: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        fontWeight: '600',
        width: '40%'
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    price: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 32,
        color: colors.price,
        fontWeight: '600',
    },

    infoWrapper: {
        paddingHorizontal: 20,
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoItemWrapper: {
        marginBottom: 20,
    },

    infoSubTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: colors.textLight,
        paddingBottom: 5
    },
    infoTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        fontWeight: 600,
        color: colors.textDark,
    },
    infoMainImage: {
        width: 296,
        height: 176,
        resizeMode: 'contain',
        marginLeft: 37,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ingredientWrapper: {
        marginTop: 40
    },
    ingredientTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.textDark,
        fontWeight: '600',
        paddingHorizontal: 20,
    },
    ingredientListWrapper: {
        paddingVertical: 20
    },
    ingredientItemWrapper: {
        backgroundColor: colors.white
    },
    ingredientItemImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    ingredientItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        elevation: 2,
    },
    orderWrapper: {
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    orderText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10,
    },
})