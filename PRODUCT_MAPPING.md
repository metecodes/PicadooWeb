# Picadoo Uygulama - Web Sitesi Eşleştirmesi

Kaynak uygulama: `C:\Project\Picadoo`  
Web sitesi: `C:\Project\PicadooWeb`

Bu belge, web sitesindeki ürün iddialarının mobil uygulama kaynak koduyla eşleşmesini takip eder.

## Marka ve platform

| Konu | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| Ürün adı | `app.json` -> `Picadoo` | Tüm sayfalar | Eşleşiyor |
| Uygulama ikonu | `assets/icon.png` | `assets/picadoo-icon.png`, favicon ve logolar | Eşleşiyor |
| iOS paket kimliği | `com.picadoo.app` | App Store etiketi & bağlantısı | App Store Yayında (`https://apps.apple.com/us/app/picadoo-ai-coloring-book/id6792035870`) |
| Android paket kimliği | `com.picadoo.app` | Google Play etiketi & bağlantısı | Google Play Yayında (`https://play.google.com/store/apps/details?id=com.picadoo.app`) |
| Tablet desteği | `app.json` -> `supportsTablet: true` | İndirme alanları | Metinde ayrıca vaat edilmiyor |

## Hesap ve başlangıç

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| E-posta ve şifreyle hesap | `src/screens/AuthScreen.js`, `src/context/AuthContext.js` | Gizlilik/KVKK | Eşleşiyor |
| OAuth (Google/Apple) Şifresi | `SetParentPasswordScreen.js` | Ebeveyn sayfası | Eşleşiyor |
| Çocuk adı | `AuthContext.signUp()` -> `child_name` | Gizlilik/KVKK | Eşleşiyor |
| KVKK ve bilgilendirme onayı | `AuthScreen.js` | KVKK ve gizlilik sayfaları | Eşleşiyor |
| Varsayılan günlük süre | `daily_limit_minutes: 60` | Ana sayfa ve ebeveyn sayfası | Eşleşiyor |

## Boyama ve şablonlar

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| Dinamik şablon galerisi | `HomeScreen.js`, Supabase `templates` bucket | Ana sayfa özellikleri | Eşleşiyor |
| 8 Dilde Şablon Başlıkları | `templateLocalization.js` | Ana sayfa & Şablonlar | Eşleşiyor (Uzantı temizleme & 8 dilde başlıklar) |
| Kategoriler | Hayvanlar, doğa, uzay, deniz, taşıtlar, masal | Ana sayfa özellik kartı | Eşleşiyor |
| Kayıtlı boyamalar | `savedColorings.js`, `HomeScreen.js`, `ColoringScreen.js` | Ana sayfa ve Premium | Yalnız Premium |
| Kalem, fırça, pastel, silgi, Kova | `ColoringScreen.js` | Ana sayfa araçlar kartı | Eşleşiyor (Kova / Flood Fill eklendi) |
| Ekran Kilidi (Kid Lock) | `ScreenLock.js` | Ana sayfa ve Boyama ekranı | Eşleşiyor |
| Renk paleti ve özel renk seçici | `ColoringScreen.js` | Ana sayfa araçlar kartı | Eşleşiyor |
| Geri alma / İleri alma | `ColoringScreen.js` | Ana sayfa araçlar kartı | Eşleşiyor |
| Pinch zoom ve pan | `ColoringScreen.js` | Ana sayfa önizleme metni | Eşleşiyor |

## AI boyama ve krediler

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| Kamera veya galeriden görsel | `CameraScreen.js` | Nasıl çalışır bölümü | Eşleşiyor |
| Karikatür, suluboya, kuru boya, doodle | `CameraScreen.js` | Ana sayfa | Eşleşiyor |
| Her üretim 1 kredi | `CreditsScreen.js` | Ana sayfa, Premium, koşullar | Eşleşiyor |
| Ücretsiz kredi yok | Ürün kararı | Premium ve koşullar | Eşleşiyor |
| 10 kredi | `picadoo_credits_10`, fallback `₺50` | Premium sayfası | Eşleşiyor |
| 25 kredi | `picadoo_credits_25`, fallback `₺125` | Premium sayfası | Eşleşiyor |
| 50 kredi | `picadoo_credits_50`, fallback `₺250` | Premium sayfası | Eşleşiyor |

## Mini oyunlar & Oyunlaştırma

| Grup | Oyunlar | Kaynak |
| --- | --- | --- |
| Küçük oyunlar | Pica Catch (Baloncuk/Elma), Şekil Eşleştirme, Renk Bulma, Sesli Hayvanlar | `src/games/gameRegistry.js` |
| Büyük oyunlar | Örüntü Tamamlama, Toplama Balonu, Sayı Avı, Hafıza Oyunu, Labirent | `src/games/gameRegistry.js` |
| Oyunlaştırma | Maskot Pica, Günlük Görevler, XP, Seviye Rozetleri (Lvl), Liderlik Tablosu, Davet Et & Kazan (Referral) | `dailyQuests.js`, `ReferralScreen.js`, `LeaderboardScreen.js` |

Toplama 9 mini oyun ve Maskot Pica rehberliği bulunur.

## Ebeveyn paneli

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| Hesap şifresiyle panel girişi | `ParentScreen.js` | Ebeveyn sayfası | Eşleşiyor |
| Süre seçenekleri | 15, 30, 45, 60, 90, 120, 180, sınırsız | Ebeveyn strata & Ebeveyn sayfası | Eşleşiyor |
| Limit dolunca uyarı | `useAppTimer.js`, `LimitModal.js` | Ebeveyn sayfası | Eşleşiyor |
| Şifreyle ek süre | +15, +30, +60 dakika | Ebeveyn sayfası | Eşleşiyor |
| Haftalık süre & İstatistikler | `ParentScreen.js` | Ebeveyn sayfası | Eşleşiyor |

## Premium ve %100 Reklamsızlık

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| %100 Reklamsız Deneyim | AdMob tamamen kaldırıldı (Guideline 1.3) | Tüm web sayfaları | Eşleşiyor (%100 Reklamsız & Güvenli) |
| Aylık fallback fiyat | `₺200/ay` | Premium sayfası | Eşleşiyor |
| Yıllık fallback fiyat | `₺2.000/yıl` | Premium sayfası | Eşleşiyor |
| Yıllık 2 ay avantaj | `PremiumScreen.js` | Premium sayfası | Eşleşiyor |
| Kayıtlı boyamalar | `HomeScreen.js`, `ColoringScreen.js` | Premium sayfası | Yalnız Premium |
| Mini oyunlar | `GamesTabScreen.js`, `MiniGamePlayScreen.js` | Premium sayfası | Yalnız Premium |
| JPG galeri aktarımı | `ColoringScreen.js`, `react-native-view-shot` | Premium sayfası | Yalnız Premium |
| AI kredileri | Abonelikten bağımsız | Premium sayfası | Eşleşiyor |

## Diller

Türkçe, İngilizce, Almanca, Fransızca, Arapça, İspanyolca, Rusça ve İtalyanca desteklenir.

Kaynak: `ParentScreen.js` ve `src/i18n/locales/`.

## Webde kullanılmayan veya düzeltilen eski iddialar

- `5K+ kullanıcı`, `4.8 puan`, `Editörün Seçimi`: doğrulanabilir kaynak yok.
- `50+ / yüzlerce şablon`: galeri dinamik; kesin sayı kaynak kodda garanti edilmiyor.
- `4 haneli PIN`: uygulama hesap şifresi kullanıyor.
- `1 dakikadan başlayan limit`: gerçek seçenekler 15 dakikadan başlıyor.
- `5 dakika önce uyarı`: kod yalnızca limite ulaşıldığında uyarı açıyor.
- `Oyun performansı / en çok oynanan şablon raporu`: ebeveyn panelinde uygulanmamış.
- `Tüm temel içerikler çevrimdışı`: hesap, AI ve çevrimiçi galeri internet gerektiriyor.
- `Premium AI kredisi verir`: yanlış; krediler ayrı satın alınır.
- `Premium özel fırçaları açar`: boyama ekranında Premium kontrolü uygulanmamış.
- `Sınırsız kaydetme Premium özelliğidir`: Premium bariyeri artık kayıt oluşturma, açma ve yönetme akışlarında uygulanıyor.
- `Kaynak ve çıktı fotoğrafları saklanmaz`: kaynak görsel geçici; üretilen çıktı Supabase'de saklanıyor.

## Uygulama kodunda kalan ürün çelişkileri

Bu maddeler web sitesine taşınmadı, fakat mobil projede ayrıca düzeltilmelidir:

1. `usageLimits.js`, `CameraScreen.js`, `CreditsScreen.js`, `coloringService.js`, Edge Function ve kredi migrasyonu hâlâ günlük 5 ücretsiz hak gösteriyor.
2. Bazı eski çeviri dosyalarında ücretsiz deneme, sınırsız AI veya günlük ücretsiz AI ifadeleri bulunuyor.
3. `PremiumScreen.js` özel fırça/desen vaat ediyor; `ColoringScreen.js` içinde Premium erişim kontrolü yok.
4. `HomeScreen.js` premium şablona dokununca Premium ekranı yerine ebeveyn ekranına yönlendiriyor ve premium kullanıcı kontrolü yapmıyor.
