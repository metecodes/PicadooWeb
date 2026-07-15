(() => {
  const languages = {
    tr: { label: 'Türkçe', short: 'TR', locale: 'tr-TR' },
    en: { label: 'English', short: 'EN', locale: 'en-US' },
    de: { label: 'Deutsch', short: 'DE', locale: 'de-DE' },
    fr: { label: 'Français', short: 'FR', locale: 'fr-FR' },
    ar: { label: 'العربية', short: 'AR', locale: 'ar-SA', dir: 'rtl' },
    es: { label: 'Español', short: 'ES', locale: 'es-ES' },
    ru: { label: 'Русский', short: 'RU', locale: 'ru-RU' },
    it: { label: 'Italiano', short: 'IT', locale: 'it-IT' }
  };

  const translations = {
    en: {
      'Özellikler': 'Features', 'Nasıl Çalışır': 'How It Works', 'Nasıl Çalışır?': 'How Does It Work?',
      'Ebeveynler': 'Parents', 'İletişim': 'Contact', 'Yayını Takip Et': 'Follow the Launch',
      'Yapay Zeka Destekli Boyama': 'AI-Powered Coloring', 'Çocuğunuzun Dünyasını': "Bring Your Child's World",
      'Renklerle': 'To Life With', 'Büyüleyin': 'Colors',
      'Hazır şablonları boyayın, fotoğrafları AI ile boyama sayfasına dönüştürün ve yaşa uygun mini oyunlarla eğlenin. Ebeveyn kontrolü her zaman sizde.': 'Color ready-made templates, turn photos into coloring pages with AI, and enjoy age-appropriate mini games. Parents always stay in control.',
      'Yaşa Uygun Oyunlar': 'Age-Appropriate Games', 'Mini Oyun': 'Mini Games', 'Dil Desteği': 'Languages',
      'Yayınlanacağı Platformlar': 'Coming to', 'App Store · Yakında': 'App Store · Coming Soon',
      'Google Play · Yakında': 'Google Play · Coming Soon', 'Ebeveyn Kontrolü': 'Parental Controls',
      'Gizlilik Odaklı': 'Privacy Focused', '1-10 Yaş Oyunlar': 'Games for Ages 1-10',
      'Çocuklar İçin Tasarlanmış': 'Designed for Children', 'Her Şey Burada': 'Everything in One Place',
      'Boyama, oyunlar, AI dönüşümü ve ebeveyn kontrolü — hepsi tek uygulamada.': 'Coloring, games, AI conversion, and parental controls, all in one app.',
      'AI Boyama Dönüşümü': 'AI Coloring Conversion',
      'Fotoğrafı karikatür, suluboya, kuru boya veya doodle stilinde boyama sayfasına dönüştürün. Her üretim 1 AI kredisi kullanır.': 'Turn a photo into a cartoon, watercolor, colored-pencil, or doodle coloring page. Each generation uses 1 AI credit.',
      'Dinamik Şablon Galerisi': 'Dynamic Template Gallery',
      'Hayvanlar, doğa, uzay ve deniz kategorilerindeki içerikler Supabase galerisi üzerinden güncellenir.': 'Content in animals, nature, space, and sea categories is updated through the Supabase gallery.',
      '9 Mini Oyun': '9 Mini Games',
      'Baloncuk patlatmadan toplama ve örüntü oyunlarına kadar 1-10 yaşa göre iki ayrı oyun grubu.': 'Two game groups for ages 1-10, from bubble popping to addition and pattern games.',
      '4 küçük + 5 büyük oyun': '4 younger + 5 older games',
      'Günlük süre limiti, aktivite takibi ve şifreli ebeveyn paneli ile çocuğunuz güvende.': 'Daily time limits, activity tracking, and a password-protected parent panel help keep your child safe.',
      'Varsayılan Limit': 'Default Limit', 'Özelleştirme': 'Customization', 'Boyama Araçları': 'Coloring Tools',
      'Kalem, fırça, pastel ve farklı boyutlarda silgi. Renk seçici, geri alma, yakınlaştırma, kaydırma ve kayıt desteği.': 'Pencil, brush, crayon, and multiple eraser sizes, plus color picker, undo, zoom, pan, and save.',
      '8 Dil Desteği': '8 Languages',
      'Türkçe, İngilizce, Almanca, Fransızca, Arapça, İspanyolca, Rusça, İtalyanca.': 'Turkish, English, German, French, Arabic, Spanish, Russian, and Italian.',
      '3 Adımda': 'In 3 Steps', 'Boyama Macerası': 'Coloring Adventure', 'Fotoğraf Çek veya Seç': 'Take or Choose a Photo',
      'Galeriden bir fotoğraf seçin veya kameranızla çekin. Fotoğraf kullanımı için cihaz izni gerekir.': 'Choose a photo from your gallery or take one with the camera. Device permission is required.',
      'AI Dönüştürsün': 'Let AI Transform It',
      'Karikatür, suluboya, kuru boya veya doodle stilini seçin. Her dönüşüm 1 kredi kullanır; işlem süresi bağlantıya göre değişebilir.': 'Choose cartoon, watercolor, colored-pencil, or doodle style. Each conversion uses 1 credit; processing time may vary.',
      'Boya ve Eğlen!': 'Color and Have Fun!',
      'Kalem, fırça ve pastel araçlarıyla renklendirin; çalışmanızı cihazda kayıtlı boyamalarınıza ekleyin.': 'Color with pencil, brush, and crayon tools, then save your work on the device.',
      'Özellik Önizlemeleri': 'Feature Previews', 'Her Detay': 'Every Detail', 'Düşünüldü': 'Considered',
      'Aşağıdaki görseller ürün özelliklerini anlatan temsili önizlemelerdir.': 'The images below are representative previews of product features.',
      'Boyama Ekranı': 'Coloring Screen', 'Şablon Galerisi': 'Template Gallery', 'Ebeveyn Paneli': 'Parent Panel',
      'Ebeveynler İçin': 'For Parents', 'Kontrol': 'Control', 'Sizde': 'Stays With You',
      'Daha Sakin, Reklamsız Deneyim': 'A Calmer, Ad-Free Experience',
      'Kayıtlı boyamaları saklama ve düzenleme': 'Save and continue editing colorings',
      '9 mini oyunun tamamına erişim': 'Access all 9 mini games',
      'Boyamaları JPG olarak galeriye aktarma': 'Export colorings to the gallery as JPG',
      'Kayıtlı Boyamalar': 'Saved Colorings', 'Mini Oyunlar': 'Mini Games', 'JPG Galeri Aktarımı': 'JPG Gallery Export',
      'Reklamları kaldırın ve premium şablonlara erişin. AI kredileri abonelikten ayrı olarak satın alınır.': 'Remove ads and access premium templates. AI credits are purchased separately from the subscription.',
      'Aylık': 'Monthly', 'Yıllık': 'Yearly', 'Premium\'u Keşfet': 'Explore Premium',
      'Yakında Başlıyoruz!': 'Launching Soon!',
      'Picadoo App Store ve Google Play\'de yayınlandığında indirme bağlantıları burada olacak.': 'Download links will appear here when Picadoo launches on the App Store and Google Play.',
      'Yakında': 'Coming Soon', 'Uygulama': 'App', 'İndir': 'Download', 'Güvenlik': 'Safety',
      'Süre Limitleri': 'Time Limits', 'Yasal': 'Legal', 'Gizlilik Politikası': 'Privacy Policy',
      'Kullanım Koşulları': 'Terms of Use', 'Gizlilik': 'Privacy', 'Koşullar': 'Terms',
      'Çocuklar için güvenli, eğlenceli ve yaratıcı dijital boyama deneyimi.': 'A safe, fun, and creative digital coloring experience for children.',
      '© 2026 Picadoo. Tüm hakları saklıdır.': '© 2026 Picadoo. All rights reserved.'
    },
    de: {
      'Özellikler': 'Funktionen', 'Nasıl Çalışır': 'So funktioniert es', 'Nasıl Çalışır?': 'So funktioniert es',
      'Ebeveynler': 'Eltern', 'İletişim': 'Kontakt', 'Yayını Takip Et': 'Start verfolgen',
      'Yapay Zeka Destekli Boyama': 'KI-gestütztes Ausmalen', 'Çocuğunuzun Dünyasını': 'Die Welt Ihres Kindes',
      'Renklerle': 'Mit Farben', 'Büyüleyin': 'Verzaubern',
      'Hazır şablonları boyayın, fotoğrafları AI ile boyama sayfasına dönüştürün ve yaşa uygun mini oyunlarla eğlenin. Ebeveyn kontrolü her zaman sizde.': 'Vorlagen ausmalen, Fotos mit KI in Ausmalbilder verwandeln und altersgerechte Minispiele genießen. Die Kontrolle bleibt bei den Eltern.',
      'Yaşa Uygun Oyunlar': 'Altersgerechte Spiele', 'Mini Oyun': 'Minispiele', 'Dil Desteği': 'Sprachen',
      'Yayınlanacağı Platformlar': 'Demnächst verfügbar', 'App Store · Yakında': 'App Store · Demnächst',
      'Google Play · Yakında': 'Google Play · Demnächst', 'Ebeveyn Kontrolü': 'Elternkontrolle',
      'Gizlilik Odaklı': 'Datenschutzorientiert', '1-10 Yaş Oyunlar': 'Spiele für 1-10 Jahre',
      'Çocuklar İçin Tasarlanmış': 'Für Kinder entwickelt', 'Her Şey Burada': 'Alles an einem Ort',
      'Boyama, oyunlar, AI dönüşümü ve ebeveyn kontrolü — hepsi tek uygulamada.': 'Ausmalen, Spiele, KI-Umwandlung und Elternkontrolle in einer App.',
      'AI Boyama Dönüşümü': 'KI-Ausmalbild-Umwandlung', 'Dinamik Şablon Galerisi': 'Dynamische Vorlagengalerie',
      '9 Mini Oyun': '9 Minispiele', '4 küçük + 5 büyük oyun': '4 Spiele für Kleine + 5 für Größere',
      'Varsayılan Limit': 'Standardlimit', 'Özelleştirme': 'Anpassung', 'Boyama Araçları': 'Malwerkzeuge',
      '8 Dil Desteği': '8 Sprachen', '3 Adımda': 'In 3 Schritten', 'Boyama Macerası': 'Malabenteuer',
      'Fotoğraf Çek veya Seç': 'Foto aufnehmen oder auswählen', 'AI Dönüştürsün': 'Von KI umwandeln lassen',
      'Boya ve Eğlen!': 'Ausmalen und Spaß haben!', 'Özellik Önizlemeleri': 'Funktionsvorschau',
      'Her Detay': 'Jedes Detail', 'Düşünüldü': 'Durchdacht', 'Boyama Ekranı': 'Malbildschirm',
      'Şablon Galerisi': 'Vorlagengalerie', 'Ebeveyn Paneli': 'Elternbereich', 'Ebeveynler İçin': 'Für Eltern',
      'Kontrol': 'Die Kontrolle', 'Sizde': 'Bleibt bei Ihnen', 'Daha Sakin, Reklamsız Deneyim': 'Ruhiger und werbefrei',
      'Kayıtlı boyamaları saklama ve düzenleme': 'Ausmalbilder speichern und weiterbearbeiten',
      '9 mini oyunun tamamına erişim': 'Zugriff auf alle 9 Minispiele',
      'Boyamaları JPG olarak galeriye aktarma': 'Ausmalbilder als JPG in die Galerie exportieren',
      'Kayıtlı Boyamalar': 'Gespeicherte Ausmalbilder', 'Mini Oyunlar': 'Minispiele', 'JPG Galeri Aktarımı': 'JPG-Galerieexport',
      'Aylık': 'Monatlich', 'Yıllık': 'Jährlich', 'Premium\'u Keşfet': 'Premium entdecken',
      'Yakında Başlıyoruz!': 'Demnächst verfügbar!', 'Yakında': 'Demnächst', 'Uygulama': 'App',
      'İndir': 'Herunterladen', 'Güvenlik': 'Sicherheit', 'Süre Limitleri': 'Zeitlimits', 'Yasal': 'Rechtliches',
      'Gizlilik Politikası': 'Datenschutz', 'Kullanım Koşulları': 'Nutzungsbedingungen', 'Gizlilik': 'Datenschutz',
      'Koşullar': 'Bedingungen', '© 2026 Picadoo. Tüm hakları saklıdır.': '© 2026 Picadoo. Alle Rechte vorbehalten.'
    },
    fr: {
      'Özellikler': 'Fonctionnalités', 'Nasıl Çalışır': 'Fonctionnement', 'Nasıl Çalışır?': 'Comment ça marche ?',
      'Ebeveynler': 'Parents', 'İletişim': 'Contact', 'Yayını Takip Et': 'Suivre le lancement',
      'Yapay Zeka Destekli Boyama': 'Coloriage assisté par IA', 'Çocuğunuzun Dünyasını': 'Le monde de votre enfant',
      'Renklerle': 'Avec des couleurs', 'Büyüleyin': 'Prenez vie',
      'Hazır şablonları boyayın, fotoğrafları AI ile boyama sayfasına dönüştürün ve yaşa uygun mini oyunlarla eğlenin. Ebeveyn kontrolü her zaman sizde.': 'Coloriez des modèles, transformez des photos en pages de coloriage avec l’IA et profitez de mini-jeux adaptés à l’âge. Les parents gardent le contrôle.',
      'Yaşa Uygun Oyunlar': 'Jeux adaptés à l’âge', 'Mini Oyun': 'Mini-jeux', 'Dil Desteği': 'Langues',
      'Yayınlanacağı Platformlar': 'Bientôt disponible sur', 'App Store · Yakında': 'App Store · Bientôt',
      'Google Play · Yakında': 'Google Play · Bientôt', 'Ebeveyn Kontrolü': 'Contrôle parental',
      'Gizlilik Odaklı': 'Respect de la vie privée', '1-10 Yaş Oyunlar': 'Jeux pour les 1-10 ans',
      'Çocuklar İçin Tasarlanmış': 'Conçu pour les enfants', 'Her Şey Burada': 'Tout au même endroit',
      'Boyama, oyunlar, AI dönüşümü ve ebeveyn kontrolü — hepsi tek uygulamada.': 'Coloriage, jeux, conversion IA et contrôle parental dans une seule application.',
      'AI Boyama Dönüşümü': 'Conversion en coloriage par IA', 'Dinamik Şablon Galerisi': 'Galerie de modèles dynamique',
      '9 Mini Oyun': '9 mini-jeux', '4 küçük + 5 büyük oyun': '4 jeux petits + 5 grands',
      'Varsayılan Limit': 'Limite par défaut', 'Özelleştirme': 'Personnalisation', 'Boyama Araçları': 'Outils de coloriage',
      '8 Dil Desteği': '8 langues', '3 Adımda': 'En 3 étapes', 'Boyama Macerası': 'Aventure de coloriage',
      'Fotoğraf Çek veya Seç': 'Prendre ou choisir une photo', 'AI Dönüştürsün': 'Laisser l’IA transformer',
      'Boya ve Eğlen!': 'Coloriez et amusez-vous !', 'Özellik Önizlemeleri': 'Aperçu des fonctionnalités',
      'Her Detay': 'Chaque détail', 'Düşünüldü': 'A été pensé', 'Boyama Ekranı': 'Écran de coloriage',
      'Şablon Galerisi': 'Galerie de modèles', 'Ebeveyn Paneli': 'Espace parents', 'Ebeveynler İçin': 'Pour les parents',
      'Kontrol': 'Le contrôle', 'Sizde': 'Vous appartient', 'Daha Sakin, Reklamsız Deneyim': 'Une expérience calme sans publicité',
      'Kayıtlı boyamaları saklama ve düzenleme': 'Enregistrer et continuer les coloriages',
      '9 mini oyunun tamamına erişim': 'Accéder aux 9 mini-jeux',
      'Boyamaları JPG olarak galeriye aktarma': 'Exporter les coloriages en JPG dans la galerie',
      'Kayıtlı Boyamalar': 'Coloriages enregistrés', 'Mini Oyunlar': 'Mini-jeux', 'JPG Galeri Aktarımı': 'Export JPG',
      'Aylık': 'Mensuel', 'Yıllık': 'Annuel', 'Premium\'u Keşfet': 'Découvrir Premium',
      'Yakında Başlıyoruz!': 'Lancement prochain !', 'Yakında': 'Bientôt', 'Uygulama': 'Application',
      'İndir': 'Télécharger', 'Güvenlik': 'Sécurité', 'Süre Limitleri': 'Limites de temps', 'Yasal': 'Mentions légales',
      'Gizlilik Politikası': 'Politique de confidentialité', 'Kullanım Koşulları': 'Conditions d’utilisation',
      'Gizlilik': 'Confidentialité', 'Koşullar': 'Conditions', '© 2026 Picadoo. Tüm hakları saklıdır.': '© 2026 Picadoo. Tous droits réservés.'
    },
    ar: {
      'Özellikler': 'الميزات', 'Nasıl Çalışır': 'كيف يعمل', 'Nasıl Çalışır?': 'كيف يعمل؟',
      'Ebeveynler': 'الوالدان', 'İletişim': 'اتصل بنا', 'Yayını Takip Et': 'تابع الإطلاق',
      'Yapay Zeka Destekli Boyama': 'تلوين مدعوم بالذكاء الاصطناعي', 'Çocuğunuzun Dünyasını': 'عالم طفلك',
      'Renklerle': 'بالألوان', 'Büyüleyin': 'أكثر روعة',
      'Hazır şablonları boyayın, fotoğrafları AI ile boyama sayfasına dönüştürün ve yaşa uygun mini oyunlarla eğlenin. Ebeveyn kontrolü her zaman sizde.': 'لوّن القوالب، وحوّل الصور إلى صفحات تلوين بالذكاء الاصطناعي، واستمتع بألعاب مناسبة للعمر. يبقى التحكم بيد الوالدين.',
      'Yaşa Uygun Oyunlar': 'ألعاب مناسبة للعمر', 'Mini Oyun': 'ألعاب مصغرة', 'Dil Desteği': 'لغات',
      'Yayınlanacağı Platformlar': 'قريباً على', 'App Store · Yakında': 'App Store · قريباً',
      'Google Play · Yakında': 'Google Play · قريباً', 'Ebeveyn Kontrolü': 'رقابة أبوية',
      'Gizlilik Odaklı': 'يركز على الخصوصية', '1-10 Yaş Oyunlar': 'ألعاب للأعمار 1-10',
      'Çocuklar İçin Tasarlanmış': 'مصمم للأطفال', 'Her Şey Burada': 'كل شيء في مكان واحد',
      'Boyama, oyunlar, AI dönüşümü ve ebeveyn kontrolü — hepsi tek uygulamada.': 'التلوين والألعاب والتحويل بالذكاء الاصطناعي والرقابة الأبوية في تطبيق واحد.',
      'AI Boyama Dönüşümü': 'تحويل الصور إلى تلوين بالذكاء الاصطناعي', 'Dinamik Şablon Galerisi': 'معرض قوالب متجدد',
      '9 Mini Oyun': '9 ألعاب مصغرة', '4 küçük + 5 büyük oyun': '4 للصغار + 5 للكبار',
      'Varsayılan Limit': 'الحد الافتراضي', 'Özelleştirme': 'التخصيص', 'Boyama Araçları': 'أدوات التلوين',
      '8 Dil Desteği': 'دعم 8 لغات', '3 Adımda': 'في 3 خطوات', 'Boyama Macerası': 'مغامرة التلوين',
      'Fotoğraf Çek veya Seç': 'التقط صورة أو اخترها', 'AI Dönüştürsün': 'دع الذكاء الاصطناعي يحولها',
      'Boya ve Eğlen!': 'لوّن واستمتع!', 'Özellik Önizlemeleri': 'معاينة الميزات',
      'Her Detay': 'كل التفاصيل', 'Düşünüldü': 'مدروسة', 'Boyama Ekranı': 'شاشة التلوين',
      'Şablon Galerisi': 'معرض القوالب', 'Ebeveyn Paneli': 'لوحة الوالدين', 'Ebeveynler İçin': 'للوالدين',
      'Kontrol': 'التحكم', 'Sizde': 'بيدك', 'Daha Sakin, Reklamsız Deneyim': 'تجربة هادئة بلا إعلانات',
      'Kayıtlı boyamaları saklama ve düzenleme': 'حفظ الرسومات ومتابعة تعديلها',
      '9 mini oyunun tamamına erişim': 'الوصول إلى جميع الألعاب المصغرة التسع',
      'Boyamaları JPG olarak galeriye aktarma': 'تصدير الرسومات إلى المعرض بصيغة JPG',
      'Kayıtlı Boyamalar': 'الرسومات المحفوظة', 'Mini Oyunlar': 'الألعاب المصغرة', 'JPG Galeri Aktarımı': 'تصدير JPG',
      'Aylık': 'شهري', 'Yıllık': 'سنوي', 'Premium\'u Keşfet': 'اكتشف Premium',
      'Yakında Başlıyoruz!': 'سننطلق قريباً!', 'Yakında': 'قريباً', 'Uygulama': 'التطبيق',
      'İndir': 'تنزيل', 'Güvenlik': 'الأمان', 'Süre Limitleri': 'حدود الوقت', 'Yasal': 'قانوني',
      'Gizlilik Politikası': 'سياسة الخصوصية', 'Kullanım Koşulları': 'شروط الاستخدام', 'Gizlilik': 'الخصوصية',
      'Koşullar': 'الشروط', '© 2026 Picadoo. Tüm hakları saklıdır.': '© 2026 Picadoo. جميع الحقوق محفوظة.'
    },
    es: {
      'Özellikler': 'Funciones', 'Nasıl Çalışır': 'Cómo funciona', 'Nasıl Çalışır?': '¿Cómo funciona?',
      'Ebeveynler': 'Familias', 'İletişim': 'Contacto', 'Yayını Takip Et': 'Seguir el lanzamiento',
      'Yapay Zeka Destekli Boyama': 'Colorear con inteligencia artificial', 'Çocuğunuzun Dünyasını': 'El mundo de tu hijo',
      'Renklerle': 'Con colores', 'Büyüleyin': 'Cobra vida',
      'Hazır şablonları boyayın, fotoğrafları AI ile boyama sayfasına dönüştürün ve yaşa uygun mini oyunlarla eğlenin. Ebeveyn kontrolü her zaman sizde.': 'Colorea plantillas, convierte fotos en páginas para colorear con IA y disfruta de minijuegos apropiados para cada edad. Las familias mantienen el control.',
      'Yaşa Uygun Oyunlar': 'Juegos por edad', 'Mini Oyun': 'Minijuegos', 'Dil Desteği': 'Idiomas',
      'Yayınlanacağı Platformlar': 'Próximamente en', 'App Store · Yakında': 'App Store · Próximamente',
      'Google Play · Yakında': 'Google Play · Próximamente', 'Ebeveyn Kontrolü': 'Control parental',
      'Gizlilik Odaklı': 'Privacidad primero', '1-10 Yaş Oyunlar': 'Juegos de 1 a 10 años',
      'Çocuklar İçin Tasarlanmış': 'Diseñado para niños', 'Her Şey Burada': 'Todo en un solo lugar',
      'Boyama, oyunlar, AI dönüşümü ve ebeveyn kontrolü — hepsi tek uygulamada.': 'Colorear, juegos, conversión con IA y control parental en una sola aplicación.',
      'AI Boyama Dönüşümü': 'Conversión a dibujo con IA', 'Dinamik Şablon Galerisi': 'Galería dinámica de plantillas',
      '9 Mini Oyun': '9 minijuegos', '4 küçük + 5 büyük oyun': '4 juegos pequeños + 5 grandes',
      'Varsayılan Limit': 'Límite predeterminado', 'Özelleştirme': 'Personalización', 'Boyama Araçları': 'Herramientas de coloreado',
      '8 Dil Desteği': '8 idiomas', '3 Adımda': 'En 3 pasos', 'Boyama Macerası': 'Aventura de colorear',
      'Fotoğraf Çek veya Seç': 'Haz o elige una foto', 'AI Dönüştürsün': 'Deja que la IA la transforme',
      'Boya ve Eğlen!': '¡Colorea y diviértete!', 'Özellik Önizlemeleri': 'Vista previa de funciones',
      'Her Detay': 'Cada detalle', 'Düşünüldü': 'Está pensado', 'Boyama Ekranı': 'Pantalla de coloreado',
      'Şablon Galerisi': 'Galería de plantillas', 'Ebeveyn Paneli': 'Panel familiar', 'Ebeveynler İçin': 'Para familias',
      'Kontrol': 'El control', 'Sizde': 'Es tuyo', 'Daha Sakin, Reklamsız Deneyim': 'Una experiencia tranquila sin anuncios',
      'Kayıtlı boyamaları saklama ve düzenleme': 'Guardar y seguir editando dibujos',
      '9 mini oyunun tamamına erişim': 'Acceso a los 9 minijuegos',
      'Boyamaları JPG olarak galeriye aktarma': 'Exportar dibujos a la galería como JPG',
      'Kayıtlı Boyamalar': 'Dibujos guardados', 'Mini Oyunlar': 'Minijuegos', 'JPG Galeri Aktarımı': 'Exportación JPG',
      'Aylık': 'Mensual', 'Yıllık': 'Anual', 'Premium\'u Keşfet': 'Descubrir Premium',
      'Yakında Başlıyoruz!': '¡Muy pronto!', 'Yakında': 'Próximamente', 'Uygulama': 'Aplicación',
      'İndir': 'Descargar', 'Güvenlik': 'Seguridad', 'Süre Limitleri': 'Límites de tiempo', 'Yasal': 'Legal',
      'Gizlilik Politikası': 'Política de privacidad', 'Kullanım Koşulları': 'Términos de uso',
      'Gizlilik': 'Privacidad', 'Koşullar': 'Términos', '© 2026 Picadoo. Tüm hakları saklıdır.': '© 2026 Picadoo. Todos los derechos reservados.'
    },
    ru: {
      'Özellikler': 'Возможности', 'Nasıl Çalışır': 'Как это работает', 'Nasıl Çalışır?': 'Как это работает?',
      'Ebeveynler': 'Родителям', 'İletişim': 'Контакты', 'Yayını Takip Et': 'Следить за запуском',
      'Yapay Zeka Destekli Boyama': 'Раскрашивание с ИИ', 'Çocuğunuzun Dünyasını': 'Мир вашего ребёнка',
      'Renklerle': 'Ярче с', 'Büyüleyin': 'Красками',
      'Hazır şablonları boyayın, fotoğrafları AI ile boyama sayfasına dönüştürün ve yaşa uygun mini oyunlarla eğlenin. Ebeveyn kontrolü her zaman sizde.': 'Раскрашивайте шаблоны, превращайте фотографии в раскраски с помощью ИИ и играйте в мини-игры по возрасту. Контроль остаётся у родителей.',
      'Yaşa Uygun Oyunlar': 'Игры по возрасту', 'Mini Oyun': 'Мини-игры', 'Dil Desteği': 'Языков',
      'Yayınlanacağı Platformlar': 'Скоро на', 'App Store · Yakında': 'App Store · Скоро',
      'Google Play · Yakında': 'Google Play · Скоро', 'Ebeveyn Kontrolü': 'Родительский контроль',
      'Gizlilik Odaklı': 'Конфиденциальность', '1-10 Yaş Oyunlar': 'Игры для 1-10 лет',
      'Çocuklar İçin Tasarlanmış': 'Создано для детей', 'Her Şey Burada': 'Всё в одном месте',
      'Boyama, oyunlar, AI dönüşümü ve ebeveyn kontrolü — hepsi tek uygulamada.': 'Раскраски, игры, преобразование с ИИ и родительский контроль в одном приложении.',
      'AI Boyama Dönüşümü': 'Создание раскрасок с ИИ', 'Dinamik Şablon Galerisi': 'Динамическая галерея шаблонов',
      '9 Mini Oyun': '9 мини-игр', '4 küçük + 5 büyük oyun': '4 для малышей + 5 для старших',
      'Varsayılan Limit': 'Лимит по умолчанию', 'Özelleştirme': 'Настройка', 'Boyama Araçları': 'Инструменты рисования',
      '8 Dil Desteği': '8 языков', '3 Adımda': 'За 3 шага', 'Boyama Macerası': 'Приключение с раскрасками',
      'Fotoğraf Çek veya Seç': 'Сделайте или выберите фото', 'AI Dönüştürsün': 'Пусть ИИ преобразует',
      'Boya ve Eğlen!': 'Раскрашивайте и веселитесь!', 'Özellik Önizlemeleri': 'Обзор функций',
      'Her Detay': 'Каждая деталь', 'Düşünüldü': 'Продумана', 'Boyama Ekranı': 'Экран раскрашивания',
      'Şablon Galerisi': 'Галерея шаблонов', 'Ebeveyn Paneli': 'Панель родителей', 'Ebeveynler İçin': 'Для родителей',
      'Kontrol': 'Контроль', 'Sizde': 'У вас', 'Daha Sakin, Reklamsız Deneyim': 'Спокойно и без рекламы',
      'Kayıtlı boyamaları saklama ve düzenleme': 'Сохранять и продолжать редактирование раскрасок',
      '9 mini oyunun tamamına erişim': 'Доступ ко всем 9 мини-играм',
      'Boyamaları JPG olarak galeriye aktarma': 'Экспортировать раскраски в галерею как JPG',
      'Kayıtlı Boyamalar': 'Сохранённые раскраски', 'Mini Oyunlar': 'Мини-игры', 'JPG Galeri Aktarımı': 'Экспорт JPG',
      'Aylık': 'Ежемесячно', 'Yıllık': 'Ежегодно', 'Premium\'u Keşfet': 'Узнать о Premium',
      'Yakında Başlıyoruz!': 'Скоро запуск!', 'Yakında': 'Скоро', 'Uygulama': 'Приложение',
      'İndir': 'Скачать', 'Güvenlik': 'Безопасность', 'Süre Limitleri': 'Ограничения времени', 'Yasal': 'Правовая информация',
      'Gizlilik Politikası': 'Политика конфиденциальности', 'Kullanım Koşulları': 'Условия использования',
      'Gizlilik': 'Конфиденциальность', 'Koşullar': 'Условия', '© 2026 Picadoo. Tüm hakları saklıdır.': '© 2026 Picadoo. Все права защищены.'
    },
    it: {
      'Özellikler': 'Funzioni', 'Nasıl Çalışır': 'Come funziona', 'Nasıl Çalışır?': 'Come funziona?',
      'Ebeveynler': 'Genitori', 'İletişim': 'Contatti', 'Yayını Takip Et': 'Segui il lancio',
      'Yapay Zeka Destekli Boyama': 'Colorazione con IA', 'Çocuğunuzun Dünyasını': 'Il mondo di tuo figlio',
      'Renklerle': 'Con i colori', 'Büyüleyin': 'Prende vita',
      'Hazır şablonları boyayın, fotoğrafları AI ile boyama sayfasına dönüştürün ve yaşa uygun mini oyunlarla eğlenin. Ebeveyn kontrolü her zaman sizde.': 'Colora i modelli, trasforma le foto in pagine da colorare con l’IA e divertiti con minigiochi adatti all’età. Il controllo resta ai genitori.',
      'Yaşa Uygun Oyunlar': 'Giochi adatti all’età', 'Mini Oyun': 'Minigiochi', 'Dil Desteği': 'Lingue',
      'Yayınlanacağı Platformlar': 'In arrivo su', 'App Store · Yakında': 'App Store · Prossimamente',
      'Google Play · Yakında': 'Google Play · Prossimamente', 'Ebeveyn Kontrolü': 'Controllo genitori',
      'Gizlilik Odaklı': 'Privacy al centro', '1-10 Yaş Oyunlar': 'Giochi per 1-10 anni',
      'Çocuklar İçin Tasarlanmış': 'Progettato per bambini', 'Her Şey Burada': 'Tutto in un solo posto',
      'Boyama, oyunlar, AI dönüşümü ve ebeveyn kontrolü — hepsi tek uygulamada.': 'Colorazione, giochi, conversione IA e controllo genitori in un’unica app.',
      'AI Boyama Dönüşümü': 'Conversione in disegno con IA', 'Dinamik Şablon Galerisi': 'Galleria dinamica di modelli',
      '9 Mini Oyun': '9 minigiochi', '4 küçük + 5 büyük oyun': '4 giochi piccoli + 5 grandi',
      'Varsayılan Limit': 'Limite predefinito', 'Özelleştirme': 'Personalizzazione', 'Boyama Araçları': 'Strumenti da colorare',
      '8 Dil Desteği': '8 lingue', '3 Adımda': 'In 3 passaggi', 'Boyama Macerası': 'Avventura da colorare',
      'Fotoğraf Çek veya Seç': 'Scatta o scegli una foto', 'AI Dönüştürsün': 'Lascia fare all’IA',
      'Boya ve Eğlen!': 'Colora e divertiti!', 'Özellik Önizlemeleri': 'Anteprima delle funzioni',
      'Her Detay': 'Ogni dettaglio', 'Düşünüldü': 'È stato pensato', 'Boyama Ekranı': 'Schermata da colorare',
      'Şablon Galerisi': 'Galleria modelli', 'Ebeveyn Paneli': 'Pannello genitori', 'Ebeveynler İçin': 'Per i genitori',
      'Kontrol': 'Il controllo', 'Sizde': 'Resta a te', 'Daha Sakin, Reklamsız Deneyim': 'Un’esperienza tranquilla senza pubblicità',
      'Kayıtlı boyamaları saklama ve düzenleme': 'Salvare e continuare a modificare i disegni',
      '9 mini oyunun tamamına erişim': 'Accesso a tutti i 9 minigiochi',
      'Boyamaları JPG olarak galeriye aktarma': 'Esportare i disegni nella galleria come JPG',
      'Kayıtlı Boyamalar': 'Disegni salvati', 'Mini Oyunlar': 'Minigiochi', 'JPG Galeri Aktarımı': 'Esportazione JPG',
      'Aylık': 'Mensile', 'Yıllık': 'Annuale', 'Premium\'u Keşfet': 'Scopri Premium',
      'Yakında Başlıyoruz!': 'In arrivo!', 'Yakında': 'Prossimamente', 'Uygulama': 'App',
      'İndir': 'Scarica', 'Güvenlik': 'Sicurezza', 'Süre Limitleri': 'Limiti di tempo', 'Yasal': 'Note legali',
      'Gizlilik Politikası': 'Informativa sulla privacy', 'Kullanım Koşulları': 'Termini di utilizzo',
      'Gizlilik': 'Privacy', 'Koşullar': 'Termini', '© 2026 Picadoo. Tüm hakları saklıdır.': '© 2026 Picadoo. Tutti i diritti riservati.'
    }
  };

  Object.entries(window.PICADOO_I18N_CONTENT || {}).forEach(([lang, entries]) => {
    translations[lang] = { ...(entries || {}), ...(translations[lang] || {}) };
  });

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const translatableSelector = 'body *:not(script):not(style)';

  function translateTextNodes(lang) {
    const dictionary = lang === 'tr'
      ? {}
      : { ...(translations.en || {}), ...(translations[lang] || {}) };
    document.querySelectorAll(translatableSelector).forEach((element) => {
      element.childNodes.forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE || !node.textContent.trim()) return;
        if (!originalText.has(node)) originalText.set(node, node.textContent);
        const original = originalText.get(node);
        const key = original.replace(/\s+/g, ' ').trim();
        const translated = lang === 'tr' ? key : dictionary[key];
        if (!translated) {
          node.textContent = original;
          return;
        }
        const leading = original.match(/^\s*/)?.[0] || '';
        const trailing = original.match(/\s*$/)?.[0] || '';
        node.textContent = `${leading}${translated}${trailing}`;
      });
    });
  }

  function translateAttributes(lang) {
    const dictionary = lang === 'tr'
      ? {}
      : { ...(translations.en || {}), ...(translations[lang] || {}) };
    const attributes = ['placeholder', 'aria-label', 'title', 'alt'];
    document.querySelectorAll('*').forEach((element) => {
      attributes.forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        let originals = originalAttributes.get(element);
        if (!originals) {
          originals = {};
          originalAttributes.set(element, originals);
        }
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        const original = originals[attribute];
        element.setAttribute(attribute, lang === 'tr' ? original : (dictionary[original] || original));
      });
    });

    document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:description"]').forEach((element) => {
      let originals = originalAttributes.get(element);
      if (!originals) {
        originals = {};
        originalAttributes.set(element, originals);
      }
      if (!('content' in originals)) originals.content = element.getAttribute('content');
      const original = originals.content;
      element.setAttribute('content', lang === 'tr' ? original : (dictionary[original] || original));
    });

    if (!document.documentElement.dataset.originalTitle) {
      document.documentElement.dataset.originalTitle = document.title;
    }
    const originalTitle = document.documentElement.dataset.originalTitle;
    document.title = lang === 'tr' ? originalTitle : (dictionary[originalTitle] || originalTitle);
  }

  function updateLegalNotice(lang) {
    const legalPage = /\/(privacy|terms|kvkk|account-deletion)(?:\.html)?$/.test(location.pathname);
    let notice = document.querySelector('.legal-language-notice');
    if (!legalPage || lang === 'tr') {
      notice?.remove();
      return;
    }
    if (!notice) {
      notice = document.createElement('div');
      notice.className = 'legal-language-notice';
      document.querySelector('.legal-content')?.prepend(notice);
    }
    const messages = {
      en: 'This legal document is provided in Turkish. The Turkish text is the authoritative version.',
      de: 'Dieses Rechtsdokument wird auf Türkisch bereitgestellt. Maßgeblich ist die türkische Fassung.',
      fr: 'Ce document juridique est fourni en turc. La version turque fait foi.',
      ar: 'هذه الوثيقة القانونية متاحة باللغة التركية، والنص التركي هو النسخة المعتمدة.',
      es: 'Este documento legal se ofrece en turco. La versión turca es la versión oficial.',
      ru: 'Этот юридический документ представлен на турецком языке. Официальной является турецкая версия.',
      it: 'Questo documento legale è disponibile in turco. Fa fede la versione turca.'
    };
    notice.textContent = messages[lang];
  }

  function applyLanguage(lang) {
    if (!languages[lang]) lang = 'tr';
    localStorage.setItem('picadoo-language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = languages[lang].dir || 'ltr';
    translateTextNodes(lang);
    translateAttributes(lang);
    updateLegalNotice(lang);
    document.querySelectorAll('.language-option').forEach((button) => {
      const active = button.dataset.language === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function createSelector() {
    const footerBottom = document.querySelector('.footer-bottom');
    if (!footerBottom || footerBottom.querySelector('.language-picker')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'language-picker';
    wrapper.innerHTML = `
      <div class="language-options" role="group" aria-label="Dil seçin">
        ${Object.entries(languages).map(([code, data]) => `<button class="language-option" type="button" data-language="${code}" aria-label="${data.label}" aria-pressed="false">${data.short}</button>`).join('')}
      </div>
    `;
    const footerLinks = footerBottom.querySelector('.footer-bottom-links');
    footerBottom.insertBefore(wrapper, footerLinks || null);
    wrapper.querySelectorAll('.language-option').forEach((button) => {
      button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });
  }

  createSelector();
  const requested = new URLSearchParams(location.search).get('lang');
  const saved = localStorage.getItem('picadoo-language');
  const browserLanguage = navigator.language?.slice(0, 2);
  applyLanguage(languages[requested] ? requested : (languages[saved] ? saved : (languages[browserLanguage] ? browserLanguage : 'tr')));
})();
