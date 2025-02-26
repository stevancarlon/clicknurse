import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { useRef, useEffect, useState } from "react";
import {
  Animated,
  BackHandler,
  Dimensions,
  Image,
  PanResponder,
  Text,
} from "react-native";

export const ApplySuccess = ({
  setApply,
  icon,
  title,
  subtitle,
  isSuccess,
}) => {
  const navigation = useNavigation();
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dy > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: slideAnim }], { useNativeDriver: false })(
            _,
            gestureState
          );
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          handleClose();
        } else {
          Animated.spring(slideAnim, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const backAction = () => {
      setTimeout(() => {
        handleClose();
      }, 100);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get("window").height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setApply(false);
      if (isSuccess) navigation.goBack();
    });
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        transform: [{ translateY: slideAnim }],
        flex: 1,
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 701,
        overflow: "hidden",
        height: "40%",
      }}
    >
      <S.Container>
        <S.Grab />
        <Text>{icon}</Text>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Container>
    </Animated.View>
  );
};
