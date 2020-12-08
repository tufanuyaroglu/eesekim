Feature: e-Defter Saklama Buton Kontrolu

  Scenario Outline: e-Defter Saklama Buton Kontrolu
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-Saklama seçilir
    * Alt menü e-Defter başlığı altındaki e-Defter Saklama seçilir
    * Filtre alanlarında YIL var mı
    * Filtre butonlarında Listele var mı
    * Butonlardan Yükle var mı
    * Butonlardan İndir var mı
    * Butonlardan Sil var mı
    * Butonlardan Göster var mı
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  |
      | ELOGOGIB     | 123456 |
