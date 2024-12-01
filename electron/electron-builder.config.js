module.exports = {
  appId: 'laravel-electron',
  productName: 'Laravel-Electron',
  asar: false,
  files: ['php-bin', 'assets', 'index.js', 'php.js', { from: 'application', to: 'application', filter: ['**/*'] }],
  icon: './assets/icon.png'
}
