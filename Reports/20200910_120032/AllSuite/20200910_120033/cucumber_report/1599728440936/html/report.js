$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/otomasyonprojeler/EES/Include/features/Ayarlar/Araclar/Adres Defteri/Adres Defteri Olusturma/e-Arsiv Adresi VKN.feature");
formatter.feature({
  "name": "VKN Ile e-Arsiv Adresi Olusturma",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "VKN Ile e-Arsiv Adresi Olusturma",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı ELOGOGIB ve Şifre 123456 olarak giriş yapılır",
  "keyword": "* "
});
formatter.step({
  "name": "Ana menüden Ayarlar seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Alt menü Araçlar başlığı altındaki Adres Defteri seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri Adres Ekle başlıklı popup geldi mi",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri Kısaltma textboxına \u003ckisaltma\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına \u003cvkntckn\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Unvan alanına \u003cunvan\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri İl textboxına \u003cil\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri İlçe textboxına \u003cilce\u003e yazılır",
  "keyword": "* "
});
formatter.step({
  "name": "Adres olarak Ülke dropdownından \u003culke_deger\u003e seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Adres defteri butonlarından Kaydet butonuna tıklanır",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre alanlarında Kısaltma var mı",
  "keyword": "* "
});
formatter.step({
  "name": "Filtrelerden Kısaltma filtresine \u003ckisaltma\u003e textini yaz",
  "keyword": "* "
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kisaltma",
        "vkntckn",
        "unvan",
        "il",
        "ilce",
        "ulke_deger"
      ]
    },
    {
      "cells": [
        "VirgosolArsivVKN",
        "5422405266",
        "VirgosolOtomasyon",
        "İstanbul",
        "Maltepe",
        "Türkiye"
      ]
    }
  ]
});
formatter.scenario({
  "name": "VKN Ile e-Arsiv Adresi Olusturma",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanıcı adı ELOGOGIB ve Şifre 123456 olarak giriş yapılır",
  "keyword": "* "
});
formatter.match({
  "location": "girisSayfasi.login(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Sayfalar/Giris_Sayfasi/Login\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat sayfalar.girisSayfasi.login(girisSayfasi.groovy:50)\r\n\tat ✽.Kullanıcı adı ELOGOGIB ve Şifre 123456 olarak giriş yapılır(C:/otomasyonprojeler/EES/Include/features/Ayarlar/Araclar/Adres Defteri/Adres Defteri Olusturma/e-Arsiv Adresi VKN.feature:4)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to get the title of the current window\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetWindowTitleKeyword.getWindowTitle(GetWindowTitleKeyword.groovy:71)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetWindowTitleKeyword.execute(GetWindowTitleKeyword.groovy:66)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getWindowTitle(WebUiBuiltInKeywords.groovy:208)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getWindowTitle$0.call(Unknown Source)\r\n\tat Login.run(Login:19)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:330)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:309)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:301)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:235)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat sayfalar.girisSayfasi.login(girisSayfasi.groovy:50)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:169)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat e-Arsiv VKN.run(e-Arsiv VKN:19)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:330)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:309)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:301)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:235)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:191)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:141)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:90)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1599728433156.run(TempTestSuite1599728433156.groovy:39)\r\nCaused by: com.kms.katalon.core.webui.exception.BrowserNotOpenedException: Browser is not opened\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027ELENTTSTTERM11\u0027, ip: \u002710.41.30.2\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.verifyWebDriverIsOpen(DriverFactory.java:883)\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.verifyWebDriver(DriverFactory.java:868)\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.getWebDriver(DriverFactory.java:854)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetWindowTitleKeyword$_getWindowTitle_closure1.doCall(GetWindowTitleKeyword.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetWindowTitleKeyword$_getWindowTitle_closure1.call(GetWindowTitleKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\t... 58 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Ana menüden Ayarlar seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.anaMenuSecimi(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Alt menü Araçlar başlığı altındaki Adres Defteri seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "menu.basligaGoreAltMenuSecimi(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Butonlardan Ekle isimli butona tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "butonlar.butonaTikla(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri Adres Ekle başlıklı popup geldi mi",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.baslikliPopupGeldiMi(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri Kısaltma textboxına VirgosolArsivVKN yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri VKN/TCKN No textboxına 5422405266 yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Unvan alanına VirgosolOtomasyon yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.kisaltmaYazilir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri İl textboxına İstanbul yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri İlçe textboxına Maltepe yazılır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.soldakiTextboxaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres olarak Ülke dropdownından Türkiye seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.dropdowndanSec(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Adres defteri butonlarından Kaydet butonuna tıklanır",
  "keyword": "* "
});
formatter.match({
  "location": "adresDefteri.adresDefteriButonlarindanTiklanir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Filtre alanlarında Kısaltma var mı",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreVarMi(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Filtrelerden Kısaltma filtresine VirgosolArsivVKN textini yaz",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreTexboxinaYaz(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Filtre butonlarından Listele seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "filtreler.filtreButonSec(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Tabloda veri var mı kontrol edilir",
  "keyword": "* "
});
formatter.match({
  "location": "tablo.tablodaVeriVarMi()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanıcı işlemlerinden Çıkış seçilir",
  "keyword": "* "
});
formatter.match({
  "location": "kullaniciIslemleri.kullaniciIslemi(String)"
});
formatter.result({
  "status": "skipped"
});
});