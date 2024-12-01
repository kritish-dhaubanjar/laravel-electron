module.exports = {
  appId: 'laravel-electron',
  productName: 'Laravel Electron',
  asar: false,
  files: ['php-bin', 'assets', 'index.js', 'php.js', { from: "api", to: "api", filter: ["**/*"] }],
  icon: './assets/icon.png'
}
