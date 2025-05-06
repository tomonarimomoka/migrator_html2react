import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const TSkaigiReport: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />  
  <main className="box">    
    <h1 id="articleTitle">【聞き専】TSkaigi参加レポート</h1>
    <div className="right">
      🕓本記事の最終更新日は
      <time id="modify"></time>
      です。
      <script>
        /* 更新日の取得 */
        const last = new Date(document.lastModified);
        const year = last.getFullYear();
        const month = last.getMonth() + 1;
        const date = last.getDate();
        /* 日付を書き換える */
        const target = document.getElementById('modify');
        target.textContent = year + '-' + month + '-' + date;
      </script>
    </div>
    <SubTitle subTitle="筆者のスペック" />
    <ul>      
      <li>プログラミングはほぼ独学</li>
      <li>学生時代はC#プログラマー</li>
      <li>今はソフトフェアエンジニアとして自社製品の製品開発を担当</li>
      <li>使える言語はC# , Java , Python , Shell Script , node.js（勉強中） , TypeScript（勉強中）</li>
    </ul>

    <SubTitle subTitle="参加したイベント" />
    <p>
      <table > 
        <tbody>
          <tr><th>イベント名</th><td>TSKaigi Mashup #1 フロントエンド</td></tr>
          <tr><th>URL</th><td><a href="https://typescript-jpc.connpass.com/event/325001/">TSKaigi Mashup #1 フロントエンド</a></td></tr></tr>
          <tr><th>主催</th><td><a href="https://association.tskaigi.org/">一般社団法人TSKaigi Association</a></td></tr></tr>
          <tr><th>参加対象者</th><td>
            <ul>
              <li>フロントエンドに興味のある方</li>
              <li>TypeScriptに興味のある方</li>
            </ul>
          </td></tr>
        </tbody>
      </table>
    </p>

    <SubTitle subTitle="発表：1人目" />
    <h3>基本情報</h3>
    <table>
      <tr><th>氏名</th><td>鴻巣 和司 さん</td></tr>
      <tr><th>会社名</th><td>LINEヤフー株式会社</td></tr>
      <tr><th>題名</th><td>大規模なコードベースの改修のために自作TypeScriptツールを作るメリット</td></tr>
    </table>
    <table> 
    <h3>発表概要</h3>
    <p>この方は、自作ツールの紹介でした。</p>
    
    <p>■課題</p>
    <ul>
      <li>ソースコードのリファクタリングが、実装者は単調な作業で辛い</li>
    </ul>

    <p>■システム概要</p>
    <ul>
      <li>ソースコードを一定のルールで上書きするツール</li>
      <li>言語は、プロジェクトの構成に基づく変更や型情報の利用ができるTypeScript</li>
      <li>ポイントは、汎用性ではなく個別最適化を目指し、80%の完成度を目指すこと</li>
    </ul>

    <p>■このツールを導入すると</p>
    <ul>
      <li>レビュアーは「差分」ではなく、「差分を作る差分」になり楽</li>
    </ul>
    <h3>感想</h3>
    <p>私は、本当にただ置換をするだけのツールを作ったことがあるが、TypeScriptで型情報などを利用して書き換えるのは面白いと思た。</p>
    

    <SubTitle subTitle="発表：２人目" />
    <h3>基本情報</h3>
    <table>
      <tr><th>氏名</th><td>Shota Hatadaさん</td></tr>
        <tr><th>会社名</th><td>株式会社dinii</td></tr>
        <tr><th>題名</th><td>ReactNative アプリ同士の通信のために型情報をサクッと共有した話</td></tr>
    </table>
    <h3>発表概要</h3>
    <p>この方は、株式会社diniiのシステム紹介でした。</p>
    <p>■システム概要</p>
    <ul>
      <li>飲食店のDXを目指す会社</li>
      <li>飲食店での注文を普段はインターネット経由でサーバーに送信</li>
      <li>注文はモバイルオーダー、ハンディ、レジから入る</li>
      <li>ネットワーク障害に備える仕組みを作った</li>
    </ul>
    <p>■ネットワーク障害に備える仕組み</p>
    <ul>      
      <li>キッチンプリンターとアプリの連携はSDKで実現可能</li>
      <li>ハンディとレジアプリをアプリ同士で連携は独自開発が必要</li>
      <li>APIの型情報の共有は実装が必要だが、ライブラリ（react-native-tcp-socket）が使えそうだから、TCP通信にした</li>
      <li>APIの型情報の共有 ⇒ 無理やり同じインターフェースにする（型を上からかぶせているようだった）</li>
    </ul>
    <h3>感想</h3>
    <p>型を無理やり被せちゃうのはなるほど！と思った。型を定義出来るTypeScriptならではだと思った！</p>

    <SubTitle subTitle="発表：３人目" />
    <h3>基本情報</h3>
    <table>
      <tr><th>氏名</th><td>Fumiya Konno さん</td></tr>
      <tr><th>会社名</th><td>株式会社ICS</td></tr>
      <tr><th>題名</th><td>私のことは嫌いになってもTypeScriptのことは嫌いにならないでください<br/>〜フロントエンドエンジニアがTypeScriptと仲良くなる方法〜</td></tr>
    </table>
    <h3>発表概要</h3> 
    <p>この方は、初心者のための勉強法紹介でした。</p>
    <p>■TypeScriptの良い点</p>
    <ul>
      <li>JavaScriptでは気が付けないことを教えてくれる = JavaScriptよりも安全</li>
      <li>型はドキュメントになる</li>
    </ul> 
    <p>■おすすめの勉強法</p>
    <ol>
      <li>型エラーを解消できるようにすべし！</li>
      <li>型を定義できるすべし！</li>
      <li>変数や型から型を作れるようにすべし！</li>
      ★型パズルよりも設計が大切
    </ol>
    <h3>感想</h3>
    <p>TypeScriptの本が少なくて困っていたが、JavaScriptの本で自分で型を解決してみるやり方で勉強しようかな？と勉強方法のヒントを得ることができた。</p>
    
    <SubTitle subTitle="発表：４人目" />
    <h3>基本情報</h3>
    <table>
      <tr><th>氏名</th><td>ktmouk  さん</td></tr>
      <tr><th>会社名</th><td>note株式会社</td></tr>
      <tr><th>題名</th><td>テスト用のオブジェクトを簡単につくれるFactoryJSというライブラリを作った</td></tr>
    </table>
    <h3>発表概要</h3> 
    <p>この方は、自作ツールの紹介でした。</p>
    <p>■課題</p>
    <ul>
      <li>テストをしっかり書きたいが、テストデータを用意するのが大変</li>
    </ul>

    <p>■システム概要</p>
    <ul>
      <li>factory_bot , factory_boy のようなものを目指した</li>
      ※factory_botはRubyのテスト用ライブラリ、factory_boyはPythonのテスト用ライブラリ
      <li>Prismaのスキーマファイルから自動生成するために、Prisma専用のライブラリも作った</li>
    </ul>

    <p>■現在は</p>
    <ul>
      <li>個人開発で作っていたが、会社でも使っている</li>
    </ul>

    <h3>感想</h3>
    <p>個人開発で作ったものを会社でも使うなんて、、、凄すぎる！私もやってみたい！</p>
    <h4>参考リンク</h4>
    noteエンジニアの技術記事 , 2024 , <a href="https://engineerteam.note.jp/n/n81f69dabec13">テスト用のオブジェクトを簡単に作れるFactoryJSというライブラリを作った</a>

    
    <SubTitle subTitle="発表：５人目" />
    <h3>基本情報</h3>
    <table>
      <tr><th>氏名</th><td>おささ さん</td></tr>
      <tr><th>会社名</th><td>株式会社BLUEISH</td></tr>
      <tr><th>題名</th><td>Zero-Runtimeの理解とvanilla-extractという選択肢</td></tr>
    </table>
    <h3>発表概要</h3>
    <p>この方は、vanilla-extractの紹介でした。</p>
    <p>■Zero-Runtime CSS-in-JS</p>
    <ul>
      <li>Runtime CSS-in-JSはJavaScript実行時にCSSを作成</li>
      <li>Zero-Runtime CSS-in-JSはビルド時にCSSを作成</li>
      ※どちらもJavaScript内にCSSを書く技術
    </ul>
    <p>■vanilla-extractとは？</p>
    <ul>
      <li>TypeScriptを使用したCSS開発を行うためのライブラリ</li>
      <li>Zero-Runtime CSS-in-JSである</li>
      <li>Runtime CSS-in-JSであるEmotionとほぼ同じことが出来る</li>
      <li>パフォーマンス、型安全性、開発効率の3拍子が揃っている</li>
    </ul>
    <h3>感想</h3>
    <P>CSSいつもべた書きだからやってみたい</P>
    <h4>参考リンク</h4>
    2023 , <a href="https://zenn.dev/mk668a/articles/6ef02b7ea8ba74">ゼロランタイムCSS in JSとは？結局、何を使えばいい？- 2024年のフロントエンド -</a>

    
    <SubTitle subTitle="発表：６人目（ゲストセッション）" />
    <h3>基本情報</h3>
    <table>
      <tr><th>氏名</th><td>うひょ さん</td></tr>
      <tr><th>会社名</th><td>株式会社カオナビ</td></tr>
      <tr><th>題名</th><td>tsconfig.jsonの設定を見直そう！　 フロントエンド向け　2024夏</td></tr>
    </table>
    <h3>発表概要</h3>
    <p>この方は、おすすめのtsconfig.jsonの紹介でした。</p>
      <h3>tsconfig.jsonとは？</h3>
      <ul>
        <li>TypeScriptのコンパイラオプションなどを記載した設定ファイル</li>
        <li>Next.jsが勝手に作ってくれることもある</li>
      </ul>
      <h3>おすすめのオプション</h3>
        <p>■moduleResolution</p>
        <ul>
          <li>moduleResolutionとは、モジュール解決の方法を決めるオプション</li>
          ※モジュール解決とは、importで指定されたモジュールがどのファイルか判定すること
          <li>moduleResolution:"node"にするとNode.jsを再現する</li>
          <li>moduleResolution:"builder"はwebpackなどのハンドラーの挙動を再現する。
            Node.jsを再現しつつ、ESMの場合でも相対パスの拡張子を省略できる</li> 
          ※webpackとは、モジュールをいくつかのファイルにまとめてくれる開発ツールのこと
          <li>moduleResolution:"bundler"がおすすめ！</li>
        </ul>
        <p>■baseUrl</p>
        <ul>
          <li>baseUrlは削除しよう！</li>
          <li>余計なモジュール解決をしてしまうことがあるので、ない方がいい</li>
        </ul>
        <p>■target</p>
        <ul>
          <li>ソースコードがどのバージョンをサポートしているかを指定するオプション</li>
          <li>ブラウザでどこまでサポートしているか調べて出来る限り新しくしよう！</li>
        </ul>
        <p>■momdule</p>
        <ul>
          <li>moduleは、targetからmoduleだけを取り出した設定</li>
          <li>momdule:"esnext"にすると純粋なES modules環境と解釈される</li>
          <li>momdule:"preserve"は自由度が高い設定</li>
          <li>momdule:"esnext" か "preserve" がおすすめ </li>
        </ul>
      <h3>感想</h3>
      <P>弊社のConfigファイルを見直してみたいと思った！</P>
      
    <h4>参考リンク</h4>
    2024 , <a href="https://zenn.dev/sprout2000/articles/9d026d3d9e0e8f">いちばんやさしい webpack 入門</a>
    2021 , <a href="https://e-words.jp/w/webpack.html">webpack</a>


  <SubTitle subTitle="LT会のすすめ" />
  <p>
    筆者はサーバーサイドエンジニアなので、フロントには詳しくなかったですが、意外と話についていくことができました。
    また、分からないことはLT会後に調べることで見識を広げることができました。LT会では、聞く専でも、学ぶことがいっぱいあります。
  </p>
  
  <p>
    聞くだけでなく、発表してみたい！という方は<a href="./firstLTparty.html" >【発表】LT会参加レポート</a>
    をぜひご覧ください！
  </p>
  <p>
    ぜひ、LT会に参加して、日本のエンジニア業界を盛り上げていきましょう！
  </p>
  <SubTitle subTitle="おわりに" />
    <p>
      ここまで読んでくださった皆様、ありがとうございます。
    </p>
    <p>
      そして、本記事の公開を許可してくださった登壇者の皆様に心より感謝申し上げます。
    </p>

  </main>
    </>
  );
}