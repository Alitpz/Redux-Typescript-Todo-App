# 📝 TypeScript Todo App

Modern React ve TypeScript teknolojileri kullanılarak geliştirilmiş, basit ve kullanıcı dostu bir todo (yapılacaklar) uygulaması.

## 🚀 Özellikler

- ✅ Todo öğeleri oluşturma
- 📋 Todo listesi görüntüleme
- 🎨 Modern ve responsive tasarım
- 🌙 Dark/Light tema desteği
- ⚡ Hızlı geliştirme ortamı (Vite)
- 🔧 TypeScript ile tip güvenliği
- 📱 Mobil uyumlu arayüz

## 🛠️ Teknolojiler

- **React 19.1.1** - Modern UI kütüphanesi
- **TypeScript 5.8.3** - Tip güvenli JavaScript
- **Vite 7.1.2** - Hızlı build tool ve dev server
- **ESLint** - Kod kalitesi ve tutarlılık
- **CSS3** - Modern stil özellikleri

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Todo.tsx        # Tek todo öğesi
│   ├── TodoCreate.tsx  # Todo oluşturma formu
│   └── TodoList.tsx    # Todo listesi
├── types/              # TypeScript tip tanımları
├── redux/              # State yönetimi (Redux)
├── css/                # Ek stil dosyaları
├── App.tsx             # Ana uygulama bileşeni
├── App.css             # Uygulama stilleri
├── index.css           # Global stiller
└── main.tsx            # Uygulama giriş noktası
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd typescript-todo-app
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcınızda açın:**
```
http://localhost:5173
```

## 📜 Mevcut Komutlar

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Kod kalitesini kontrol et
npm run lint

# Build önizlemesi
npm run preview
```

## 🎨 Tasarım Özellikleri

- **Merkezi Hizalama:** Tüm içerik sayfada ortalanmış
- **Modern Form:** Altın renkli buton ve temiz input tasarımı
- **Responsive:** Mobil ve masaüstü uyumlu
- **Tema Desteği:** Otomatik dark/light tema geçişi
- **Minimalist:** Sade ve kullanıcı dostu arayüz

## 🔧 Geliştirme Notları

### Mevcut Durum
- ✅ Temel bileşen yapısı hazır
- ✅ Stil dosyaları yapılandırılmış
- ✅ TypeScript yapılandırması tamamlanmış
- ✅ ESLint kuralları aktif

### Gelecek Geliştirmeler
- 🔄 State yönetimi entegrasyonu
- 💾 LocalStorage desteği
- 🗑️ Todo silme işlevi
- ✏️ Todo düzenleme özelliği
- 🏷️ Kategori sistemi

## 📱 Kullanım

1. **Todo Oluşturma:** Input alanına todo metnini yazın ve "Oluştur" butonuna tıklayın
2. **Todo Görüntüleme:** Oluşturulan todolar otomatik olarak listede görünür
3. **Tema Değiştirme:** Sistem tercihinize göre otomatik tema geçişi

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

Bu proje modern web teknolojileri öğrenme amacıyla geliştirilmiştir.

---

**Not:** Bu proje geliştirme aşamasındadır. Yeni özellikler ve iyileştirmeler sürekli eklenmektedir.