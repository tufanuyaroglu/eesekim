Feature: e-Irsaliye Gelen Kutusu Toplu Indirme - PDF Secilenlerin indirilmesi

  Scenario Outline: e-Irsaliye Gelen Kutusu Toplu Indirme - PDF Secilenlerin indirilmesi
    * Kullanıcı adı <kullaniciAdi> ve Şifre <sifre> olarak giriş yapılır
    * Ana menüden e-İrsaliye seçilir
    * Alt menü Gelen Kutusu başlığı altındaki İrsaliyeler seçilir
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri> baslangic degerini yaz
    * Filtrelerden Oluşturma Tarihi filtresine <filtreDegeri2> bitis degerini yaz
    * Filtrelerden Gönderici Ünvanı filtresine <filtreDegeri3> textini yaz
    * Filtre butonlarından Listele seçilir
    * Tabloda veri var mı kontrol edilir
    * Tablodan <veri_Adi> isimli veri seçilir
    * Butonlardan Toplu İndirme isimli butona tıklanır
    * Alt butonlardan PDF Seçilenleri İndir butonuna tıklanır
    * Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu
    * Yönetim popupında Gönder seçilir
    * Popup mesajı Toplu Veri İndirme içeriyor mu
    * Yönetim popupında Tamam seçilir
    #* Ön eki Invoice olan dosya indirildi mi ( indirme islemleri duzeldiginde aktif edilecek )
    * Butonlardan Toplu İndirme isimli butona tıklanır
    * Alt butonlardan PDF Tümünü İndir butonuna tıklanır
    * Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu
    * Yönetim popupında Gönder seçilir
    * Popup mesajı Toplu Veri İndirme içeriyor mu
    * Yönetim popupında Tamam seçilir
    #* Ön eki Invoice olan dosya indirildi mi ( indirme islemleri duzeldiginde aktif edilecek )
    * Butonlardan Toplu İndirme isimli butona tıklanır
    * Alt butonlardan UBL Seçilenleri İndir butonuna tıklanır
    * Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu
    * Yönetim popupında Gönder seçilir
    * Popup mesajı Toplu Veri İndirme içeriyor mu
    * Yönetim popupında Tamam seçilir
    #* Ön eki Invoice olan dosya indirildi mi
    * Butonlardan Toplu İndirme isimli butona tıklanır
    * Alt butonlardan UBL Tümünü İndir butonuna tıklanır
    * Popup mesajı Lütfen rapor bildiriminin gönderileceği e-posta adresini belirtiniz. içeriyor mu
    * Yönetim popupında Gönder seçilir
    * Popup mesajı Toplu Veri İndirme içeriyor mu
    * Yönetim popupında Tamam seçilir
    #* Ön eki Invoice olan dosya indirildi mi
    * Kullanıcı işlemlerinden Çıkış seçilir

    Examples: 
      | kullaniciAdi | sifre  | filtreDegeri | filtreDegeri2 | filtreDegeri3 | veri_Adi            |
      | ELOGOGIB     | 123456 |   01.01.2020 |    31.01.2020 | DOĞUŞ         | DOĞUŞ OTO PAZARLAMA |
