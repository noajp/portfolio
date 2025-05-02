'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function Home() {
  // 商品データのサンプル
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "ミニマルデザインTシャツ",
      price: 4500,
      description: "シンプルで洗練されたデザインのTシャツ。高品質な素材を使用しています。",
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: 2,
      name: "モノトーンジャケット",
      price: 12800,
      description: "どんなスタイルにも合わせやすい万能なモノトーンジャケット。",
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: 3,
      name: "クラシックデニム",
      price: 9800,
      description: "着心地の良い高品質デニム。長く愛用できる一着です。",
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: 4,
      name: "レザーバッグ",
      price: 18500,
      description: "耐久性に優れた本革を使用した洗練されたデザインのバッグ。",
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: 5,
      name: "モノクロームスニーカー",
      price: 8500,
      description: "快適な履き心地と洗練されたデザインを両立したスニーカー。",
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: 6,
      name: "シルバーアクセサリー",
      price: 5200,
      description: "シンプルながらも存在感のあるシルバーアクセサリー。",
      imageUrl: "/api/placeholder/400/500",
    },
  ]);

  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // カートに商品を追加
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // カートから商品を削除
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // カート内の商品数を変更
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  // カートの合計金額を計算
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // 商品詳細モーダルを表示
  const showProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  // 商品詳細モーダルを閉じる
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ヘッダー */}
      <header className="bg-black text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MONOCHROME</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li className="hover:underline cursor-pointer">HOME</li>
              <li className="hover:underline cursor-pointer">SHOP</li>
              <li className="hover:underline cursor-pointer">ABOUT</li>
              <li className="hover:underline cursor-pointer">CONTACT</li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              className="hover:text-gray-300 relative" 
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        {/* ヒーロー部分 */}
        <section className="mb-12">
          <div className="relative h-96 bg-gray-900 flex items-center justify-center mb-4">
            <div className="text-center text-white z-10 p-4">
              <h2 className="text-4xl font-bold mb-4">ミニマルでスタイリッシュな<br />モノトーンコレクション</h2>
              <p className="mb-6">シンプルなデザインで日常をエレガントに</p>
              <button className="bg-white text-black px-6 py-2 hover:bg-gray-200 transition">
                コレクションを見る
              </button>
            </div>
          </div>
        </section>

        {/* 商品カテゴリー */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">カテゴリー</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-8 text-center cursor-pointer hover:bg-gray-200 transition">
              <h3 className="text-xl font-semibold">ウェア</h3>
            </div>
            <div className="bg-gray-100 p-8 text-center cursor-pointer hover:bg-gray-200 transition">
              <h3 className="text-xl font-semibold">アクセサリー</h3>
            </div>
            <div className="bg-gray-100 p-8 text-center cursor-pointer hover:bg-gray-200 transition">
              <h3 className="text-xl font-semibold">シューズ</h3>
            </div>
          </div>
        </section>

        {/* 商品リスト */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">新着アイテム</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="border border-gray-200 hover:shadow-lg transition">
                <div className="relative h-64 cursor-pointer" onClick={() => showProductDetails(product)}>
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-xl font-bold mt-1">¥{product.price.toLocaleString()}</p>
                  <button 
                    className="mt-3 w-full bg-black text-white py-2 hover:bg-gray-800 transition"
                    onClick={() => addToCart(product)}
                  >
                    カートに追加
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-black text-white p-8 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MONOCHROME</h3>
              <p>シンプルでスタイリッシュなアイテムを<br />あなたの日常に。</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">ショップ情報</h4>
              <ul className="space-y-2">
                <li>会社概要</li>
                <li>ストア一覧</li>
                <li>採用情報</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">カスタマーサポート</h4>
              <ul className="space-y-2">
                <li>よくある質問</li>
                <li>お問い合わせ</li>
                <li>返品・交換</li>
                <li>配送情報</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">フォローする</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
            <p>&copy; 2025 MONOCHROME. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* カートサイドバー */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold">ショッピングカート</h2>
              <button 
                className="text-gray-500 hover:text-black"
                onClick={() => setIsCartOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 h-full overflow-y-auto pb-32">
              {cart.length === 0 ? (
                <p className="text-center py-8 text-gray-500">カートに商品がありません</p>
              ) : (
                <>
                  {cart.map(item => (
                    <div key={item.id} className="flex py-4 border-b border-gray-200">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600">¥{item.price.toLocaleString()}</p>
                        <div className="flex items-center mt-2">
                          <button 
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <button 
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button 
                        className="text-gray-500 hover:text-black"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <div className="flex justify-between mb-4">
                  <span className="font-bold">合計:</span>
                  <span className="font-bold">¥{calculateTotal().toLocaleString()}</span>
                </div>
                <button className="w-full bg-black text-white py-3 hover:bg-gray-800 transition">
                  レジに進む
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 商品詳細モーダル */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeProductDetails}
          ></div>
          <div className="relative bg-white max-w-4xl w-full mx-4 max-h-screen overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={closeProductDetails}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <img 
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-2xl font-bold mb-4">¥{selectedProduct.price.toLocaleString()}</p>
                <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">サイズ</h3>
                  <div className="flex space-x-2">
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button 
                        key={size}
                        className="border border-gray-300 w-10 h-10 flex items-center justify-center hover:border-black"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="w-full bg-black text-white py-3 hover:bg-gray-800 transition mb-4"
                  onClick={() => {
                    addToCart(selectedProduct);
                    closeProductDetails();
                  }}
                >
                  カートに追加
                </button>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">商品詳細</h3>
                    <p className="text-gray-600">高品質な素材を使用し、丁寧に作られた製品です。シンプルなデザインで様々なスタイルに合わせやすくなっています。</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">配送・返品</h3>
                    <p className="text-gray-600">通常3〜5営業日以内に発送いたします。商品到着後14日以内であれば返品・交換が可能です。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}