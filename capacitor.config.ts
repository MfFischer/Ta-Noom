import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ani.app',
  appName: 'ANI',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
}

export default config;