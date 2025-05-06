import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const Hakkason_3: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />  
  <main className="box">
    <h1 id="articleTitle">ハッカソン参加レポート vol.3 ～敗因を考える～</h1>
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
      <li>学生時代はプログラマー</li>
      <li>今はソフトフェアエンジニアとして自社製品の製品開発を担当</li>
      <li>使える言語はC# , Java , Python , Shell Script , React×TypeScript（勉強中）</li>
      <li>ハッカソンは3回目</li>
    </ul>

    <SubTitle subTitle="参加したイベント" />
    <p>
      <table >
        <tbody>
          <tr><th>イベント名</th><td>生成AI×旅行ハッカソン！AIによる旅行先提案機能を考え構築しよう</td></tr>
          <tr><th>URL</th><td><a href="https://ava-intel.connpass.com/event/328529/">Compass</a></td></tr></tr>
          <tr><th>主催</th><td><a href="https://www.ava-intel.com/">AVA Intelligence</a></td></tr></tr>
          <tr><th>参加対象者</th><td>「2年以上のエンジニアリング経験をお持ちの方」</td></tr>
        </tbody>
      </table>
    </p>

    <SubTitle subTitle="ハッカソンで優勝したい！" />
    <p>
      ハッカソンとは、エンジニア・プログラマーが集まって短期間でプログラムを作成し、その成果を競い合うコンテストのようなものです。
    </p>
    <p>
      そう、ハッカソンには勝ち負けがあるのです。
      私は今回のハッカソンで敗北いたしました...orz
    </p>
    <p>
      本記事では、ハッカソンで優勝するために必要なことを考えていきます。
    </p>
    
    <SubTitle subTitle="技術" />
    <p>
      ■技術選定<br/>
      我々はPython × Streamlitで作りました。
      Python × Streamlitにしたのは最適解だったと思います。
      Streamlitは簡単なWebアプリケーション作成のために、私が一押ししているフレームワークです。
    </p>
    <p>
      ■ソース管理<br/>
      社用PCをお持ちの方でGitHubを使えない方がいたのはもったいなかったな～と思います。
      できるだけプライベート用のPCを持参することをお勧めします。
      ソース管理はほとんどの場合がGitなので、使ったことない人は練習しておきましょう。
      <ReadBtn url="gitForBeginner" msg="はじめてのGit"/>
    </p>
    <p>
      ■技術力<br/>
      技術力に関しては、正直どのチームあまり変わらなかったと思います。
      個々には当然差がありますが、チームとしての総合点は変わらないように見えました。つまり、<b>今回の敗因は技術力ではない</b>と思うのです。
    </p>
    <SubTitle subTitle="コミュニケーション" />
    <p>
      私が今回の反省から導いた結論は、
      <b>ハッカソンの勝敗はコミュニケーションで決まる</b>ということです。
    </p>
    <p>
      ハッカソンでは色々な人が来るのですが、基本的に初めて会う人と開発を進めます。
      そのため結局は、コミュニケーションがうまくとれているチームが優勝する（もしくは良いものを作る）のだと気がつきました。
      実際に、優勝チームはとても仲が良く、コミュニケーションを活発に取っている印象でした。  
    </p>
    
    <p>
      実は筆者はハッカソンなどで積極的に話をする方です。
      しかし、ハッカソンがスタートしたときのコミュニケーションをしっかりとろうという意識が、開発中は集中してしまい薄れていきました。
      そして、結果的にコミュニケーションが疎かになってしまいました。
      アラームの活用など、コミュニケーションを忘れないための工夫をするべきだったと考えます。
    </p>
    <SubTitle subTitle="直接的な敗因" />
    <p>
      私達のチームは4人でした。2人づつに分かれて開発を進めました。分かれて作ったものをくっつけるときにうまくいかず、それを解消できないまま終了時間を迎えてしまったことが直接の敗因だと思います。
    </p>
    <p>
      しかし、この問題ももっとコミュニケーションをとっていれば防げたと思うのです。
    </p>
    <SubTitle subTitle="自分だけが変わっても意味がない？" />
    <p>
      自分だけがコミュニケーションをとろうと意識しても、みんなも同じ気持ちじゃないと意味がないじゃないか！と突っ込みたくなる方もいるかもしれません。
    </p>
    <p>
      ハッカソンは大体１チームあたり3~5人のことが多いです。少人数のチームだから、一人の頑張りがチームの成果に直結します。
      
    </p>
    <SubTitle subTitle="おわりに" />
    <p>
      皆さんはハッカソンで優勝したことはありますか？
    </p>
    <p>
      若手エンジニアはリーダー経験がない人も多いと思います。少人数でリーダーシップが発揮しやすいハッカソンでリーダーシップをとる練習をしてみましょう！
    </p> 
    <p>
      ハッカソンの参加レポートは他にもあるので、ぜひご覧ください。
      <ReadBtn url="hakkason_1" msg="vol.1"/>
      <ReadBtn url="hakkason_2" msg="vol.2"/>
    </p> 
    <p>
      最後まで読んでくださり、ありがとうございました。
    </p>
  </main>
  <script>hljs.highlightAll();</script>
    </>
  );
}