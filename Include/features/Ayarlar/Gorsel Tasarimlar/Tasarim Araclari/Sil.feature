Feature: Tasarim Araclari Sil

  Scenario Outline: Tasarim Araclari Sil
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki Tasarım Araçları seçilir
    * Filtrelerden Oluşturma Zamanı filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Zamanı filtresine <filtreDegeri2> bitis degerini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodaki <name> ünvanlı veriye tıklanır
    * Butonlardan Sil isimli butona tıklanır
    * Popup mesajı Seçilen tasarım silinecektir, Onaylıyor musunuz ? içeriyor mu
    * Yönetim popupında Hayır seçilir
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | filtreDegeri | filtreDegeri2 | name     |
      | ELOGOGIB     | 123456 |   23.11.2020 |    23.11.2020 | e-Fatura |
