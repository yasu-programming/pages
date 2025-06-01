# ヤス - ポートフォリオサイト

モダンで響きのあるWebエンジニアのポートフォリオサイトです。GitHub Pagesでホストされています。

## 🚀 特徴

- **モダンなデザイン**: クリーンで洗練されたUI/UX
- **レスポンシブ対応**: モバイルファーストデザイン
- **スムーズなアニメーション**: GSAPを使用した高品質なアニメーション
- **高パフォーマンス**: 最適化されたコードとService Workerによるキャッシュ
- **SEO対応**: 適切なメタタグとサイトマップ
- **アクセシビリティ**: キーボードナビゲーションとスクリーンリーダー対応

## 🛠️ 技術スタック

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **アニメーション**: GSAP (GreenSock Animation Platform)
- **レスポンシブ**: CSS Grid, Flexbox
- **パフォーマンス**: Service Worker, 画像最適化
- **ホスティング**: GitHub Pages

## 📱 セクション

1. **ヒーローセクション** - 自己紹介とキャッチコピー
2. **職務経歴** - タイムライン形式での経歴表示
3. **スキル** - プログレスバー付きスキル表示
4. **プロジェクト実績** - ポートフォリオ作品の紹介
5. **お問い合わせ** - コンタクトフォーム

## 🎨 デザインコンセプト

- **カラースキーム**: モダンなブルーグラデーション
- **タイポグラフィ**: Segoe UIベースの読みやすいフォント
- **アニメーション**: 控えめで自然なモーション
- **レイアウト**: グリッドベースの整理されたレイアウト

## 🔧 セットアップ

### ローカル開発

```bash
# リポジトリをクローン
git clone https://github.com/yasu-programming/pages.git

# ディレクトリに移動
cd pages

# ローカルサーバーを起動
python3 -m http.server 8000

# ブラウザで http://localhost:8000 を開く
```

### GitHub Pagesへのデプロイ

1. GitHubリポジトリの Settings へ移動
2. Pages セクションで Source を "Deploy from a branch" に設定
3. Branch を "main" / "(root)" に設定
4. Save をクリック

## 📁 プロジェクト構造

```
pages/
├── index.html          # メインHTMLファイル
├── css/
│   └── style.css       # メインスタイルシート
├── js/
│   ├── main.js         # メインJavaScript
│   └── gsap-animations.js  # GSAPアニメーション
├── assets/
│   └── images/         # 画像ファイル
├── service-worker.js   # Service Worker
├── robots.txt          # SEO設定
├── sitemap.xml         # サイトマップ
└── README.md           # このファイル
```

## 🎯 パフォーマンス最適化

- **CSS/JS圧縮**: 本番環境での最適化
- **画像最適化**: WebP形式での配信
- **キャッシュ戦略**: Service Workerによる効率的なキャッシュ
- **遅延読み込み**: 画像の遅延読み込み
- **フォント最適化**: font-display: swapの使用

## 🎨 カスタマイズ

### 色の変更
CSS変数を編集することで簡単にカラーテーマを変更できます：

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --accent-color: #06b6d4;
}
```

### アニメーションの調整
GSAP設定で アニメーションの速度や効果を調整：

```javascript
const animationConfig = {
    duration: 1,
    ease: "power3.out",
    stagger: 0.1
};
```

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

## 🤝 貢献

プロジェクトの改善に貢献することを歓迎します：

1. リポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📞 お問い合わせ

- **Email**: yasu@example.com
- **GitHub**: [@yasu-programming](https://github.com/yasu-programming)
- **Website**: [https://yasu-programming.github.io/pages/](https://yasu-programming.github.io/pages/)

---

⭐ このプロジェクトが気に入ったら、スターをつけてください！
