import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ContactsScreen from './task1/src/screens/ContactScreen';
import RegistrationScreen from './task2/src/screens/RegistrationScreen';

export default function App() {
  const [screen, setScreen] = useState<'task1' | 'task2'>('task1');

  return (
    <SafeAreaProvider>
      {/* Навигация между task1 и task2 */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, screen === 'task1' && styles.activeTab]}
          onPress={() => setScreen('task1')}
        >
          <Text style={[styles.tabText, screen === 'task1' && styles.activeText]}>
            Task 1 — FlatList
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, screen === 'task2' && styles.activeTab]}
          onPress={() => setScreen('task2')}
        >
          <Text style={[styles.tabText, screen === 'task2' && styles.activeText]}>
            Task 2 — Registration
          </Text>
        </TouchableOpacity>
      </View>

      {/* Контент */}
      <View style={styles.content}>
        {screen === 'task1' ? <ContactsScreen /> : <RegistrationScreen />}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    paddingTop: 50,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#0066cc',
  },
  tabText: {
    fontSize: 13,
    color: '#999',
    fontWeight: '600',
  },
  activeText: {
    color: '#0066cc',
  },
  content: {
    flex: 1,
  },
});