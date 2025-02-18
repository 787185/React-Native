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
      <ThemedText>Meeting Point</ThemedText>
      <ThemedText>Sandpit, Buea - Southwest </ThemedText>
      <ThemedText>Hours</ThemedText>
      <ThemedText>Open 7am to 5pm daily </ThemedText>
      <Collapsible title="Phone">
        <ThemedText>
        671078575
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link">click here to leave us a message</ThemedText>
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
