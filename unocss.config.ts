import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-600 dark:border-gray-300'
  },
  presets: [presetUno(), presetIcons(), presetAttributify()],
});
