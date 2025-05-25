import { definePreset } from '@primeng/themes';

export const MyCustomTheme = definePreset({
    semantic: {
        primary: {
            50: '#f0f9ff',
            500: '#0ea5e9',
            950: '#0c4a6e'
        },
        surface: {
            0: '#ffffff',
            50: '#f8fafc',
            100: '#f1f5f9',
            900: '#0f172a',
            950: '#020617'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '#f8fafc',
                    100: '#f1f5f9'
                }
            }
        }
    },
    components: {
        // Define all component styles
    }
});