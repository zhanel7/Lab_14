Lab 14 — Task 2: Registration Form with Keyboard Handling

### The Problem
On mobile, the virtual keyboard covers ~50% of the screen.
Without handling, input fields get hidden under the keyboard.

### Solution: KeyboardAvoidingView
- **iOS**: `behavior="padding"` — adds padding below content
- **Android**: `behavior="height"` — shrinks the view height
- `keyboardVerticalOffset={64}` — accounts for header/status bar on iOS

### TouchableWithoutFeedback
Wraps the entire screen — tapping anywhere outside inputs dismisses the keyboard via `Keyboard.dismiss()`.

### Form Validation
- Real-time email validation using Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Error state updates on every keystroke
- Submit button is `disabled` until email + password are valid

### Input Configuration
- `keyboardType="email-address"` — shows @ on keyboard
- `autoCapitalize="none"` — no auto uppercase for email
- `secureTextEntry={true}` — hides password characters
- `returnKeyType="done"` — shows Done button on iOS

## How to Run
```bash
cd task2
npx expo start
```