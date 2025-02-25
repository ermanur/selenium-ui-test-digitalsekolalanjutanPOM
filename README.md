Selenium menggunakan POM
1. buat file loginTest.js berisi tasecase login dan inventoryTest.js berisi add tocart sampe checkout berhasil
2. buat folder pages berisi class - class loginPage.js , inventoryPage.js dan checkoutPage.js
3. buat folder fixtures yang berisi data-data dengan nama testData.js
4. buat folder screenchot jadi nanti dibuat script di loginTest.js dan inventoryTest.js untuk membuat screenshot otomatis.
5. lakukan run npx mocha test\inventoryTest.js -t 0 , npx mocha test\loginTest.js -t 0
   npm run test:parallel           
   npx mocha test/*.js --parallel --jobs 3 --timeout 10000
