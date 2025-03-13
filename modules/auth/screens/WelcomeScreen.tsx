import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native';
import { useThemeColors } from '@core/hooks/useThemeColors';
import { WELCOME_DATA } from '@auth/data/WelcomeData';
import { Link } from 'expo-router';
import { Button } from '@/modules/core/components/Button';

export function WelcomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width } = Dimensions.get('window');
  const animatedValue = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;

  const { colors, colorScheme } = useThemeColors();

  useEffect(() => {
    Animated.spring(buttonAnim, {
      toValue: 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();
    // buttonAnim is a ref value that won't change, safe to exclude from deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / width;
    animatedValue.setValue(index);
    const roundedIndex = Math.round(index);
    if (roundedIndex !== activeIndex) {
      fadeAnim.setValue(0);
      setActiveIndex(roundedIndex);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const renderItem = ({ item }: { item: (typeof WELCOME_DATA)[0] }) => (
    <View style={{ width }}>
      <Image source={item.image} style={{ width, height: width }} />
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <View>
        <FlatList
          ref={flatListRef}
          data={WELCOME_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={width}
          snapToAlignment="center"
          decelerationRate="fast"
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.flatListContent}
        />
        <View style={styles.pagination}>
          {WELCOME_DATA.map((_, index) => {
            const inputRange = [index - 1, index, index + 1];
            const dotWidth = animatedValue.interpolate({
              inputRange,
              outputRange: [8, 24, 8],
              extrapolate: 'clamp',
            });

            const backgroundColor = animatedValue.interpolate({
              inputRange,
              outputRange: ['#D9D9D9', colors.secondary, '#D9D9D9'],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={index}
                style={[
                  styles.paginationDot,
                  { width: dotWidth, backgroundColor },
                ]}
              />
            );
          })}
        </View>
        <View style={styles.textContainer}>
          <Animated.Text
            style={[styles.title, { opacity: fadeAnim, color: colors.text }]}
          >
            {WELCOME_DATA[activeIndex].title}
          </Animated.Text>
          <Animated.Text
            style={[styles.content, { opacity: fadeAnim, color: colors.text }]}
          >
            {WELCOME_DATA[activeIndex].content}
          </Animated.Text>
        </View>
      </View>
      <View style={styles.action}>
        <Link href="/auth" asChild>
          <Button text="Comenzar" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  welcomePage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    marginVertical: 24,
    paddingHorizontal: 16,
  },
  welcomeImage: {
    width: 350,
    height: 350,
  },
  flatListContent: {
    flexGrow: 1,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  paginationDot: {
    height: 8,
    borderRadius: 4,
  },
  textContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#172a4a',
    fontFamily: 'Raleway900',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Raleway600',
  },
});
