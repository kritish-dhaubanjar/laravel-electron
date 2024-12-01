module.exports = {
  appId: 'laravel-electron',
  productName: 'Laravel Electron',
  asar: false,
  files: ['php-bin', 'assets', 'index.js', 'php.js', { from: 'app', to: 'app', filter: ['**/*'] }],
  icon: './assets/icon.png'
}
