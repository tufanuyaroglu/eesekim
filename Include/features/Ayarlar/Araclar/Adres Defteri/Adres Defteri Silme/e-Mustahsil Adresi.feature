Feature: e-Mustahsil adresini silme

  Scenario Outline: e-Mustahsil adresini silme
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Araçlar başlığı altındaki Adres Defteri seçilir
    * Filtrelerden Kısaltma filtresine <kisaltma_deger> textini yaz
    * Filtre butonlarından Listele seçilir
    * Tablodan <kisaltma_deger> isimli veri seçilir
    * Butonlardan Sil isimli butona tıklanır
    * Popup mesajı Seçilen kayıtlar silinecektir. Devam etmek istiyor musunuz içeriyor mu
    * Yönetim popupında Onayla seçilir
    * Popup mesajı Seçilen kayıtlar silinmiştir içeriyor mu
    * Yönetim popupında Tamam seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | kisaltma_deger        |
      | ELOGOGIB     | 123456 | VirgosolMüstahsilTCKN |
