import { Appearance, StyleSheet, Platform, SafeAreaView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";

import {MENU_ITEMS} from "@/constants/menuItems"
import MENU_IMAGES from "@/constants/MenuImages"
import { ScrollView } from "react-native-gesture-handler";

export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = <View style = {styles.separator}/>
    const headerComp = <Text>Top of the List</Text>
    const footerComp = <Text style={{color: theme.headerBackground}}>End of the List</Text>
    return (
        <Container>

            <FlatList
                data={MENU_ITEMS}
                keyExtractor= {(item) => item.id.toString()}
                showsVerticalScrollIndicator ={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
               // ListHeaderComponent={ headerComp }
                ListFooterComponent={ footerComp }
                ListFooterComponentStyle={ styles.footerComp}
                ListEmptyComponent={<Text>No items</Text>}
                renderItem = {({ item }) => (
                    <View style= {styles.rows}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image
                            source={MENU_IMAGES[item.id -1]}
                            style={styles.menuItemImage}
                        />
                    </View>
                )}
            />
        </Container>
    )

}
function createStyles(theme, colorScheme){
    return StyleSheet.create({
        contentConatainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'light' ? theme.headerBackground : 'chocolate',
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginVertical: 'auto'
        },
        footerComp: {
            marginHorizontal: 'auto',
            
            
        },
        rows: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            margin: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? '#000' : '#fff',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
            
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,

        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline'
        },
        menuItemText: {
            color: theme.background
        },
        menuItemImage: {
            width: 100,
            height: 100

        }
    })

}