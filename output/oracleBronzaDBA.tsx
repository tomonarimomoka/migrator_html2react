import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const OracleBronzaDBA: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />
  
  <main className="box">    
    <h1 id="articleTitle">ORACLE MASTER Bronze DBA 合格体験記</h1>
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
    
    <SubTitle subTitle="私のスペック" />

    <ul>
      <li>ぴよぴよ新卒🐤</li>
      <li>SQLは使えるけど、データベース管理などは全く分からない</li>
      <li>一浪日大（物覚えは少し悪め...）</li>
    </ul>
    
    <SubTitle subTitle="使った教材" />
    <p>
      王道の<a href="https://www.amazon.co.jp/dp/4798166367">黒本</a>だけです。
    </p>

    <SubTitle subTitle="実際にOracleサービスを使ってみる？" />
    <p>
      環境構築して使ってみようと思い試行錯誤しましたが、結論から申し上げますと、Bronzeレベルであれば黒本を使った対策に絞った方が効果的です。
    </p>

    <h3>
      それでも、やってみたい変わり者の方へ
    </h3>
    <p>まず、私はうまくできませんでした。なので途中までしか共有できません。あくまでも参考程度にしてください。</p>
    <p>
      黒本ではLinuxで解説されますが、WindowsのPCにLinux（ubuntu）を入れて環境構築しようとしたところ大変過ぎました🙅
      Windows PCの人はWindowsに環境構築することをお勧めします。
    </p>
    <h4>WindowsのPCでLinuxの仮想環境上にOracle環境を構築する方法</h4>
    <ol>
      <li>
        黒本ではLinuxで解説されるので、
      <a href="https://xtech.nikkei.com/atcl/nxt/column/18/01937/020100001/">Windows 11の標準機能でLinuxを動かす方法</a>
      を参照て自分のPCでもLinuxを使えるようにしました。
      <a href="https://hazuki--blog.com/linux-ubuntu-install-windowspc/">Ubuntuのインストール方法</a>
      も参考にしました。</br>
      <li><a href="https://www.oracle.com/jp/database/free/get-started/">無料版Oracle Databaseダウンロードページ</a>
          よりダウンロードURLをコピー
      </li>
      <li><a href="https://weblabo.oscasierra.net/linux-file-download/">LinuxコマンドでWEBからファイルをダウンロードする方法 </a>
        を見てLinux環境に手順2でコピーした無料版Oracle Databaseをインストール</li>
    </ol>
    
    <h4>Windows環境にOracle環境構築する方法</h4>
    <ol>
      <li><a href="https://o-labo.info/tried-oracle-database-xe-21c/">Oracle Database XE (21c) をWindows PCで使ってみた </a>を参考にOracle製品をインストールしました。
        （PCのスペックが低すぎてメモリーが足りなかったので、タスクバーを一度消すなどして何とかインストールしました。）</li>
      <li><a href="https://www.workaholic-blog.com/index.php/2021/10/05/027/">Oracle Database 21c でデータベース作成</a>や黒本を参考にDBを構築したのですが、どうしても出来ず諦めました( ；∀；)</li>

    </ol>
      
    </p>
    <SubTitle subTitle="黒本での対策" />
    <h4>模擬試験を通して黒本を読む（5日間）</h4>
    <p>
      黒本の章末にある模擬試験を中心に対策しました。模擬試験では本番と同じ70問あります。
      10問解いて解説を見て、分からない用語は索引から調べて黒本の中身を読みました。
    </p>
    <h4>模擬試験2周目（1日間）</h4>
    <p>
      今度は一気に解きました。2週目ということもあり、70問中61問正解！間違えたとこだけ復習しました。
    </p>
    <h4>本番</h4>
    <p>
      65%が合格ラインですが、正答率64%でした。。。。あと1%で不合格でした。
    </p>
    <h4>ショックすぎてインフルエンザになる</h4>
    <p>
      ショックすぎて？10年ぶりにインフルエンザにかかり1週間ダウンΣ(ﾟдﾟlll)ｶﾞｰﾝ
    </p>
    <h4>リベンジに向けて勉強（6日間）</h4>
    <ol>
      <li>本番で間違えが多かった分野（インスタンスについて）の章をしっかり読み込み</li>
      <li>模擬試験3週目を解いて直し。</li>
    </ol>
    <h4>2度目の本番</h4>
    <p>
      合格(((o(*ﾟ▽ﾟ*)o)))<br/>
      65%が合格ラインで、正答率78%でした✨✨
    </p>
    <img src="../素材/BRZDBA19CJPN.jpg" className="imgSize_30" alt="認定バッチ">
    <SubTitle subTitle="おわりに" />
    <p>
      最後まで読んでいただき、ありがとうございました。<br/>
      私はSQLは普通に使えましたが、DBについて詳しいわけではなかったので、かなり難しく感じました。皆さんは私みたいにならず、一発で合格できることを願っています。
    </p>
    
  <p>
    Oracleのベンダー資格にご興味があれば、<a href="./JavaSilver.html">Java Silver合格体験記</a>
    もぜひご覧ください！
  </p>
  </main>
    </>
  );
}