Feature: e-Irsaliye Gorsel Tasarim Yukle e-Arsiv

  Scenario Outline: e-Irsaliye Gorsel Tasarim Yukle e-Arsiv
    * Giriş yapılır
    * Ana menüden Ayarlar seçilir
    * Alt menü Görsel Tasarımlar başlığı altındaki e-İrsaliye Görsel Tasarım seçilir
    * Tabloda veri var mı kontrol edilir
    * Butonlardan Yukle isimli butona tıklanır
    * Alt butonlardan e-Müstahsil Makbuzu butonuna tıklanır
    * Ön eki <name> olan dosya indirildi mi
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | name  |
      | 13441 |