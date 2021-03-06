Feature: Gonderim tipi Kagit ve Hal Satis tipinde e-Arsiv faturasi olusturulmasi

  Scenario Outline: Gonderim tipi Kagit ve Hal Satis tipinde e-Arsiv faturasi olusturulmasi
    * Giriş yapılır
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Araçları başlığı altındaki e-Arşiv Fatura Oluşturma seçilir
    * Tablodaki tüm veriler silinir
    * Butonlardan Ekle isimli butona tıklanır
    * Görsel tasarım sayfasının e-Arşiv Fatura Bilgileri başlığını içerdiği kontrol edilir
    * Alıcı adı alanına <alici_Adi> girilir
    * Gönderim Şekli Elektronik olarak seçilir
    * Tip alanından Hal Satış seçilir
    * Döküman Para Birimi alanından Türk Lirası seçilir
    * Ön Ek FFF olarak seçilir
    * Tasarım alanından Otomasyon Denemesi seçilir
    * Sipariş bilgileri UUC-SAT-1200001 ve 30.04.2020 olarak girilir
    * İrsaliye Bilgileri AAAAAAAAAA,30.04.2020 olarak girilir
    * Ekle butonuna basılır
    * Ürün ekleme alanında Mal/Hizmet başlığına <urun_Adi> girilir
    * Ürün ekleme alanında Açıklaması başlığına <aciklamasi> girilir
    * Ürün ekleme alanında Künye Numarası başlığına 1234567890123456789 girilir
    * Ürün ekleme alanında Vkn/Tckn başlığına 11111111110 girilir
    * Ürün ekleme alanında Mal Sahibi başlığına AAAAAAAAA girilir
    * Ürün ekleme alanında Miktarı başlığına <miktari> girilir
    * Ürün ekleme alanında Birim Fiyat başlığına <birimFiyat> girilir
    * Ürün ekleme alanında İskonto Oranı % başlığına 10 girilir
    * Notlar alanına <not> girilir
    * Kaydet butonu seçilir
    * Tabloda <unvan> ünvanlı veri oluşturuldu mu
    * Tablodan <unvan> isimli veri seçilir
    * Butonlardan Numara Oluştur isimli butona tıklanır
    * Popup mesajı Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Evet seçilir
    * Popup mesajı oluşmuştur içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Tablodan <unvan> isimli veri seçilir
    * Butonlardan Gönder isimli butona tıklanır
    * Popup mesajı Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Evet seçilir
    * Ana menüden e-Arşiv seçilir
    * Alt menü e-Arşiv Hareketleri başlığı altındaki e-Arşiv Faturaları seçilir
    * Filtrelerden Alıcı Ünvanı filtresine <unvan> textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre    | alici_Adi        | urun_Adi  | aciklamasi | miktari | birimFiyat | not           | unvan                   |
      | HALSATIS     | test1234 | VirgosolArsivVKN | Otomasyon | Virgosol   |     400 |        100 | Otomasyon Not | VirgosolOtomasyon699944 |
