# Picadoo Uygulama - Web Sitesi Eşleştirmesi

Kaynak uygulama: `C:\Project\Picadoo`  
Web sitesi: `C:\Project\PicadooWeb`

Bu belge, web sitesindeki ürün iddialarının mobil uygulama kaynak koduyla eşleşmesini takip eder.

## Marka ve platform

| Konu | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| Ürün adı | `app.json` -> `Picadoo` | Tüm sayfalar | Eşleşiyor |
| Uygulama ikonu | `assets/icon.png` | `assets/picadoo-icon.png`, favicon ve logolar | Eşleşiyor |
| iOS paket kimliği | `com.picadoo.app` | App Store etiketi | Mağaza URL'si bekleniyor |
| Android paket kimliği | `com.picadoo.app` | Google Play etiketi | Mağaza URL'si bekleniyor |
| Tablet desteği | `app.json` -> `supportsTablet: true` | İndirme alanları | Metinde ayrıca vaat edilmiyor |

## Hesap ve başlangıç

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| E-posta ve şifreyle hesap | `src/screens/AuthScreen.js`, `src/context/AuthContext.js` | Gizlilik/KVKK | Eşleşiyor |
| Çocuk adı | `AuthContext.signUp()` -> `child_name` | Gizlilik/KVKK | Eşleşiyor |
| KVKK ve bilgilendirme onayı | `AuthScreen.js` | KVKK ve gizlilik sayfaları | Eşleşiyor |
| Varsayılan günlük süre | `daily_limit_minutes: 60` | Ana sayfa ve ebeveyn sayfası | Eşleşiyor |

## Boyama ve şablonlar

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| Dinamik şablon galerisi | `HomeScreen.js`, Supabase `templates` bucket | Ana sayfa özellikleri | Eşleşiyor; kesin adet kullanılmıyor |
| Kategoriler | Hayvanlar, doğa, uzay, deniz | Ana sayfa özellik kartı | Eşleşiyor |
| Kayıtlı boyamalar | `savedColorings.js`, `HomeScreen.js` | Ana sayfa önizleme metni | Eşleşiyor |
| Kalem, fırça, pastel, silgi | `ColoringScreen.js` | Ana sayfa araçlar kartı | Eşleşiyor |
| S/M/L fırça boyutları | `ColoringScreen.js` | Genel araç anlatımı | Özetlenmiş |
| XS-XL silgi boyutları | `ColoringScreen.js` | Genel araç anlatımı | Özetlenmiş |
| Renk paleti ve özel renk seçici | `ColoringScreen.js` | Ana sayfa araçlar kartı | Eşleşiyor |
| Geri alma | `ColoringScreen.js` | Ana sayfa araçlar kartı | Eşleşiyor |
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
| Başarısız üretimde kredi iadesi | `CreditsScreen.js`, rezervasyon rollback akışı | Koşullarda ayrıntılandırılmadı | İsteğe bağlı |
| Kaynak görsel geçici işlenir | Edge Function | Gizlilik/KVKK | Eşleşiyor |
| Üretilen çıktı Supabase'e kaydedilir | `generated-colorings` bucket | Gizlilik/KVKK | Eşleşiyor |

## Mini oyunlar

| Grup | Oyunlar | Kaynak |
| --- | --- | --- |
| Küçük oyunlar | Baloncuk Patlat, Aynısını Bul, Büyük mü Küçük mü?, Az Say | `src/games/gameRegistry.js` |
| Büyük oyunlar | Sayı Avı, Toplama Balonu, Sıra Bul, Işık Yeşil, Say Bakalım | `src/games/gameRegistry.js` |

Toplam 9 oyun bulunur. Web sitesi bunu `4 küçük + 5 büyük` ve `1-10 yaşa uygun oyunlar` olarak anlatır.

## Ebeveyn paneli

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| Hesap şifresiyle panel girişi | `ParentScreen.js` | Ebeveyn sayfası | Eşleşiyor |
| Süre seçenekleri | 15, 30, 45, 60, 90, 120, 180, sınırsız | Ebeveyn sayfası | Eşleşiyor |
| Limit dolunca uyarı | `useAppTimer.js`, `LimitModal.js` | Ebeveyn sayfası | Eşleşiyor |
| Şifreyle ek süre | +15, +30, +60 dakika | Ebeveyn sayfası | Eşleşiyor |
| Haftalık süre | `ParentScreen.js` | Ebeveyn sayfası | Eşleşiyor |
| Toplam oturum ve ortalama süre | `ParentScreen.js` | Ebeveyn sayfası | Eşleşiyor |
| Kayıtlı/AI boyama sayıları | `ParentScreen.js` | Ebeveyn sayfası | Eşleşiyor |
| Son aktiviteler | `ParentScreen.js` | Ebeveyn sayfası | Eşleşiyor |
| Bildirim ayarı | `notificationService.js` | Ana pazarlama metninde kullanılmıyor | Mevcut |
| 8 dil seçimi | `ParentScreen.js`, i18n dosyaları | Ana sayfa | Eşleşiyor |

## Premium ve reklamlar

| Özellik | Uygulama kaynağı | Web karşılığı | Durum |
| --- | --- | --- | --- |
| Aylık fallback fiyat | `₺200/ay` | Premium sayfası | Eşleşiyor |
| Yıllık fallback fiyat | `₺2.000/yıl` | Premium sayfası | Eşleşiyor |
| Yıllık 2 ay avantaj | `PremiumScreen.js` | Premium sayfası | Eşleşiyor |
| Reklamları kaldırma | `SafeBannerAd.js` | Ana sayfa ve Premium | Eşleşiyor |
| Premium şablon işaretleri | `is_premium` alanı | Premium sayfası | Ürün niyeti mevcut |
| AI kredileri | Abonelikten bağımsız | Premium sayfası | Eşleşiyor |
| Reklam yapılandırması | Çocuklara yönelik, reşit olmayan, G dereceli, kişiselleştirilmemiş | Gizlilik ve ebeveyn sayfası | Eşleşiyor |

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
- `Sınırsız kaydetme Premium özelliğidir`: kayıt özelliğinde Premium sınırı uygulanmamış.
- `Kaynak ve çıktı fotoğrafları saklanmaz`: kaynak görsel geçici; üretilen çıktı Supabase'de saklanıyor.

## Uygulama kodunda kalan ürün çelişkileri

Bu maddeler web sitesine taşınmadı, fakat mobil projede ayrıca düzeltilmelidir:

1. `usageLimits.js`, `CameraScreen.js`, `CreditsScreen.js`, `coloringService.js`, Edge Function ve kredi migrasyonu hâlâ günlük 5 ücretsiz hak gösteriyor.
2. Bazı eski çeviri dosyalarında ücretsiz deneme, sınırsız AI veya günlük ücretsiz AI ifadeleri bulunuyor.
3. `PremiumScreen.js` özel fırça/desen vaat ediyor; `ColoringScreen.js` içinde Premium erişim kontrolü yok.
4. `HomeScreen.js` premium şablona dokununca Premium ekranı yerine ebeveyn ekranına yönlendiriyor ve premium kullanıcı kontrolü yapmıyor.

