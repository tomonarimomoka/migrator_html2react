import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const GitForBeginner: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />  
  <main className="box">    
    <h1 id="articleTitle">はじめてのGit</h1>
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
    
    <SubTitle subTitle="本記事の対象者" />
    <ul>      
      <li>はじめてのGitを使う人</li>
      <li>個人開発でとりあえずGitを使いたい人</li>
      <li>いつも仕事で別のバージョン管理を使っている人</li>
    </ul>
    <p>※本記事ではGitの環境構築については触れません。ググると沢山記事が出てくるはずなので、環境構築が終わったらこの記事に戻ってきて下さい。</p>
    <SubTitle subTitle="Gitとは" />
    <p>
      Gitとは、バージョン管理ツールのことです。
    </p>
    <p>
      バージョン管理とは、ファイルの更新を記録しておき、過去のファイルの内容などを復元できるようにすることです。また、バージョン管理ツールではコミットした人も記録するのが一般的です。
    </p>
    <p>
      バージョン管理ツールは、GitかSubversionというツールが有名です。 最近では、Gitの方が人気で、Subversion（SVN）を使っていると古いなんで言われることもしばしば。。。
    </p>
    <SubTitle subTitle="Gitの仕組み" />
    <p>
      これは、Gitに限らずバージョン管理ツールに共通して言える事ですが、ファイルの置き場所がいくつかあります。
      場所と言っても「東京都の渋谷区の××」のように物理的な場所を指すわけではなく、クラウド上のどこかの場所です。
      このいくつかのファイル置き場をうまく使い分けて、Gitは動きます。
    </p>
    <p>クラウドにデータを置くとは、誰かの所有物で利用者はどこにあるか分からないサーバーにファイルを記憶させるということです。</p>
    <img src="../素材/Gitの説明.jpeg" className="imgSize_60">
    <p>まず、画像の一番下の「ローカル」とは皆さんのパソコンなどのことです。パソコンにファイルを保存しますよね？これのことです。</p>
    <p>
      次に下から二番目の「インデックス」はもう一つ上の「ローカルリポジトリ」に必要なファイルだけを置くための言わば踏み台です。
      皆さんのパソコンにある全てのファイルではなく、バージョン管理したいファイルのみをこの「インデックス」に置くのです。
      この作業を「ステージング」といいます。
    </p>
    <p>
      「ローカルリポジトリ」では個人で、「リモートリポジトリ」はみんなで使うクラウド上のファイル置き場です。
      ここで、個人とはあなたのことで、みんなとは一緒に開発するメンバーのことです。
    </p>

      <h4>参考</h4>
      2021 , <a href="https://qiita.com/atsushi101011/items/96054ebbd876e378cac4">git addとcommit、pushの関係をわかりやすく説明する【Gitコマンド解説①】</a><br/>
      株式会社ヌーラボ , 2021 , <a href="https://backlog.com/ja/git-tutorial/intro/04/">ワークツリーとインデックス</a><br/>
      2010 , <a href="https://maku77.github.io/p/6qp26ez/">Git でファイルの変更をステージする（コミットの印をつける）</a><br/>
      <SubTitle subTitle="便利なコマンド" />
      <p>■全ての変更をステージしたいとき</p>
      <pre><code className="codeBlock">git add --all</code></pre>

      <p>■特定のファイルの変更をステージしたいとき</p>
      <pre><code className="codeBlock">git add <相対パス></code></pre>
      
      <p>■コメント付きでコミットするとき</p>
      <pre><code className="codeBlock">git commit -m '<任意のコミットメッセージ>'</code></pre>

      <p>■gi commitをオプションなしで実行した後</p>
      <p>コメントオプションを付けずにcommitコマンドを実行すると、VIMに入ります。</p>
      <ol>
        <li>Eacキーを押す</li>
        <li><pre><code className="codeBlock">:q</code></pre>を入力 </li>
        <li>Enterキーを押す</li>
      </ol>
      <p>vimの使い方はこちら ⇒ </p>
      
      <p>■特定のブランチからソースコードを取得したいとき</p>
      <pre><code className="codeBlock">git clone <リポジトリのURL> -b <欲しいブランチの名前></code></pre>


      <h4>参考</h4>
      2014 , <a href="https://qiita.com/FiNGAHOLiC/items/d68d19ff9fecc59084e2">git addの--allオプション</a><br/>
      2019 , <a href="https://kaleido01.com/git-commit-solution/">git commitしようとしたら終了できずに戸惑ったので抜け出す方法を書き留めておく</a><br/>
      2018 , <a href="https://webbibouroku.com/Blog/Article/git-clone-branch">git clone で指定ブランチをクローンする方法</a>
    
    <SubTitle subTitle="おわりに" />
      <p>
        最後まで読んでいただき、ありがとうございました。皆さん、コミット出来ましたか？        
      </p>
      <p>
        筆者は前職も今の会社もSubversionを使っているのですが、ハッカソンや個人開発ではGitを使っています。
      </p>
      <p>
        他にもgitの便利なコマンドが知りたい！という方はこちらをご参照下さい！
        <a href="./gitForTeam.html" className="btnArticleLink">読む"/>
        Gitを使いこなして、楽しい開発ライフを送りましょー！
      </p>
  </main>
  <script>hljs.highlightAll();</script>
    </>
  );
}