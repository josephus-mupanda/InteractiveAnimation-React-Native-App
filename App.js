import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [scaleAnimation] = useState(new Animated.Value(1));
  const [opacityAnimation] = useState(new Animated.Value(1));
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleButtonPress = () => {
    // Animate the button
    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Show snackbar
    setShowSnackbar(true);

    // Hide snackbar after 2 seconds
    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style= {{marginBottom:20}}>This is button </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleButtonPress}
        style={styles.button}
      >
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [{ scale: scaleAnimation }],
              opacity: opacityAnimation,
            },
          ]}
        >
          <AntDesign name="heart" size={24} color="#ffffff" />
        </Animated.View>
      </TouchableOpacity>

      {showSnackbar && (
        <View style={styles.snackbar}>
          <Text style={styles.snackbarText}>Hey Sir.This is the end for today</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff5a5f',
    padding: 10,
    borderRadius: 20,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  snackbar: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#ff5a5f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  snackbarText: {
    color: '#ffffff',
  },
});

export default App;


// import React, { useState } from 'react';
// import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// const App = () => {
//   const [scaleAnimation] = useState(new Animated.Value(1));
//   const [opacityAnimation] = useState(new Animated.Value(1));

//   const handleButtonPress = () => {
//     // Animate the button
//     Animated.parallel([
//       Animated.timing(scaleAnimation, {
//         toValue: 0.8,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.sequence([
//         Animated.timing(opacityAnimation, {
//           toValue: 0,
//           duration: 50,
//           useNativeDriver: true,
//         }),
//         Animated.timing(opacityAnimation, {
//           toValue: 1,
//           duration: 50,
//           useNativeDriver: true,
//         }),
//       ]),
//     ]).start();

//     // Perform other actions here
//     // ...
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         activeOpacity={0.8}
//         onPress={handleButtonPress}
//         style={styles.button}
//       >
//         <Animated.View
//           style={[
//             styles.iconContainer,
//             {
//               transform: [{ scale: scaleAnimation }],
//               opacity: opacityAnimation,
//             },
//           ]}
//         >
//           <AntDesign name="heart" size={24} color="#ffffff" />
//         </Animated.View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#ff5a5f',
//     padding: 10,
//     borderRadius: 20,
//   },
//   iconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;


// import React, { useState } from 'react';
// import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// const App = () => {
//   const [scaleAnimation] = useState(new Animated.Value(1));

//   const handleButtonPress = () => {
//     // Animate the button
//     Animated.sequence([
//       Animated.timing(scaleAnimation, {
//         toValue: 0.8,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(scaleAnimation, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     // Perform other actions here
//     // ...
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         activeOpacity={0.8}
//         onPress={handleButtonPress}
//         style={styles.button}
//       >
//         <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnimation }] }]}>
//           <AntDesign name="heart" size={24} color="#ffffff" />
//         </Animated.View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#ff5a5f',
//     padding: 10,
//     borderRadius: 20,
//   },
//   iconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

