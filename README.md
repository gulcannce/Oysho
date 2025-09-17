# Oysho Otomasyon Test Projesi

Bu proje, Playwright kullanılarak Oysho web sitesinde geçersiz kimlik bilgileriyle giriş yapma senaryosunu otomatikleştiren bir test içerir.

## 🚀 Başlangıç

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Ön Gereksinimler

* [Node.js](https://nodejs.org/) (tercihen LTS sürümü)
* [npm](https://www.npmjs.com/)

### Kurulum

1.  **Projeyi Klonlayın:**
    Öncelikle, projeyi GitHub'dan kendi bilgisayarınıza kopyalayın:

    ```bash
    git clone [https://github.com/gulcannce/Oysho.git](https://github.com/gulcannce/Oysho.git)
    ```

2.  **Klasöre Gidin:**
    Kopyaladığınız projenin klasörüne girin:

    ```bash
    cd Oysho
    ```

3.  **Bağımlılıkları Yükleyin:**
    Gerekli tüm kütüphaneleri (Playwright dahil) yüklemek için bu komutu çalıştırın:

    ```bash
    npm install
    ```

4.  **Tarayıcıları Kurun:**
    Playwright'ın testleri çalıştırması için gerekli tarayıcıları indirin:

    ```bash
    npx playwright install
    ```

### ⚙️ Testi Çalıştırma

Testi çalıştırmanın iki yolu vardır:

1.  **Terminalden Başsız (Headless) Modda Çalıştırma:**
    Bu, testin arka planda tarayıcı arayüzü olmadan çalışmasını sağlar. Hızlı ve sürekli entegrasyon (CI) ortamları için idealdir.

    ```bash
    npx playwright test
    ```

2.  **Terminalden Görsel (Headed) Modda Çalıştırma:**
    Bu komut, testin bir tarayıcı penceresi açarak çalışmasını sağlar. Testin adımlarını görsel olarak takip etmek için kullanışlıdır.

    ```bash
    npx playwright test --headed
    ```

## 📝 Test Senaryosu

**Test Adı:** Geçersiz kimlik bilgileriyle hata mesajı göstermeli

**Senaryo:**
1.  Kullanıcı, Oysho'nun giriş sayfasına gider.
2.  Sayfada görünen çerez ve haber bülteni pop-up'ları varsa kapatılır.
3.  E-posta ve şifre alanlarına geçersiz bilgiler girer.
4.  "Giriş Yap" butonuna tıklar.
5.  Ekranda "Kimlik bilgileriniz yanlış." şeklinde bir hata mesajı göründüğü doğrulanır.
