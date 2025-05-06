import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const GitForTeam: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />  
  <main className="box">    
    <h1 id="articleTitle">仕事で使えるGitコマンド集</h1>
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
      <li>仕事でGitを使う人</li>
      <li>gitの基礎的な仕組みは理解している人</li>
    </ul>
    <p>
      gitを始めて使う方はぜひ初学者向けのGit記事をご覧ください。
      <a href="./gitForBeginner.html" className="btnArticleLink">読む"/>
    </p>
    <SubTitle subTitle="クローン" />
    以下コマンドを実行すると、特定のブランチからソースコードを取得することができます
    <pre><code className="codeBlock">git clone <リポジトリのURL> -b <欲しいブランチの名前></code></pre>

    <SubTitle subTitle="チェックアウト" />
      <pre><code className="codeBlock">
        git checkout <新しいブランチ名>
      </code></pre>
    
    <SubTitle subTitle="新しくブランチを作る" />
    <p>
      以下のコマンドを実行すると、今いるブランチから新しいブランチが切られます。
    </p>
    <pre><code className="codeBlock">
      git branch <新しいブランチ名>
    </code></pre>

    <SubTitle subTitle="リモート登録" />
      <p>
        ブランチを切ったら、リモート登録をしないとpushできないことがあります。そんな時は以下のコマンドを実行しましょう！
      </p>
      <pre><code className="codeBlock">
        git push -u origin <ブランチ名>
      </code></pre>    　

    <SubTitle subTitle="フェッチ" />
      <p>
        fetchとは、リモートリポジトリに更新があった際にローカルブランチにその更新を反映させるための操作です。
      </p>
      <pre><code className="codeBlock">
        git fetch
      </code></pre>

    <SubTitle subTitle="ブランチ移動" />
      <p>
        ブランチを移動するときはswitchコマンドを使います。ローカルリポジトリがまだないときも自動でローカルリポジトリを作ってくれます。
      </p>
      <pre><code className="codeBlock">
        git switch <ブランチ名>
      </code></pre>

    <SubTitle subTitle="マージ" />
    <p>
      gitのマージとはブランチを統合してすることです。以下コマンド実行後はaddまでされるので、pushだけでOKです。
    </p>
    <pre><code className="codeBlock">
      git merge <ブランチ名>
    </code></pre>　    
​
    <h4>参考</h4>
    株式会社ヌーラボ , <a href="https://backlog.com/ja/git-tutorial/">サル先生のGit入門</a><br/>
    2021 , OpenGroove , <a href="https://tracpath.com/docs/git-switch/">Git コマンドリファレンス（日本語版）</a><br/>
    2018 , <a href="https://webbibouroku.com/Blog/Article/git-clone-branch">git clone で指定ブランチをクローンする方法</a>


    <SubTitle subTitle="おわりに" />
      <p>
        最後まで読んでいただき、ありがとうございました。        
      </p>
      <p>
        筆者はgit switchコマンドが新しくできたのが直感的で嬉しいです。
      </p>
      <p>
        gitを使いこなして、楽しい開発ライフを送りましょー！
      </p>
  </main>
  <script>hljs.highlightAll();</script>
    </>
  );
}