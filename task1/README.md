Lab 14 — Task 1: Performant FlatList

ScrollView renders ALL items at once — with 1000+ contacts this kills memory.
FlatList uses **virtualization**: only visible items are mounted in memory.

### Key Optimizations Used:
- `useCallback` on renderItem and keyExtractor — prevents re-renders
- `getItemLayout` — FlatList calculates scroll position mathematically (no measurement needed)
- `initialNumToRender={15}` — renders 15 items on first paint
- `maxToRenderPerBatch={10}` — renders 10 items per scroll batch
- `windowSize={5}` — keeps 5 screens worth of items in memory
- `removeClippedSubviews={true}` — unmounts off-screen views

### Pull-to-Refresh
Implemented via `RefreshControl` component inside FlatList's `refreshControl` prop.
Uses `setTimeout` to simulate an API reload delay of 1.5 seconds.

## How to Run
```bash
cd task1
npx expo start
```