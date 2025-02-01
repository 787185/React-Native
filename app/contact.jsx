import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import latteImg from '@/assets/images/coffee-latte.jpeg'
import americano from '@/assets/images/americano.jpeg'
import capuccino from '@/assets/images/capuccino.jpeg'
import mocha from '@/assets/images/mocha.jpeg'
import iced from '@/assets/images/iced-coffee.jpeg'
import headImg from '@/assets/images/coffee-splash.jpeg'

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          resizeMode='cover'
          color="#808080"
          source={headImg}
          style={styles.headerImage}
        />
      }
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">What we offer</ThemedText>
      </ThemedView>
      <ThemedText>Below are the different varieties of coffee drinks we offer and their descriptions:</ThemedText>
      <Collapsible title="Latte">
        <ThemedText>
            <Image source={latteImg} style={styles.drink}></Image>
        </ThemedText>
        <ThemedText>
        It combines the rich, robust flavor of espresso with the creamy smoothness of steamed milk. It's a harmonious blend where the boldness of the coffee is softened and sweetened by the milk, creating a comforting and satisfying drink.
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link">Order now</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Americano">
        <ThemedText>
          <Image source={americano} style={styles.drink}></Image>
        </ThemedText>
        <ThemedText>
          Espresso diluted with hot water, similar to drip coffee but with a more intense flavor.
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link">Order now</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Capuccino">
        <ThemedText>
          <Image source={capuccino} style={styles.drink}></Image>
        </ThemedText>
        <ThemedText>
        Similar to a latte, but with equal parts espresso, steamed milk, and foamed milk. It has a stronger coffee flavor and a frothy texture.
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link">Order now</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Mocha">
        <ThemedText>
          <Image source={mocha} style={styles.drink}></Image>
        </ThemedText>
        <ThemedText>
        A chocolate-flavored latte, made with espresso, steamed milk, chocolate syrup, and often topped with whipped cream.
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link">Order now</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Iced">
        <ThemedText>
          <Image source={iced} style={styles.drink}></Image>
        </ThemedText>
        <ThemedText>
        Coffee served over ice, often with milk or cream and sweeteners. It's a refreshing option for hot weather.
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link">Order now</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      {/* <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 400,
    height: 250
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  drink: {
    width: 300,
    height: 250,
    marginBottom: 50,
  }
});
