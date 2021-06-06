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
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoriesData from '../assets/data/CategoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { render } from 'react-dom';
import PopularData from '../assets/data/popularData';
import { color } from 'react-native-reanimated';


export default function Home({ navigation }) {
    const renderCategoryItem = ({ item }) => {
        return (
            <View
                key={item.id}
                style={[styles.categoriesItemWrapper, {
                    backgroundColor: item.selected ? colors.primary : colors.white,
                    marginLeft: item.id = 1 ? '20px' : '0px'
                }]}>
                <Image style={styles.categoriesImage}
                    source={item.image}
                />
                <Text style={styles.categoriesTitle}>{item.title}</Text>
                <View style={[styles.categoriesIconWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary
                }]}>
                    <Feather style={styles.categoriesIcon} name="chevron-right" size={10}></Feather>
                </View>
            </View >
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                <SafeAreaView>
                    {/* Header Section */}
                    <View style={styles.headerWrapper}>
                        <Image
                            source={require('../assets/images/profile.png')}
                            style={styles.profileImage}
                        />
                        <Feather name="menu" size={24} color={colors.textDark} />
                    </View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleSubHead}>
                            Food
                    </Text>
                        <Text style={styles.titleHead}>
                            Delivery
                    </Text>
                    </View>
                    <View style={styles.searchWrapper}>
                        <Feather name='search' size={16} color={colors.textDark} />
                        <View style={styles.search}>
                            <Text style={styles.searchText}>Search</Text>
                        </View>
                    </View>
                    {/* Category Section */}
                    <View style={styles.categoriesWrapper}>
                        <Text style={styles.categoriesHeadTitle}>
                            Category
                    </Text>
                        <View style={styles.categoryListWrapper}>
                            <FlatList
                                data={CategoriesData}
                                renderItem={renderCategoryItem}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                            />
                        </View>
                    </View>
                    {/* Popular Section */}
                    <View style={styles.popularWrapper}>
                        <Text style={styles.popularHeadTitle}>Popular</Text>
                        {PopularData.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => navigation.navigate('Details', {
                                    item: item
                                })}
                            >
                                <View style={styles.popularCardWrapper}>
                                    <View>
                                        <View>
                                            <View style={styles.popularToperWrapper}>
                                                <MaterialCommunityIcons name="crown" size={12} color={colors.primary} />
                                                <Text style={styles.popularToperText}> Top Of The Week</Text>
                                            </View>
                                            <View style={styles.popularTitleWrapper}>
                                                <Text style={styles.popularItemTitle}>{item.title}</Text>
                                                <Text style={styles.popularItemWeight}>Weight {item.weight}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.popularBottomWrapper}>
                                            <View style={styles.addPizzaButton}>
                                                <Feather name="plus" size={12} />
                                            </View>
                                            <View style={styles.PopularRatingWrapper}>
                                                <Feather style={styles.ratingIcon} name="star" size={12} />
                                                <Text style={styles.ratingNumber}>{item.rating}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.popularRightWrapper}>
                                        <Image style={styles.popularImage} source={item.image} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '20px',
        paddingTop: '20px',
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    titleWrapper: {
        marginTop: '30px',
        paddingHorizontal: '20px'
    },
    titleSubHead: {
        fontFamily: 'Montserrat-Medium',
        fontSize: '18px',
        color: colors.textDark
    },
    titleHead: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        fontWeight: '600',
        marginTop: 5
    },
    searchWrapper: {
        flexDirection: 'row',
        marginTop: '30px',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2
    },
    searchText: {
        fontFamily: 'Montserrat-Semi-bold',
        fontSize: 16,
        marginBottom: 5,
        color: colors.textLight
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesHeadTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.textDark,
        marginTop: 5,
        paddingHorizontal: 20,
        fontWeight: '600'
    },
    categoryListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoriesItemWrapper: {
        backgroundColor: colors.primary,
        marginRight: 30,
        borderRadius: 20,
        shadowColor: colors.textLight,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
    },
    categoriesImage: {
        width: 60,
        height: 60,
        marginTop: 24,
        alignSelf: 'center',
        marginHorizontal: 23,
    },
    categoriesTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 10,
        marginBottom: 30,

    },
    categoriesIconWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 26,
        height: 26,
        marginBottom: 20,
        borderRadius: 50,
    },
    categoriesIcon: {
        alignSelf: 'center'
    },
    popularHeadTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.textDark,
        fontWeight: '600'
    },
    popularWrapper: {
        marginTop: 10,
        paddingHorizontal: 20,
        overflow: 'hidden',
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        marginTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        paddingTop: 10,
    },
    popularToperWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    popularToperText: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        marginLeft: 10,
        color: colors.textDark,
    },
    popularTitleWrapper: {
        marginTop: 20
    },
    popularItemTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        fontWeight: 600,
        color: colors.textDark,
    },
    popularItemWeight: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: colors.textLight,
        paddingTop: 5
    },
    popularBottomWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        color: colors.textDark,
    },
    PopularRatingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    ratingIcon: {
        color: colors.textDark
    },
    ratingNumber: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark
    },
    popularRightWrapper: {
        marginLeft: 40
    },
    popularImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },
});