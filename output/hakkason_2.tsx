import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const Hakkason_2: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />
  <main className="box">    
    <h1 id="articleTitle">【生成AI】ハッカソン参加レポート vol.2</h1>
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
      <li>ハッカソンは2回目</li>
    </ul>

    <SubTitle subTitle="参加したイベント" />
    <p>
      <table >
        <tbody>
          <tr><th>イベント名</th><td>シンプルな生成 AI ハッカソン #4</td></tr>
          <tr><th>URL</th><td><a href="https://simpleform.connpass.com/event/321475/">シンプルな生成 AI ハッカソン #4</a></td></tr></tr>
          <tr><th>主催</th><td><a href="https://www.simpleform.co.jp/">SimpleForm</a></td></tr></tr>
          <tr><th>参加対象者</th><td>「プログラマもしくはデザイナであればどなたでも参加いただけます！」</td></tr>
        </tbody>
      </table>
    </p>

    <SubTitle subTitle="技術選定" />
    <p>我々はPython × Streamlitで作りました。ソース管理はGitHubです。</p>
    <ul>
      <li>
        言語<br/>
        Pythonを選んだ理由は、「とりあえずPythonだよね」みたいな軽い感じで決まりました。生成AI系はググるとPythonのソースコードが沢山出てくるので、調べやすいです。
      </li>
      <li>
        フレームワーク<br/>
        Streamlit（読み方：ストリームリット）というフレームワークを採用しました。
        これは私がごり押ししてやらせてもらいました。
        なぜStreamlitを使いたかったかというと、私が以前ハッカソンに参加した際にStreamlitを使っているチームがあり、フロントの開発がすごく楽と聞き、そのチームの成果物のUIも綺麗だったので、興味を持ったからです。
      </li>
      <li>
        ソース管理<br/>
        ソース管理はほとんどの場合がGitHubなので、使ったことない人は練習しておきましょう。<br/>
        <ReadBtn url="gitForBeginner.html">はじめてのGit</a>でGitの使い方を解説していますので、確認しておきましょう！
      </li>
    </ul>
    
    <SubTitle subTitle="私たちのチームが作ったもの" />
    <p>私たちが作ったのはニュースをポジティブにするwebアプリケーションです。以下のようなフローで作成しました</p>
    <ol>      
      <li>ニュースのURLを入力</li>
      <li>URLの記事の内容を取得</li>
      <li>プロンプトを作る</li>
      <li>API叩く</li>
      <li>結果表示</li>
    </ol>

    <SubTitle subTitle="驚くほど簡単なStreamlitの導入方法" />
    <p>streamlitをはじめて使ったのですが、驚くほど簡単に使うことができました。導入に当たってやることは以下の3つの手順だけ！</p>
    <ol>
      <li>
        streamlitのインストール<br/>
        <code className="codeBlock">
          pip install streamlit
        </code>
      </li>
      <li>
        Pythonで、Hello world!を書く
        <pre><code className="codeBlock">import streamlit as st
st.write("Hello world")</code></pre>
      </li>
      <li>
        Pythonプログラムの実行<br/>
        <code className="codeBlock">
          streamlit run app.py
        </code>
      </li>
    </ol>
    <h4>参考リンク</h4>
    2024 , <a href="https://qiita.com/papasim824/items/1804bc1bd8d4c195d8a8">【15分で出来る】Streamlit爆速入門</a>
    <br/>
    
    <SubTitle subTitle="プロンプト" />
    <P>私は以下のようなプロンプトを投げました。（実際には動的にプロンプトを生成しています）</p>
<pre><code className="codeBlock">以下の手順で、記事の内容をポジティブにしてください。記事の内容を要約してはいけません。Let's think step by step.
  【手順1】
  例えば、以下の様にポジティブな表現に変えてください。この時に、引用された発言は書き換えてはいけません。また、文章は要約せずに忠実に変換してください。
  ・「積極性に欠ける」は「控えめな性格」
  ・「頭が悪い」は「天然」
  ・「貧乏」は「清貧」
  ・「忙しい」は「充実している」
  ・「キモイ」は「優しそう」
  【手順２】
  例えば、以下の様に過激な表現やグロテスクな表現は柔らかい表現に変更して下さい。
  ・「殺す」は「天国へ導いた」
  【手順3】
  見出しは作らずにポジティブにしたニュースをプレーンテキストで出力してください。
  【手順4】
  出力言語は日本語にしてください。
  【手順5】
  ・出力言語が日本語の場合、語尾は「なんだよ💓」や「だよ」や「だって～！」とか「らしいよ✨」とか「♡」にしてください。
  ・語尾が絵文字の時は「。」を削除してください。
  ・出力言語が日本語以外の場合は「♡」とか「★」とか「😊」とか「💕」や「🍀」を使ってください。
  【注意点】
  ・記事の内容を要約せずにポジティブにして表示してください
  ・日本語に直して表示してください。
記事は以下です。
～～～～～～～～
</code></pre>
    <p> 
      工夫した点としては、LLMの指示で思考のプロセスを与えたことです。
      順を追って考えさせることで、LLMの性能が劇的に改善すると知られています。
    </p>
    <p>変換後の文章が要約されてしまう問題にぶつかりました。
      ハッカソン当日には解決できなかったのですが、プロンプトの最後に「注意点」としてもう一度指示すると要約しなくなりました。</p>
   
    <SubTitle subTitle="成果物" />
    <p>
      ソースコードが気になる方はこちら
      <a href="https://github.com/tomonarimomoka/makePositiveNews-public" className="btnArticleLink">GitHub"/>
    </p>
    <p>
      テキストボックスやプルダウン、ボタンなども1行で実装できました！！渾身のプロンプトのおかげでちゃんとニュース記事がポジティブになっております✨
    </p>    
    <img src="../素材/ポジティブニュース.jpeg" className="imgSize_100" alt="生成されたLP">
   
    <SubTitle subTitle="おわりに" />
    <p>
      ハッカソン、に参加すると普段使ったことのない技術に触れられるのが楽しいです。
    </p>
    <p>
      今回は学生さんも参加されていたので、無理せずに作りました。予定通りの時間でタスクを完了できました✨会社のメンバーで参加している方もいて、楽しそうだな～と思いました。
    </p>  
    <p>
      ハッカソンの参加レポートは他にもあるので、ぜひご覧ください。
      <ReadBtn url="hakkason_1" msg="vol.1"/>
      <ReadBtn url="hakkason_3" msg="vol.3"/>
    </p> 
    <p>
      最後まで読んでくださり、ありがとうございました。
    </p>
  </main>
  <script>hljs.highlightAll();</script>
    </>
  );
}