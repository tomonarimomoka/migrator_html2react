import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const WhatIsProtocol: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />
  <main className="box">
    <h1 id="articleTitle">プロトコルとは？</h1>
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

    <SubTitle subTitle="そもそも「プロトコル」の意味は？" />
    <p>プロトコルとはルールのことです。</p>

    <SubTitle subTitle="ITの世界で「プロトコル」とは？" />
    <ul>
      <li>ITの世界では、通信のルールのことをプロトコルと言う</li>
      <li>WebではHTTPというプロトコルを使う</li>
    </ul>
    <h4>参考</h4>
    佐々木　真 , 2021 , <a href="https://wa3.i-3-i.info/word11.html">プロトコル（英：protocol）とは</a>
    <br/>
    
    山本陽平. "第6章　HTTPの基本". Webを支える技術.技術評論社, 2010, 31
    <SubTitle subTitle="HTTPとは?" />
    <ul>      
      <li>ハイパーテキスト（HTMLやXML）だけでなくコンピュータが扱えるデータは何でも転送ができる<br/>
        （例）静止画、音声、動画、Javascript、PDF、ドキュメントファイルなど
      </li>
      <li>HTTPはTCP/IPをベースにしたプロトコル</li>
      <li>URLは「http://~~」のようになる</li>
    </ul>
    <h4>参考</h4>
    山本陽平. "第6章　HTTPの基本". Webを支える技術.技術評論社, 2010, 68
    <br/>

    <SubTitle subTitle="HTTPS（TLS）とは？" />
    <ul>      
      <li>TCP/IPネットワークでデータを暗号化して安全に送受信するためのプロトコル</li>
      <li>URLは「https://~~」のようになる</li>
      <li>TLSとは、Transport Layer Securityの略</li>
      <li>HTTPS = HTTP + SSL/TLS</li>
      <li>ときどき、HTTPS = SSL = TLSとして言葉が使われることがある</li>
      
    </ul>
    <h4>参考</h4>
    佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/word16299.html">TLSとは</a>
    <br/>
    digicert社 , <a href="https://www.digicert.com/jp/faq/public-trust-and-certificates/what-is-ssl">SSL とは何ですか？</a>
    <br/>
    HIKE.Inc , 2018 , <a href="https://blog.qbist.co.jp/?p=1441">HTTPS と SSL と TLS：その違いを５分でわかりやすく解説！</a>
    <br/>
    (株)インセプト , 2020 , <a href="https://e-words.jp/w/TLS.html">TLSとは</a>
  
    
    <SubTitle subTitle="TCP/IPモデル" />
    <h3>■TCP/IPモデルとは</h3>
    <ul style="margin: 0.2em;">
      <li>通信を標準化するために作られた</li>
      <li>米国国防高等研究計画局（DARPA）が作った</li>      
      <li>世界標準になっている</li>
      <li>HTTPのベースになっている</li>
      <li>以下のような階層構造になっている</li>
    </ul>
    <table>
      <caption>TCP/IPモデルの階層構造</caption>
      <tr><th>名前</th><th>何をする</th><th>プロトコル例</th></tr>
      <tr><td>アプリケーション層</td><td></td><td>HTTP</td></tr>
      <tr><td>トランスポート層</td><td>データの転送を保証</td><td>TCP</td></tr>
      <tr><td>インターネット層</td><td>ネットワークでデータをやり取りする</td><td>IP</td></tr>
      <tr><td>ネットワークインターフェース層</td><td></td><td>Ethernet</td></tr>
    </table>
    
    <h3>■IP</h3>
    <ul style="margin: 0.2em;">
      <li>Internet Protocolの略</li>
      <li>インターネット層のプロトコル</li>
      <li>データを送り出すことを保証する</li>
      <li>実際にデータが届くかは保証しない</li>
    </ul>
    <h3 >■TCP</h3>
    <ul style="margin: 0.2em;">
      <li>Transmission Control Protcolの略</li>
      <li>トランスポート層のプロトコル</li>
      <li>接続先にコネクションを張る</li>
      <li>データの到達を保証</li>
    </ul>
    <p>
      <h4>参考</h4>
      山本陽平. "第6章　HTTPの基本". Webを支える技術.技術評論社, 2010, 68-70
      <br/>
      佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/word11091.html">ネットワークインターフェイス層とは</a>
      <br/>
      佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/word11090.html">TCP/IPモデルとは</a>
    </p>
    
    <SubTitle subTitle="OSI参照モデル" />
    <ul>
      <li>TCP/IPモデルと同じように通信を標準化するために作られた</li>
      <li>国際標準化機構（ISO）が作った</li>
      <li>実際はあまり使われていない</li>
      <li>以下のような階層構造になっている</li>
    </ul>
    <table>
      <caption>OSI参照モデルの階層構造</caption>
      <tr><th>階層</th><th>名称</th></tr>
      <tr><td>第１層</td><td>アプリケーション層</td></tr>
      <tr><td>第２層</td><td>プレゼンテーション層</td></tr>
      <tr><td>第３層</td><td>トランスポート層</td></tr>
      <tr><td>第４層</td><td>セッション層</td></tr>
      <tr><td>第５層</td><td>ネットワーク層</td></tr>
      <tr><td>第６層</td><td>データリンク層</td></tr>
      <tr><td>第７層</td><td>物理層</td></tr>
    </table>
    <h4>参考</h4>
    佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/word1783.html">OSI参照モデル（読：オーエスアイサンショウモデル　英：OSI model）とは</a>
    <br/>
    佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/diff322model.html">「OSI参照モデル」と「TCP/IPモデル」の違い</a>
    <br/>
    ビズドットオンライン , 2023 , <a href="https://it-biz.online/it-skills/osi-reference-model/">OSI参照モデルとは？</a>


    <SubTitle subTitle="URLスキームとは" />
    <ul>
      <li>そのURLがどんなプロトコルかを示すURLの初めの部分</li>
      <li>「https://～～～～～」の「https」の部分</li>
    </ul>
    <h4>参考</h4>
      佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/word19663.html">URIスキーム（読：ユーアールアイスキーム　英：URI scheme）とは</a>
      <SubTitle subTitle="おわりに" />
      <p>
        最後まで読んでいただき、ありがとうございました。<br/>
        プロトコルについて理解できましたか？皆様のお役に立てていれば幸いです。
      </p>
  </main>
</body>
</html>
    </>
  );
}